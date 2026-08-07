import mongoose from 'mongoose';

const faqSettingsSchema = new mongoose.Schema({
  botName: { type: String, default: 'Saipal AI' },
  botTitle: { type: String, default: 'Official AI Knowledge Guide' },
  welcomeMessage: { type: String, default: 'Hi! Welcome to Saipal Academy. How can I help you today?' },
  botAvatar: { type: String, default: '' },
  botStatus: { type: String, default: 'Online' },
  primaryColor: { type: String, default: '#2E3192' },
  accentColor: { type: String, default: '#00AEEF' },
  typingDelayMs: { type: Number, default: 1400 }
}, { timestamps: true });

const FaqSettings = mongoose.model('FaqSettings', faqSettingsSchema);
export default FaqSettings;
