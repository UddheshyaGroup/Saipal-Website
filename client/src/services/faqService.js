import { INITIAL_FAQS, INITIAL_CATEGORIES, DEFAULT_BOT_SETTINGS } from "../data/initialFaqData";

const STORAGE_KEYS = {
  FAQS: "saipal_faq_list",
  CATEGORIES: "saipal_faq_categories",
  SETTINGS: "saipal_faq_settings",
};

// Internal EventTarget for reactive UI updates across components
class FaqEventBus extends EventTarget {
  notifyChange() {
    this.dispatchEvent(new Event("faq-data-changed"));
  }
}

export const faqBus = new FaqEventBus();

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

export const faqService = {
  // --- FAQs ---
  getFaqs: (category = "all", onlyActive = true) => {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAQS) || "[]");
      let filtered = onlyActive ? data.filter((item) => item.isActive) : data;
      if (category && category !== "all") {
        filtered = filtered.filter((item) => item.category === category);
      }
      return filtered.sort((a, b) => (a.order || 0) - (b.order || 0));
    } catch (e) {
      console.error("Error reading FAQs:", e);
      return INITIAL_FAQS;
    }
  },

  getFaqById: (id) => {
    const faqs = faqService.getFaqs("all", false);
    return faqs.find((item) => item.id === id) || null;
  },

  saveFaq: (faqItem) => {
    const faqs = faqService.getFaqs("all", false);
    let updated;
    if (faqItem.id) {
      updated = faqs.map((f) => (f.id === faqItem.id ? { ...f, ...faqItem } : f));
    } else {
      const newFaq = {
        ...faqItem,
        id: `faq-${Date.now()}`,
        order: faqs.length + 1,
        isActive: faqItem.isActive ?? true,
      };
      updated = [...faqs, newFaq];
    }
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  deleteFaq: (id) => {
    const faqs = faqService.getFaqs("all", false);
    const updated = faqs.filter((f) => f.id !== id);
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  toggleFaqStatus: (id) => {
    const faqs = faqService.getFaqs("all", false);
    const updated = faqs.map((f) => (f.id === id ? { ...f, isActive: !f.isActive } : f));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  reorderFaqs: (reorderedFaqs) => {
    const updated = reorderedFaqs.map((f, index) => ({ ...f, order: index + 1 }));
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  // --- CATEGORIES ---
  getCategories: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.CATEGORIES) || "[]");
    } catch (e) {
      return INITIAL_CATEGORIES;
    }
  },

  saveCategory: (categoryItem) => {
    const categories = faqService.getCategories();
    let updated;
    if (categoryItem.id && categories.some((c) => c.id === categoryItem.id)) {
      updated = categories.map((c) => (c.id === categoryItem.id ? { ...c, ...categoryItem } : c));
    } else {
      const newCat = {
        ...categoryItem,
        id: categoryItem.id || `cat-${Date.now()}`,
      };
      updated = [...categories, newCat];
    }
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  deleteCategory: (id) => {
    const categories = faqService.getCategories();
    const updated = categories.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  // --- SETTINGS ---
  getSettings: () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS) || JSON.stringify(DEFAULT_BOT_SETTINGS));
    } catch (e) {
      return DEFAULT_BOT_SETTINGS;
    }
  },

  updateSettings: (newSettings) => {
    const current = faqService.getSettings();
    const updated = { ...current, ...newSettings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    faqBus.notifyChange();
    return updated;
  },

  // --- RESET ALL ---
  resetToDefaults: () => {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(INITIAL_FAQS));
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_BOT_SETTINGS));
    faqBus.notifyChange();
  },
};
