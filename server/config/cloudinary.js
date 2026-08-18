import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// ─────────────────────────────────────────────────────────────────
// Helper: create a Multer + CloudinaryStorage for a specific folder
// ─────────────────────────────────────────────────────────────────
const makeUploader = (folder, { maxSizeMB = 5, formats = ['jpg', 'jpeg', 'png', 'gif', 'webp'] } = {}) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder,
      allowed_formats: formats,
      resource_type: 'auto',
    },
  });
  return multer({
    storage,
    limits: { fileSize: maxSizeMB * 1024 * 1024 },
  });
};

// ─────────────────────────────────────────────────────────────────
// Organised upload instances — one per feature area
// Folder structure under saipal_media:
//
//  saipal_media/
//  ├── notices/          ← Notice attachments (PDF + images)
//  ├── blogs/            ← Blog cover images
//  ├── faculty/
//  │   ├── college/      ← College faculty profile photos
//  │   └── school/       ← School faculty profile photos
//  ├── programs/         ← Program cover images
//  ├── gallery/          ← Gallery album covers + photos
//  └── reviews/          ← Testimonial / review avatars
// ─────────────────────────────────────────────────────────────────

// Notices (PDFs allowed)
const uploadNotice = makeUploader('saipal_media/notices', {
  maxSizeMB: 10,
  formats: ['jpg', 'jpeg', 'png', 'gif', 'pdf'],
});

// Blogs
const uploadBlog = makeUploader('saipal_media/blogs', { maxSizeMB: 5 });

// Faculty — per division
const uploadFacultyCollege = makeUploader('saipal_media/faculty/college', { maxSizeMB: 10 });
const uploadFacultySchool  = makeUploader('saipal_media/faculty/school',  { maxSizeMB: 10 });

// Programs
const uploadProgram = makeUploader('saipal_media/programs', { maxSizeMB: 5 });

// Gallery
const uploadGallery = makeUploader('saipal_media/gallery', { maxSizeMB: 10 });

// Reviews / Testimonials
const uploadReview = makeUploader('saipal_media/reviews', { maxSizeMB: 5 });

// ─────────────────────────────────────────────────────────────────
// Legacy generic uploader (kept for any routes not yet migrated)
// ─────────────────────────────────────────────────────────────────
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'saipal_media',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'pdf'],
    resource_type: 'auto',
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

export {
  cloudinary,
  upload,               // legacy / fallback
  uploadNotice,
  uploadBlog,
  uploadFacultyCollege,
  uploadFacultySchool,
  uploadProgram,
  uploadGallery,
  uploadReview,
};
