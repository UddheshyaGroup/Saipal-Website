import Faq from '../models/Faq.js';
import FaqCategory from '../models/FaqCategory.js';
import FaqSettings from '../models/FaqSettings.js';

// ==========================================
// 1. FAQ CONTROLLERS
// ==========================================
export const getFaqs = async (req, res) => {
  try {
    const { category, onlyActive } = req.query;
    let query = {};
    if (onlyActive === 'true') query.isActive = true;
    if (category && category !== 'all') query.category = category;

    const faqs = await Faq.find(query).sort({ order: 1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFaq = async (req, res) => {
  try {
    const total = await Faq.countDocuments();
    const faq = new Faq({
      ...req.body,
      order: req.body.order ?? (total + 1)
    });
    const saved = await faq.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Faq.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'FAQ not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Faq.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'FAQ not found' });
    res.json({ message: 'FAQ deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleFaqStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await Faq.findById(id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    faq.isActive = !faq.isActive;
    await faq.save();
    res.json(faq);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reorderFaqs = async (req, res) => {
  try {
    const { reorderedFaqs } = req.body;
    for (const item of reorderedFaqs) {
      await Faq.findByIdAndUpdate(item.id || item._id, { order: item.order });
    }
    const updated = await Faq.find().sort({ order: 1 });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ==========================================
// 2. CATEGORY CONTROLLERS
// ==========================================
export const getCategories = async (req, res) => {
  try {
    const categories = await FaqCategory.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const categoryId = req.body.categoryId || req.body.id;
    const { name, icon } = req.body;

    let category = await FaqCategory.findOne({ categoryId });
    if (category) {
      category.name = name;
      category.icon = icon;
    } else {
      category = new FaqCategory({ categoryId, name, icon });
    }
    const saved = await category.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FaqCategory.findOneAndDelete({ $or: [{ _id: id }, { categoryId: id }] });
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 3. SETTINGS CONTROLLERS
// ==========================================
export const getSettings = async (req, res) => {
  try {
    let settings = await FaqSettings.findOne();
    if (!settings) {
      settings = new FaqSettings();
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSettings = async (req, res) => {
  try {
    let settings = await FaqSettings.findOne();
    if (!settings) {
      settings = new FaqSettings(req.body);
    } else {
      Object.assign(settings, req.body);
    }
    if (req.file) {
      settings.botAvatar = req.file.path;
    }
    const saved = await settings.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
