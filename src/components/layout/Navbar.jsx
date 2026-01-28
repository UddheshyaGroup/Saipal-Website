import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from "lucide-react";

export default function Navbar() {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const location = useLocation();

  const activeClass =
    "border-accent text-accent font-semibold pb-2 border-b";
  const inactiveClass =
    "border-gray-200 hover:text-primary pb-2 border-b";

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
            <span className="flex items-center gap-1 truncate">
              <Mail size={12} className="shrink-0" />
              <span className="truncate">mail@saipal.edu.np</span>
            </span>

            <span className="flex items-center gap-1 truncate">
              <Phone size={12} className="shrink-0" />
              <span className="truncate">+977-01-4378154</span>
            </span>
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
      <header className="sticky top-0 z-50 bg-white border-b">
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
              className="hidden md:block"
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            >
              {desktopMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* DESKTOP DRAWER */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${desktopMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-4 border-b">
            <button onClick={() => setDesktopMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 gap-2">
            <NavLink to="/" onClick={() => setDesktopMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setDesktopMenuOpen(false)} className={({ isActive }) => isActive ? activeClass : inactiveClass}>
              About
            </NavLink>

            {/* Programs */}
            <div className="border-b border-gray-200 pb-2">
              <button
                className={`flex justify-between w-full ${location.pathname.includes("/programs")
                  ? "text-accent font-semibold"
                  : ""
                  }`}
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs <ChevronDown size={16} />
              </button>

              {programsOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 text-sm">
                  <NavLink to="/programs#alevels">Cambridge A-Levels</NavLink>
                  <NavLink to="/programs#neb">NEB +2</NavLink>
                  <NavLink to="/programs#school">School Level</NavLink>
                </div>
              )}
            </div>

            {["gallery", "blog", "faculty", "contact"].map(
              (route) => (
                <NavLink
                  key={route}
                  to={`/${route}`}
                  onClick={() => setDesktopMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  {route.charAt(0).toUpperCase() + route.slice(1)}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-6 py-4 gap-4">
              <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
              <NavLink to="/programs" onClick={() => setMobileOpen(false)}>Programs</NavLink>
              <NavLink to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</NavLink>
              <NavLink to="/blog" onClick={() => setMobileOpen(false)}>Blog</NavLink>
              <NavLink to="/faculty" onClick={() => setMobileOpen(false)}>Faculty</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</NavLink>

              <NavLink
                to="/admissions"
                className="bg-accent text-white px-4 py-2 rounded-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </NavLink>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
