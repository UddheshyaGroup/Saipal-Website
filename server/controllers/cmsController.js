import Notice from '../models/Notice.js';
import Ticker from '../models/Ticker.js';
import Blog from '../models/Blog.js';
import Faculty from '../models/Faculty.js';
import Program from '../models/Program.js';
import Scholarship from '../models/Scholarship.js';
import Testimonial from '../models/Testimonial.js';
import GalleryAlbum from '../models/GalleryAlbum.js';
import SiteSettings from '../models/SiteSettings.js';
import { destroyCloudinaryAsset } from '../config/cloudinary.js';

// --- Helper to parse division filter ---
const getDivisionQuery = (req) => {
  const { division } = req.query;
  if (!division || division === 'all') return {};
  return { division };
};

// ==========================================
// 1. NOTICE CONTROLLERS
// ==========================================
export const getNotices = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const notices = await Notice.find(query).sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNotice = async (req, res) => {
  try {
    const noticeData = { ...req.body };
    if (req.file) {
      noticeData.attachment = req.file.path;
    }
    const notice = new Notice(noticeData);
    const saved = await notice.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const noticeData = { ...req.body };

    if (req.file) {
      // A new file was uploaded — delete the old attachment from Cloudinary
      const existing = await Notice.findById(id);
      if (existing?.attachment) {
        const isRaw = existing.attachment.includes('/raw/');
        await destroyCloudinaryAsset(existing.attachment, isRaw ? 'raw' : 'image');
      }
      noticeData.attachment = req.file.path;
    }

    const updated = await Notice.findByIdAndUpdate(id, noticeData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Notice not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Notice.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Notice not found' });

    // Clean up attachment from Cloudinary
    if (deleted.attachment) {
      const isRaw = deleted.attachment.includes('/raw/');
      await destroyCloudinaryAsset(deleted.attachment, isRaw ? 'raw' : 'image');
    }

    res.json({ message: 'Notice deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 2. TICKER CONTROLLERS
// ==========================================
export const getTickers = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const tickers = await Ticker.find(query).sort({ createdAt: -1 });
    res.json(tickers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTicker = async (req, res) => {
  try {
    const ticker = new Ticker(req.body);
    const saved = await ticker.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTicker = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Ticker.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Ticker not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTicker = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ticker.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Ticker not found' });
    res.json({ message: 'Ticker deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 3. BLOG CONTROLLERS
// ==========================================
export const getBlogs = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: 'Blog post not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blogData = { ...req.body };
    if (req.file) {
      blogData.image = req.file.path;
    }
    const blog = new Blog(blogData);
    const saved = await blog.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogData = { ...req.body };

    if (req.file) {
      // New image uploaded — delete old one from Cloudinary
      const existing = await Blog.findById(id);
      if (existing?.image) await destroyCloudinaryAsset(existing.image);
      blogData.image = req.file.path;
    }

    const updated = await Blog.findByIdAndUpdate(id, blogData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Blog post not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Blog post not found' });

    // Remove cover image from Cloudinary
    if (deleted.image) await destroyCloudinaryAsset(deleted.image);

    res.json({ message: 'Blog post deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 4. FACULTY CONTROLLERS
// ==========================================
export const getFaculty = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const faculty = await Faculty.find(query).sort({ createdAt: -1 });
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const facultyData = { ...req.body };
    if (req.file) {
      facultyData.image = req.file.path;
    }
    const faculty = new Faculty(facultyData);
    const saved = await faculty.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const facultyData = { ...req.body };

    if (req.file) {
      // New photo uploaded — delete old profile photo from Cloudinary
      const existing = await Faculty.findById(id);
      if (existing?.image) await destroyCloudinaryAsset(existing.image);
      facultyData.image = req.file.path;
    }

    const updated = await Faculty.findByIdAndUpdate(id, facultyData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Faculty member not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Faculty.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Faculty member not found' });

    // Remove profile photo from Cloudinary
    if (deleted.image) await destroyCloudinaryAsset(deleted.image);

    res.json({ message: 'Faculty member deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 5. PROGRAM CONTROLLERS
// ==========================================
export const getPrograms = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const programs = await Program.find(query).sort({ createdAt: 1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProgram = async (req, res) => {
  try {
    const programData = { ...req.body };
    if (req.file) {
      programData.image = req.file.path;
    }
    const program = new Program(programData);
    const saved = await program.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const programData = { ...req.body };

    if (req.file) {
      // New image uploaded — delete old program cover from Cloudinary
      const existing = await Program.findById(id);
      if (existing?.image) await destroyCloudinaryAsset(existing.image);
      programData.image = req.file.path;
    }

    const updated = await Program.findByIdAndUpdate(id, programData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Program not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProgram = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Program.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Program not found' });

    // Remove cover image from Cloudinary
    if (deleted.image) await destroyCloudinaryAsset(deleted.image);

    res.json({ message: 'Program deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 6. SCHOLARSHIP CONTROLLERS
// ==========================================
export const getScholarships = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const scholarships = await Scholarship.find(query).sort({ createdAt: -1 });
    res.json(scholarships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createScholarship = async (req, res) => {
  try {
    const scholarship = new Scholarship(req.body);
    const saved = await scholarship.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateScholarship = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Scholarship.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Scholarship not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteScholarship = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Scholarship.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Scholarship not found' });
    res.json({ message: 'Scholarship deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 7. TESTIMONIAL CONTROLLERS
// ==========================================
export const getTestimonials = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const testimonials = await Testimonial.find(query).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    const saved = await testimonial.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Testimonial.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Testimonial not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Testimonial.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Testimonial not found' });
    res.json({ message: 'Testimonial deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 8. GALLERY CONTROLLERS
// ==========================================
export const getGalleryAlbums = async (req, res) => {
  try {
    const query = getDivisionQuery(req);
    const albums = await GalleryAlbum.find(query).sort({ createdAt: -1 });
    res.json(albums);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createGalleryAlbum = async (req, res) => {
  try {
    const albumData = { ...req.body };
    if (req.file) {
      albumData.cover = req.file.path;
    }
    if (!albumData.photos) albumData.photos = [];
    else if (typeof albumData.photos === 'string') {
      albumData.photos = JSON.parse(albumData.photos);
    }
    const album = new GalleryAlbum(albumData);
    const saved = await album.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateGalleryAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const albumData = { ...req.body };

    if (req.file) {
      // New cover uploaded — delete old cover from Cloudinary
      const existing = await GalleryAlbum.findById(id);
      if (existing?.cover) await destroyCloudinaryAsset(existing.cover);
      albumData.cover = req.file.path;
    }

    if (albumData.photos && typeof albumData.photos === 'string') {
      albumData.photos = JSON.parse(albumData.photos);
    }

    const updated = await GalleryAlbum.findByIdAndUpdate(id, albumData, { new: true });
    if (!updated) return res.status(404).json({ message: 'Album not found' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteGalleryAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await GalleryAlbum.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Album not found' });

    // Remove album cover + all photos from Cloudinary in parallel
    const urlsToDelete = [
      deleted.cover,
      ...(deleted.photos || []).map((p) => p.url),
    ].filter(Boolean);

    await Promise.all(urlsToDelete.map((url) => destroyCloudinaryAsset(url)));

    res.json({ message: 'Album deleted successfully', id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addPhotoToAlbum = async (req, res) => {
  try {
    const { id } = req.params;

    let photoUrl;
    if (req.file) {
      photoUrl = req.file.path;
    } else if (req.body && req.body.photoUrl) {
      photoUrl = req.body.photoUrl;
    } else {
      return res.status(400).json({ message: 'No file uploaded and no photoUrl provided' });
    }

    const album = await GalleryAlbum.findById(id);
    if (!album) return res.status(404).json({ message: 'Album not found' });

    album.photos.push({ url: photoUrl });
    const saved = await album.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removePhotoFromAlbum = async (req, res) => {
  try {
    const { albumId, photoId } = req.params;
    const album = await GalleryAlbum.findById(albumId);
    if (!album) return res.status(404).json({ message: 'Album not found' });

    // Find the photo to delete before removing it from the array
    const photoToDelete = album.photos.find(
      (p) => String(p._id) === String(photoId) || String(p.id) === String(photoId)
    );

    album.photos = album.photos.filter(
      (p) => String(p._id) !== String(photoId) && String(p.id) !== String(photoId)
    );
    const saved = await album.save();

    // Now delete from Cloudinary after DB is updated
    if (photoToDelete?.url) await destroyCloudinaryAsset(photoToDelete.url);

    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ==========================================
// 9. SITE SETTINGS CONTROLLERS
// ==========================================
export const getSiteSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = new SiteSettings();
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSiteSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      settings = new SiteSettings(req.body);
    } else {
      Object.assign(settings, req.body);
    }
    const saved = await settings.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
