import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers, FaAward, FaBook, FaCoffee, FaWifi, FaBasketballBall, FaLaptop, FaFlask, FaGlobe, FaUniversity } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Empowering Future Leaders <br /> with{" "}
              <span className="text-accent">World-Class Education</span>
            </h1>

            <p className="text-lg max-w-xl">
              Saipal Academy offers Cambridge A-Levels, NEB +2, and School programs that prepare students for success
              both in Nepal and internationally. Join a community where excellence meets opportunity.
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

          {/* Right Image */}
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

      {/* Why Choose Saipal Section */}
      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Why Choose Saipal Academy?</h2>

          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            <FeatureCard
              icon={<FaGraduationCap className="text-accent text-5xl" />}
              title="Global Curriculum"
              description="Cambridge A-Levels & NEB +2 programs aligned with international education standards."
            />
            <FeatureCard
              icon={<FaChalkboardTeacher className="text-accent text-5xl" />}
              title="Experienced Faculty"
              description="Our passionate teachers are experts committed to your academic and personal growth."
            />
            <FeatureCard
              icon={<FaUsers className="text-accent text-5xl" />}
              title="Vibrant Campus Life"
              description="Engage in clubs, sports, cultural activities, and events beyond the classroom."
            />
            <FeatureCard
              icon={<FaAward className="text-accent text-5xl" />}
              title="Scholarship Opportunities"
              description="Merit-based scholarships available to help deserving students achieve their dreams."
            />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-gray-50 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Our Programs</h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <ProgramCard
              title="Cambridge A-Levels"
              description="Internationally recognized curriculum that prepares students for global universities."
              link="/programs#alevels"
            />
            <ProgramCard
              title="National Education Board +2"
              description="Comprehensive education aligned with Nepal’s national standards."
              link="/programs#neb"
            />
            <ProgramCard
              title="School Level"
              description="Building strong foundations for lifelong learning and academic excellence."
              link="/programs#school"
            />
          </div>
        </div>
      </section>

      {/* College Life Stories */}
      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-14">Life at Saipal Academy</h2>

          <article className="mb-10 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Experience of My College Life</h3>
            <p>
              Saipal Academy is more than just academics. It’s a place where friendships flourish, passions ignite,
              and memories are made to last a lifetime.
            </p>
          </article>

          <article className="mb-10 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Funny Memories of My College Life</h3>
            <p>
              Our vibrant community shares laughter and joy daily — making learning fun and inspiring growth.
            </p>
          </article>

          <article className="mb-10 p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-3 text-primary">Lessons That I Have Learned</h3>
            <p>
              Students gain more than knowledge here; they develop leadership, resilience, and real-world skills.
            </p>
          </article>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-50 text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">Facilities at Saipal Academy</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <FacilityCard
              icon={<FaBook className="text-accent text-4xl" />}
              title="Library"
              description="Filled with updated books, reference materials, journals, magazines, and accessible anytime for students."
            />
            <FacilityCard
              icon={<FaCoffee className="text-accent text-4xl" />}
              title="Cafeteria"
              description="Hygienic cafeteria serving fresh food at reasonable prices."
            />
            <FacilityCard
              icon={<FaWifi className="text-accent text-4xl" />}
              title="Unlimited Wi-Fi Zone"
              description="Free internet access to support learning and tech-friendly education."
            />
            <FacilityCard
              icon={<FaBasketballBall className="text-accent text-4xl" />}
              title="Recreational Centers"
              description="Basketball, table tennis, badminton courts, music hall, and organized extracurricular activities."
            />
            <FacilityCard
              icon={<FaLaptop className="text-accent text-4xl" />}
              title="Computer Centre"
              description="Updated computers with software for students to develop IT skills."
            />
            <FacilityCard
              icon={<FaFlask className="text-accent text-4xl" />}
              title="Laboratories"
              description="High-tech Physics, Chemistry, and Biology labs with necessary equipment for experiments."
            />
            <FacilityCard
              icon={<FaGlobe className="text-accent text-4xl" />}
              title="Educational Excursion"
              description="Regular educational tours to develop social responsibility and leadership."
            />
            <FacilityCard
              icon={<FaGraduationCap className="text-accent text-4xl" />}
              title="Career Counseling"
              description="Guidance to help students plan a successful career alongside top-notch education."
            />
            <FacilityCard
              icon={<FaUniversity className="text-accent text-4xl" />}
              title="Auditorium & Event Hall"
              description="For seminars, guest lectures, and cultural programs, supporting learning and community engagement."
            />
          </div>
        </div>
      </section>

      {/* Scholarship Highlight
      <section className="bg-white text-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Scholarships for Future Leaders</h2>
          <p className="max-w-xl mx-auto mb-8 text-lg">
            We offer merit-based scholarships to empower talented students. Take the first step toward your
            brighter future today.
          </p>

          <Link
            to="/scholarships"
            className="inline-block bg-accent text-white px-10 py-4 rounded-md font-semibold hover:opacity-90 transition"
          >
            Apply for Scholarship
          </Link>
        </div>
      </section> */}

      {/* Call to Action Footer */}
      <section className="bg-white text-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Join Saipal Academy?</h2>
        <Link
          to="/admissions"
          className="inline-block bg-accent text-white px-12 py-4 rounded-md font-semibold hover:opacity-90 transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}

// Reusable feature card component
function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg p-8 text-center shadow-md cursor-pointer transition"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

// Reusable program card component
function ProgramCard({ title, description, link }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-8 rounded-lg shadow-md cursor-pointer transition"
    >
      <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="mb-6 text-gray-700">{description}</p>
      <Link
        to={link}
        className="inline-block font-semibold text-accent hover:underline"
        aria-label={`Learn more about ${title}`}
      >
        Learn More →
      </Link>
    </motion.div>
  );
}

// Reusable facility card component
function FacilityCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transition"
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </motion.div>
  );
}
