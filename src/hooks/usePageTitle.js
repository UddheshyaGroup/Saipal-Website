import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_TITLES = {
  // Gateway
  "/": "Saipal Academy — School & College",

  // School Division
  "/school": "School | Home",
  "/school/about": "About Saipal School",
  "/school/programs": "School Programs | K-10 Curriculum",
  "/school/admissions": "School Admissions",
  "/school/faculty": "School Faculty & Staff",
  "/school/activities": "School Activities & Clubs",
  "/school/scholarships": "School Scholarships",
  "/school/gallery": "School Gallery",
  "/school/contact": "Contact — Saipal School",
  "/school/enquiry": "School Enquiry Form",
  "/school/blog": "School Blog & News",

  // College Division
  "/college": "College | Home",
  "/college/about": "About Saipal College",
  "/college/programs": "College Programs | A-Levels & +2",
  "/college/admissions": "College Admissions",
  "/college/scholarships": "College Scholarships",
  "/college/faculty": "College Faculty & Lecturers",
  "/college/gallery": "College Gallery",
  "/college/contact": "Contact — Saipal College",
  "/college/enquiry": "College Enquiry Form",
  "/college/blog": "College Blog & News",

  // Shared
  "/about": "About Saipal Academy",
  "/programs": "Academic Programs",
  "/admissions": "Admissions",
  "/scholarships": "Scholarships",
  "/faculty": "Faculty",
  "/gallery": "Gallery",
  "/blog": "Blog & News",
  "/contact": "Contact Us",
  "/enquiry": "Enquiry Form",
  "/academicgame": "Academic Games",
  "/academicgame/quiz": "Quiz Game",
  "/academicgame/decision": "Decision Making Game",

  // Admin Panel
  "/admin/login": "CMS Admin Login",
  "/admin/dashboard": "Admin Dashboard",
  "/admin/portal": "Select Admin Portal",
  "/admin/school": "School Admin Panel",
  "/admin/school/notices": "School — Notices & Tickers",
  "/admin/school/faculty": "School — Faculty Directory",
  "/admin/school/programs": "School — Academic Programs",
  "/admin/school/scholarships": "School — Scholarships",
  "/admin/school/blog": "School — Blog Manager",
  "/admin/school/faq": "School — FAQ Manager",
  "/admin/school/settings": "School — Site Settings",
  "/admin/college": "College Admin Panel",
  "/admin/college/notices": "College — Notices & Tickers",
  "/admin/college/faculty": "College — Faculty Directory",
  "/admin/college/programs": "College — Academic Programs",
  "/admin/college/scholarships": "College — Scholarships",
  "/admin/college/blog": "College — Blog Manager",
  "/admin/college/faq": "College — FAQ Manager",
  "/admin/college/settings": "College — Site Settings",
};

const SUFFIX = " | Saipal Academy";

export function usePageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Exact match first
    if (PAGE_TITLES[pathname]) {
      document.title = PAGE_TITLES[pathname] + (pathname === "/" || pathname.startsWith("/admin") ? "" : SUFFIX);
      return;
    }

    // Prefix match for dynamic routes like /blog/:id
    const match = Object.keys(PAGE_TITLES).find(
      (key) => key !== "/" && pathname.startsWith(key)
    );

    if (match) {
      document.title = PAGE_TITLES[match] + SUFFIX;
    } else {
      document.title = "Saipal Academy";
    }
  }, [pathname]);
}
