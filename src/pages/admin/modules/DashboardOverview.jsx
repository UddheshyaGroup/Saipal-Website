import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { faqService, faqBus } from "../../../services/faqService";
import {
  Bell,
  FileText,
  Users,
  HelpCircle,
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export default function DashboardOverview({ onNavigate, division }) {
  const isSchool = division === "school";
  const [stats, setStats] = useState({
    noticesCount: 0,
    blogsCount: 0,
    facultyCount: 0,
    faqsCount: 0,
  });

  const loadStats = () => {
    setStats({
      noticesCount: cmsService.getNotices(division || "all").length,
      blogsCount: cmsService.getBlogPosts().length,
      facultyCount: cmsService.getFaculty().length,
      faqsCount: faqService.getFaqs("all", false).length,
    });
  };

  useEffect(() => {
    loadStats();
    const handleCmsChange = () => loadStats();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    faqBus.addEventListener("faq-data-changed", handleCmsChange);

    return () => {
      cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
      faqBus.removeEventListener("faq-data-changed", handleCmsChange);
    };
  }, [division]);

  const handleResetAllData = () => {
    if (window.confirm("Reset all website CMS data and FAQs to default seed state?")) {
      cmsService.resetAllCmsData();
      faqService.resetToDefaults();
      alert("All content reset to defaults.");
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <div className={`bg-gradient-to-r ${isSchool ? "from-[#00AEEF] to-[#2E3192]" : "from-[#2E3192] to-[#00AEEF]"} text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden`}>
        <div className="space-y-2 z-10">

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome to Saipal {isSchool ? "School" : "College"} Admin Panel
          </h1>
          <p className="text-cyan-100 text-xs sm:text-sm max-w-xl leading-relaxed">
            Manage {isSchool ? "School level notices, tickers, K-10 SEE programs, activities, and faculty." : "+2 & A-Levels programs, college notices, scholarships, blogs, and faculty."}
          </p>
        </div>

        <button
          onClick={handleResetAllData}
          className="z-10 bg-white/15 hover:bg-white/25 text-white border border-white/20 px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-center"
        >
          <RotateCcw size={14} /> Restore Initial Seed Data
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard
          title="Active Notices"
          value={stats.noticesCount}
          icon={Bell}
          color="bg-sky-500"
          onClick={() => onNavigate("notices")}
        />
        <MetricCard
          title="Published Blogs"
          value={stats.blogsCount}
          icon={FileText}
          color="bg-[#2E3192]"
          onClick={() => onNavigate("blogs")}
        />
        <MetricCard
          title="Faculty Members"
          value={stats.facultyCount}
          icon={Users}
          color="bg-emerald-500"
          onClick={() => onNavigate("faculty")}
        />
        <MetricCard
          title="Chatbot FAQs"
          value={stats.faqsCount}
          icon={HelpCircle}
          color="bg-amber-500"
          onClick={() => onNavigate("chatbot")}
        />
      </div>

      {/* Quick Action Modules Grid */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 space-y-4">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
          Quick Management Shortcuts
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ShortcutTile
            title="Notice Board & Tickers"
            desc="Update global announcement bars and notices."
            icon={Bell}
            onClick={() => onNavigate("notices")}
          />
          <ShortcutTile
            title="Blog & Articles"
            desc="Publish educational news and articles."
            icon={FileText}
            onClick={() => onNavigate("blogs")}
          />
          <ShortcutTile
            title="Faculty Directory"
            desc="Manage principal and teacher profiles."
            icon={Users}
            onClick={() => onNavigate("faculty")}
          />
          <ShortcutTile
            title="Academic Programs"
            desc="Edit NEB & Cambridge A-Levels info."
            icon={TrendingUp}
            onClick={() => onNavigate("programs")}
          />
          <ShortcutTile
            title="AI Chatbot Knowledge"
            desc="Edit predefined Q&A and bot avatar."
            icon={HelpCircle}
            onClick={() => onNavigate("chatbot")}
          />
          <ShortcutTile
            title="Site Settings & Info"
            desc="Update phone numbers, emails & hours."
            icon={ShieldCheck}
            onClick={() => onNavigate("settings")}
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, icon: Icon, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between cursor-pointer hover:border-[#00AEEF] transition group"
    >
      <div>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{title}</p>
        <p className="text-3xl font-black text-slate-900 dark:text-white mt-1">{value}</p>
      </div>
      <div className={`p-3.5 rounded-2xl ${color} text-white shadow-md group-hover:scale-105 transition-transform`}>
        <Icon size={22} />
      </div>
    </div>
  );
}

function ShortcutTile({ title, desc, icon: Icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 hover:border-[#00AEEF] transition cursor-pointer flex items-start justify-between group"
    >
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[#2E3192] dark:text-[#00AEEF]">
          <Icon size={16} />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">{title}</h4>
        </div>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
      <ArrowRight size={16} className="text-slate-400 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
    </div>
  );
}
