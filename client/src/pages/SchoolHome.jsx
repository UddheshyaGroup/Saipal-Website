import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTimes, FaStar, FaChevronDown } from "react-icons/fa";
import { cmsService, cmsBus } from "../services/cmsService";
import {
  SCHOOL_LEVELS,
  SCHOOL_FACILITIES,
  SCHOOL_STATS,
  SCHOOL_FAQS,
} from "../data/schoolData";

const HERO_IMAGES = [
  "/saipal_first.webp",
  "/saipal_fourth.webp",
  "/saipal_third.webp",
  "/saipal_second.webp",
  "/saipla_fifth.webp"
];

export default function SchoolHome() {
  const [tourOpen, setTourOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const [notices, setNotices] = useState([]);
  const [tickers, setTickers] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [programs, setPrograms] = useState([]);

  const loadCmsData = async () => {
    const [n, t, tm, p] = await Promise.all([
      cmsService.getNotices("school"),
      cmsService.getTickers("school"),
      cmsService.getTestimonials("school"),
      cmsService.getPrograms("school"),
    ]);
    setNotices(n); setTickers(t); setTestimonials(tm); setPrograms(p);
  };

  useEffect(() => {
    loadCmsData();
    const handleCmsChange = () => loadCmsData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  const activeTickerText = tickers.filter(t => t.isActive).map(t => t.text).join(" • ");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const close = (e) => e.key === "Escape" && setTourOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    document.body.style.overflow = tourOpen ? "hidden" : "auto";
  }, [tourOpen]);

  return (
    <main className="overflow-x-hidden bg-slate-50 font-sans text-slate-800">
      {/* ================= HERO SECTION (SLIDING BG) ================= */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Images Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentHeroImage}
              src={HERO_IMAGES[currentHeroImage]}
              alt="Saipal School Campus"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-105 contrast-105"
            />
          </AnimatePresence>

          {/* Smooth Dark Gradient Overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E3192]/95 via-[#2E3192]/80 to-[#2E3192]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-16 items-center">
            {/* ── LEFT: Hero Text ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-left"
            >
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md">
                Empowering Young Minds with <br className="hidden sm:inline" />
                <span className="text-[#00AEEF] relative inline-block mt-2">
                  Joyful Learning
                  {/* Underline aesthetic */}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00AEEF]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-lg text-white/90 font-medium leading-relaxed max-w-2xl drop-shadow-md">
                We deliver holistic education from Pre-Primary through Grade 10 (SEE), combining STEAM curriculum, character development, and modern campus facilities.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/school/admissions"
                  className="bg-[#00AEEF] hover:bg-white hover:text-[#00AEEF] text-white font-bold px-6 py-3.5 rounded-xl shadow-xl hover:scale-105 transition-all text-sm sm:text-base group flex items-center gap-2"
                >
                  Apply Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>

                <Link
                  to="/school/programs"
                  className="bg-white/10 border-2 border-white/30 hover:bg-white hover:text-[#2E3192] text-white font-bold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all text-sm sm:text-base"
                >
                  Explore Curriculum
                </Link>
              </div>
            </motion.div>

            {/* ── RIGHT: Academic Programs ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                OUR ACADEMIC PROGRAMS
              </p>

              {/* NEB School Level */}
              <Link
                to="/school/programs"
                className="group flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 hover:border-emerald-400/60 transition-all shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                  <img src="/school-level.jpeg" alt="NEB School Level" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    NATIONAL BOARD
                  </span>
                  <h3 className="text-white font-bold text-lg leading-snug group-hover:text-emerald-400 transition-colors">
                    NEB School Level
                  </h3>
                  <p className="text-white/55 text-sm mt-0.5">
                    From Class 1 to 10
                  </p>
                </div>
                <span className="text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 text-xl">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroImage(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentHeroImage === idx ? "w-8 bg-[#00AEEF]" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= NOTICE TICKER ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#00AEEF] text-white overflow-hidden shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center gap-4 text-sm">
          <span className="font-bold whitespace-nowrap">School Notice:</span>

          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="whitespace-nowrap font-medium"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            >
              {activeTickerText || "School Admissions Open for Academic Year 2026-2027 (Pre-Primary to Grade 9) • Annual Science & STEAM Fair"}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= 1. PRINCIPAL'S WELCOME (REDESIGNED SENIOR UI/UX) ================= */}
      {/* <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-sm grid md:grid-cols-12 gap-10 items-center">
            
            <div className="md:col-span-4 h-72 sm:h-80 rounded-xl overflow-hidden shadow-sm bg-slate-200">
              <img
                src="/principal.jpeg"
                alt="Principal Mr. Ganesh Joshi"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
                Principal's Message
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192] italic">
                From the Principal's Desk
              </h2>

              <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  "It still smells good to me. In the pool of hypocrisy, hegemony, and delusion, I again want to be a child and feel the innocence that brings the very smile on the faces of teachers and parents..."
                </p>
                <p>
                  "Moreover, we not only care for students with huge potential but also with great dedication. We believe every child is unique, and we are committed to nurturing what each student deserves..."
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-200/80 mt-4">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Mr. Govinda Bahadur Dhami</div>
                  <div className="text-xs text-slate-500">Principal</div>
                </div>

                <Link
                  to="/school/about"
                  className="text-xs font-bold text-[#00AEEF] hover:underline"
                >
                  Read Mission & Vision →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= 2. SCHOOL NOTICE BOARD (REDESIGNED SENIOR UI/UX) ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
                Updates & Announcements
              </span>
              <h2 className="text-3xl font-bold text-[#2E3192] mt-1">
                School Notice Board
              </h2>
            </div>

            <Link
              to="/school/enquiry"
              className="text-xs font-bold text-[#00AEEF] hover:underline"
            >
              Submit School Inquiry →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {notices.map((notice, idx) => (
              <div
                key={notice.id || idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#00AEEF]/50 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full text-white uppercase tracking-wider ${notice.color || "bg-[#00AEEF]"}`}>
                      {notice.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {notice.date}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-slate-900 leading-snug">
                    {notice.title}
                  </h3>
                  {(notice.content || notice.description) && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {notice.content || notice.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  Official School Notice
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. ACADEMIC LEVELS & CURRICULUM (REDESIGNED SENIOR UI/UX) ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
              Structured Growth Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E3192]">
              Academic Levels & Curriculum
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Tailored learning benchmarks designed for each developmental stage from age 3 to 16.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SCHOOL_LEVELS.map((level) => (
              <div
                key={level.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 h-52 sm:h-auto relative bg-slate-200">
                  <img
                    src={level.image}
                    alt={level.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2E3192] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {level.age}
                  </div>
                </div>

                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#2E3192]">
                      {level.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <Link
                      to="/school/programs"
                      className="text-xs font-bold text-[#00AEEF] hover:underline"
                    >
                      View Curriculum Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SCHOOL STATS BANNER ================= */}
      <section className="bg-[#2E3192] py-14 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {SCHOOL_STATS.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00AEEF]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. WHAT PARENTS & ALUMNI SAY (REDESIGNED SENIOR UI/UX) ================= */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
              Community Voice
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2E3192]">
              What Parents & Alumni Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Real experiences shared by our Saipal School family.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-[#00AEEF] font-semibold">{t.relation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {SCHOOL_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-800 flex items-center justify-between gap-4 text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <FaChevronDown
                    className={`transition-transform duration-200 text-[#00AEEF] ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-[#2E3192]">
            Ready to Join Saipal School?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
            Book a campus tour or apply online to secure your child's admission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/school/admissions"
              className="bg-[#00AEEF] text-white px-8 py-3.5 rounded-xl font-bold hover:opacity-90 transition shadow"
            >
              Apply for Admissions
            </Link>
            <Link
              to="/school/enquiry"
              className="border-2 border-[#2E3192] text-[#2E3192] px-8 py-3.5 rounded-xl font-bold hover:bg-[#2E3192] hover:text-white transition"
            >
              Fill Online Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL TOUR BUTTON & MODAL ================= */}
      <button
        onClick={() => setTourOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-[#00AEEF] text-white px-5 py-2.5 rounded-full shadow-lg text-sm font-semibold hover:scale-105 transition"
      >
        Virtual Tour
      </button>

      <AnimatePresence>
        {tourOpen && (
          <motion.div
            onClick={() => setTourOpen(false)}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-black rounded-xl overflow-hidden w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
            >
              <button
                onClick={() => setTourOpen(false)}
                className="absolute top-3 right-3 z-50 bg-white text-black rounded-full p-2 hover:bg-gray-200"
              >
                <FaTimes />
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/o267a1-fCjQ?autoplay=1"
                title="Saipal School Virtual Tour"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
