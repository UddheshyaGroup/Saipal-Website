import { authService } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

class CmsEventBus extends EventTarget {
  notifyChange(section) {
    this.dispatchEvent(new CustomEvent("cms-data-changed", { detail: { section } }));
  }
}
export const cmsBus = new CmsEventBus();

const convertGoogleDriveUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  const fileDRegex = /(?:drive|docs)\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const openIdRegex = /drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/;
  const ucIdRegex = /drive\.google\.com\/uc\?id=([a-zA-Z0-9_-]+)/;

  let fileId = null;
  const match1 = url.match(fileDRegex);
  if (match1) fileId = match1[1];
  else {
    const match2 = url.match(openIdRegex);
    if (match2) fileId = match2[1];
    else {
      const match3 = url.match(ucIdRegex);
      if (match3) fileId = match3[1];
    }
  }

  if (fileId) {
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }
  return url;
};

// Normalize MongoDB _id → id
const normalize = (item) => {
  if (!item) return item;
  if (Array.isArray(item)) return item.map(normalize);
  const id = item._id ? String(item._id) : item.id;
  const out = { ...item, id };
  if (out.image) out.image = convertGoogleDriveUrl(out.image);
  if (out.cover) out.cover = convertGoogleDriveUrl(out.cover);
  if (out.botAvatar) out.botAvatar = convertGoogleDriveUrl(out.botAvatar);
  if (out.url) out.url = convertGoogleDriveUrl(out.url);

  if (out.photos && Array.isArray(out.photos)) {
    out.photos = out.photos.map((p) => {
      const photoId = String(p._id || p.id);
      return {
        ...p,
        id: photoId,
        url: convertGoogleDriveUrl(p.url)
      };
    });
  }
  return out;
};

// ── Authenticated API helper ──────────────────────────────────
const api = async (endpoint, method = "GET", body = null) => {
  const token = authService.getToken();
  const headers = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (body) headers["Content-Type"] = "application/json";

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `API ${method} ${endpoint} → ${res.status}`);
  }
  return res.json();
};

// ── Authenticated multipart/form-data upload helper ────────────
const apiUpload = async (endpoint, method = "POST", formData) => {
  const token = authService.getToken();
  const headers = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  // Do NOT set Content-Type — browser sets it with the multipart boundary

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || `API ${method} ${endpoint} → ${res.status}`);
  }
  return res.json();
};

