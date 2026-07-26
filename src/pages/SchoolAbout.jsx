import { Link } from "react-router-dom";

export default function SchoolAbout() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* ================= PAGE HEADER BANNER ================= */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Saipal School • About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Empowering the Next Generation
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Dedicated to providing holistic K–10 education where academic rigor, moral values, STEAM innovation, and well-being thrive together.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Principal Message */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 h-72 sm:h-80 rounded-xl overflow-hidden shadow-sm bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
              alt="Principal Dr. Suresh Sharma"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
              Principal's Welcome Note
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">
              "Every Child Harbors Unique Potential Waiting to Flourish"
            </h2>
            <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Saipal School, our philosophy is simple: education should be a journey of curiosity, discovery, and deep-rooted character values. We aim to equip students not only for academic excellence but for real-world leadership.
              </p>
              <p>
                Our K-10 curriculum blends Nepal's National Education Board standards with practical STEAM projects, coding, public speaking, and physical sports.
              </p>
            </div>
            <div className="pt-2">
              <div className="font-bold text-slate-900 text-sm">Dr. Suresh Sharma</div>
              <div className="text-xs text-slate-500">Principal, Saipal School</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">Our Purpose</span>
            <h3 className="text-2xl font-bold text-[#2E3192]">Our Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To cultivate an inclusive, creative, and academically rigorous environment where students develop critical thinking, self-confidence, and social responsibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">Our Aspiration</span>
            <h3 className="text-2xl font-bold text-[#2E3192]">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be Nepal's leading K–10 institution recognized for innovation in STEAM education, character excellence, and preparing compassionate future leaders.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-[#2E3192]">Our Core Values</h2>
            <p className="text-slate-600 text-sm">The principles that guide our everyday school culture.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Integrity (सत्य)", desc: "Honesty, ethics, and strong moral grounding in every student." },
              { title: "Curiosity (जिज्ञासा)", desc: "Encouraging active questioning, scientific inquiry, and discovery." },
              { title: "Resilience (दृढता)", desc: "Building perseverance, problem-solving confidence, and grit." },
              { title: "Compassion (करुणा)", desc: "Promoting empathy, teamwork, and community service." },
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
                <h4 className="font-bold text-base text-slate-900">{val.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">Join Saipal School</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Schedule a campus visit or talk to our admissions team to learn more about our school programs.
          </p>
          <div className="pt-2">
            <Link
              to="/school/admissions"
              className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-8 py-3.5 rounded-xl shadow transition"
            >
              Apply for Admissions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
