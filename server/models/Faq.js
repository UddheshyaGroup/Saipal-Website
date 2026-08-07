import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  relatedFaqIds: [{ type: String }]
}, { timestamps: true });

const Faq = mongoose.model('Faq', faqSchema);
export default Faq;
