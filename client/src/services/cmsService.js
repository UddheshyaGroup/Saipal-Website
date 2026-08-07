import { authService } from "./authService";
// eslint-disable-next-line no-unused-vars
import {
  INITIAL_TICKERS,
  INITIAL_NOTICES,
  INITIAL_BLOG_POSTS,
  INITIAL_SCHOOL_LEVELS,
  INITIAL_COLLEGE_PROGRAMS,
  INITIAL_SCHOOL_PROGRAMS,
  INITIAL_SCHOLARSHIPS,
  INITIAL_SCHOOL_FACILITIES,
  INITIAL_SCHOOL_STATS,
  INITIAL_SCHOOL_CLUBS,
  INITIAL_COLLEGE_FACULTY,
  INITIAL_SCHOOL_FACULTY_SEED,
  INITIAL_COLLEGE_TESTIMONIALS,
  INITIAL_SCHOOL_TESTIMONIALS_SEED,
  INITIAL_SITE_SETTINGS,
  INITIAL_GALLERY_ALBUMS,
} from "../data/initialCmsData";

const CMS_STORAGE_KEYS = {
  NOTICES: "saipal_cms_notices",
  TICKERS: "saipal_cms_tickers",
  BLOGS: "saipal_cms_blogs",
  PROGRAMS: "saipal_cms_programs",
  SCHOLARSHIPS: "saipal_cms_scholarships",
  FACILITIES: "saipal_cms_facilities",
  CLUBS: "saipal_cms_clubs",
  FACULTY: "saipal_cms_faculty",
  TESTIMONIALS: "saipal_cms_testimonials",
  SETTINGS: "saipal_cms_settings",
  GALLERY: "saipal_cms_gallery",
};

// Use relative path — works via Vite proxy in dev and on the same host in production
const API_BASE_URL = "/api";

class CmsEventBus extends EventTarget {
  notifyChange(section) {
    this.dispatchEvent(new CustomEvent("cms-data-changed", { detail: { section } }));
  }
}

export const cmsBus = new CmsEventBus();

// Normalize MongoDB _id to client id helper
const normalize = (item) => {
  if (!item) return item;
  if (Array.isArray(item)) return item.map(normalize);
  
  const id = item.id || item._id || String(item._id);
  const normalized = { ...item, id: String(id) };
  
  if (item.photos && Array.isArray(item.photos)) {
    normalized.photos = item.photos.map((p) => ({
      ...p,
      id: String(p.id || p._id || p._id)
    }));
  }
  return normalized;
};

// Initialize LocalStorage with separated seed data
const initializeCmsStorage = () => {
  if (!localStorage.getItem(CMS_STORAGE_KEYS.NOTICES)) {
    localStorage.setItem(CMS_STORAGE_KEYS.NOTICES, JSON.stringify(INITIAL_NOTICES));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.TICKERS)) {
    localStorage.setItem(CMS_STORAGE_KEYS.TICKERS, JSON.stringify(INITIAL_TICKERS));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.BLOGS)) {
    localStorage.setItem(CMS_STORAGE_KEYS.BLOGS, JSON.stringify(INITIAL_BLOG_POSTS));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.PROGRAMS)) {
    const allPrograms = [...INITIAL_COLLEGE_PROGRAMS, ...INITIAL_SCHOOL_PROGRAMS];
    localStorage.setItem(CMS_STORAGE_KEYS.PROGRAMS, JSON.stringify(allPrograms));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.SCHOLARSHIPS)) {
    localStorage.setItem(CMS_STORAGE_KEYS.SCHOLARSHIPS, JSON.stringify(INITIAL_SCHOLARSHIPS));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.FACILITIES)) {
    localStorage.setItem(CMS_STORAGE_KEYS.FACILITIES, JSON.stringify(INITIAL_SCHOOL_FACILITIES));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.CLUBS)) {
    localStorage.setItem(CMS_STORAGE_KEYS.CLUBS, JSON.stringify(INITIAL_SCHOOL_CLUBS));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.FACULTY)) {
    const allFaculty = [...INITIAL_COLLEGE_FACULTY, ...INITIAL_SCHOOL_FACULTY_SEED];
    localStorage.setItem(CMS_STORAGE_KEYS.FACULTY, JSON.stringify(allFaculty));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.TESTIMONIALS)) {
    const allTestimonials = [...INITIAL_COLLEGE_TESTIMONIALS, ...INITIAL_SCHOOL_TESTIMONIALS_SEED];
    localStorage.setItem(CMS_STORAGE_KEYS.TESTIMONIALS, JSON.stringify(allTestimonials));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.SETTINGS)) {
    localStorage.setItem(CMS_STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SITE_SETTINGS));
  }
  if (!localStorage.getItem(CMS_STORAGE_KEYS.GALLERY)) {
    localStorage.setItem(CMS_STORAGE_KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY_ALBUMS));
  }
};

