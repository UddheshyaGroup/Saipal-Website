import { authService } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

class FaqEventBus extends EventTarget {
  notifyChange() {
    this.dispatchEvent(new Event("faq-data-changed"));
  }
}
export const faqBus = new FaqEventBus();

const convertGoogleDriveUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  const fileDRegex = /(?:drive|docs)\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const openIdRegex = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
  const ucIdRegex = /drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/;

  let fileId = null;
  const match1 = url.match(fileDRegex);
  if (match1) fileId = match1[1];
  else {
    const match2 = url.match(openIdRegex);
    if (match2) fileId = match2[1];
    else {
      const match3 = url.match(ucIdRegex);
      if (match3) fileId = match3[1];
    }
  }

  if (fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }
  return url;
};

const normalize = (item) => {
  if (!item) return item;
  if (Array.isArray(item)) return item.map(normalize);
  const id = item._id ? String(item._id) : (item.categoryId || item.id);
  const out = { ...item, id: String(id) };
  if (out.botAvatar) out.botAvatar = convertGoogleDriveUrl(out.botAvatar);
  return out;
};

// Authenticated API helper — throws on failure
const api = async (endpoint, method = "GET", body = null) => {
  const token = authService.getToken();
  const headers = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (body) headers["Content-Type"] = "application/json";

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `API ${method} ${endpoint} → ${res.status}`);
  }
  return res.json();
};

// Public GET
const pub = async (endpoint) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Fetch ${endpoint} → ${res.status}`);
  return res.json();
};

export const faqService = {
  // ── FAQs ────────────────────────────────────────────────────
  getFaqs: async (category = "all", onlyActive = true) => {
    const data = await pub("/faq/faqs");
    const list = normalize(data);
    let filtered = onlyActive ? list.filter((f) => f.isActive) : list;
    if (category && category !== "all") filtered = filtered.filter((f) => f.category === category);
    return filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
  },

  getFaqById: async (id) => {
    try {
      const f = await pub(`/faq/faqs/${id}`);
      return normalize(f);
    } catch { return null; }
  },

  saveFaq: async (faqItem) => {
    const isNew = !faqItem.id;
    const result = await api(isNew ? "/faq/faqs" : `/faq/faqs/${faqItem.id}`, isNew ? "POST" : "PUT", faqItem);
    faqBus.notifyChange();
    return normalize(result);
  },

  deleteFaq: async (id) => {
    await api(`/faq/faqs/${id}`, "DELETE");
    faqBus.notifyChange();
  },

  toggleFaqStatus: async (id) => {
    const result = await api(`/faq/faqs/${id}/status`, "PATCH");
    faqBus.notifyChange();
    return normalize(result);
  },

  reorderFaqs: async (reorderedFaqs) => {
    const withOrder = reorderedFaqs.map((f, i) => ({ ...f, order: i + 1 }));
    const result = await api("/faq/faqs/reorder", "POST", { reorderedFaqs: withOrder });
    faqBus.notifyChange();
    return normalize(result);
  },

  // ── CATEGORIES ──────────────────────────────────────────────
  getCategories: async () => {
    const data = await pub("/faq/categories");
    return normalize(data);
  },

  saveCategory: async (categoryItem) => {
    const categoryId = categoryItem.categoryId || categoryItem.id;
    const isNew = !categoryId;
    const result = await api(isNew ? "/faq/categories" : `/faq/categories/${categoryId}`, isNew ? "POST" : "PUT", { ...categoryItem, categoryId });
    faqBus.notifyChange();
    return normalize(result);
  },

  deleteCategory: async (id) => {
    await api(`/faq/categories/${id}`, "DELETE");
    faqBus.notifyChange();
  },

  // ── SETTINGS ────────────────────────────────────────────────
  getSettings: async () => {
    const data = await pub("/faq/settings");
    return normalize(data);
  },

  updateSettings: async (newSettings) => {
    const result = await api("/faq/settings", "PUT", newSettings);
    faqBus.notifyChange();
    return normalize(result);
  },

  // ── RESET (re-fetch from DB) ─────────────────────────────────
  resetToDefaults: () => faqBus.notifyChange(),
};
