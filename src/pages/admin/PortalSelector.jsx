import React, { useEffect } from "react";
import { School, GraduationCap, ShieldCheck, ArrowRight, Sparkles, LogOut, ExternalLink } from "lucide-react";
import { authService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function PortalSelector({ onSelectPortal }) {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  useEffect(() => {
    document.title = "Select Admin Portal | Saipal CMS";
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-6 sm:p-12 font-sans relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2E3192]/25 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="flex items-center justify-between z-10 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <img src="/logoOnly.png" alt="Saipal Logo" className="w-10 h-10 object-contain" />
          <div>
            <h1 className="font-extrabold text-lg text-white tracking-tight">Saipal Admin Portal</h1>
            <p className="text-xs text-slate-400">Authenticated: {currentUser?.name || "Administrator"}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 px-4 py-2 rounded-xl text-xs font-bold transition"
          >
            <span>Live Website</span>
            <ExternalLink size={14} />
          </a>
          <button
            onClick={handleLogout}
            className="bg-rose-950/60 border border-rose-800/60 hover:bg-rose-900 text-rose-200 px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="z-10 max-w-5xl mx-auto w-full py-12 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-[#00AEEF]" /> Select Administrative Division
          </div> */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Where would you like to manage content?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Choose between School Admin or College Admin to update division-specific notices, programs, staff, and website features.
          </p>
        </div>

        {/* Division Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {/* ── SCHOOL ADMIN CARD ── */}
          <div
            onClick={() => onSelectPortal("school")}
            className="group relative bg-slate-900/90 border border-slate-800 hover:border-[#00AEEF] p-8 sm:p-10 rounded-3xl transition-all shadow-xl hover:shadow-[#00AEEF]/10 cursor-pointer flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00AEEF]/20 text-[#00AEEF] flex items-center justify-center group-hover:scale-110 transition-transform">
                <School size={36} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
                  K-10 & SEE Division
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00AEEF] transition-colors">
                  School Admin Panel
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Manage School Notices, Tickers, Pre-Primary to Grade 10 SEE Levels, School Faculty, Activities, and Parent Testimonials.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
              <span>Enter School Management Portal</span>
              <div className="w-8 h-8 rounded-full bg-[#00AEEF] text-white flex items-center justify-center group-hover:translate-x-1 transition-all shadow-md">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* ── COLLEGE ADMIN CARD ── */}
          <div
            onClick={() => onSelectPortal("college")}
            className="group relative bg-slate-900/90 border border-slate-800 hover:border-[#2E3192] p-8 sm:p-10 rounded-3xl transition-all shadow-xl hover:shadow-[#2E3192]/20 cursor-pointer flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#2E3192]/40 text-[#00AEEF] flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={36} />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2E3192] dark:text-cyan-400">
                  +2 & A-Levels Division
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  College Admin Panel
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Manage College Notices, Tickers, Cambridge A-Levels & NEB +2 Offerings, Scholarships, College Faculty, and Blog News.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-white">
              <span>Enter College Management Portal</span>
              <div className="w-8 h-8 rounded-full bg-[#2E3192] text-white flex items-center justify-center group-hover:translate-x-1 transition-all shadow-md">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 text-center text-xs text-slate-600 border-t border-slate-900 pt-6">
        Saipal Academy Content Management System © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