initializeCmsStorage();

// Generic CRUD Helpers
const getItems = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (e) {
    return fallback;
  }
};

const saveItemsLocal = (key, items, sectionName) => {
  localStorage.setItem(key, JSON.stringify(items));
  cmsBus.notifyChange(sectionName);
};

// Background sync from server
export const syncCmsWithServer = async () => {
  try {
    const [notices, tickers, blogs, faculty, programs, scholarships, testimonials, gallery, settings] = await Promise.all([
      fetch(`${API_BASE_URL}/cms/notices`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/tickers`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/blogs`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/faculty`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/programs`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/scholarships`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/testimonials`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/gallery`).then((res) => res.json()),
      fetch(`${API_BASE_URL}/cms/settings`).then((res) => res.json()),
    ]);

    localStorage.setItem(CMS_STORAGE_KEYS.NOTICES, JSON.stringify(normalize(notices)));
    localStorage.setItem(CMS_STORAGE_KEYS.TICKERS, JSON.stringify(normalize(tickers)));
    localStorage.setItem(CMS_STORAGE_KEYS.BLOGS, JSON.stringify(normalize(blogs)));
    localStorage.setItem(CMS_STORAGE_KEYS.FACULTY, JSON.stringify(normalize(faculty)));
    localStorage.setItem(CMS_STORAGE_KEYS.PROGRAMS, JSON.stringify(normalize(programs)));
    localStorage.setItem(CMS_STORAGE_KEYS.SCHOLARSHIPS, JSON.stringify(normalize(scholarships)));
    localStorage.setItem(CMS_STORAGE_KEYS.TESTIMONIALS, JSON.stringify(normalize(testimonials)));
    localStorage.setItem(CMS_STORAGE_KEYS.GALLERY, JSON.stringify(normalize(gallery)));
    localStorage.setItem(CMS_STORAGE_KEYS.SETTINGS, JSON.stringify(normalize(settings)));

    cmsBus.notifyChange("all");
  } catch (err) {
    console.error("CMS Background Sync failed:", err);
  }
};

// Trigger background sync on startup
setTimeout(syncCmsWithServer, 500);

// Helper for making API calls
const makeApiCall = async (endpoint, method = "GET", body = null, isUpload = false) => {
  const token = authService.getToken();
  const headers = {};
  
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  
  if (!isUpload && body) {
    headers["Content-Type"] = "application/json";
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = isUpload ? body : JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || `API error on ${method} ${endpoint}`);
  }
  return response.json();
};

export const cmsService = {
  // Trigger manual background sync
  syncAll: () => syncCmsWithServer(),

  // --- FACULTY DIRECTORY (STRICT DIVISION ISOLATION) ---
  getFaculty: (division = "school") => {
    // Trigger sync in background
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, []);
    if (!division || division === "all") return list;
    return list.filter((m) => (m.division || "school") === division);
  },
  saveFacultyMember: async (member, targetDivision = "school") => {
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, []);
    const divisionToSave = member.division || targetDivision || "school";
    
    // Optimistic local update
    const tempId = member.id || `fac-temp-${Date.now()}`;
    const optimisticMember = { ...member, id: tempId, division: divisionToSave };
    let localList;
    if (member.id && list.some((m) => String(m.id) === String(member.id))) {
      localList = list.map((m) => (String(m.id) === String(member.id) ? optimisticMember : m));
    } else {
      localList = [...list, optimisticMember];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.FACULTY, localList, "faculty");

    // Server request
    try {
      const isNew = !member.id || String(member.id).startsWith("fac-temp-");
      const url = isNew ? "/cms/faculty" : `/cms/faculty/${member.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverMember = await makeApiCall(url, method, { ...member, division: divisionToSave });
      const normalized = normalize(serverMember);

      // Replace temp item with server result
      const freshList = getItems(CMS_STORAGE_KEYS.FACULTY, []);
      const updatedList = freshList.map((m) => (String(m.id) === String(tempId) || String(m.id) === String(normalized.id) ? normalized : m));
      saveItemsLocal(CMS_STORAGE_KEYS.FACULTY, updatedList, "faculty");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer(); // Rollback/Resync
    }
  },
  deleteFacultyMember: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, []);
    const updated = list.filter((m) => String(m.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.FACULTY, updated, "faculty");

    try {
      await makeApiCall(`/cms/faculty/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- ACADEMIC PROGRAMS (STRICT DIVISION ISOLATION) ---
  getPrograms: (division = "college") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
    if (!division || division === "all") return list;
    return list.filter((p) => (p.division || "college") === division);
  },
  saveProgram: async (program, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
    const divisionToSave = program.division || targetDivision || "college";
    
    const tempId = program.id || `prog-temp-${Date.now()}`;
    const optimisticProgram = { ...program, id: tempId, division: divisionToSave };
    let localList;
    if (program.id && list.some((p) => String(p.id) === String(program.id))) {
      localList = list.map((p) => (String(p.id) === String(program.id) ? optimisticProgram : p));
    } else {
      localList = [...list, optimisticProgram];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.PROGRAMS, localList, "programs");

    try {
      const isNew = !program.id || String(program.id).startsWith("prog-temp-");
      const url = isNew ? "/cms/programs" : `/cms/programs/${program.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverProgram = await makeApiCall(url, method, { ...program, division: divisionToSave });
      const normalized = normalize(serverProgram);

      const freshList = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
      const updatedList = freshList.map((p) => (String(p.id) === String(tempId) || String(p.id) === String(normalized.id) ? normalized : p));
      saveItemsLocal(CMS_STORAGE_KEYS.PROGRAMS, updatedList, "programs");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteProgram: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
    const updated = list.filter((p) => String(p.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.PROGRAMS, updated, "programs");

    try {
      await makeApiCall(`/cms/programs/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- SCHOLARSHIPS (STRICT DIVISION ISOLATION) ---
  getScholarships: (division = "college") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, []);
    if (!division || division === "all") return list;
    return list.filter((s) => (s.division || "college") === division || s.division === "all");
  },
  saveScholarship: async (scholarship, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, []);
    const divisionToSave = scholarship.division || targetDivision || "college";
    
    const tempId = scholarship.id || `sch-temp-${Date.now()}`;
    const optimisticSch = { ...scholarship, id: tempId, division: divisionToSave };
    let localList;
    if (scholarship.id && list.some((s) => String(s.id) === String(scholarship.id))) {
      localList = list.map((s) => (String(s.id) === String(scholarship.id) ? optimisticSch : s));
    } else {
      localList = [...list, optimisticSch];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.SCHOLARSHIPS, localList, "scholarships");

    try {
      const isNew = !scholarship.id || String(scholarship.id).startsWith("sch-temp-");
      const url = isNew ? "/cms/scholarships" : `/cms/scholarships/${scholarship.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverSch = await makeApiCall(url, method, { ...scholarship, division: divisionToSave });
      const normalized = normalize(serverSch);

      const freshList = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, []);
      const updatedList = freshList.map((s) => (String(s.id) === String(tempId) || String(s.id) === String(normalized.id) ? normalized : s));
      saveItemsLocal(CMS_STORAGE_KEYS.SCHOLARSHIPS, updatedList, "scholarships");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteScholarship: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, []);
    const updated = list.filter((s) => String(s.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.SCHOLARSHIPS, updated, "scholarships");

    try {
      await makeApiCall(`/cms/scholarships/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- NOTICES (STRICT DIVISION ISOLATION) ---
  getNotices: (division = "all") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, []);
    if (division && division !== "all") {
      return list.filter((n) => n.division === division || n.division === "all");
    }
    return list;
  },
  saveNotice: async (notice, targetDivision = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, []);
    const divisionToSave = notice.division || targetDivision || "all";
    
    const tempId = notice.id || `not-temp-${Date.now()}`;
    const optimisticNotice = { ...notice, id: tempId, division: divisionToSave };
    let localList;
    if (notice.id && list.some((n) => String(n.id) === String(notice.id))) {
      localList = list.map((n) => (String(n.id) === String(notice.id) ? optimisticNotice : n));
    } else {
      localList = [optimisticNotice, ...list];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.NOTICES, localList, "notices");

    try {
      const isNew = !notice.id || String(notice.id).startsWith("not-temp-");
      const url = isNew ? "/cms/notices" : `/cms/notices/${notice.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverNotice = await makeApiCall(url, method, { ...notice, division: divisionToSave });
      const normalized = normalize(serverNotice);

      const freshList = getItems(CMS_STORAGE_KEYS.NOTICES, []);
      const updatedList = freshList.map((n) => (String(n.id) === String(tempId) || String(n.id) === String(normalized.id) ? normalized : n));
      saveItemsLocal(CMS_STORAGE_KEYS.NOTICES, updatedList, "notices");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteNotice: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, []);
    const updated = list.filter((n) => String(n.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.NOTICES, updated, "notices");

    try {
      await makeApiCall(`/cms/notices/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- TICKERS (STRICT DIVISION ISOLATION) ---
  getTickers: (division = "all") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, []);
    if (division && division !== "all") {
      return list.filter((t) => t.division === division || t.division === "all");
    }
    return list;
  },
  saveTicker: async (ticker, targetDivision = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, []);
    const divisionToSave = ticker.division || targetDivision || "all";
    
    const tempId = ticker.id || `tick-temp-${Date.now()}`;
    const optimisticTicker = { ...ticker, id: tempId, division: divisionToSave };
    let localList;
    if (ticker.id && list.some((t) => String(t.id) === String(ticker.id))) {
      localList = list.map((t) => (String(t.id) === String(ticker.id) ? optimisticTicker : t));
    } else {
      localList = [...list, optimisticTicker];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.TICKERS, localList, "tickers");

    try {
      const isNew = !ticker.id || String(ticker.id).startsWith("tick-temp-");
      const url = isNew ? "/cms/tickers" : `/cms/tickers/${ticker.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverTicker = await makeApiCall(url, method, { ...ticker, division: divisionToSave });
      const normalized = normalize(serverTicker);

      const freshList = getItems(CMS_STORAGE_KEYS.TICKERS, []);
      const updatedList = freshList.map((t) => (String(t.id) === String(tempId) || String(t.id) === String(normalized.id) ? normalized : t));
      saveItemsLocal(CMS_STORAGE_KEYS.TICKERS, updatedList, "tickers");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteTicker: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, []);
    const updated = list.filter((t) => String(t.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.TICKERS, updated, "tickers");

    try {
      await makeApiCall(`/cms/tickers/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- BLOG POSTS (STRICT DIVISION ISOLATION) ---
  getBlogPosts: (division = "all") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.BLOGS, []);
    if (!division || division === "all") return list;
    return list.filter((p) => (p.division || "school") === division);
  },
  getBlogPostById: (id) => {
    const posts = getItems(CMS_STORAGE_KEYS.BLOGS, []);
    return posts.find((p) => String(p.id) === String(id)) || null;
  },
  getBlogPostByIdAsync: async (id) => {
    try {
      const post = await makeApiCall(`/cms/blogs/${id}`, "GET");
      return normalize(post);
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  saveBlogPost: async (post, targetDivision = "school") => {
    const list = getItems(CMS_STORAGE_KEYS.BLOGS, []);
    const divisionToSave = post.division || targetDivision || "school";
    
    const tempId = post.id || `blog-temp-${Date.now()}`;
    const optimisticPost = { ...post, id: tempId, division: divisionToSave };
    let localList;
    if (post.id && list.some((p) => String(p.id) === String(post.id))) {
      localList = list.map((p) => (String(p.id) === String(post.id) ? optimisticPost : p));
    } else {
      localList = [optimisticPost, ...list];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.BLOGS, localList, "blogs");

    try {
      const isNew = !post.id || String(post.id).startsWith("blog-temp-");
      const url = isNew ? "/cms/blogs" : `/cms/blogs/${post.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverPost = await makeApiCall(url, method, { ...post, division: divisionToSave });
      const normalized = normalize(serverPost);

      const freshList = getItems(CMS_STORAGE_KEYS.BLOGS, []);
      const updatedList = freshList.map((p) => (String(p.id) === String(tempId) || String(p.id) === String(normalized.id) ? normalized : p));
      saveItemsLocal(CMS_STORAGE_KEYS.BLOGS, updatedList, "blogs");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteBlogPost: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.BLOGS, []);
    const updated = list.filter((p) => String(p.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.BLOGS, updated, "blogs");

    try {
      await makeApiCall(`/cms/blogs/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- FACILITIES & CLUBS (SCHOOL READ ONLY) ---
  getFacilities: () => getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES),
  saveFacility: (facility) => {
    const list = getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES);
    let updated;
    if (facility.id) {
      updated = list.map((f) => (f.id === facility.id ? { ...f, ...facility } : f));
    } else {
      updated = [...list, { ...facility, id: `facil-${Date.now()}` }];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.FACILITIES, updated, "facilities");
    return updated;
  },
  deleteFacility: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES);
    const updated = list.filter((f) => f.id !== id);
    saveItemsLocal(CMS_STORAGE_KEYS.FACILITIES, updated, "facilities");
    return updated;
  },
  getClubs: () => getItems(CMS_STORAGE_KEYS.CLUBS, INITIAL_SCHOOL_CLUBS),
  saveClub: (club) => {
    const list = getItems(CMS_STORAGE_KEYS.CLUBS, INITIAL_SCHOOL_CLUBS);
    let updated;
    if (club.id) {
      updated = list.map((c) => (c.id === club.id ? { ...c, ...club } : c));
    } else {
      updated = [...list, { ...club, id: `club-${Date.now()}` }];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.CLUBS, updated, "clubs");
    return updated;
  },
  deleteClub: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.CLUBS, INITIAL_SCHOOL_CLUBS);
    const updated = list.filter((c) => c.id !== id);
    saveItemsLocal(CMS_STORAGE_KEYS.CLUBS, updated, "clubs");
    return updated;
  },

  // --- TESTIMONIALS ---
  getTestimonials: (division = "all") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, []);
    if (!division || division === "all") return list;
    return list.filter((t) => (t.division || "school") === division);
  },
  saveTestimonial: async (item, targetDivision = "school") => {
    const list = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, []);
    const divisionToSave = item.division || targetDivision || "school";
    
    const tempId = item.id || `tst-temp-${Date.now()}`;
    const optimisticTst = { ...item, id: tempId, division: divisionToSave };
    let localList;
    if (item.id && list.some((t) => String(t.id) === String(item.id))) {
      localList = list.map((t) => (String(t.id) === String(item.id) ? optimisticTst : t));
    } else {
      localList = [...list, optimisticTst];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.TESTIMONIALS, localList, "testimonials");

    try {
      const isNew = !item.id || String(item.id).startsWith("tst-temp-");
      const url = isNew ? "/cms/testimonials" : `/cms/testimonials/${item.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverTst = await makeApiCall(url, method, { ...item, division: divisionToSave });
      const normalized = normalize(serverTst);

      const freshList = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, []);
      const updatedList = freshList.map((t) => (String(t.id) === String(tempId) || String(t.id) === String(normalized.id) ? normalized : t));
      saveItemsLocal(CMS_STORAGE_KEYS.TESTIMONIALS, updatedList, "testimonials");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteTestimonial: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, []);
    const updated = list.filter((t) => String(t.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.TESTIMONIALS, updated, "testimonials");

    try {
      await makeApiCall(`/cms/testimonials/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- SITE SETTINGS ---
  getSiteSettings: () => {
    setTimeout(syncCmsWithServer, 0);
    return getItems(CMS_STORAGE_KEYS.SETTINGS, INITIAL_SITE_SETTINGS);
  },
  saveSiteSettings: async (settings) => {
    const current = cmsService.getSiteSettings();
    const updated = { ...current, ...settings };
    saveItemsLocal(CMS_STORAGE_KEYS.SETTINGS, updated, "settings");

    try {
      const serverSettings = await makeApiCall("/cms/settings", "PUT", settings);
      const normalized = normalize(serverSettings);
      saveItemsLocal(CMS_STORAGE_KEYS.SETTINGS, normalized, "settings");
      return normalized;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },

  // --- GALLERY ALBUMS (DIVISION ISOLATED) ---
  getGalleryAlbums: (division = "all") => {
    setTimeout(syncCmsWithServer, 0);
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, []);
    if (!division || division === "all") return list;
    return list.filter((a) => (a.division || "college") === division);
  },
  saveGalleryAlbum: async (album, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, []);
    const divisionToSave = album.division || targetDivision || "college";
    
    const tempId = album.id || `alb-temp-${Date.now()}`;
    const optimisticAlbum = { ...album, id: tempId, division: divisionToSave, photos: album.photos || [] };
    let localList;
    if (album.id && list.some((a) => String(a.id) === String(album.id))) {
      localList = list.map((a) => (String(a.id) === String(album.id) ? optimisticAlbum : a));
    } else {
      localList = [...list, optimisticAlbum];
    }
    saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, localList, "gallery");

    try {
      const isNew = !album.id || String(album.id).startsWith("alb-temp-");
      const url = isNew ? "/cms/gallery" : `/cms/gallery/${album.id}`;
      const method = isNew ? "POST" : "PUT";
      
      const serverAlbum = await makeApiCall(url, method, { ...album, division: divisionToSave });
      const normalized = normalize(serverAlbum);

      const freshList = getItems(CMS_STORAGE_KEYS.GALLERY, []);
      const updatedList = freshList.map((a) => (String(a.id) === String(tempId) || String(a.id) === String(normalized.id) ? normalized : a));
      saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, updatedList, "gallery");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  addPhotoToAlbum: async (albumId, photoUrl) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, []);
    
    // Optimistic local add
    const tempPhotoId = `ph-temp-${Date.now()}`;
    const optimisticList = list.map((a) =>
      String(a.id) === String(albumId)
        ? { ...a, photos: [...(a.photos || []), { url: photoUrl, id: tempPhotoId }] }
        : a
    );
    saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, optimisticList, "gallery");

    try {
      const serverAlbum = await makeApiCall(`/cms/gallery/${albumId}/photos`, "POST", { photoUrl });
      const normalized = normalize(serverAlbum);

      const freshList = getItems(CMS_STORAGE_KEYS.GALLERY, []);
      const updatedList = freshList.map((a) => (String(a.id) === String(albumId) ? normalized : a));
      saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, updatedList, "gallery");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  removePhotoFromAlbum: async (albumId, photoId) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, []);
    
    // Optimistic local remove
    const optimisticList = list.map((a) =>
      String(a.id) === String(albumId)
        ? { ...a, photos: (a.photos || []).filter((p) => String(p.id) !== String(photoId)) }
        : a
    );
    saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, optimisticList, "gallery");

    try {
      const serverAlbum = await makeApiCall(`/cms/gallery/${albumId}/photos/${photoId}`, "DELETE");
      const normalized = normalize(serverAlbum);

      const freshList = getItems(CMS_STORAGE_KEYS.GALLERY, []);
      const updatedList = freshList.map((a) => (String(a.id) === String(albumId) ? normalized : a));
      saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, updatedList, "gallery");
      return updatedList;
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
  },
  deleteGalleryAlbum: async (id) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, []);
    const updated = list.filter((a) => String(a.id) !== String(id));
    saveItemsLocal(CMS_STORAGE_KEYS.GALLERY, updated, "gallery");

    try {
      await makeApiCall(`/cms/gallery/${id}`, "DELETE");
    } catch (err) {
      console.error(err);
      syncCmsWithServer();
    }
    return updated;
  },

  // --- RESET ALL DATA ---
  resetAllCmsData: () => {
    // Keep local reset for quick fallback, then trigger sync
    localStorage.setItem(CMS_STORAGE_KEYS.NOTICES, JSON.stringify(INITIAL_NOTICES));
    localStorage.setItem(CMS_STORAGE_KEYS.TICKERS, JSON.stringify(INITIAL_TICKERS));
    localStorage.setItem(CMS_STORAGE_KEYS.BLOGS, JSON.stringify(INITIAL_BLOG_POSTS));
    localStorage.setItem(CMS_STORAGE_KEYS.PROGRAMS, JSON.stringify([...INITIAL_COLLEGE_PROGRAMS, ...INITIAL_SCHOOL_PROGRAMS]));
    localStorage.setItem(CMS_STORAGE_KEYS.SCHOLARSHIPS, JSON.stringify(INITIAL_SCHOLARSHIPS));
    localStorage.setItem(CMS_STORAGE_KEYS.FACILITIES, JSON.stringify(INITIAL_SCHOOL_FACILITIES));
    localStorage.setItem(CMS_STORAGE_KEYS.CLUBS, JSON.stringify(INITIAL_SCHOOL_CLUBS));
    localStorage.setItem(CMS_STORAGE_KEYS.FACULTY, JSON.stringify([...INITIAL_COLLEGE_FACULTY, ...INITIAL_SCHOOL_FACULTY_SEED]));
    localStorage.setItem(CMS_STORAGE_KEYS.TESTIMONIALS, JSON.stringify([...INITIAL_COLLEGE_TESTIMONIALS, ...INITIAL_SCHOOL_TESTIMONIALS_SEED]));
    localStorage.setItem(CMS_STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SITE_SETTINGS));
    localStorage.setItem(CMS_STORAGE_KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY_ALBUMS));
    cmsBus.notifyChange("all");
    
    // Resync from server
    syncCmsWithServer();
  },
};
