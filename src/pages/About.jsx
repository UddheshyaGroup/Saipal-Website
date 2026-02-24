import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  BookOpen,
  Globe,
  CheckCircle,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const VisonMission = [
    {
      id: 1,
      title: "Our Vision",
      description:
        "The vision of the institution is to establish itself as a Model Educational Centre that enhances the capacity of individuals for living and contributes to the nation's overall development.\"",
      imageUrl: "/ourVision.jpeg",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "Saipal promotes a world-class learning opportunity to each individual and encourages one and all to explore their inherent potentiality to become competent citizen globally. It facilitates an environment where each individual feels special and think out of the box to stand up for tomorrow’s challenges.",
      imageUrl: "/ourMission.jpeg",
    },
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* ================= About Us ================= */}
      <section className="py-14 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-xs sm:text-sm font-bold text-accent uppercase tracking-widest mb-3">
              About Us
            </h2>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Introduction
            </h3>

            <div className="space-y-5 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Saipal is a time-tested and Nepal’s premier learning institution
                established in 2002. Its commitment to excellence ensures
                quality education for life. Saipal is known for its
                student-centred learning, making it one of the most sought-after
                institutions in Kathmandu.
              </p>

              <p>
                At Saipal, every student explores all aspects of life with
                confidence, self-respect, and dynamism. Highly competent
                faculties, modern infrastructure, and a vibrant learning
                environment establish Saipal as a leading educational
                institution in Nepal.
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/20 rounded-full blur-3xl" />

            {/* Image container */}
            <div className="relative z-10 w-full max-w-xl lg:max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about.jpeg"
                alt="Graduation ceremony"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-10">
          {VisonMission.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch"
            >
              {item.title === "Our Vision" ? (
                <>
                  {/* IMAGE CARD */}
                  {item.imageUrl && (
                    <div
                      className="
                        relative 
                        w-full 
                        h-64 sm:h-72 md:h-80 lg:h-full
                        rounded-2xl 
                        overflow-hidden 
                        shadow-md
                      "
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="
                          absolute inset-0 
                          w-full h-full 
                          object-cover 
                          transition-transform duration-500 
                          hover:scale-105
                        "
                      />
                    </div>
                  )}
                  {/* TEXT CARD */}
                  <div
                    className="
                      bg-white 
                      p-6 sm:p-8 md:p-10 lg:p-12
                      rounded-2xl 
                      shadow-md 
                      border border-gray-100
                      flex flex-col justify-center
                      text-center md:text-left
                    "
                  >
                    {/* Icon + Title */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Eye className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* TEXT CARD */}
                  <div
                    className="
                      bg-white 
                      p-6 sm:p-8 md:p-10 lg:p-12
                      rounded-2xl 
                      shadow-md 
                      border border-gray-100
                      flex flex-col justify-center
                      text-center md:text-left
                    "
                  >
                    {/* Icon + Title */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <Target className="w-6 h-6 lg:w-8 lg:h-8" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed italic">
                      {item.description}
                    </p>
                  </div>
                  {/* IMAGE CARD */}
                  {item.imageUrl && (
                    <div
                      className="
                        relative 
                        w-full 
                        h-64 sm:h-72 md:h-80 lg:h-full
                        rounded-2xl 
                        overflow-hidden 
                        shadow-md
                      "
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="
                          absolute inset-0 
                          w-full h-full 
                          object-cover 
                          transition-transform duration-500 
                          hover:scale-105
                        "
                      />
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
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
              {
                text: "We believe in the lifelong learning process.",
                icon: <BookOpen className="w-5 h-5" />,
              },
              {
                text: "We believe that each individual is unique and has a different style of learning.",
                icon: <Users className="w-5 h-5" />,
              },
              {
                text: "We believe in honesty at work.",
                icon: <CheckCircle className="w-5 h-5" />,
              },
              {
                text: "We believe in respect for self and others.",
                icon: <Award className="w-5 h-5" />,
              },
              {
                text: "We believe that each individual must care for resources.",
                icon: <Globe className="w-5 h-5" />,
              },
              {
                text: "We believe in constructive competition and cooperation that benefits all.",
                icon: <Target className="w-5 h-5" />,
              },
              {
                text: "We believe that one should always instil a questioning spirit.",
                icon: <Eye className="w-5 h-5" />,
              },
            ].map((principle, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4 text-gray-700"
              >
                <span className="mt-1 text-primary">{principle.icon}</span>

                <p className="leading-relaxed font-medium">{principle.text}</p>
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
            <div className="flex justify-center ">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 bg-accent/20 rounded-3xl rotate-3" />
                <img
                  src="/principal.jpeg"
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
                  "It still smells good to me. In the pool of hypocrisy,
                  hegemony, and delusion, I again want to be a child and feel
                  the innocence that brings the very smile on the faces of
                  teachers and parents..."
                </p>

                <p>
                  "Moreover, we not only care for students with huge potential
                  but also with great dedication. We believe every child is
                  unique, and we are committed to nurturing what each student
                  deserves..."
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
              Have questions about admissions, programs, or guidance? Our team
              is here to help you take the next step toward a brighter academic
              future.
            </p>

            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-primary font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
