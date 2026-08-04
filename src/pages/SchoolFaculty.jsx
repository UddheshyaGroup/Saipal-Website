import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cmsService, cmsBus } from "../services/cmsService";

export default function SchoolFaculty() {
  const [faculty, setFaculty] = useState(() => cmsService.getFaculty("school"));

  useEffect(() => {
    setFaculty(cmsService.getFaculty("school"));
    const handleCmsChange = () => setFaculty(cmsService.getFaculty("school"));
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Dedicated Educators & Leadership
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Saipal School Faculty
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Our qualified, passionate teachers are committed to nurturing each student's academic growth, creativity, and character.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Faculty Grid */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="h-64 bg-slate-100 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#2E3192] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {member.experience}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                    {member.role}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {member.qualification}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="mailto:school@saipal.edu.np"
                  className="block w-full text-center text-xs font-bold text-slate-700 bg-slate-50 hover:bg-[#2E3192] hover:text-white py-2.5 rounded-xl border border-slate-200 transition"
                >
                  Contact Mentor
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Professional Development */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">
            Continuous Faculty Development & Training
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            All educators at Saipal School regularly participate in professional workshops covering modern pedagogy, STEAM integration, child psychology, and inclusive learning.
          </p>
          <div className="pt-2">
            <Link
              to="/school/admissions"
              className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-8 py-3.5 rounded-xl shadow transition"
            >
              Meet Our Mentors In Person
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
