import { BLOG_POSTS as INITIAL_BLOG_POSTS_RAW } from "./blogData";
export const INITIAL_BLOG_POSTS = INITIAL_BLOG_POSTS_RAW.map((p) => ({
  ...p,
  division: String(p.id) === "1" ? "college" : "school",
}));
import {
  SCHOOL_LEVELS as INITIAL_SCHOOL_LEVELS,
  SCHOOL_NOTICES as INITIAL_SCHOOL_NOTICES,
  SCHOOL_FACILITIES as INITIAL_SCHOOL_FACILITIES,
  SCHOOL_STATS as INITIAL_SCHOOL_STATS,
  SCHOOL_CLUBS as INITIAL_SCHOOL_CLUBS,
  SCHOOL_FACULTY as INITIAL_SCHOOL_FACULTY,
  SCHOOL_TESTIMONIALS as INITIAL_SCHOOL_TESTIMONIALS,
} from "./schoolData";

// --- SEED TICKERS ---
export const INITIAL_TICKERS = [
  { id: "tick-sch-1", text: "Admissions Open for School Year 2026-2027 (Pre-Primary to Grade 9)", isActive: true, division: "school" },
  { id: "tick-sch-2", text: "Annual Inter-House Science & STEAM Robotics Fair scheduled for Feb 28", isActive: true, division: "school" },
  { id: "tick-col-1", text: "Admissions Open for Cambridge A-Levels & NEB +2 Science/Management", isActive: true, division: "college" },
  { id: "tick-col-2", text: "NEB Board Exam Routine Published • College Sports Day (Feb 18–20)", isActive: true, division: "college" },
];

// --- SEED NOTICES ---
export const INITIAL_NOTICES = [
  {
    id: "not-sch-1",
    title: "Admissions Open for School Year 2026-2027 (Pre-Primary to Grade 9)",
    date: "Feb 22, 2026",
    tag: "Admissions",
    color: "bg-[#00AEEF]",
    division: "school",
    content: "Official admissions are now open for Pre-Primary through Grade 9. Parents are invited to schedule campus visits.",
    status: "published",
  },
  {
    id: "not-sch-2",
    title: "Parent-Teacher Meeting & Term Evaluation Result Publication",
    date: "Feb 18, 2026",
    tag: "Academic",
    color: "bg-[#2E3192]",
    division: "school",
    content: "Term evaluation reports will be distributed during the mandatory PTM session.",
    status: "published",
  },
  {
    id: "not-sch-3",
    title: "Annual Inter-House Science & Robotics Exhibition",
    date: "Feb 12, 2026",
    tag: "Event",
    color: "bg-emerald-600",
    division: "school",
    content: "Students will showcase projects in robotics, environmental science, and STEAM applications.",
    status: "published",
  },
  {
    id: "not-col-1",
    title: "College Sports Day Announcement (Feb 18–20, 2026)",
    date: "Feb 17, 2026",
    tag: "Event",
    color: "bg-emerald-600",
    division: "college",
    content: "Inter-house sports competitions including Basketball, Futsal, Athletics, and Table Tennis.",
    status: "published",
  },
  {
    id: "not-col-2",
    title: "NEB +2 Board Examination Routine Published",
    date: "Feb 17, 2026",
    tag: "Exam",
    color: "bg-[#2E3192]",
    division: "college",
    content: "Official routine released for Grade 11 & 12 board examinations.",
    status: "published",
  },
  {
    id: "not-col-3",
    title: "Holiday Notice: Fagu Purnima Celebration",
    date: "Feb 24, 2026",
    tag: "Holiday",
    color: "bg-slate-600",
    division: "college",
    content: "College will remain closed on the occasion of Fagu Purnima.",
    status: "published",
  },
];

