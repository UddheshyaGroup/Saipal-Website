import mongoose from 'mongoose';

const scholarshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  coverage: { type: String, required: true },
  eligibility: { type: String, required: true },
  division: { type: String, enum: ['school', 'college', 'all'], required: true },
  category: { type: String, required: true }
}, { timestamps: true });

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);
export default Scholarship;
