import { Link } from "react-router-dom";

export default function SchoolAdmissions() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Academic Year 2026-2027
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Saipal School Admissions
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Applications open for Pre-Primary (Playgroup to UKG) through Grade 9. Join a nurturing academic community built on care and excellence.
          </p>
          <div className="pt-4">
            <Link
              to="/school/enquiry"
              className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-8 py-3.5 rounded-xl shadow transition"
            >
              Fill Online School Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Admission Steps */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-[#2E3192]">4-Step Admission Procedure</h2>
            <p className="text-slate-600 text-sm">Clear, straightforward guidance for enrolling your child.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Submit Inquiry",
                desc: "Fill out the online inquiry form or visit the admissions office for prospectus details.",
              },
              {
                step: "02",
                title: "Campus Interaction",
                desc: "Schedule an informal interaction (Pre-Primary) or placement assessment (Grade 1-9).",
              },
              {
                step: "03",
                title: "Document Review",
                desc: "Submit previous marksheets, birth certificate, transfer certificate, and photos.",
              },
              {
                step: "04",
                title: "Seat Confirmation",
                desc: "Complete fee payment formalities to confirm your child's enrollment seat.",
              },
            ].map((st, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3"
              >
                <span className="text-2xl font-black text-[#00AEEF] block">{st.step}</span>
                <h3 className="font-bold text-lg text-slate-900">{st.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents & Office Hours */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">Requirements</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192] mt-1">Required Documents</h2>
            </div>
            <ul className="space-y-3 text-slate-700 text-sm">
              {[
                "Copy of Birth Certificate",
                "Copy of Last Grade Progress Report / Marksheet",
                "Original Transfer Certificate (TC) from previous school",
                "4 recent Passport-size photographs of the student",
                "Photocopy of Parent's Citizenship / National ID",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00AEEF]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200/80 space-y-6">
            <h3 className="text-xl font-bold text-[#2E3192]">Contact Admissions Desk</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our admissions counselors are available Sunday through Friday, 8:00 AM – 4:00 PM.
            </p>
            <div className="space-y-2 text-sm text-slate-800 font-semibold">
              <div>Phone: +977-01-4378154 / +977-01-4378155</div>
              <div>Email: school@saipal.edu.np</div>
            </div>
            <Link
              to="/school/enquiry"
              className="block w-full text-center bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold py-3.5 rounded-xl shadow transition"
            >
              Fill Online School Inquiry Form
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
