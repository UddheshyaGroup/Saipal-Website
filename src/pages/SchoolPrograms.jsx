import { Link } from "react-router-dom";
import { SCHOOL_LEVELS } from "../data/schoolData";

export default function SchoolPrograms() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Academic Excellence (K – Grade 10)
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Programs & Curriculum
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Integrating national educational standards with practical STEAM projects, character building, and individual mentorship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {SCHOOL_LEVELS.map((prog, idx) => (
          <div
            key={prog.id}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Image */}
            <div className="lg:col-span-5 h-64 sm:h-80 rounded-xl overflow-hidden relative bg-slate-100">
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#2E3192] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                {prog.age}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                  Level {idx + 1} Curriculum
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192] mt-1">
                  {prog.title}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {prog.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Curriculum Highlights:
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {prog.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/school/admissions"
                  className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow"
                >
                  Apply for This Grade Level
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
