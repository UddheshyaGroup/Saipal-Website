import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
  FaGlobeAsia,
  FaAward,
} from "react-icons/fa";

const timelineData = [
  {
    year: "1999",
    title: "Foundation of Saipal Academy",
    description:
      "Saipal Academy was established with a vision to provide quality education rooted in discipline and academic excellence.",
    icon: <FaUniversity />,
  },
  {
    year: "2005",
    title: "Expansion of School Programs",
    description:
      "The academy strengthened its school-level education, laying a strong academic foundation for young learners.",
    icon: <FaGraduationCap />,
  },
  {
    year: "2010",
    title: "Introduction of NEB +2",
    description:
      "Science and Management streams were introduced under NEB, preparing students for competitive higher education.",
    icon: <FaAward />,
  },
  {
    year: "2019",
    title: "Cambridge A-Levels Launched",
    description:
      "Saipal Academy embraced global education standards by introducing the Cambridge A-Level curriculum.",
    icon: <FaGlobeAsia />,
  },
  {
    year: "2024",
    title: "25 Years of Academic Excellence",
    description:
      "With over 9,000 graduates and global university placements, Saipal Academy celebrates 25 years of legacy.",
    icon: <FaAward />,
  },
];

export default function Legacy() {
  return (
    <main className="overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold mb-6"
          >
            Our Legacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto text-gray-200"
          >
            For over 25 years, Saipal Academy has been shaping futures through
            academic excellence, discipline, and global educational standards.
          </motion.p>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-20"
          >
            Journey Through the Years
          </motion.h2>

          <div className="relative">
            {/* Vertical line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gray-200 -translate-x-1/2" />

            <div className="space-y-20">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="md:w-1/2 px-6">
                    <div className="bg-gray-50 p-8 rounded-xl shadow-md relative">
                      {/* Icon */}
                      <div className="absolute -top-6 left-6 bg-accent text-white p-4 rounded-full text-xl">
                        {item.icon}
                      </div>

                      <h3 className="text-sm font-semibold text-accent mb-1">
                        {item.year}
                      </h3>
                      <h4 className="text-2xl font-bold mb-3 text-primary">
                        {item.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGACY IN NUMBERS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-14"
          >
            Legacy in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <LegacyStat value="25+" label="Years of Excellence" />
            <LegacyStat value="9,000+" label="Graduates" />
            <LegacyStat value="95%" label="Placement Rate" />
            <LegacyStat value="10+" label="Countries Reached" />
          </div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            The Legacy Continues
          </motion.h2>

          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            As Saipal Academy enters its next chapter, our commitment to quality
            education, innovation, and student success remains stronger than
            ever.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ================= REUSABLE ================= */

function LegacyStat({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <h3 className="text-4xl font-extrabold text-primary mb-2">{value}</h3>
      <p className="text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
}
