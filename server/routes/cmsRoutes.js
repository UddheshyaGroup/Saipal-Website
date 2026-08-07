import express from 'express';
import { upload } from '../config/cloudinary.js';
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

// --- PUBLIC ROUTES (Read Only) ---
router.get('/notices', getNotices);
router.get('/tickers', getTickers);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.get('/faculty', getFaculty);
router.get('/programs', getPrograms);
router.get('/scholarships', getScholarships);
router.get('/testimonials', getTestimonials);
router.get('/gallery', getGalleryAlbums);
router.get('/settings', getSiteSettings);

// --- PROTECTED ROUTES (Admin CRUD) ---
// Notices
router.post('/notices', protect, upload.single('attachment'), createNotice);
router.put('/notices/:id', protect, upload.single('attachment'), updateNotice);
router.delete('/notices/:id', protect, deleteNotice);

// Tickers
router.post('/tickers', protect, createTicker);
router.put('/tickers/:id', protect, updateTicker);
router.delete('/tickers/:id', protect, deleteTicker);

// Blogs
router.post('/blogs', protect, upload.single('image'), createBlog);
router.put('/blogs/:id', protect, upload.single('image'), updateBlog);
router.delete('/blogs/:id', protect, deleteBlog);

// Faculty
router.post('/faculty', protect, upload.single('image'), createFaculty);
router.put('/faculty/:id', protect, upload.single('image'), updateFaculty);
router.delete('/faculty/:id', protect, deleteFaculty);

// Programs
router.post('/programs', protect, upload.single('image'), createProgram);
router.put('/programs/:id', protect, upload.single('image'), updateProgram);
router.delete('/programs/:id', protect, deleteProgram);

// Scholarships
router.post('/scholarships', protect, createScholarship);
router.put('/scholarships/:id', protect, updateScholarship);
router.delete('/scholarships/:id', protect, deleteScholarship);

// Testimonials
router.post('/testimonials', protect, createTestimonial);
router.put('/testimonials/:id', protect, updateTestimonial);
router.delete('/testimonials/:id', protect, deleteTestimonial);

// Gallery Albums & Photos
router.post('/gallery', protect, upload.single('cover'), createGalleryAlbum);
router.put('/gallery/:id', protect, upload.single('cover'), updateGalleryAlbum);
router.delete('/gallery/:id', protect, deleteGalleryAlbum);
router.post('/gallery/:id/photos', protect, upload.single('photo'), addPhotoToAlbum);
router.delete('/gallery/:albumId/photos/:photoId', protect, removePhotoFromAlbum);

// Site Settings
router.put('/settings', protect, updateSiteSettings);

export default router;
