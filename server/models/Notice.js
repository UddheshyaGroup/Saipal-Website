import mongoose from 'mongoose';

const noticeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  tag: { type: String, required: true },
  color: { type: String, default: 'bg-[#00AEEF]' },
  division: { type: String, enum: ['school', 'college', 'all'], default: 'all' },
  content: { type: String, default: '' },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  attachment: { type: String } // For downloadable PDFs or documents
}, { timestamps: true });

const Notice = mongoose.model('Notice', noticeSchema);
export default Notice;
