import { authService } from "./authService";
import { INITIAL_FAQS, INITIAL_CATEGORIES, DEFAULT_BOT_SETTINGS } from "../data/initialFaqData";

const STORAGE_KEYS = {
  FAQS: "saipal_faq_list",
  CATEGORIES: "saipal_faq_categories",
  SETTINGS: "saipal_faq_settings",
};

// Use relative path — works via Vite proxy in dev and on the same host in production
const API_BASE_URL = "/api";

class FaqEventBus extends EventTarget {
  notifyChange() {
    this.dispatchEvent(new Event("faq-data-changed"));
  }
}

export const faqBus = new FaqEventBus();

// Normalize MongoDB _id to client id helper
const normalize = (item) => {
  if (!item) return item;
  if (Array.isArray(item)) return item.map(normalize);
  
  const id = item.id || item.categoryId || item._id || String(item._id);
  return {
    ...item,
    id: String(id)
  };
};

// Initialize LocalStorage with seed data if empty
const initializeStorage = () => {
  if (!localStorage.getItem(STORAGE_KEYS.FAQS)) {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(INITIAL_FAQS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CATEGORIES)) {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_BOT_SETTINGS));
  }
};

initializeStorage();

// Background Sync from Server
export const syncFaqWithServer = async () => {
  try {
    const [faqs, categories, settings] = await Promise.all([
      fetch(`${API_BASE_URL}/faq/faqs`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/faq/categories`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/faq/settings`).then((res) => res.json()),
    ]);

    // Map categories fields to keep client categories compatible
    const normalizedCats = categories.map(c => ({
      ...c,
      id: c.categoryId || c._id || c.id,
    }));

    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(normalize(faqs)));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(normalize(normalizedCats)));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(normalize(settings)));

    faqBus.notifyChange();
  } catch (err) {
    console.error("FAQ Background Sync failed:", err);
  }
};

// Trigger background sync on startup
setTimeout(syncFaqWithServer, 500);

// Helper for making API calls
const makeApiCall = async (endpoint, method = "GET", body = null) => {
  const token = authService.getToken();
  const headers = {};
  
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  
  if (body) {
    headers["Content-Type"] = "application/json";
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || `API error on ${method} ${endpoint}`);
  }
  return response.json();
};

