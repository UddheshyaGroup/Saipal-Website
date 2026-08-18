import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authService } from "../../services/authService";
import {
  LayoutDashboard,
  Bell,
  FileText,
  Newspaper,
  Users,
  GraduationCap,
  Award,
  Building2,
  Quote,
  HelpCircle,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
  Menu,
  X,
  School,
  ArrowLeft,
  Images,
} from "lucide-react";

import PortalSelector from "./PortalSelector";
import DashboardOverview from "./modules/DashboardOverview";
import NoticesManager from "./modules/NoticesManager";
import BlogManager from "./modules/BlogManager";
import NewsManager from "./modules/NewsManager";
import FacultyManager from "./modules/FacultyManager";
import ProgramsManager from "./modules/ProgramsManager";
import ScholarshipsManager, {
  FacilitiesManager,
  TestimonialsManager,
  SiteSettingsManager,
} from "./modules/ScholarshipsManager";
import AdminFaqManager from "./AdminFaqManager";
import GalleryManager from "./modules/GalleryManager";

const pathToModuleMap = {
  dashboard: "overview",
  notices: "notices",
  blogs: "blogs",
  news: "news",
  faculty: "faculty",
  programs: "programs",
  scholarships: "scholarships",
  gallery: "gallery",
  testimonials: "testimonials",
  chatbot: "chatbot",
};