// --- SEED COLLEGE FACULTY (Migrated from hardcoded Faculty.jsx) ---
export const INITIAL_COLLEGE_FACULTY = [
  { id: "col-fac-1", name: "Mr. Sri Hari Timalsina", role: "Biology Lecturer", qualification: "M.Sc. Zoology", experience: "12+ Years", division: "college", department: "A-Levels & +2 Science", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-2", name: "Mr. Sangat Thapa", role: "Accounting Lecturer", qualification: "M.B.S / M.Com", experience: "10+ Years", division: "college", department: "Management", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-3", name: "Mr. Balkrishna Poudel", role: "General Paper Lecturer", qualification: "M.A. English", experience: "15+ Years", division: "college", department: "A-Levels", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-4", name: "Mr. Jay Prakash Mishra", role: "Physics Lecturer", qualification: "M.Sc. Physics", experience: "14+ Years", division: "college", department: "Science", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-5", name: "Mr. Ruman Thapa", role: "Computer Lecturer", qualification: "M.Sc. CSIT", experience: "8+ Years", division: "college", department: "IT & CS", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-6", name: "Mr. Prabigya Tuladhar", role: "Business Lecturer", qualification: "M.B.A", experience: "11+ Years", division: "college", department: "Management", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-7", name: "Mr. Arjun Thapa Magar", role: "English Lecturer", qualification: "M.A. English", experience: "13+ Years", division: "college", department: "+2 Humanities", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600" },
  { id: "col-fac-8", name: "Ms. Bhagwati Neupane", role: "Nepali Lecturer", qualification: "M.A. Nepali", experience: "16+ Years", division: "college", department: "+2 Level", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
];

// --- SEED SCHOOL FACULTY ---
export const INITIAL_SCHOOL_FACULTY_SEED = INITIAL_SCHOOL_FACULTY.map((f, i) => ({
  ...f,
  id: `sch-fac-${i + 1}`,
  division: "school",
}));

// --- SEED COLLEGE PROGRAMS ---
export const INITIAL_COLLEGE_PROGRAMS = [
  {
    id: "prog-col-1",
    title: "Cambridge A-Levels",
    code: "alevels",
    badge: "GLOBAL STANDARD",
    badgeColor: "text-[#00AEEF]",
    borderColor: "hover:border-[#00AEEF]/60",
    image: "/CambridgeLogo.png",
    description: "Globally recognized CAIE curriculum preparing students for premier world universities.",
    details: "Science & Non-Science streams, General Paper, Further Maths, Physics, Chemistry, Biology & Economics.",
    division: "college",
  },
  {
    id: "prog-col-2",
    title: "NEB +2 Science Stream",
    code: "neb-science",
    badge: "NATIONAL BOARD",
    badgeColor: "text-emerald-400",
    borderColor: "hover:border-emerald-400/60",
    image: "/+2lelvels.jpeg",
    description: "National Education Board Physics, Chemistry, Biology & Mathematics curriculum.",
    details: "Pre-medical & engineering entrance preparation with modern high-tech science laboratories.",
    division: "college",
  },
  {
    id: "prog-col-3",
    title: "NEB +2 Management & Humanities",
    code: "neb-mgmt",
    badge: "NATIONAL BOARD",
    badgeColor: "text-amber-400",
    borderColor: "hover:border-amber-400/60",
    image: "/+2lelvels.jpeg",
    description: "Focus on Business Studies, Accounting, Economics, Hotel Management & Computer Science.",
    details: "Practical internship exposure, entrepreneurship incubator, and career counseling.",
    division: "college",
  },
];

// --- SEED SCHOOL PROGRAMS ---
export const INITIAL_SCHOOL_PROGRAMS = [
  {
    id: "prog-sch-1",
    title: "Pre-Primary & Foundation (K1 - K3)",
    code: "k1-k3",
    badge: "EARLY YEARS",
    badgeColor: "text-[#00AEEF]",
    borderColor: "hover:border-[#00AEEF]/60",
    image: "/saipal_first.webp",
    description: "Montessori-inspired, play-driven foundation fostering early language, creative play, and social growth.",
    details: "Phonics, sensory play area, creative arts, and nurturing child-safe environment.",
    division: "school",
  },
  {
    id: "prog-sch-2",
    title: "Primary Level (Grades 1 - 5)",
    code: "g1-g5",
    badge: "PRIMARY LEVEL",
    badgeColor: "text-emerald-400",
    borderColor: "hover:border-emerald-400/60",
    image: "/saipal_second.webp",
    description: "Strong fundamentals in Math, Science, English, and Value Education with STEAM projects.",
    details: "Bilingual instruction, smart interactive boards, and junior sports clubs.",
    division: "school",
  },
  {
    id: "prog-sch-3",
    title: "Secondary SEE Level (Grades 6 - 10)",
    code: "g6-g10",
    badge: "SEE BOARD",
    badgeColor: "text-amber-400",
    borderColor: "hover:border-amber-400/60",
    image: "/school-level.jpeg",
    description: "Comprehensive preparation for National SEE Examinations combined with coding & debate clubs.",
    details: "Rigorous academic mentorship, science labs, computer science, and leadership development.",
    division: "school",
  },
];

// --- SEED SCHOLARSHIPS ---
export const INITIAL_SCHOLARSHIPS = [
  {
    id: "sch-col-1",
    title: "SEE Board Top Merit Scholarship",
    coverage: "100% Tuition Waiver",
    eligibility: "GPA 3.8 to 4.0 in SEE board examinations",
    division: "college",
    category: "Academic Merit",
  },
  {
    id: "sch-col-2",
    title: "Saipal Entrance Rankers Award",
    coverage: "50% - 100% Scholarship",
    eligibility: "Top 5 rankers in Saipal Entrance Examination",
    division: "college",
    category: "Entrance Award",
  },
  {
    id: "sch-sch-1",
    title: "Junior Academic Excellence Award",
    coverage: "Full Term Fee Waiver",
    eligibility: "Class toppers in Grade 5 to Grade 9 annual evaluations",
    division: "school",
    category: "School Merit",
  },
  {
    id: "sch-sch-2",
    title: "Sports & Creative Talent Discount",
    coverage: "30% - 50% Tuition Discount",
    eligibility: "District/National level awards in Taekwondo, Football, or STEAM",
    division: "school",
    category: "Talent Waiver",
  },
];

export const INITIAL_SITE_SETTINGS = {
  schoolName: "Saipal Academy",
  tagline: "Empowering Future Leaders with World-Class Education",
  address: "Dhumbarahi, Kathmandu, Nepal",
  phonePrimary: "+977-01-4378154",
  phoneSecondary: "+977-01-4009054",
  email: "mail@saipal.edu.np",
  schoolHours: "9:00 AM – 3:45 PM (Sun - Fri)",
  collegeManagementHours: "6:00 AM – 11:00 AM (Management)",
  collegeScienceHours: "11:00 AM – 5:00 PM (Science & A-Levels)",
  principalName: "Mr. Ganesh Joshi",
  principalTitle: "School Principal",
  facebookUrl: "https://facebook.com/saipalacademy",
  instagramUrl: "https://instagram.com/saipalacademy",
  youtubeUrl: "https://youtube.com/@saipalacademy2002",
};

export {
  INITIAL_SCHOOL_LEVELS,
  INITIAL_SCHOOL_FACILITIES,
  INITIAL_SCHOOL_STATS,
  INITIAL_SCHOOL_CLUBS,
};

// --- SEED TESTIMONIALS ---
export const INITIAL_COLLEGE_TESTIMONIALS = [
  {
    id: "col-tst-1",
    name: "Subodh Thapa",
    relation: "NEB Science Alumnus (Batch 2024)",
    text: "Studying at Saipal College paved the way for my engineering dreams. The highly experienced faculty and the well-equipped labs helped me secure a high score in NEB Board exams.",
    rating: 5,
    division: "college"
  },
  {
    id: "col-tst-2",
    name: "Kshitiz Shrestha",
    relation: "Cambridge A-Levels Alumnus",
    text: "The global perspective and rigorous academic mentoring I received at Saipal helped me secure admission into a premier university abroad with a scholarship.",
    rating: 5,
    division: "college"
  },
  {
    id: "col-tst-3",
    name: "Alisha Karki",
    relation: "Management Graduate (Batch 2025)",
    text: "Saipal College doesn't just focus on theory. The internships, hotel management practicals, and practical case-studies prepared us for real-world business challenges.",
    rating: 5,
    division: "college"
  }
];

export const INITIAL_SCHOOL_TESTIMONIALS_SEED = INITIAL_SCHOOL_TESTIMONIALS.map((t, i) => ({
  ...t,
  id: `sch-tst-${i + 1}`,
  division: "school"
}));


// --- SEED GALLERY ALBUMS ---
export const INITIAL_GALLERY_ALBUMS = [
  {
    id: "alb-school-1",
    division: "school",
    title: "Annual Sports Day",
    cover: "/SportsDay/SportsImage1.jpeg",
    photos: [
      { id: "ph-s1-1", url: "/SportsDay/SportsImage1.jpeg" },
      { id: "ph-s1-2", url: "/SportsDay/SportsImage2.jpeg" },
      { id: "ph-s1-3", url: "/SportsDay/SportsImage3.jpeg" },
      { id: "ph-s1-4", url: "/SportsDay/SportsImage4.jpeg" },
      { id: "ph-s1-5", url: "/SportsDay/SportsImage5.jpeg" },
      { id: "ph-s1-6", url: "/SportsDay/SportsImage6.jpeg" },
      { id: "ph-s1-7", url: "/SportsDay/SportsImage7.jpeg" },
      { id: "ph-s1-8", url: "/SportsDay/SportsImage8.jpeg" },
      { id: "ph-s1-9", url: "/SportsDay/SportsImage9.jpeg" },
      { id: "ph-s1-10", url: "/SportsDay/SportsImage10.jpeg" },
      { id: "ph-s1-11", url: "/SportsDay/SportsImage11.jpeg" },
      { id: "ph-s1-12", url: "/SportsDay/SportsImage12.jpeg" },
      { id: "ph-s1-13", url: "/SportsDay/SportsImage13.jpeg" },
      { id: "ph-s1-14", url: "/SportsDay/SportsImage14.jpeg" },
    ],
  },
  {
    id: "alb-college-1",
    division: "college",
    title: "Hotel Management Practical",
    cover: "/HM_Practical/HmImage4.jpeg",
    photos: [
      { id: "ph-c1-1", url: "/HM_Practical/HmImage4.jpeg" },
      { id: "ph-c1-2", url: "/HM_Practical/HmImage2.jpg" },
      { id: "ph-c1-3", url: "/HM_Practical/HmImage3.jpeg" },
      { id: "ph-c1-4", url: "/HM_Practical/HmImage1.jpg" },
      { id: "ph-c1-5", url: "/HM_Practical/HmImage5.jpeg" },
    ],
  },
];

