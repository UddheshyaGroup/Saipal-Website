import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const location = useLocation();

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
        className={`bg-accent text-white text-[11px] sm:text-sm transition-all duration-300 ${showTopBar ? "h-8 sm:h-10 opacity-100" : "h-0 opacity-0 overflow-hidden"
          }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between gap-2">

          {/* Left */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a href="mailto:mail@saipal.edu.np" className="flex items-center gap-1 hover:underline truncate">
              <Mail size={12} className="shrink-0" />
              <span className="truncate">mail@saipal.edu.np</span>
            </a>

            <a href="tel:+977014378154" className="flex items-center gap-1 hover:underline truncate">
              <Phone size={12} className="shrink-0" />
              <span className="truncate">+977-01-4378154</span>
            </a>
          </div>

          <div className="flex items-center gap-1 min-w-0">
            <MapPin size={12} className="shrink-0" />

            <span className="truncate hidden sm:block">
              Dhumbarahi, Kathmandu, Nepal
            </span>

            <span className="truncate sm:hidden">
              Dhumbarahi, Ktm
            </span>
          </div>

        </div>
      </div>


      {/* 🔹 MAIN NAVBAR */}
      <header className="sticky top-0 z-[100] bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-primary">
            Saipal Academy
          </NavLink>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Apply Now */}
            <NavLink
              to="/admissions"
              className="bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 hidden md:block mr-3"
            >
              Apply Now
            </NavLink>

            {/* Desktop Hamburger */}
            <button
              className={`hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors ${desktopMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"}`}
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 🔹 DESKTOP DRAWER & OVERLAY */}
        <AnimatePresence>
          {desktopMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDesktopMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-[4px] z-[60]"
              />

              {/* Side Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[350px] bg-white shadow-2xl z-[70] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <span className="text-xl font-bold text-primary">Menu</span>
                  <button
                    onClick={() => setDesktopMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-grow overflow-y-auto px-6 py-8">
                  <nav className="flex flex-col gap-1">
                    <DrawerLink to="/" label="Home" onClick={() => setDesktopMenuOpen(false)} active={location.pathname === "/"} />
                    <DrawerLink to="/about" label="About Us" onClick={() => setDesktopMenuOpen(false)} active={location.pathname === "/about"} />

                    {/* Programs Section */}
                    <div className="py-2">
                      <button
                        onClick={() => setProgramsOpen(!programsOpen)}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200 group ${location.pathname.includes("/programs")
                          ? "bg-primary/5 text-primary font-bold"
                          : "hover:bg-gray-50 text-gray-700 font-medium"
                          }`}
                      >
                        <span className="text-lg">Programs</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${programsOpen ? "rotate-180" : ""}`}
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
                                { name: "School Level", hash: "school" }
                              ].map((prog, idx) => (
                                <NavLink
                                  key={idx}
                                  to={`/programs#${prog.hash}`}
                                  onClick={() => setDesktopMenuOpen(false)}
                                  className="py-2 text-sm text-gray-500 hover:text-primary transition-colors"
                                >
                                  {prog.name}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {[
                      { to: "/gallery", label: "Gallery" },
                      { to: "/blog", label: "Insights & Blog" },
                      { to: "/faculty", label: "Our Faculty" },
                      { to: "/contact", label: "Contact Us" }
                    ].map((item) => (
                      <DrawerLink
                        key={item.to}
                        to={item.to}
                        label={item.label}
                        onClick={() => setDesktopMenuOpen(false)}
                        active={location.pathname === item.to}
                      />
                    ))}
                  </nav>

                  {/* Quick Contact & Socials */}
                  <div className="mt-12 pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Connect With Us</h4>
                    <div className="space-y-4 mb-8">
                      <a href="tel:+977014378154" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Phone size={18} className="text-accent" />
                        </div>
                        <span className="text-sm font-semibold tracking-wide">+977-01-4378154</span>
                      </a>
                      <a href="mailto:mail@saipal.edu.np" className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group">
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <Mail size={18} className="text-accent" />
                        </div>
                        <span className="text-sm font-semibold tracking-wide">mail@saipal.edu.np</span>
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      {[
                        { icon: Facebook, url: "https://facebook.com/saipalacademy" },
                        { icon: Instagram, url: "https://instagram.com/saipalacademy" },
                        { icon: Twitter, url: "https://twitter.com/saipalacademy" },
                        { icon: Linkedin, url: "https://linkedin.com/company/saipalacademy" },
                        { icon: Youtube, url: "https://youtube.com/saipalacademy" }
                      ].map((social, i) => (
                        <a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          <social.icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer / Apply Button */}
                <div className="p-6 bg-gray-50/50">
                  <NavLink
                    to="/admissions"
                    onClick={() => setDesktopMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-lg shadow-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Apply Now for 2024
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
              className="md:hidden bg-white border-t overflow-hidden shadow-inner"
            >
              <nav className="flex flex-col px-6 py-6 gap-2">
                {["Home", "About Us", "Programs", "Gallery", "Blog", "Faculty", "Contact Us"].map((item) => {
                  const to = item === "Home" ? "/" : `/${item.toLowerCase().replace(/ us/g, "").replace(/\s+/g, "")}`;
                  return (
                    <NavLink
                      key={item}
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => `px-4 py-3 rounded-xl transition-all ${isActive ? "bg-primary/5 text-primary font-bold shadow-sm" : "text-gray-600 hover:bg-gray-50 font-medium"}`}
                    >
                      {item}
                    </NavLink>
                  );
                })}

                <div className="pt-4">
                  <NavLink
                    to="/admissions"
                    className="flex items-center justify-center w-full bg-accent text-white py-4 rounded-2xl font-bold shadow-lg shadow-accent/20"
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

// 🔹 HELPER COMPONENT FOR DRAWER LINKS
function DrawerLink({ to, label, onClick, active }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={`px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-200 group ${active
        ? "bg-primary/5 text-primary font-bold shadow-sm"
        : "hover:bg-gray-50 text-gray-700 font-medium"
        }`}
    >
      <span className="text-lg">{label}</span>
      <div className={`w-1.5 h-1.5 rounded-full bg-primary transition-all duration-300 ${active ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-30"}`} />
    </NavLink>
  );
}
