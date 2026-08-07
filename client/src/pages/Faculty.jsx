import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { cmsService, cmsBus } from "../services/cmsService";

function FacultyCard({ member }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center justify-between border border-slate-200">
      <div className="flex flex-col items-center">
        {member.image ? (
          <img src={member.image} alt={member.name} referrerPolicy="no-referrer" className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-[#00AEEF] shadow-sm" />
        ) : (
          <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-4 border-2 border-gray-200">
            <User size={48} className="text-gray-400" />
          </div>
        )}

        <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
        <p className="text-accent text-xs font-bold mt-0.5">{member.role}</p>
        <p className="text-gray-500 text-xs mt-1">{member.qualification}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 w-full text-center">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{member.experience || "Senior Faculty"}</span>
      </div>
    </div>
  );
}

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    cmsService.getFaculty("college").then(setFaculty);
    const handleCmsChange = () => cmsService.getFaculty("college").then(setFaculty);
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-gray-900 space-y-10 font-sans">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
          A-Levels & +2 Lecturers
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
          College Faculty & Mentors
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Meet our distinguished lecturers and subject specialists who guide Cambridge A-Levels and NEB +2 students toward academic excellence.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {faculty.map((member, i) => (
          <FacultyCard key={member.id || i} member={member} />
        ))}
      </div>
    </main>
  );
}
