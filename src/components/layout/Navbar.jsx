import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeClass =
    "border-accent text-accent font-semibold pb-2 border-b";
  const inactiveClass =
    "border-gray-200 hover:text-primary pb-2 border-b";

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-primary">
          Saipal Academy
        </NavLink>

        {/* Right Side (Apply Now + Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Apply Now Button */}
          <NavLink
            to="/admissions"
            className="bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 hidden md:block mr-3"
          >
            Apply Now
          </NavLink>

          {/* Desktop Hamburger Icon */}
          <button
            className="hidden md:block"
            onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
            aria-label="Toggle Menu"
          >
            {desktopMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop Side Drawer Menu (Right to Left) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${desktopMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button Inside Drawer */}
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={() => setDesktopMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Home
          </NavLink>

          {/* About Dropdown */}
          <div className="relative border-b border-gray-200 pb-2">
            <button
              className={`flex items-center justify-between w-full ${location.pathname.includes("/about") || location.pathname.includes("/gallery")
                  ? "text-accent font-semibold"
                  : "hover:text-primary"
                }`}
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <NavLink
                  to="/about/introduction"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Introduction
                </NavLink>
                <NavLink
                  to="/about/principal"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Message from Principal
                </NavLink>
                <NavLink
                  to="/about/life-at-saipal"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Life at Saipal
                </NavLink>
                <NavLink
                  to="/gallery"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="/about/events"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Events
                </NavLink>
              </div>
            )}
          </div>

          {/* Programs Dropdown */}
          <div className="relative border-b border-gray-200 pb-2">
            <button
              className={`flex items-center justify-between w-full ${location.pathname.includes("/programs")
                  ? "text-accent font-semibold"
                  : "hover:text-primary"
                }`}
              onClick={() => setProgramsOpen(!programsOpen)}
            >
              Programs <ChevronDown size={16} />
            </button>

            {programsOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                <NavLink
                  to="/programs#alevels"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  Cambridge A-Levels
                </NavLink>
                <NavLink
                  to="/programs#neb"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  NEB +2
                </NavLink>
                <NavLink
                  to="/programs#school"
                  className="hover:text-primary text-sm"
                  onClick={() => setDesktopMenuOpen(false)}
                >
                  School Level
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/admissions"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Admissions
          </NavLink>
          <NavLink
            to="/scholarships"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Scholarships
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/faculty"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Faculty
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            onClick={() => setDesktopMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {/* About Mobile Dropdown */}
            <div>
              <button
                className={`flex items-center justify-between w-full ${location.pathname.includes("/about") ? "text-accent font-semibold" : ""
                  }`}
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About <ChevronDown size={16} />
              </button>
              {aboutOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-gray-200 pl-4">
                  <NavLink to="/about/introduction" onClick={() => setMobileOpen(false)} className="hover:text-primary text-sm">Introduction</NavLink>
                  <NavLink to="/about/principal" onClick={() => setMobileOpen(false)} className="hover:text-primary text-sm">Message from Principal</NavLink>
                  <NavLink to="/about/life-at-saipal" onClick={() => setMobileOpen(false)} className="hover:text-primary text-sm">Life at Saipal</NavLink>
                  <NavLink to="/gallery" onClick={() => setMobileOpen(false)} className="hover:text-primary text-sm">Gallery</NavLink>
                  <NavLink to="/about/events" onClick={() => setMobileOpen(false)} className="hover:text-primary text-sm">Events</NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/programs"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent font-semibold" : "")}
            >
              Programs
            </NavLink>
            <NavLink
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent font-semibold" : "")}
            >
              Admissions
            </NavLink>
            <NavLink
              to="/scholarships"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent font-semibold" : "")}
            >
              Scholarships
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent font-semibold" : "")}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => (isActive ? "text-accent font-semibold" : "")}
            >
              Contact
            </NavLink>
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
  );
}
