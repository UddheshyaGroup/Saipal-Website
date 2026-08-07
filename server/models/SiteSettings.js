import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema({
  schoolName: { type: String, default: 'Saipal Academy' },
  tagline: { type: String, default: '' },
  address: { type: String, default: 'Dhumbarahi, Kathmandu, Nepal' },
  phonePrimary: { type: String, default: '' },
  phoneSecondary: { type: String, default: '' },
  email: { type: String, default: '' },
  schoolHours: { type: String, default: '' },
  collegeManagementHours: { type: String, default: '' },
  collegeScienceHours: { type: String, default: '' },
  principalName: { type: String, default: '' },
  principalTitle: { type: String, default: '' },
  facebookUrl: { type: String, default: '' },
  instagramUrl: { type: String, default: '' },
  youtubeUrl: { type: String, default: '' }
}, { timestamps: true });

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);
export default SiteSettings;
