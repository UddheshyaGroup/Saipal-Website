import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
  url: { type: String, required: true }
});

const galleryAlbumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  cover: { type: String, required: true },
  division: { type: String, enum: ['school', 'college', 'all'], required: true },
  photos: [photoSchema]
}, { timestamps: true });

const GalleryAlbum = mongoose.model('GalleryAlbum', galleryAlbumSchema);
export default GalleryAlbum;
