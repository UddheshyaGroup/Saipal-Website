import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  BookOpen,
  Globe,
  CheckCircle,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";



export default function About() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================= About Us ================= */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">About Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Introduction
            </h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Saipal is a time-tested and Nepal’s premier learning institution which was established in the year 2002. Its commitment to excellence ensures quality education for life. Saipal is known for its student-centred learning, a distinction that has made it one of the most sought after institutions in Kathmandu.
              </p>
              <p>
                At Saipal, every individual student can explore and experience all aspects of life. Each child is equipped with confidence, self-respect, and dynamism.  Ultimately, these qualities prepare children for real-life challenges and make them capable to contribute to the overall development of the nation. Highly competent faculties, top-notch infrastructure and facilities and super learning environment combine to establish Saipal as a leading educational institution of Nepal.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
              alt="Graduation ceremony"
              className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
              <Eye className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "The vision of the institution is to establish itself as a Model Educational Centre that enhances the capacity of individuals for living and contributes to the nation’s overall development."
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "Saipal promotes a world-class learning opportunity to each individual and encourages one and all to explore their inherent potentiality to become competent citizen globally. It facilitates an environment where each individual feels special and think out of the box to stand up for tomorrow’s challenges."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= GUIDING PRINCIPLES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">
              Our Foundations
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">
              Saipal's Guiding Principles
            </h3>
          </div>

          <ul className="space-y-5">
            {[
              { text: "We believe in the lifelong learning process.", icon: <BookOpen className="w-5 h-5" /> },
              { text: "We believe that each individual is unique and has a different style of learning.", icon: <Users className="w-5 h-5" /> },
              { text: "We believe in honesty at work.", icon: <CheckCircle className="w-5 h-5" /> },
              { text: "We believe in respect for self and others.", icon: <Award className="w-5 h-5" /> },
              { text: "We believe that each individual must care for resources.", icon: <Globe className="w-5 h-5" /> },
              { text: "We believe in constructive competition and cooperation that benefits all.", icon: <Target className="w-5 h-5" /> },
              { text: "We believe that one should always instil a questioning spirit.", icon: <Eye className="w-5 h-5" /> },
            ].map((principle, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 text-gray-700"
              >
                <span className="mt-1 text-primary">
                  {principle.icon}
                </span>

                <p className="leading-relaxed font-medium">
                  {principle.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>



      {/* ================= MESSAGE FROM PRINCIPAL ================= */}
      <section className="py-24 bg-accent px-6 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Card */}
          <div className="bg-white rounded-[3rem] p-8 sm:p-10 md:p-14 lg:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
                <img
                  src="https://saipal.edu.np/wp-content/uploads/2023/11/image.jpg?auto=format&fit=crop&q=80&w=800"
                  alt="Principal of Saipal Academy"
                  className="rounded-3xl relative z-10 w-full aspect-[4/5] object-cover"
                />
              </div>
            </div>

            {/* Message */}
            <div className="lg:col-span-2">
              <Quote className="text-accent w-12 h-12 sm:w-14 sm:h-14 mb-6 opacity-30" />

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 italic">
                From the Principal's Desk
              </h3>

              <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  "It still smells good to me. In the pool of hypocrisy, hegemony, and delusion, I again want to be a child and feel the innocence that brings the very smile on the faces of teachers and parents..."
                </p>

                <p>
                  "Moreover, we not only care for students with huge potential but also with great dedication. We believe every child is unique, and we are committed to nurturing what each student deserves..."
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8">
                <p className="font-bold text-xl sm:text-2xl text-primary">
                  Mr. Ganesh Joshi
                </p>
                <p className="text-accent font-semibold tracking-wider">
                  Principal
                </p>
              </div>
            </div>
          </div>

          {/* CTA SECTION */}
          <div className="mt-20 text-center max-w-3xl mx-auto text-white">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Begin Your Learning Journey?
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10">
              Have questions about admissions, programs, or guidance? Our team is here to help you take the next step toward a brighter academic future.
            </p>

            <Link to="/enquiry"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-primary font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>




    </main >
  );
}
