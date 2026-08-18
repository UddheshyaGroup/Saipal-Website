import express from 'express';
import {
  upload,
  uploadNotice,
  uploadBlog,
  uploadNews,
  uploadFacultyCollege,
  uploadFacultySchool,
  uploadProgram,
  uploadGallery,
} from '../config/cloudinary.js';
import { protect } from '../middleware/auth.js';
import {
  getNotices, createNotice, updateNotice, deleteNotice,
  getTickers, createTicker, updateTicker, deleteTicker,
  getBlogs, getBlogById, createBlog, updateBlog, deleteBlog,
  getFaculty, createFaculty, updateFaculty, deleteFaculty,
  getPrograms, createProgram, updateProgram, deleteProgram,
  getScholarships, createScholarship, updateScholarship, deleteScholarship,
  getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial,
  getGalleryAlbums, createGalleryAlbum, updateGalleryAlbum, deleteGalleryAlbum, addPhotoToAlbum, removePhotoFromAlbum,
  getSiteSettings, updateSiteSettings
} from '../controllers/cmsController.js';

const router = express.Router();

// ─── Helper: pick the correct faculty uploader based on ?division= or body.division ───
const facultyUpload = (field) => (req, res, next) => {
  const division = req.query.division || req.body?.division || 'college';
  const uploader = division === 'school' ? uploadFacultySchool : uploadFacultyCollege;
  return uploader.single(field)(req, res, next);
};

// ─── PUBLIC ROUTES (Read Only) ───────────────────────────────────
router.get('/notices', getNotices);
router.get('/tickers', getTickers);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
// News — public read (reuses Blog controller, filtered by type in service)
router.get('/news', getBlogs);
router.get('/news/:id', getBlogById);
router.get('/faculty', getFaculty);
router.get('/programs', getPrograms);
router.get('/scholarships', getScholarships);
router.get('/testimonials', getTestimonials);
router.get('/gallery', getGalleryAlbums);
router.get('/settings', getSiteSettings);

// ─── PROTECTED ROUTES (Admin CRUD) ───────────────────────────────

// Notices — attachments go to saipal_media/notices (10 MB, supports PDF)
router.post('/notices', protect, uploadNotice.single('attachment'), createNotice);
router.put('/notices/:id', protect, uploadNotice.single('attachment'), updateNotice);
router.delete('/notices/:id', protect, deleteNotice);

// Tickers (text only — no file uploads)
router.post('/tickers', protect, createTicker);
router.put('/tickers/:id', protect, updateTicker);
router.delete('/tickers/:id', protect, deleteTicker);

// Blogs — covers go to saipal_media/blogs (10 MB)
router.post('/blogs', protect, uploadBlog.single('image'), createBlog);
router.put('/blogs/:id', protect, uploadBlog.single('image'), updateBlog);
router.delete('/blogs/:id', protect, deleteBlog);

// News — covers go to saipal_media/news (10 MB)
// Reuses Blog model with type='news' — filtered by controller/service
router.post('/news', protect, uploadNews.single('image'), createBlog);
router.put('/news/:id', protect, uploadNews.single('image'), updateBlog);
router.delete('/news/:id', protect, deleteBlog);

// Faculty — profile photos go to saipal_media/faculty/college or /school (10 MB)
// The division is read from ?division= query param or request body
router.post('/faculty', protect, facultyUpload('image'), createFaculty);
router.put('/faculty/:id', protect, facultyUpload('image'), updateFaculty);
router.delete('/faculty/:id', protect, deleteFaculty);

// Programs — covers go to saipal_media/programs (5 MB)
router.post('/programs', protect, uploadProgram.single('image'), createProgram);
router.put('/programs/:id', protect, uploadProgram.single('image'), updateProgram);
router.delete('/programs/:id', protect, deleteProgram);

// Scholarships (text only)
router.post('/scholarships', protect, createScholarship);
router.put('/scholarships/:id', protect, updateScholarship);
router.delete('/scholarships/:id', protect, deleteScholarship);

// Testimonials (text only)
router.post('/testimonials', protect, createTestimonial);
router.put('/testimonials/:id', protect, updateTestimonial);
router.delete('/testimonials/:id', protect, deleteTestimonial);

// Gallery Albums & Photos — go to saipal_media/gallery (10 MB)
router.post('/gallery', protect, uploadGallery.single('cover'), createGalleryAlbum);
router.put('/gallery/:id', protect, uploadGallery.single('cover'), updateGalleryAlbum);
router.delete('/gallery/:id', protect, deleteGalleryAlbum);
router.post('/gallery/:id/photos', protect, uploadGallery.single('photo'), addPhotoToAlbum);
router.delete('/gallery/:albumId/photos/:photoId', protect, removePhotoFromAlbum);

// Site Settings (no file upload)
router.put('/settings', protect, updateSiteSettings);

export default router;
