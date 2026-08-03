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
  INITIAL_SCHOOL_TESTIMONIALS,
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

class CmsEventBus extends EventTarget {
  notifyChange(section) {
    this.dispatchEvent(new CustomEvent("cms-data-changed", { detail: { section } }));
  }
}

export const cmsBus = new CmsEventBus();

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
    localStorage.setItem(CMS_STORAGE_KEYS.TESTIMONIALS, JSON.stringify(INITIAL_SCHOOL_TESTIMONIALS));
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

const saveItems = (key, items, sectionName) => {
  localStorage.setItem(key, JSON.stringify(items));
  cmsBus.notifyChange(sectionName);
};

export const cmsService = {
  // --- FACULTY DIRECTORY (STRICT DIVISION ISOLATION) ---
  getFaculty: (division = "school") => {
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, [...INITIAL_COLLEGE_FACULTY, ...INITIAL_SCHOOL_FACULTY_SEED]);
    if (!division || division === "all") return list;
    return list.filter((m) => (m.division || "school") === division);
  },
  saveFacultyMember: (member, targetDivision = "school") => {
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, [...INITIAL_COLLEGE_FACULTY, ...INITIAL_SCHOOL_FACULTY_SEED]);
    const divisionToSave = member.division || targetDivision || "school";
    let updated;
    if (member.id && list.some((m) => String(m.id) === String(member.id))) {
      updated = list.map((m) => (String(m.id) === String(member.id) ? { ...m, ...member, division: divisionToSave } : m));
    } else {
      updated = [...list, { ...member, id: member.id || `fac-${Date.now()}`, division: divisionToSave }];
    }
    saveItems(CMS_STORAGE_KEYS.FACULTY, updated, "faculty");
    return updated;
  },
  deleteFacultyMember: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.FACULTY, []);
    const updated = list.filter((m) => m.id !== id);
    saveItems(CMS_STORAGE_KEYS.FACULTY, updated, "faculty");
    return updated;
  },

  // --- ACADEMIC PROGRAMS (STRICT DIVISION ISOLATION) ---
  getPrograms: (division = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, [...INITIAL_COLLEGE_PROGRAMS, ...INITIAL_SCHOOL_PROGRAMS]);
    if (!division || division === "all") return list;
    return list.filter((p) => (p.division || "college") === division);
  },
  saveProgram: (program, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
    const divisionToSave = program.division || targetDivision || "college";
    let updated;
    if (program.id) {
      updated = list.map((p) => (p.id === program.id ? { ...p, ...program, division: divisionToSave } : p));
    } else {
      updated = [...list, { ...program, id: `prog-${Date.now()}`, division: divisionToSave }];
    }
    saveItems(CMS_STORAGE_KEYS.PROGRAMS, updated, "programs");
    return updated;
  },
  deleteProgram: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.PROGRAMS, []);
    const updated = list.filter((p) => p.id !== id);
    saveItems(CMS_STORAGE_KEYS.PROGRAMS, updated, "programs");
    return updated;
  },

  // --- SCHOLARSHIPS (STRICT DIVISION ISOLATION) ---
  getScholarships: (division = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
    if (!division || division === "all") return list;
    return list.filter((s) => (s.division || "college") === division || s.division === "all");
  },
  saveScholarship: (scholarship, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, INITIAL_SCHOLARSHIPS);
    const divisionToSave = scholarship.division || targetDivision || "college";
    let updated;
    if (scholarship.id) {
      updated = list.map((s) => (s.id === scholarship.id ? { ...s, ...scholarship, division: divisionToSave } : s));
    } else {
      updated = [...list, { ...scholarship, id: `sch-${Date.now()}`, division: divisionToSave }];
    }
    saveItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, updated, "scholarships");
    return updated;
  },
  deleteScholarship: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, []);
    const updated = list.filter((s) => s.id !== id);
    saveItems(CMS_STORAGE_KEYS.SCHOLARSHIPS, updated, "scholarships");
    return updated;
  },

  // --- NOTICES (STRICT DIVISION ISOLATION) ---
  getNotices: (division = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, INITIAL_NOTICES);
    if (division && division !== "all") {
      return list.filter((n) => n.division === division || n.division === "all");
    }
    return list;
  },
  saveNotice: (notice, targetDivision = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, INITIAL_NOTICES);
    const divisionToSave = notice.division || targetDivision || "all";
    let updated;
    if (notice.id) {
      updated = list.map((n) => (n.id === notice.id ? { ...n, ...notice, division: divisionToSave } : n));
    } else {
      updated = [{ ...notice, id: `not-${Date.now()}`, division: divisionToSave }, ...list];
    }
    saveItems(CMS_STORAGE_KEYS.NOTICES, updated, "notices");
    return updated;
  },
  deleteNotice: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.NOTICES, INITIAL_NOTICES);
    const updated = list.filter((n) => n.id !== id);
    saveItems(CMS_STORAGE_KEYS.NOTICES, updated, "notices");
    return updated;
  },

  // --- TICKERS (STRICT DIVISION ISOLATION) ---
  getTickers: (division = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, INITIAL_TICKERS);
    if (division && division !== "all") {
      return list.filter((t) => t.division === division || t.division === "all");
    }
    return list;
  },
  saveTicker: (ticker, targetDivision = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, INITIAL_TICKERS);
    const divisionToSave = ticker.division || targetDivision || "all";
    let updated;
    if (ticker.id) {
      updated = list.map((t) => (t.id === ticker.id ? { ...t, ...ticker, division: divisionToSave } : t));
    } else {
      updated = [...list, { ...ticker, id: `tick-${Date.now()}`, division: divisionToSave }];
    }
    saveItems(CMS_STORAGE_KEYS.TICKERS, updated, "tickers");
    return updated;
  },
  deleteTicker: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.TICKERS, INITIAL_TICKERS);
    const updated = list.filter((t) => t.id !== id);
    saveItems(CMS_STORAGE_KEYS.TICKERS, updated, "tickers");
    return updated;
  },

  // --- BLOG POSTS ---
  getBlogPosts: () => getItems(CMS_STORAGE_KEYS.BLOGS, INITIAL_BLOG_POSTS),
  getBlogPostById: (id) => {
    const posts = cmsService.getBlogPosts();
    return posts.find((p) => String(p.id) === String(id)) || null;
  },
  saveBlogPost: (post) => {
    const list = getItems(CMS_STORAGE_KEYS.BLOGS, INITIAL_BLOG_POSTS);
    let updated;
    if (post.id) {
      updated = list.map((p) => (String(p.id) === String(post.id) ? { ...p, ...post } : p));
    } else {
      updated = [{ ...post, id: Date.now() }, ...list];
    }
    saveItems(CMS_STORAGE_KEYS.BLOGS, updated, "blogs");
    return updated;
  },
  deleteBlogPost: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.BLOGS, INITIAL_BLOG_POSTS);
    const updated = list.filter((p) => String(p.id) !== String(id));
    saveItems(CMS_STORAGE_KEYS.BLOGS, updated, "blogs");
    return updated;
  },

  // --- FACILITIES & CLUBS ---
  getFacilities: () => getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES),
  saveFacility: (facility) => {
    const list = getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES);
    let updated;
    if (facility.id) {
      updated = list.map((f) => (f.id === facility.id ? { ...f, ...facility } : f));
    } else {
      updated = [...list, { ...facility, id: `facil-${Date.now()}` }];
    }
    saveItems(CMS_STORAGE_KEYS.FACILITIES, updated, "facilities");
    return updated;
  },
  deleteFacility: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.FACILITIES, INITIAL_SCHOOL_FACILITIES);
    const updated = list.filter((f) => f.id !== id);
    saveItems(CMS_STORAGE_KEYS.FACILITIES, updated, "facilities");
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
    saveItems(CMS_STORAGE_KEYS.CLUBS, updated, "clubs");
    return updated;
  },
  deleteClub: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.CLUBS, INITIAL_SCHOOL_CLUBS);
    const updated = list.filter((c) => c.id !== id);
    saveItems(CMS_STORAGE_KEYS.CLUBS, updated, "clubs");
    return updated;
  },

  // --- TESTIMONIALS ---
  getTestimonials: () => getItems(CMS_STORAGE_KEYS.TESTIMONIALS, INITIAL_SCHOOL_TESTIMONIALS),
  saveTestimonial: (item) => {
    const list = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, INITIAL_SCHOOL_TESTIMONIALS);
    let updated;
    if (item.id) {
      updated = list.map((t) => (t.id === item.id ? { ...t, ...item } : t));
    } else {
      updated = [...list, { ...item, id: `tst-${Date.now()}` }];
    }
    saveItems(CMS_STORAGE_KEYS.TESTIMONIALS, updated, "testimonials");
    return updated;
  },
  deleteTestimonial: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.TESTIMONIALS, INITIAL_SCHOOL_TESTIMONIALS);
    const updated = list.filter((t) => t.id !== id);
    saveItems(CMS_STORAGE_KEYS.TESTIMONIALS, updated, "testimonials");
    return updated;
  },

  // --- SITE SETTINGS ---
  getSiteSettings: () => getItems(CMS_STORAGE_KEYS.SETTINGS, INITIAL_SITE_SETTINGS),
  saveSiteSettings: (settings) => {
    const current = cmsService.getSiteSettings();
    const updated = { ...current, ...settings };
    saveItems(CMS_STORAGE_KEYS.SETTINGS, updated, "settings");
    return updated;
  },

  // --- GALLERY ALBUMS (DIVISION ISOLATED) ---
  getGalleryAlbums: (division = "all") => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, INITIAL_GALLERY_ALBUMS);
    if (!division || division === "all") return list;
    return list.filter((a) => (a.division || "college") === division);
  },
  saveGalleryAlbum: (album, targetDivision = "college") => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, INITIAL_GALLERY_ALBUMS);
    const divisionToSave = album.division || targetDivision;
    let updated;
    if (album.id && list.some((a) => String(a.id) === String(album.id))) {
      updated = list.map((a) => (String(a.id) === String(album.id) ? { ...a, ...album, division: divisionToSave } : a));
    } else {
      updated = [...list, { ...album, id: `alb-${Date.now()}`, photos: album.photos || [], division: divisionToSave }];
    }
    saveItems(CMS_STORAGE_KEYS.GALLERY, updated, "gallery");
    return updated;
  },
  addPhotoToAlbum: (albumId, photoUrl) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, INITIAL_GALLERY_ALBUMS);
    const updated = list.map((a) =>
      String(a.id) === String(albumId)
        ? { ...a, photos: [...(a.photos || []), { url: photoUrl, id: `ph-${Date.now()}` }] }
        : a
    );
    saveItems(CMS_STORAGE_KEYS.GALLERY, updated, "gallery");
    return updated;
  },
  removePhotoFromAlbum: (albumId, photoId) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, INITIAL_GALLERY_ALBUMS);
    const updated = list.map((a) =>
      String(a.id) === String(albumId)
        ? { ...a, photos: (a.photos || []).filter((p) => String(p.id) !== String(photoId)) }
        : a
    );
    saveItems(CMS_STORAGE_KEYS.GALLERY, updated, "gallery");
    return updated;
  },
  deleteGalleryAlbum: (id) => {
    const list = getItems(CMS_STORAGE_KEYS.GALLERY, INITIAL_GALLERY_ALBUMS);
    const updated = list.filter((a) => String(a.id) !== String(id));
    saveItems(CMS_STORAGE_KEYS.GALLERY, updated, "gallery");
    return updated;
  },

  // --- RESET ALL DATA ---
  resetAllCmsData: () => {
    localStorage.setItem(CMS_STORAGE_KEYS.NOTICES, JSON.stringify(INITIAL_NOTICES));
    localStorage.setItem(CMS_STORAGE_KEYS.TICKERS, JSON.stringify(INITIAL_TICKERS));
    localStorage.setItem(CMS_STORAGE_KEYS.BLOGS, JSON.stringify(INITIAL_BLOG_POSTS));
    localStorage.setItem(CMS_STORAGE_KEYS.PROGRAMS, JSON.stringify([...INITIAL_COLLEGE_PROGRAMS, ...INITIAL_SCHOOL_PROGRAMS]));
    localStorage.setItem(CMS_STORAGE_KEYS.SCHOLARSHIPS, JSON.stringify(INITIAL_SCHOLARSHIPS));
    localStorage.setItem(CMS_STORAGE_KEYS.FACILITIES, JSON.stringify(INITIAL_SCHOOL_FACILITIES));
    localStorage.setItem(CMS_STORAGE_KEYS.CLUBS, JSON.stringify(INITIAL_SCHOOL_CLUBS));
    localStorage.setItem(CMS_STORAGE_KEYS.FACULTY, JSON.stringify([...INITIAL_COLLEGE_FACULTY, ...INITIAL_SCHOOL_FACULTY_SEED]));
    localStorage.setItem(CMS_STORAGE_KEYS.TESTIMONIALS, JSON.stringify(INITIAL_SCHOOL_TESTIMONIALS));
    localStorage.setItem(CMS_STORAGE_KEYS.SETTINGS, JSON.stringify(INITIAL_SITE_SETTINGS));
    localStorage.setItem(CMS_STORAGE_KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY_ALBUMS));
    cmsBus.notifyChange("all");
  },
};
