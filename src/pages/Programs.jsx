import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ALevelSection from "../components/Programs/ALevelSection";
import NebSection from "../components/Programs/NebSection";
import SchoolSection from "../components/Programs/SchoolSection";

// --- Data ---

const programData = {
  alevels: {
    title: "Cambridge A-Levels",
    description:
      "Our A-Level program offers internationally recognized curriculum that prepares students for top universities worldwide. Subjects include Physics, Chemistry, Mathematics, Business, and more.",
  },
  neb: {
    title: "(NEB) +2",
    description:
      "The NEB +2 program follows Nepal's national education standards, offering comprehensive courses in Science, Management, and Humanities tailored to prepare students for national and international university education.",
  },
  school: {
    title: "School Level",
    description:
      "Our school-level program (Grades 1-10) focuses on foundational knowledge and skills, ensuring a holistic development of every child in a nurturing environment.",
  },
};

function Programs() {
  const navigate = useNavigate();
  const location = useLocation();

  const hash = location.hash.replace("#", "");
  const activeTab = programData[hash] ? hash : "alevels";

  const handleTabChange = (key) => {
    navigate(`/programs#${key}`);
  };

  useEffect(() => {
    if (!hash) {
      navigate("/programs#alevels", { replace: true });
    }
  }, [hash, navigate]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white m-0">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Our Programs
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Choose the path that's right for your future
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {Object.keys(programData).map((key) => (
          <button
            key={key}
            onClick={() => handleTabChange(key)}
            className={`group relative overflow-hidden rounded-2xl px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 ${
              activeTab === key
                ? "bg-accent text-white shadow-lg ring-4 ring-blue-100"
                : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-50 shadow-sm"
            }`}
          >
            {programData[key].title}
          </button>
        ))}
      </div>

      <div className="mt-12">
        <div className="rounded-t-3xl bg-white p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200 border-b-0 overflow-hidden">
          <h2 className="text-3xl font-extrabold text-primary sm:text-4xl lg:text-5xl">
            {programData[activeTab].title}
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-5xl">
            {programData[activeTab].description}
          </p>

          {activeTab === "alevels" && <ALevelSection />}
          {activeTab === "neb" && <NebSection />}
          {activeTab === "school" && <SchoolSection />}
        </div>
      </div>
    </main>
  );
}

export default Programs;
