import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  School,
  GraduationCap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const location = useLocation();
  const isSchoolSection = location.pathname.startsWith("/school");
  const isCollegeSection = location.pathname.startsWith("/college") || (!isSchoolSection && location.pathname !== "/");

  // Hide top bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔹 TOP INFO BAR */}
      <div
        className={`bg-[#00AEEF] text-white text-[11px] sm:text-sm transition-all duration-300 ${
          showTopBar
            ? "h-8 sm:h-10 opacity-100"
            : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between gap-2">
          {/* Left info */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a
              href="mailto:mail@saipal.edu.np"
              className="hidden sm:flex items-center gap-1 hover:underline truncate"
            >
              <Mail size={12} className="shrink-0" />
              <span className="truncate">mail@saipal.edu.np</span>
            </a>

            <a
              href="tel:+977014378154"
              className="flex items-center gap-1 hover:underline truncate"
            >
              <Phone size={12} className="shrink-0" />
              <span className="truncate">+977-01-4378154</span>
            </a>
          </div>

          {/* Right Location */}
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 min-w-0">
              <MapPin size={12} className="shrink-0" />
              <span className="truncate">Dhumbarahi, Kathmandu</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <header className="sticky top-0 z-[100] bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo Only */}
          <div className="flex items-center gap-3">
            <NavLink to={isSchoolSection ? "/school" : isCollegeSection ? "/college" : "/"} className="flex items-center">
              <img
                src="/Logo.png"
                alt="Saipal Academy Logo"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </NavLink>
          </div>

          {/* 🔹 DIVISION SWITCHER TABS (Desktop & Tablet) */}
          <div className="hidden md:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <NavLink
              to="/school"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                  isActive || isSchoolSection
                    ? "bg-white text-emerald-600 shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              <School size={14} />
              School
            </NavLink>
            <NavLink
              to="/college"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all ${
                  isActive || (isCollegeSection && location.pathname !== "/")
                    ? "bg-white text-[#2E3192] shadow-sm font-extrabold"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              <GraduationCap size={14} />
              College
            </NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <NavLink
              to={isSchoolSection ? "/school/admissions" : "/college/admissions"}
              className="bg-[#00AEEF] text-white font-bold px-4 py-2 text-xs sm:text-sm rounded-xl hover:opacity-90 transition shadow-sm hidden sm:block"
            >
              Apply Now
            </NavLink>

            {/* Desktop Hamburger */}
            <button
              className={`hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors ${
                desktopMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"
              }`}
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open Mobile Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 🔹 DESKTOP DRAWER & OVERLAY */}
        <AnimatePresence>
          {desktopMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDesktopMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-[4px] z-[60]"
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[360px] bg-white shadow-2xl z-[70] flex flex-col"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-xl font-bold text-[#2E3192]">
                    {isSchoolSection ? "Saipal School Menu" : "Saipal College Menu"}
                  </span>
                  <button
                    onClick={() => setDesktopMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={22} className="text-gray-500" />
                  </button>
                </div>

                {/* Section Toggle inside Drawer */}
                <div className="p-4 bg-slate-50 border-b border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Active Division</div>
                  <div className="grid grid-cols-2 gap-2 bg-slate-200/60 p-1 rounded-xl text-xs font-bold">
                    <Link
                      to="/school"
                      onClick={() => setDesktopMenuOpen(false)}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-center ${
                        isSchoolSection ? "bg-white text-emerald-600 shadow-sm" : "text-slate-700"
                      }`}
                    >
                      <School size={14} /> School
                    </Link>
                    <Link
                      to="/college"
                      onClick={() => setDesktopMenuOpen(false)}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-center ${
                        isCollegeSection && location.pathname !== "/" ? "bg-white text-[#2E3192] shadow-sm" : "text-slate-700"
                      }`}
                    >
                      <GraduationCap size={14} /> College
                    </Link>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-grow overflow-y-auto px-6 py-6">
                  <nav className="flex flex-col gap-1">
                    {isSchoolSection ? (
                      <>
                        <DrawerLink
                          to="/school"
                          label="School Home"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school"}
                        />
                        <DrawerLink
                          to="/school/about"
                          label="About Saipal School"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/about"}
                        />
                        <DrawerLink
                          to="/school/programs"
                          label="Academics & Grades (K-10)"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/programs"}
                        />
                        <DrawerLink
                          to="/school/admissions"
                          label="School Admissions"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/admissions"}
                        />
                        <DrawerLink
                          to="/school/faculty"
                          label="School Faculty & Mentors"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/faculty"}
                        />
                        <DrawerLink
                          to="/school/activities"
                          label="Clubs & Activities"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/activities"}
                        />
                        <DrawerLink
                          to="/school/scholarships"
                          label="School Scholarships"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/scholarships"}
                        />
                        <DrawerLink
                          to="/school/gallery"
                          label="School Gallery"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/gallery"}
                        />
                        <DrawerLink
                          to="/school/contact"
                          label="School Contact"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/contact"}
                        />
                        <DrawerLink
                          to="/school/enquiry"
                          label="School Inquiry Form"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/school/enquiry"}
                        />
                      </>
                    ) : (
                      <>
                        <DrawerLink
                          to="/college"
                          label="College Home"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college"}
                        />
                        <DrawerLink
                          to="/college/about"
                          label="About College"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/about" || location.pathname === "/about"}
                        />

                        {/* Programs Submenu */}
                        <div className="py-2">
                          <button
                            onClick={() => setProgramsOpen(!programsOpen)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 group ${
                              location.pathname.includes("/programs")
                                ? "bg-[#2E3192]/5 text-[#2E3192] font-bold"
                                : "hover:bg-gray-50 text-gray-700 font-medium"
                            }`}
                          >
                            <span className="text-base">College Programs</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                programsOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {programsOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-4 py-2">
                                  {[
                                    { name: "Cambridge A-Levels", hash: "alevels" },
                                    { name: "NEB +2", hash: "neb" },
                                  ].map((prog, idx) => (
                                    <NavLink
                                      key={idx}
                                      to={`/college/programs#${prog.hash}`}
                                      onClick={() => setDesktopMenuOpen(false)}
                                      className="py-2 text-sm text-gray-500 hover:text-[#2E3192] transition-colors"
                                    >
                                      {prog.name}
                                    </NavLink>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <DrawerLink
                          to="/college/scholarships"
                          label="College Scholarships"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/scholarships" || location.pathname === "/scholarships"}
                        />
                        <DrawerLink
                          to="/college/faculty"
                          label="College Faculty & Staff"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/faculty" || location.pathname === "/faculty"}
                        />
                        <DrawerLink
                          to="/college/gallery"
                          label="College Gallery"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/gallery" || location.pathname === "/gallery"}
                        />
                        <DrawerLink
                          to="/college/contact"
                          label="College Contact"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/contact" || location.pathname === "/contact"}
                        />
                        <DrawerLink
                          to="/college/enquiry"
                          label="College Inquiry Form"
                          onClick={() => setDesktopMenuOpen(false)}
                          active={location.pathname === "/college/enquiry" || location.pathname === "/enquiry"}
                        />
                      </>
                    )}

                    <DrawerLink
                      to="/academicgame"
                      label="Academic Game"
                      onClick={() => setDesktopMenuOpen(false)}
                      active={location.pathname === "/academicgame"}
                    />
                  </nav>

                  {/* Quick Contact */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Connect With Us
                    </h4>
                    <div className="space-y-3 mb-6 text-sm text-gray-600">
                      <a href="tel:+977014378154" className="flex items-center gap-3 hover:text-[#2E3192] transition">
                        <Phone size={16} className="text-[#00AEEF] shrink-0" />
                        <span>+977-01-4378154</span>
                      </a>
                      <a href="mailto:mail@saipal.edu.np" className="flex items-center gap-3 hover:text-[#2E3192] transition">
                        <Mail size={16} className="text-[#00AEEF] shrink-0" />
                        <span>mail@saipal.edu.np</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Drawer Footer CTA */}
                <div className="p-6 bg-gray-50/50">
                  <NavLink
                    to={isSchoolSection ? "/school/admissions" : "/college/admissions"}
                    onClick={() => setDesktopMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-[#00AEEF] text-white py-3.5 rounded-xl font-bold shadow-lg hover:scale-[1.01] transition"
                  >
                    Apply Now
                  </NavLink>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* 🔹 MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden shadow-inner max-h-[85vh] overflow-y-auto"
            >
              <div className="px-6 pt-4 pb-2 border-b">
                <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  <Link
                    to="/school"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-center gap-1 py-2 rounded-lg text-center ${
                      isSchoolSection ? "bg-white text-emerald-600 shadow-sm" : "text-slate-700"
                    }`}
                  >
                    <School size={14} /> School
                  </Link>
                  <Link
                    to="/college"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-center gap-1 py-2 rounded-lg text-center ${
                      isCollegeSection && location.pathname !== "/" ? "bg-[#2E3192] text-white shadow-sm" : "text-slate-700"
                    }`}
                  >
                    <GraduationCap size={14} /> College
                  </Link>
                </div>
              </div>

              <nav className="flex flex-col px-6 py-4 gap-1 text-sm">
                {isSchoolSection ? (
                  <>
                    <NavLink
                      to="/school"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      🏫 School Home
                    </NavLink>
                    <NavLink
                      to="/school/about"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      About Saipal School
                    </NavLink>
                    <NavLink
                      to="/school/programs"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      📚 Grades & Curriculum (K-10)
                    </NavLink>
                    <NavLink
                      to="/school/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      📋 School Admissions
                    </NavLink>
                    <NavLink
                      to="/school/faculty"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      👨‍🏫 School Faculty & Mentors
                    </NavLink>
                    <NavLink
                      to="/school/activities"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      🎨 Clubs & Co-Curricular
                    </NavLink>
                    <NavLink
                      to="/school/scholarships"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      🏆 School Scholarships
                    </NavLink>
                    <NavLink
                      to="/school/gallery"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      🖼️ School Gallery
                    </NavLink>
                    <NavLink
                      to="/school/contact"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      📞 School Contact
                    </NavLink>
                    <NavLink
                      to="/school/enquiry"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      📝 School Inquiry Form
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/college"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      🎓 College Home
                    </NavLink>
                    <NavLink
                      to="/college/about"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      About College
                    </NavLink>
                    <NavLink
                      to="/college/programs"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      College Programs
                    </NavLink>
                    <NavLink
                      to="/college/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      College Admissions
                    </NavLink>
                    <NavLink
                      to="/college/faculty"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      College Faculty
                    </NavLink>
                    <NavLink
                      to="/college/gallery"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      College Gallery
                    </NavLink>
                    <NavLink
                      to="/college/contact"
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-slate-700 font-semibold hover:bg-slate-50"
                    >
                      College Contact
                    </NavLink>
                  </>
                )}

                <div className="pt-3">
                  <NavLink
                    to={isSchoolSection ? "/school/admissions" : "/college/admissions"}
                    className="flex items-center justify-center w-full bg-[#00AEEF] text-white py-3 rounded-xl font-bold shadow-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply Now
                  </NavLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function DrawerLink({ to, label, onClick, active }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-200 group ${
        active
          ? "bg-[#2E3192]/5 text-[#2E3192] font-bold shadow-sm"
          : "hover:bg-gray-50 text-gray-700 font-medium"
      }`}
    >
      <span className="text-base">{label}</span>
      <div
        className={`w-1.5 h-1.5 rounded-full bg-[#2E3192] transition-all duration-300 ${
          active
            ? "opacity-100 scale-100"
            : "opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-30"
        }`}
      />
    </NavLink>
  );
}
