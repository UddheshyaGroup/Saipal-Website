import mongoose from 'mongoose';

const tickerSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  division: { type: String, enum: ['school', 'college', 'all'], required: true }
}, { timestamps: true });

const Ticker = mongoose.model('Ticker', tickerSchema);
export default Ticker;
