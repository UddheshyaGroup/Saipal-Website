import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
  FaShieldAlt,
} from "react-icons/fa";
import { cmsService, cmsBus } from "../../services/cmsService";

export default function Footer() {
  const [settings, setSettings] = useState(() => cmsService.getSiteSettings());

  useEffect(() => {
    setSettings(cmsService.getSiteSettings());
    const handleCmsChange = () => setSettings(cmsService.getSiteSettings());
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  return (
    <footer className="bg-primary text-white font-sans relative overflow-hidden border-t border-[#1a1f6e]">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-5">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img
                src="/White.png"
                alt="Saipal Academy Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed">
              Empowering students with world-class education from Pre-Primary through Grade 10 (SEE), Cambridge A-Levels, and NEB +2 programs in Kathmandu, Nepal.
            </p>

            {/* Social Media Pill Badges */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={settings.facebookUrl || "https://facebook.com/saipalacademy"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-100 hover:text-white hover:bg-[#00AEEF] hover:border-[#00AEEF] transition-all shadow-md group"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={settings.instagramUrl || "https://instagram.com/saipalacademy"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-100 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:border-pink-500 transition-all shadow-md group"
                aria-label="Instagram"
              >
                <FaInstagram size={16} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={settings.youtubeUrl || "https://youtube.com/@saipalacademy2002"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-100 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition-all shadow-md group"
                aria-label="YouTube"
              >
                <FaYoutube size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Portals */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-accent flex items-center gap-2">
              Academic Divisions
            </h3>

            <div className="space-y-4">
              {/* School Card */}
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 hover:border-[#00AEEF]/70 transition space-y-1.5">
                <Link to="/school" className="font-bold text-white text-sm hover:text-accent flex items-center justify-between group">
                  <span>School (K-10)</span>
                  <FaChevronRight size={10} className="text-blue-200/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
                <div className="flex flex-col text-xs text-blue-100/70 space-y-1 pl-2">
                  <Link to="/school/programs" className="hover:text-accent transition">• Pre-Primary to Grade 10 (SEE)</Link>
                  <Link to="/school/admissions" className="hover:text-accent transition">• School Admissions & Inquiry</Link>
                </div>
              </div>

              {/* College Card */}
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 hover:border-white/40 transition space-y-1.5">
                <Link to="/college" className="font-bold text-white text-sm hover:text-accent flex items-center justify-between group">
                  <span>College (+2 / A-Levels)</span>
                  <FaChevronRight size={10} className="text-blue-200/50 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
                <div className="flex flex-col text-xs text-blue-100/70 space-y-1 pl-2">
                  <Link to="/college/programs" className="hover:text-accent transition">• Cambridge A-Levels & NEB +2</Link>
                  <Link to="/college/scholarships" className="hover:text-accent transition">• Merit Scholarships & Aid</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-accent">
              Contact Details
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm text-blue-100/80">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-accent shrink-0 mt-0.5">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-blue-100/60 text-xs mt-0.5">{settings.address || "Dhumbarahi, Kathmandu, Nepal"}</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-accent shrink-0 mt-0.5">
                  <FaPhoneAlt size={14} />
                </div>
                <div>
                  <p className="font-bold text-white">Phone</p>
                  <a href={`tel:${settings.phonePrimary || "+977014378154"}`} className="text-blue-100/60 hover:text-white transition text-xs mt-0.5 block">
                    {settings.phonePrimary || "+977-01-4378154"} {settings.phoneSecondary ? `/ ${settings.phoneSecondary}` : "/ 4009054"}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-accent shrink-0 mt-0.5">
                  <FaEnvelope size={14} />
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a href={`mailto:${settings.email || "mail@saipal.edu.np"}`} className="text-blue-100/60 hover:text-white transition text-xs mt-0.5 block">
                    {settings.email || "mail@saipal.edu.np"}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational Shift Timings */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-accent">
              Academic Hours
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <FaClock className="text-accent" size={13} />
                  <span>School Division</span>
                </div>
                <p className="text-blue-100/60 pl-5 text-[11px]">
                  {settings.schoolHours || "9:00 AM – 3:45 PM (Sun - Fri)"}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-xs">
                  <FaClock className="text-accent" size={13} />
                  <span>College Division</span>
                </div>
                <p className="text-blue-100/60 pl-5 text-[11px]">
                  • {settings.collegeManagementHours || "6:00 AM – 11:00 AM (Management)"}
                </p>
                <p className="text-blue-100/60 pl-5 text-[11px]">
                  • {settings.collegeScienceHours || "11:00 AM – 5:00 PM (Science & A-Levels)"}
                </p>
              </div>

              {/* Admin Portal Quick Link */}
              <div className="pt-1">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-2 text-[11px] font-bold text-blue-100/70 hover:text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-lg transition"
                >
                  <FaShieldAlt className="text-[#00AEEF]" size={12} />
                  <span>Admin Portal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#1a1f6e] border-t border-white/10 py-5 text-xs text-blue-100/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Saipal Academy. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Powered by:</span>
            <a
              href="https://uddheshyagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-100/80 hover:text-accent transition"
            >
              Uddheshya Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