export const faqService = {
  // --- FAQs ---
  getFaqs: (category = "all", onlyActive = true) => {
    setTimeout(syncFaqWithServer, 0);
    const data = getItems(STORAGE_KEYS.FAQS, []);
    let filtered = onlyActive ? data.filter((item) => item.isActive) : data;
    if (category && category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }
    return filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
  },

  getFaqById: (id) => {
    const faqs = faqService.getFaqs("all", false);
    return faqs.find((item) => String(item.id) === String(id)) || null;
  },

  saveFaq: async (faqItem) => {
    const faqs = faqService.getFaqs("all", false);
    
    // Optimistic local save
    const tempId = faqItem.id || `faq-temp-${Date.now()}`;
    const optimisticFaq = {
      ...faqItem,
      id: tempId,
      order: faqItem.order || (faqs.length + 1),
      isActive: faqItem.isActive ?? true,
    };
    
    let localList;
    if (faqItem.id && faqs.some((f) => String(f.id) === String(faqItem.id))) {
      localList = faqs.map((f) => (String(f.id) === String(faqItem.id) ? optimisticFaq : f));
    } else {
      localList = [...faqs, optimisticFaq];
    }
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(localList));
    faqBus.notifyChange();

    try {
      const isNew = !faqItem.id || String(faqItem.id).startsWith("faq-temp-");
      const url = isNew ? "/faq/faqs" : `/faq/faqs/${faqItem.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverFaq = await makeApiCall(url, method, faqItem);
      const normalized = normalize(serverFaq);

      const freshList = getItems(STORAGE_KEYS.FAQS, []);
      const updatedList = freshList.map((f) => (String(f.id) === String(tempId) || String(f.id) === String(normalized.id) ? normalized : f));
      localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updatedList));
      faqBus.notifyChange();
      return updatedList;
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
  },

  deleteFaq: async (id) => {
    const faqs = faqService.getFaqs("all", false);
    const updated = faqs.filter((f) => String(f.id) !== String(id));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();

    try {
      await makeApiCall(`/faq/faqs/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
    return updated;
  },

  toggleFaqStatus: async (id) => {
    const faqs = faqService.getFaqs("all", false);
    const updated = faqs.map((f) => (String(f.id) === String(id) ? { ...f, isActive: !f.isActive } : f));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();

    try {
      const serverFaq = await makeApiCall(`/faq/faqs/${id}/status`, "PATCH");
      const normalized = normalize(serverFaq);
      const freshList = getItems(STORAGE_KEYS.FAQS, []);
      const updatedList = freshList.map((f) => (String(f.id) === String(normalized.id) ? normalized : f));
      localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updatedList));
      faqBus.notifyChange();
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
    return updated;
  },

  reorderFaqs: async (reorderedFaqs) => {
    const updated = reorderedFaqs.map((f, index) => ({ ...f, order: index + 1 }));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();

    try {
      const serverFaqs = await makeApiCall("/faq/faqs/reorder", "POST", { reorderedFaqs: updated });
      localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(normalize(serverFaqs)));
      faqBus.notifyChange();
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
    return updated;
  },

  // --- CATEGORIES ---
  getCategories: () => {
    setTimeout(syncFaqWithServer, 0);
    return getItems(STORAGE_KEYS.CATEGORIES, []);
  },

  saveCategory: async (categoryItem) => {
    const categories = faqService.getCategories();
    
    // Map custom id/categoryId
    const categoryId = categoryItem.categoryId || categoryItem.id;
    const tempId = categoryId || `cat-temp-${Date.now()}`;
    const optimisticCat = { ...categoryItem, id: tempId, categoryId: tempId };

    let localList;
    if (categoryItem.id && categories.some((c) => String(c.id) === String(categoryItem.id))) {
      localList = categories.map((c) => (String(c.id) === String(categoryItem.id) ? optimisticCat : c));
    } else {
      localList = [...categories, optimisticCat];
    }
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(localList));
    faqBus.notifyChange();

    try {
      const serverCat = await makeApiCall("/faq/categories", "POST", { ...categoryItem, categoryId });
      const normalized = normalize(serverCat);
      normalized.id = normalized.categoryId || normalized.id;

      const freshList = getItems(STORAGE_KEYS.CATEGORIES, []);
      const updatedList = freshList.map((c) => (String(c.id) === String(tempId) || String(c.id) === String(normalized.id) ? normalized : c));
      localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(updatedList));
      faqBus.notifyChange();
      return updatedList;
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
  },

  deleteCategory: async (id) => {
    const categories = faqService.getCategories();
    const updated = categories.filter((c) => String(c.id) !== String(id));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(updated));
    faqBus.notifyChange();

    try {
      await makeApiCall(`/faq/categories/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
    return updated;
  },

  // --- SETTINGS ---
  getSettings: () => {
    setTimeout(syncFaqWithServer, 0);
    return getItems(STORAGE_KEYS.SETTINGS, DEFAULT_BOT_SETTINGS);
  },

  updateSettings: async (newSettings) => {
    const current = faqService.getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    faqBus.notifyChange();

    try {
      const serverSettings = await makeApiCall("/faq/settings", "PUT", newSettings);
      const normalized = normalize(serverSettings);
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(normalized));
      faqBus.notifyChange();
      return normalized;
    } catch (err) {
      console.error(err);
      syncFaqWithServer();
    }
  },

  // --- RESET ALL ---
  resetToDefaults: () => {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(INITIAL_FAQS));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_BOT_SETTINGS));
    faqBus.notifyChange();
    syncFaqWithServer();
  },
};

// Helper getter
const getItems = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (e) {
    return fallback;
  }
};
