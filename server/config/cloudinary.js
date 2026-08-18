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
const uploadBlog = makeUploader('saipal_media/blogs', { maxSizeMB: 10 });

// News
const uploadNews = makeUploader('saipal_media/news', { maxSizeMB: 10 });

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
  uploadNews,
  uploadFacultyCollege,
  uploadFacultySchool,
  uploadProgram,
  uploadGallery,
  uploadReview,
};

// ─────────────────────────────────────────────────────────────────
// Helper: delete an asset from Cloudinary by its URL.
// Extracts public_id from the URL, then calls destroy().
// Supports images and raw files (PDFs).
// Silently no-ops for non-Cloudinary URLs (e.g. Unsplash, Google).
// ─────────────────────────────────────────────────────────────────
export const destroyCloudinaryAsset = async (url, resourceType = 'image') => {
  if (!url || typeof url !== 'string') return;
  if (!url.includes('res.cloudinary.com')) return; // skip external URLs

  try {
    // Cloudinary URLs look like:
    //   https://res.cloudinary.com/<cloud>/image/upload/v1234/saipal_media/folder/filename.jpg
    //   https://res.cloudinary.com/<cloud>/raw/upload/saipal_media/folder/file.pdf
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[^.]+)?$/);
    if (!match) return;

    const publicId = match[1]; // e.g. "saipal_media/faculty/college/abc123"

    await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
    console.log(`[Cloudinary] Deleted: ${publicId}`);
  } catch (err) {
    // Never fail the main request due to cleanup errors
    console.warn(`[Cloudinary] Failed to delete asset (${url}):`, err.message);
  }
};

