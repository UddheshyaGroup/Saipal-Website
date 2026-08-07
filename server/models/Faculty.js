import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // Designation
  qualification: { type: String, required: true },
  experience: { type: String, required: true },
  division: { type: String, enum: ['school', 'college'], required: true },
  department: { type: String, required: true },
  image: { type: String, required: true }
}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);
export default Faculty;
