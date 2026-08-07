import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cmsService, cmsBus } from "../services/cmsService";

export default function SchoolScholarships() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    cmsService.getScholarships("school").then(setScholarships);
    const handleCmsChange = () => cmsService.getScholarships("school").then(setScholarships);
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Rewarding Merit &amp; Talent
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Scholarships &amp; Financial Aid
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Ensuring deserving students have access to quality K-10 education regardless of financial background.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Scholarship Cards from CMS */}
        <section>
          {scholarships.length === 0 ? (
            <div className="text-center text-slate-400 py-16">
              <p className="text-lg font-semibold">No scholarship schemes listed yet.</p>
              <p className="text-sm mt-1">Please check back later or contact the school office.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {scholarships.map((sch, i) => (
                <div
                  key={sch.id}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">
                      Scheme 0{i + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#2E3192]">{sch.title}</h3>
                    <div className="inline-block bg-[#00AEEF]/10 text-[#00AEEF] font-bold text-xs px-3 py-1 rounded-full border border-[#00AEEF]/20">
                      {sch.coverage}
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {sch.eligibility}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      to="/school/admissions"
                      className="text-xs font-bold text-[#00AEEF] hover:underline"
                    >
                      Inquire for Scholarship →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* How to Apply */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2E3192]">
              Scholarship Application Steps
            </h2>
            <p className="text-slate-600 text-sm">Follow these steps to apply for scholarship aid.</p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              "Submit Admission Inquiry Form with student's previous grade report cards.",
              "Appear for Saipal School Scholarship Assessment Test & Personal Interaction.",
              "Submit Income Verification or Achievement Certificates (if applying for need or sports aid).",
              "Scholarship Committee evaluates application and publishes awarded tuition waiver results.",
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#00AEEF] shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/school/admissions"
              className="inline-block bg-[#00AEEF] hover:bg-[#0096ce] text-white font-bold px-8 py-3.5 rounded-xl shadow transition"
            >
              Start Scholarship Application
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
