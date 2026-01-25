import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
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
} from "react-icons/fa";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);

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

  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Empowering Future Leaders <br />
              with <span className="text-accent">World-Class Education</span>
            </h1>

            <p className="text-lg max-w-xl">
              Saipal Academy offers Cambridge A-Levels, NEB +2, and School
              programs that prepare students for success both in Nepal and
              internationally.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to="/admissions"
                className="bg-accent px-8 py-3 rounded-md text-white font-semibold hover:opacity-90 transition"
              >
                Apply Now
              </Link>

              <Link
                to="/programs"
                className="border border-white px-8 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-primary transition"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <img
              src="/images/logo.png"
              alt="Saipal Academy Campus"
              className="rounded-3xl shadow-xl max-w-full object-cover"
              loading="lazy"
            />
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
              image="/alevels.png"
              title="Cambridge A-Levels"
              description="Globally recognized curriculum designed to prepare students for leading universities worldwide."
            />
            <ProgramCard
              image="/neb.png"
              title="NEB +2"
              description="National Education Board curriculum focused on academic excellence and holistic development."
            />
            <ProgramCard
              image="/pabson.png"
              title="School Level"
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
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid md:grid-cols-4 gap-10 text-center"
          >
            <StatCard label="Years of Excellence" value={20} suffix="+" />
            <StatCard label="Students Graduated" value={2500} suffix="+" />
            <StatCard label="College Placement Rate" value={95} suffix="%" />
            <StatCard label="Qualified Faculty" value={100} suffix="+" />
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

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Saipal Academy?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Take the first step toward academic excellence.
          </p>
          <Link
            to="/admissions"
            className="bg-accent text-white px-12 py-4 rounded-md font-semibold hover:opacity-90 transition"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* ================= VIRTUAL TOUR BUTTON ================= */}
      <button
        onClick={() => setTourOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-accent text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition"
      >
        Click for Virtual Tour
      </button>

      {/* ================= VIRTUAL TOUR MODAL ================= */}

      <AnimatePresence>
        {tourOpen && (
          <motion.div
            onClick={() => setTourOpen(false)} // Close on click outside
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
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
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
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

function ProgramCard({ image, title, description }) {
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
            to="/programs"
            className="w-full border border-accent text-accent px-5 py-3 rounded-md font-semibold hover:bg-accent hover:text-white transition"
          >
            Learn More
          </Link>
          <Link
            to="/contact"
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

function StatCard({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const increment = value / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 30);
    return () => clearInterval(interval);
  }, [value, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="bg-gray-50 p-10 rounded-xl shadow-md"
    >
      <h3 className="text-5xl font-extrabold text-primary">
        {count}
        {suffix}
      </h3>
      <p className="mt-4 text-lg text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
}
