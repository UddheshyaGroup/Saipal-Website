import mongoose from 'mongoose';

const faqCategorySchema = new mongoose.Schema({
  categoryId: { type: String, required: true, unique: true }, // e.g. 'general'
  name: { type: String, required: true },
  icon: { type: String, default: '🏫' }
}, { timestamps: true });

const FaqCategory = mongoose.model('FaqCategory', faqCategorySchema);
export default FaqCategory;
