import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { cmsService, cmsBus } from "../services/cmsService";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
  FaBook,
  FaCoffee,
  FaWifi,
  FaBasketballBall,
  FaLaptop,
  FaFlask,
  FaGlobe,
  FaUniversity,
  FaGlobeAsia,
  FaTimes,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [notices, setNotices] = useState([]);
  const [tickers, setTickers] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const loadCmsData = async () => {
    const [n, t, p, tm] = await Promise.all([
      cmsService.getNotices("college"),
      cmsService.getTickers("college"),
      cmsService.getPrograms("college"),
      cmsService.getTestimonials("college"),
    ]);
    setNotices(n); setTickers(t); setPrograms(p); setTestimonials(tm);
  };

  useEffect(() => {
    loadCmsData();
    const handleCmsChange = () => loadCmsData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  // Esc key support
  useEffect(() => {
    const close = (e) => e.key === "Escape" && setTourOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  // Disable background scroll when open
  useEffect(() => {
    document.body.style.overflow = tourOpen ? "hidden" : "auto";
  }, [tourOpen]);

  const activeTickerText = tickers.filter(t => t.isActive).map(t => t.text).join(" • ");

  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpeg"
            alt="Saipal Academy campus"
            className="w-full h-full object-cover object-center brightness-105 contrast-105"
          />
          {/* Same gradient effects as School hero */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E3192]/95 via-[#2E3192]/80 to-[#2E3192]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/40" />
        </div>

        {/* Content: 2-column */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: Hero Text (School-style) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-left"
            >
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-md">
                Empowering Future Leaders <br className="hidden sm:inline" />
                with{" "}
                <span className="text-[#00AEEF] relative inline-block mt-2">
                  World-Class Education
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#00AEEF]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-base text-white/90 font-medium leading-relaxed max-w-xl drop-shadow-md">
                Saipal Academy offers Cambridge A-Levels, NEB +2, and School programs that prepare students for success both in Nepal and internationally.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/college/admissions"
                  className="bg-[#00AEEF] hover:bg-white hover:text-[#00AEEF] text-white font-bold px-5 py-3 rounded-xl shadow-xl hover:scale-105 transition-all text-xs sm:text-sm group flex items-center gap-2"
                >
                  Apply Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link
                  to="/college/programs"
                  className="bg-white/10 border-2 border-white/30 hover:bg-white hover:text-[#2E3192] text-white font-bold px-5 py-3 rounded-xl backdrop-blur-md transition-all text-xs sm:text-sm"
                >
                  Explore Programs
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
                Our Academic Programs
              </p>

              {programs.filter(p => p.division === "college").map((p) => (
                <Link
                  key={p.id}
                  to="/college/programs"
                  className="group flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 hover:border-[#00AEEF]/60 transition-all shadow-lg"
                >
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                    <img src={p.image} alt={p.title} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${p.badgeColor || "text-[#00AEEF]"}`}>{p.badge}</span>
                    <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#00AEEF] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-white/55 text-sm mt-0.5">{p.description}</p>
                  </div>
                  <span className="text-white/30 group-hover:text-[#00AEEF] group-hover:translate-x-1 transition-all shrink-0 text-xl">→</span>
                </Link>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= NOTICE TICKER ================= */}
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-accent text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center gap-4">
          <span className="font-bold whitespace-nowrap leading-none">
            📢 Important Notice:
          </span>

          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="whitespace-nowrap leading-none"
              animate={{ x: ["100%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            >
              {activeTickerText || "College Sports Day Announcement • NEB Board Exam Routine Published"}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ================= NOTICE BOARD ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-10"
          >
            <h2 className="text-3xl font-bold text-primary">📌 Notice Board</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {notices.map((notice, i) => (
              <motion.div
                key={notice.id || i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`inline-block mb-3 text-xs font-semibold text-white px-3 py-1 rounded-full ${notice.color || "bg-primary"}`}
                  >
                    {notice.tag}
                  </span>

                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {notice.title}
                  </h3>
                  {(notice.content || notice.description) && (
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line mb-3">
                      {notice.content || notice.description}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-500 pt-3 border-t">
                  Published on {notice.date}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            Why Choose Saipal Academy?
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto"
          >
            <FeatureCard
              icon={<FaGraduationCap className="text-accent text-5xl" />}
              title="Global Curriculum"
              description="Cambridge A-Levels & NEB +2 aligned with international standards."
            />
            <FeatureCard
              icon={<FaChalkboardTeacher className="text-accent text-5xl" />}
              title="Experienced Faculty"
              description="Highly qualified teachers committed to student excellence."
            />
            <FeatureCard
              icon={<FaUsers className="text-accent text-5xl" />}
              title="Student-Centered Learning"
              description="Personal attention with focus on holistic development."
            />
            <FeatureCard
              icon={<FaAward className="text-accent text-5xl" />}
              title="Scholarship Programs"
              description="Merit-based scholarships for deserving students."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            Our Academic Programs
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-3 gap-10"
          >
            <ProgramCard
              image="/CambridgeLogo.png"
              title="Cambridge A-Levels"
              query="alevels"
              description="Globally recognized curriculum designed to prepare students for leading universities worldwide."
            />
            <ProgramCard
              image="/+2lelvels.jpeg"
              title="NEB +2"
              query="neb"
              description="National Education Board curriculum focused on academic excellence and holistic development."
            />
            <ProgramCard
              image="/school-level.jpeg"
              title="School Level"
              query="school"
              description="Strong academic foundation nurturing curiosity, discipline, and lifelong learning skills."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-14"
          >
            Saipal Academy at a Glance
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.09,
                },
              },
            }}
            className="grid md:grid-cols-4 gap-10 text-center"
          >
            <motion.img
              src="./1.png"
              alt="Years of Excellence"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            />
            <motion.img
              src="./2.png"
              alt="Students Graduated"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            />
            <motion.img
              src="./3.png"
              alt="Placement Rate"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            />
            <motion.img
              src="./4.png"
              alt="College Faculty"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FACILITIES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            Facilities at Saipal Academy
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <FacilityCard
              icon={<FaBook />}
              title="Library"
              description="Extensive academic resources and reference materials."
            />
            <FacilityCard
              icon={<FaCoffee />}
              title="Cafeteria"
              description="Clean and hygienic food services."
            />
            <FacilityCard
              icon={<FaWifi />}
              title="Wi-Fi Campus"
              description="High-speed internet across campus."
            />
            <FacilityCard
              icon={<FaBasketballBall />}
              title="Sports & Recreation"
              description="Indoor and outdoor sports facilities."
            />
            <FacilityCard
              icon={<FaLaptop />}
              title="Computer Labs"
              description="Modern labs with updated systems."
            />
            <FacilityCard
              icon={<FaFlask />}
              title="Science Laboratories"
              description="Well-equipped physics, chemistry, and biology labs."
            />
            <FacilityCard
              icon={<FaGlobe />}
              title="Educational Tours"
              description="Learning beyond classrooms."
            />
            <FacilityCard
              icon={<FaGraduationCap />}
              title="Career Counseling"
              description="Academic & career guidance services."
            />
            <FacilityCard
              icon={<FaUniversity />}
              title="Auditorium & Event Hall"
              description="Seminars, guest lectures, and cultural programs."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            Achievements & Recognition
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          >
            <AchievementCard
              icon={<FaUniversity />}
              title="Cambridge A-Level Affiliation"
              description="Officially affiliated with Cambridge Assessment International Education, delivering globally recognized A-Level qualifications."
            />
            <AchievementCard
              icon={<FaAward />}
              title="NEB Accredited Institution"
              description="Recognized by the National Education Board (NEB), ensuring compliance with national academic standards."
            />
            <AchievementCard
              icon={<FaGlobeAsia />}
              title="Global University Placements"
              description="Our graduates have secured placements in top universities across Nepal, Australia, UK, and India."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {testimonials.length > 0 && (
        <section className="bg-slate-50 py-20 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
                Reviews & Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2E3192]">
                What Our Students & Parents Say
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Discover the impact of Saipal College education through the voices of our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((t, idx) => (
                <div
                  key={t.id || idx}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-5 hover:border-[#00AEEF]/50 hover:shadow-md transition"
                >
                  <div className="space-y-3">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(t.rating || 5)].map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-xs text-[#2E3192] font-semibold mt-0.5">{t.relation}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-accent py-20">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10 blur-2xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-primary rounded-[2rem] border border-white/10 px-8 py-14 sm:px-12 sm:py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Admissions Open
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white leading-tight">
              Ready to Join Saipal Academy?
            </h2>

            <p className="max-w-2xl mx-auto mt-6 mb-10 text-lg text-white/80 leading-8">
              Take the first step toward academic excellence. Begin your journey with
              Saipal Academy and become part of a community committed to learning,
              growth, and success.
            </p>

            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-10 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VIRTUAL TOUR BUTTON ================= */}
      <button
        onClick={() => setTourOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-accent text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
      >
        Click for Virtual Tour
      </button>

      {/* ================= VIRTUAL TOUR MODAL ================= */}

      <AnimatePresence>
        {tourOpen && (
          <motion.div
            onClick={() => setTourOpen(false)} // Close on click outside
            className="fixed left-0 right-0 bottom-0 top-[96px] z-50 bg-black/70 flex items-start justify-center px-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-black rounded-xl overflow-hidden w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 30, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setTourOpen(false)}
                className="absolute top-3 right-3 z-50 bg-white text-black rounded-full p-2 hover:bg-gray-200"
              >
                <FaTimes />
              </button>

              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/o267a1-fCjQ?autoplay=1&vq=hd1080"
                title="Saipal Academy Virtual Tour"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-lg shadow-md text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function ProgramCard({ image, query, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <div className="h-36 flex items-center justify-center bg-gray-50">
        <img src={image} alt={title} className="h-36 w-auto object-contain" />
      </div>
      <div className="p-8 text-center flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-gray-700 mb-8 flex-grow">{description}</p>
        <div className="flex gap-4">
          <Link
            to={`/programs#${query}`}
            className="w-full border border-accent text-accent px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-white transition"
          >
            Learn More
          </Link>
          <Link
            to="/admissions"
            className="w-full bg-accent text-white px-5 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function FacilityCard({ icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="text-accent text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}

function AchievementCard({ icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 p-10 rounded-xl shadow-md text-center"
    >
      <div className="text-accent text-5xl mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}