const moduleToPathMap = {
  overview: "dashboard",
  notices: "notices",
  blogs: "blogs",
  news: "news",
  faculty: "faculty",
  programs: "programs",
  scholarships: "scholarships",
  gallery: "gallery",
  testimonials: "testimonials",
  chatbot: "chatbot",
};

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter(Boolean);
  const selectedDivision = (pathParts[1] === "school" || pathParts[1] === "college") ? pathParts[1] : null;
  const moduleFromPath = pathParts[2];
  const activeModule = pathToModuleMap[moduleFromPath] || "overview";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentUser = authService.getCurrentUser();

  // Enforce redirection to /admin/:division/dashboard if path is incomplete or invalid
  useEffect(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts[1] === "school" || parts[1] === "college") {
      const currentModule = parts[2];
      if (!currentModule || !pathToModuleMap[currentModule]) {
        navigate(`/admin/${parts[1]}/dashboard`, { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  // --- Dynamic browser tab title based on active module & division ---
  useEffect(() => {
    if (!selectedDivision) {
      document.title = "Select Admin Portal | Saipal CMS";
      return;
    }

    const div = selectedDivision === "school" ? "School" : "College";

    const MODULE_TITLES = {
      overview:     `${div} Admin — Dashboard`,
      notices:      `${div} Admin — Notices & Tickers`,
      blogs:        `${div} Admin — Blog Articles`,
      news:         `${div} Admin — News Articles`,
      faculty:      `${div} Admin — Faculty Directory`,
      programs:     `${div} Admin — Academic Programs`,
      scholarships: `${div} Admin — Scholarships`,
      gallery:      `${div} Admin — Gallery Manager`,
      facilities:   `${div} Admin — Facilities & Clubs`,
      testimonials: `${div} Admin — Testimonials`,
      chatbot:      `${div} Admin — AI Chatbot FAQ`,
      settings:     `${div} Admin — Site Settings`,
    };

    document.title = MODULE_TITLES[activeModule] || `${div} Admin Panel`;
  }, [activeModule, selectedDivision]);

  const handleLogout = () => {
    authService.logout();
    navigate("/admin/login");
  };

  // If no portal is selected yet, render PortalSelector landing screen
  if (!selectedDivision) {
    return (
      <PortalSelector
        onSelectPortal={(division) => {
          navigate(`/admin/${division}/dashboard`);
        }}
      />
    );
  }

  const isSchool = selectedDivision === "school";

  const navItems = [
    { id: "overview",     label: "Dashboard Overview",                              icon: LayoutDashboard },
    { id: "notices",      label: "Notices & Tickers",                               icon: Bell },
    { id: "blogs",        label: "Blog Articles",                                   icon: FileText },
    { id: "news",         label: "News Articles",                                   icon: Newspaper },
    { id: "faculty",      label: "Faculty Directory",                               icon: Users },
    { id: "programs",     label: isSchool ? "Levels (K-10)" : "Programs (+2/A-Levels)", icon: GraduationCap },
    ...(isSchool ? [{ id: "scholarships", label: "Scholarships & Aid", icon: Award }] : []),
    { id: "gallery",      label: "Gallery",                                         icon: Images },
    { id: "testimonials", label: isSchool ? "Parent Testimonials" : "Community Reviews", icon: Quote },
    { id: "chatbot",      label: "AI Chatbot FAQ",                                  icon: HelpCircle },
  ];

  return (
    <div className="h-screen bg-slate-100 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 flex flex-col md:flex-row overflow-hidden">
      {/* ── MOBILE NAVBAR ── */}
      <div className="md:hidden bg-slate-900 text-white p-4 flex items-center justify-between sticky top-0 z-50 shrink-0">
        <div className="flex items-center gap-2">
          {isSchool ? <School className="text-[#00AEEF]" size={22} /> : <GraduationCap className="text-[#2E3192]" size={22} />}
          <span className="font-extrabold text-sm tracking-wide">
            {isSchool ? "School Admin Portal" : "College Admin Portal"}
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── SIDEBAR NAVIGATION ── */}
      <aside
        className={`w-full md:w-64 bg-slate-900 text-slate-300 flex flex-col justify-between shrink-0 transition-all z-40 md:h-full ${
          mobileMenuOpen ? "flex flex-1 min-h-0" : "hidden md:flex"
        }`}
      >
        {/* Brand Logo Header */}
        <div className="p-6 border-b border-slate-800 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`p-2 rounded-xl text-white ${isSchool ? "bg-[#00AEEF]" : "bg-[#2E3192]"}`}>
                {isSchool ? <School size={18} /> : <GraduationCap size={18} />}
              </div>
              <div>
                <h2 className="font-extrabold text-white text-sm leading-tight">
                  {isSchool ? "School Admin" : "College Admin"}
                </h2>
                <p className="text-[10px] text-slate-400">Saipal CMS v2.0</p>
              </div>
            </div>
          </div>

          {/* Switch Portal Button */}
          <button
            onClick={() => navigate("/admin")}
            className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#00AEEF] text-[11px] font-bold transition cursor-pointer"
          >
            <ArrowLeft size={12} /> Switch Division Portal
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-4 flex-1 overflow-y-auto min-h-0 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  navigate(`/admin/${selectedDivision}/${moduleToPathMap[item.id]}`);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isActive
                    ? isSchool
                      ? "bg-[#00AEEF] text-white shadow-md"
                      : "bg-[#2E3192] text-white shadow-md"
                    : "hover:bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Info & Footer Actions */}
        <div className="p-4 border-t border-slate-800 space-y-3 shrink-0">
          <a
            href={isSchool ? "/school" : "/college"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition"
          >
            <span>View {isSchool ? "School" : "College"} Live</span>
            <ExternalLink size={14} />
          </a>

          <div className="flex items-center justify-between px-3 py-2 bg-slate-950/60 rounded-xl text-xs">
            <div className="truncate">
              <p className="font-bold text-white truncate">{currentUser?.name || "Admin"}</p>
              <p className="text-[10px] text-slate-400 truncate">{currentUser?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              title="Logout"
              className="p-1.5 hover:bg-rose-950 text-rose-400 rounded-lg transition cursor-pointer"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 min-w-0 h-full overflow-y-auto p-4 sm:p-8">
        {activeModule === "overview" && (
          <DashboardOverview
            onNavigate={(moduleId) => {
              navigate(`/admin/${selectedDivision}/${moduleToPathMap[moduleId] || "dashboard"}`);
            }}
            division={selectedDivision}
          />
        )}
        {activeModule === "notices" && <NoticesManager division={selectedDivision} />}
        {activeModule === "blogs" && <BlogManager division={selectedDivision} />}
        {activeModule === "news" && <NewsManager division={selectedDivision} />}
        {activeModule === "faculty" && <FacultyManager division={selectedDivision} />}
        {activeModule === "programs" && <ProgramsManager division={selectedDivision} />}
        {activeModule === "scholarships" && <ScholarshipsManager division={selectedDivision} />}
        {activeModule === "gallery" && <GalleryManager division={selectedDivision} />}
        {activeModule === "facilities" && <FacilitiesManager division={selectedDivision} />}
        {activeModule === "testimonials" && <TestimonialsManager division={selectedDivision} />}
        {activeModule === "chatbot" && <AdminFaqManager division={selectedDivision} />}
        {/* {activeModule === "settings" && <SiteSettingsManager division={selectedDivision} />} */}
      </main>
    </div>
  );
}
