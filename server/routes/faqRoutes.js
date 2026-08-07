import express from 'express';
import { upload } from '../config/cloudinary.js';
import { protect } from '../middleware/auth.js';
import {
  getFaqs, createFaq, updateFaq, deleteFaq, toggleFaqStatus, reorderFaqs,
  getCategories, createCategory, deleteCategory,
  getSettings, updateSettings
} from '../controllers/faqController.js';

const router = express.Router();

// --- PUBLIC ROUTES (Read Only) ---
router.get('/faqs', getFaqs);
router.get('/categories', getCategories);
router.get('/settings', getSettings);

// --- PROTECTED ROUTES (Admin CRUD) ---
// FAQs
router.post('/faqs', protect, createFaq);
router.put('/faqs/:id', protect, updateFaq);
router.delete('/faqs/:id', protect, deleteFaq);
router.patch('/faqs/:id/status', protect, toggleFaqStatus);
router.post('/faqs/reorder', protect, reorderFaqs);

// FAQ Categories
router.post('/categories', protect, createCategory);
router.delete('/categories/:id', protect, deleteCategory);

// FAQ Chatbot Settings
router.put('/settings', protect, upload.single('botAvatar'), updateSettings);

export default router;
