import { Link } from "react-router-dom";
import { SCHOOL_CLUBS } from "../data/schoolData";

export default function SchoolActivities() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Beyond the Classroom
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Clubs & Co-Curricular Life
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Learning at Saipal School extends to sports grounds, robotics arenas, drama stages, and community outreach.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Clubs Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-[#2E3192]">Active Student Clubs</h2>
            <p className="text-slate-600 text-sm">Weekly sessions nurturing talent, teamwork, and leadership.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOL_CLUBS.map((club, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
                      {club.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{club.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {club.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-slate-400">
                  Weekly Activity Program
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Annual Events */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-[#2E3192]">Annual Landmark Events</h2>
            <p className="text-slate-600 text-sm">Major annual highlights on our school academic calendar.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Sports Meet",
                date: "February",
                desc: "Inter-house track events, futsal, taekwondo demonstrations, and cheer competitions.",
              },
              {
                title: "Science & STEAM Fair",
                date: "November",
                desc: "Student robotics demonstrations, environmental models, and coding projects.",
              },
              {
                title: "Cultural & Parents Day",
                date: "December",
                desc: "Nepali folk dances, musical performances, drama play, and academic awards.",
              },
            ].map((evt, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">{evt.title}</span>
                  <span className="text-xs font-bold bg-[#2E3192] text-white px-2.5 py-0.5 rounded-full">
                    {evt.date}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{evt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">Experience Student Life</h2>
          <p className="text-slate-600 text-sm max-w-lg mx-auto">
            Discover how Saipal School balances academic excellence with physical fitness and creative expression.
          </p>
          <div className="pt-2">
            <Link
              to="/school/admissions"
              className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-8 py-3.5 rounded-xl shadow transition"
            >
              Inquire for Admissions
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