// ── Public (unauthenticated) GET ──────────────────────────────
const pub = async (endpoint) => {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Fetch ${endpoint} → ${res.status}`);
  return res.json();
};

export const cmsService = {
  // ── NOTICES ─────────────────────────────────────────────────
  getNotices: async (division = "all") => {
    const data = await pub("/cms/notices");
    const list = normalize(data);
    if (division && division !== "all") return list.filter((n) => n.division === division || n.division === "all");
    return list;
  },
  saveNotice: async (notice, targetDivision = "all") => {
    const division = notice.division || targetDivision;
    const isNew = !notice.id;
    const result = await api(isNew ? "/cms/notices" : `/cms/notices/${notice.id}`, isNew ? "POST" : "PUT", { ...notice, division });
    cmsBus.notifyChange("notices");
    return normalize(result);
  },
  deleteNotice: async (id) => {
    await api(`/cms/notices/${id}`, "DELETE");
    cmsBus.notifyChange("notices");
  },

  // ── TICKERS ─────────────────────────────────────────────────
  getTickers: async (division = "all") => {
    const data = await pub("/cms/tickers");
    const list = normalize(data);
    if (division && division !== "all") return list.filter((t) => t.division === division || t.division === "all");
    return list;
  },
  saveTicker: async (ticker, targetDivision = "all") => {
    const division = ticker.division || targetDivision;
    const isNew = !ticker.id;
    const result = await api(isNew ? "/cms/tickers" : `/cms/tickers/${ticker.id}`, isNew ? "POST" : "PUT", { ...ticker, division });
    cmsBus.notifyChange("tickers");
    return normalize(result);
  },
  deleteTicker: async (id) => {
    await api(`/cms/tickers/${id}`, "DELETE");
    cmsBus.notifyChange("tickers");
  },

  // ── FACULTY ─────────────────────────────────────────────────
  getFaculty: async (division = "school") => {
    const data = await pub("/cms/faculty");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((m) => (m.division || "school") === division);
  },
  // Save faculty member using a plain JSON body (URL mode)
  saveFacultyMember: async (member, targetDivision = "school") => {
    const division = member.division || targetDivision;
    const isNew = !member.id;
    const body = { ...member, division };
    if (body.image) body.image = convertGoogleDriveUrl(body.image);
    // Pass ?division= so the server routes the upload to the correct Cloudinary folder
    const endpoint = isNew
      ? `/cms/faculty?division=${division}`
      : `/cms/faculty/${member.id}?division=${division}`;
    const result = await api(endpoint, isNew ? "POST" : "PUT", body);
    cmsBus.notifyChange("faculty");
    return normalize(result);
  },
  // Save faculty member with a file upload (multipart/form-data)
  saveFacultyMemberWithFile: async (member, imageFile, targetDivision = "school") => {
    const division = member.division || targetDivision;
    const isNew = !member.id;

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", member.name || "");
    formData.append("role", member.role || "");
    formData.append("qualification", member.qualification || "");
    formData.append("experience", member.experience || "");
    formData.append("department", member.department || "");
    formData.append("division", division);
    if (!isNew) formData.append("id", member.id);

    // Pass ?division= so the server selects the correct Cloudinary folder
    const endpoint = isNew
      ? `/cms/faculty?division=${division}`
      : `/cms/faculty/${member.id}?division=${division}`;
    const result = await apiUpload(endpoint, isNew ? "POST" : "PUT", formData);
    cmsBus.notifyChange("faculty");
    return normalize(result);
  },
  deleteFacultyMember: async (id) => {
    await api(`/cms/faculty/${id}`, "DELETE");
    cmsBus.notifyChange("faculty");
  },

  // ── PROGRAMS ────────────────────────────────────────────────
  getPrograms: async (division = "college") => {
    const data = await pub("/cms/programs");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((p) => (p.division || "college") === division);
  },
  saveProgram: async (program, targetDivision = "college") => {
    const division = program.division || targetDivision;
    const isNew = !program.id;
    const body = { ...program, division };
    if (body.image) body.image = convertGoogleDriveUrl(body.image);
    const result = await api(isNew ? "/cms/programs" : `/cms/programs/${program.id}`, isNew ? "POST" : "PUT", body);
    cmsBus.notifyChange("programs");
    return normalize(result);
  },
  deleteProgram: async (id) => {
    await api(`/cms/programs/${id}`, "DELETE");
    cmsBus.notifyChange("programs");
  },

  // ── SCHOLARSHIPS ────────────────────────────────────────────
  getScholarships: async (division = "college") => {
    const data = await pub("/cms/scholarships");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((s) => (s.division || "college") === division || s.division === "all");
  },
  saveScholarship: async (scholarship, targetDivision = "college") => {
    const division = scholarship.division || targetDivision;
    const isNew = !scholarship.id;
    const result = await api(isNew ? "/cms/scholarships" : `/cms/scholarships/${scholarship.id}`, isNew ? "POST" : "PUT", { ...scholarship, division });
    cmsBus.notifyChange("scholarships");
    return normalize(result);
  },
  deleteScholarship: async (id) => {
    await api(`/cms/scholarships/${id}`, "DELETE");
    cmsBus.notifyChange("scholarships");
  },

  // ── BLOGS ───────────────────────────────────────────────────
  getBlogPosts: async (division = "all") => {
    const data = await pub("/cms/blogs");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((p) => (p.division || "school") === division);
  },
  getBlogPostById: async (id) => {
    try {
      const post = await pub(`/cms/blogs/${id}`);
      return normalize(post);
    } catch {
      return null;
    }
  },
  // Kept for backward compat
  getBlogPostByIdAsync: async (id) => {
    try {
      const post = await pub(`/cms/blogs/${id}`);
      return normalize(post);
    } catch {
      return null;
    }
  },
  saveBlogPost: async (post, targetDivision = "school") => {
    const division = post.division || targetDivision;
    const isNew = !post.id;
    const body = { ...post, division };
    if (body.image) body.image = convertGoogleDriveUrl(body.image);
    const result = await api(isNew ? "/cms/blogs" : `/cms/blogs/${post.id}`, isNew ? "POST" : "PUT", body);
    cmsBus.notifyChange("blogs");
    return normalize(result);
  },
  deleteBlogPost: async (id) => {
    await api(`/cms/blogs/${id}`, "DELETE");
    cmsBus.notifyChange("blogs");
  },

  // ── TESTIMONIALS ────────────────────────────────────────────
  getTestimonials: async (division = "all") => {
    const data = await pub("/cms/testimonials");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((t) => (t.division || "school") === division);
  },
  saveTestimonial: async (item, targetDivision = "school") => {
    const division = item.division || targetDivision;
    const isNew = !item.id;
    const result = await api(isNew ? "/cms/testimonials" : `/cms/testimonials/${item.id}`, isNew ? "POST" : "PUT", { ...item, division });
    cmsBus.notifyChange("testimonials");
    return normalize(result);
  },
  deleteTestimonial: async (id) => {
    await api(`/cms/testimonials/${id}`, "DELETE");
    cmsBus.notifyChange("testimonials");
  },

  // ── SITE SETTINGS ───────────────────────────────────────────
  getSiteSettings: async () => {
    const data = await pub("/cms/settings");
    return normalize(data);
  },
  saveSiteSettings: async (settings) => {
    const result = await api("/cms/settings", "PUT", settings);
    cmsBus.notifyChange("settings");
    return normalize(result);
  },

  // ── GALLERY ─────────────────────────────────────────────────
  getGalleryAlbums: async (division = "all") => {
    const data = await pub("/cms/gallery");
    const list = normalize(data);
    if (!division || division === "all") return list;
    return list.filter((a) => (a.division || "college") === division);
  },
  saveGalleryAlbum: async (album, targetDivision = "college") => {
    const division = album.division || targetDivision;
    const isNew = !album.id;
    const body = { ...album, division };
    if (body.cover) body.cover = convertGoogleDriveUrl(body.cover);
    const result = await api(isNew ? "/cms/gallery" : `/cms/gallery/${album.id}`, isNew ? "POST" : "PUT", body);
    cmsBus.notifyChange("gallery");
    return normalize(result);
  },
  addPhotoToAlbum: async (albumId, photoUrl) => {
    const converted = convertGoogleDriveUrl(photoUrl);
    const result = await api(`/cms/gallery/${albumId}/photos`, "POST", { photoUrl: converted });
    cmsBus.notifyChange("gallery");
    return normalize(result);
  },
  removePhotoFromAlbum: async (albumId, photoId) => {
    const result = await api(`/cms/gallery/${albumId}/photos/${photoId}`, "DELETE");
    cmsBus.notifyChange("gallery");
    return normalize(result);
  },
  deleteGalleryAlbum: async (id) => {
    await api(`/cms/gallery/${id}`, "DELETE");
    cmsBus.notifyChange("gallery");
  },

  // ── FACILITIES & CLUBS (no DB model yet — keep in memory) ───
  getFacilities: async () => [],
  getClubs: async () => [],

  // ── SYNC (no-op, kept for compatibility) ────────────────────
  syncAll: async () => {},
  resetAllCmsData: async () => cmsBus.notifyChange("all"),
};
