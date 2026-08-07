import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true },
  badge: { type: String, required: true },
  badgeColor: { type: String, default: 'text-[#00AEEF]' },
  borderColor: { type: String, default: 'hover:border-[#00AEEF]/60' },
  image: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  division: { type: String, enum: ['school', 'college'], required: true }
}, { timestamps: true });

const Program = mongoose.model('Program', programSchema);
export default Program;
