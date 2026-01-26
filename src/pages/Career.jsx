import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaBriefcase } from "react-icons/fa";

const vacancies = [
  {
    title: "Secondary Level Mathematics Teacher",
    department: "School Section",
    type: "Full-Time",
    experience: "Minimum 3 Years",
    deadline: "30 March 2026",
  },
  {
    title: "A-Level Economics Teacher",
    department: "Cambridge A-Levels",
    type: "Part-Time",
    experience: "Minimum 2 Years",
    deadline: "15 April 2026",
  },
];

export default function Careers() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold mb-6"
          >
            Careers at Saipal Academy
          </motion.h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Join a team dedicated to academic excellence, innovation, and
            shaping future leaders.
          </p>
        </div>
      </section>

      {/* VACANCIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {vacancies.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.department}</p>

                <ul className="text-gray-700 space-y-2 mb-6">
                  <li><strong>Type:</strong> {job.type}</li>
                  <li><strong>Experience:</strong> {job.experience}</li>
                  <li><strong>Deadline:</strong> {job.deadline}</li>
                </ul>

                <a
                  href="mailto:careers@saipal.edu.np"
                  className="inline-block bg-accent text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-14"
          >
            Why Work at Saipal Academy?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            <WhyCard icon={<FaChalkboardTeacher />} text="Academic Excellence" />
            <WhyCard icon={<FaUsers />} text="Supportive Work Environment" />
            <WhyCard icon={<FaBriefcase />} text="Career Growth Opportunities" />
          </div>
        </div>
      </section>
      
      {/* APPLY PROCESS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Application Process</h2>
          <p className="text-gray-700 mb-4">
            Please email your updated CV and cover letter to
          </p>
          <p className="font-semibold text-primary text-lg">
            careers@saipal.edu.np
          </p>
        </div>
      </section>
    </main>
  );
}

/* ====== REUSABLE ====== */

function WhyCard({ icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-gray-50 p-8 rounded-xl shadow-md text-center"
    >
      <div className="text-accent text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{text}</h3>
    </motion.div>
  );
}
