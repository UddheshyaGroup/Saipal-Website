import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cmsService, cmsBus } from "../services/cmsService";

export default function SchoolPrograms() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    cmsService.getPrograms("school").then(setPrograms);
    const handleCmsChange = () => cmsService.getPrograms("school").then(setPrograms);
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Academic Excellence (K – Grade 10)
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Programs &amp; Curriculum
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Integrating national educational standards with practical STEAM projects, character building, and individual mentorship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {programs.length === 0 && (
          <div className="text-center text-slate-400 py-20">
            <p className="text-lg font-semibold">No programs found.</p>
            <p className="text-sm mt-1">Add school programs via the Admin Panel.</p>
          </div>
        )}

        {programs.map((prog, idx) => (
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
                {prog.badge}
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

              {prog.details && (
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  {prog.details}
                </p>
              )}

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
