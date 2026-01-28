import { useState } from "react";
import {
  GraduationCap,
  Award,
  Target,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";
import { ImageSlider, ScholarshipCTA } from "./SharedComponents";

const ALEVEL_IMAGES = [
  {
    url: "https://thumbs.dreamstime.com/b/young-athletes-school-sports-team-holding-winning-trophy-kids-champion-sport-team-boys-holding-prize-cup-140370756.jpg",
    title: "Winners",
    description: "Inter School Basketball Tournament",
  },
  {
    url: "https://news.clemson.edu/wp-content/uploads/2024/05/CECAS-Freshmen-Orientation_106_AJ-scaled.jpg",
    title: "Orientation Day",
    description: "Welcoming New Students",
  },
  {
    url: "https://i0.wp.com/www.thebirdonfire.org/wp-content/uploads/2023/12/IMG_5464-scaled.jpeg?ssl=1",
    title: "Poem Competition",
    description: "Expressing through Words",
  },
];

const medicalCourses = [
  { subject: "English General Paper", type: "Core" },
  { subject: "Physics", type: "Core" },
  { subject: "Chemistry", type: "Core" },
  { subject: "Biology", type: "Core" },
  { subject: "Mathematics", type: "Additional" },
];

const engineeringCourses = [
  { subject: "English General Paper", type: "Core" },
  { subject: "Physics", type: "Core" },
  { subject: "Chemistry", type: "Core" },
  { subject: "Mathematics", type: "Core" },
  { subject: "Computer Science", type: "Additional" },
];

const managementCourses = [
  { subject: "English General Paper", type: "Core" },
  { subject: "Accounting", type: "Core" },
  { subject: "Economics", type: "Core" },
  { subject: "Business Studies", type: "Core" },
  { subject: "Computer Science", type: "Additional" },
  { subject: "Mathematics", type: "Additional" },
];

const humanitiesCourses = [
  { subject: "English General Paper", type: "Core" },
  { subject: "Economics", type: "Core" },
  { subject: "Sociology", type: "Core" },
  { subject: "Psychology", type: "Core" },
  { subject: "Mathematics", type: "Additional" },
  { subject: "Computer Science", type: "Additional" },
  { subject: "Business", type: "Additional" },
  { subject: "Accounting", type: "Additional" },
];

function ALevelGradingTable() {
  const grades = [
    { as: "A", aLevel: "A*", pum: "90 – 100" },
    { as: "A", aLevel: "A", pum: "80 – 89" },
    { as: "B", aLevel: "B", pum: "70 – 79" },
    { as: "C", aLevel: "C", pum: "60 – 69" },
    { as: "D", aLevel: "D", pum: "50 – 59" },
    { as: "E", aLevel: "E", pum: "40 – 49" },
    { as: "U", aLevel: "U", pum: "Below 40" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white max-w-full overflow-hidden">
      <table className="w-full table-auto text-xs sm:text-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[30%]">
              AS Level
            </th>
            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[30%]">
              A Level
            </th>
            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[40%]">
              PUM Range
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {grades.map((grade, index) => (
            <tr key={index} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-[9px] sm:text-xs leading-tight sm:leading-normal text-left">
                {grade.as}
              </td>
              <td className="px-1 sm:px-2 py-3 text-slate-600 text-[9px] sm:text-xs leading-tight sm:leading-normal text-left">
                {grade.aLevel}
              </td>
              <td className="px-1 sm:px-2 py-3 text-slate-600 text-[9px] sm:text-xs leading-tight sm:leading-normal text-left">
                {grade.pum}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AcademicSessionTable() {
  const schedule = [
    { label: "Session Start", period: "June Onwards" },
    { label: "Term 1 Regular Classes", period: "June, July, August" },
    { label: "Term 1 Exam", period: "September" },
    {
      label: "Term 2 Regular Classes",
      period: "September, October, November, December, January",
    },
    { label: "Term 2 Exam", period: "January" },
    { label: "Term 3 Regular Classes", period: "January, February, March" },
    { label: "Term 3 Exam", period: "April" },
    {
      label: "Cambridge International Examinations (Final Exams)",
      period: "May – June",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white max-w-full overflow-hidden">
      <table className="w-full table-auto text-xs sm:text-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[50%]">
              Academic Activity
            </th>
            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[50%]">
              Time Period
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {schedule.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-[9px] sm:text-xs leading-tight sm:leading-normal">
                {item.label}
              </td>
              <td className="px-1 sm:px-2 py-3 text-slate-600 text-[9px] sm:text-xs leading-tight sm:leading-normal">
                {item.period}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ALevelSection() {
  const [activeStream, setActiveStream] = useState("science");
  const [activeTable, setActiveTable] = useState("medical");

  const getStreamTables = () => {
    return activeStream === "science"
      ? ["medical", "engineering"]
      : ["management", "humanities"];
  };

  const getCurrentCourses = () => {
    switch (activeTable) {
      case "medical":
        return medicalCourses;
      case "engineering":
        return engineeringCourses;
      case "management":
        return managementCourses;
      case "humanities":
        return humanitiesCourses;
      default:
        return medicalCourses;
    }
  };

  return (
    <>
      <ImageSlider images={ALEVEL_IMAGES} />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* WHY A LEVEL */}
        <div className="group relative overflow-hidden rounded-[2.5rem] bg-accent py-8 pl-8 pr-4 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />

          <div className="relative z-10">
            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md shadow-inner">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Why Cambridge A-Levels?
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-blue-50/90 leading-relaxed">
              <p className="text-base sm:text-lg font-medium">
                The recognition of the qualification that is accepted and valued
                by educational institutions and employers worldwide is crucial.
                Cambridge syllabus are world-class, flexible and focused on
                detailed study.
              </p>

              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">
                  Recognition in Nepal
                </h3>
                <p className="font-medium text-blue-50/90">
                  GCE Advanced level courses are recognized by academic
                  institutions worldwide including TU and KU. A Level is
                  equivalent to grade 12 in Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COURSE STRUCTURE */}
        <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white py-8 pl-8 pr-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1.5 w-8 rounded-full bg-blue-600" />
            <h3 className="text-2xl font-bold text-primary">
              Course Structure
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setActiveStream("science");
                setActiveTable("medical");
              }}
              className={`group relative overflow-hidden rounded-2xl py-4 font-bold transition-all duration-300 ${activeStream === "science"
                ? "bg-primary text-white shadow-lg shadow-blue-200"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
            >
              Science
            </button>
            <button
              onClick={() => {
                setActiveStream("non-science");
                setActiveTable("management");
              }}
              className={`group relative overflow-hidden rounded-2xl py-4 font-bold transition-all duration-300 ${activeStream === "non-science"
                ? "bg-primary text-white shadow-lg shadow-blue-200"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
            >
              Non-Science
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {getStreamTables().map((stream) => (
              <button
                key={stream}
                onClick={() => setActiveTable(stream)}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-300 ${activeTable === stream
                  ? "bg-blue-50 text-blue-600 ring-2 ring-blue-500/20"
                  : "text-slate-500 hover:bg-slate-50"
                  }`}
              >
                {stream.charAt(0).toUpperCase() + stream.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="px-5 py-4 text-left font-bold text-slate-900">
                    Subject
                  </th>
                  <th className="px-5 py-4 text-center font-bold text-slate-900">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {getCurrentCourses().map((course, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-white group/row"
                  >
                    <td className="px-5 py-4 font-medium text-slate-700 text-sm sm:text-base">
                      {course.subject}
                    </td>
                    <td className="px-5 py-4 text-center text-xs">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 font-bold ${course.type === "Core"
                          ? "bg-rose-50 text-rose-600"
                          : "bg-amber-50 text-amber-600"
                          }`}
                      >
                        {course.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-50/50 p-4 text-sm font-medium text-blue-700 border border-blue-100/50">
            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <p>
              <span className="font-bold">Note:</span> Choose 4 core subjects
              plus electives.
            </p>
          </div>
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Why choose Cambridge A Levels at Saipal Academy?",

            content: `Saipal, in its 14 years' history has produced outstanding results. One of our students Risav Karna, achieved the World Top result in General Papers and twelve others have achieved Nepal Top awards in various subjects in different international examinations. Saipal is registered at the ministry of education for conducting Cambridge A Level courses. Saipal, with its Center Number NP715 is validated by University of Cambridge, UK. The students studying A Level courses are assured about the validity of their studies at Saipal Academy where the team of teaching faculty is striving for students' desirable results in their endeavors.`,
          },
          {
            title: "Objective of Saipal A Level Program",

            content:
              "The objective of Saipal A Level is to create an environment that would facilitate extensive learning opportunity and enable each individual to compete at home and abroad.",
          },
          {
            title: "Eligibility for Enrollment",

            content:
              "Students who is to pursue A Levels at Saipal Academy must have passed SEE or hold an equivalent degree (O Level, CBSE, and so on) to be eligible for admission.",
          },
          {
            title: "Admission Procedure",

            content:
              "Prospective students at Saipal A Level are required to sit for an entrance examination and interview. Candidates will be offered an admission, based on the admission committee's assessment taking into consideration of past academic performance, performance in the entrance examination, and the level of intelligence.",
          },
          {
            title: "Examination System",

            content:
              "The AS and A Level final examinations are held twice a year in May/June and October/ November, the results of which are published in August and January respectively.",
          },
          {
            title: "Enrollment Procedure",

            content:
              "Admission are announced immediately after the completion of SEE examination each other. Prospective students are required to collect admission forms and sit for an entrance test. All applications must submit the following with the application form: Duly completed application form attached with two color passport sized photographs. Certified copies of relevant academic/professional qualification and transcripts. Application processing fee NRS. 1000/- (gets one Saipal T-shirt).",
          },
          {
            title: "Grading System",

            content:
              "Students are expected to take at least four subjects including English General Paper. They may take more than the required credits depending upon their interests and capabilities. Students are assessed on a grade scale from A* awarded for the highest level of achievement, to E indicating the minimum required performance to constitute as a pass. U stands for ungraded which is a fail.",
          },
          {
            title: "Academic Session",

            content:
              "Saipal A Level academic year begins in June and ends in May of the following year. The time and schedule of the whole session can be assessed in academic calendar.",
          },
        ].map((section, index) => {
          const isFullWidth = [
            "Why choose Cambridge A Levels at Saipal Academy?",
            "Enrollment Procedure",
            "Grading System",
            "Academic Session",
          ].includes(section.title);

          const isSpecialBg =
            section.title ===
            "Why choose Cambridge A Levels at Saipal Academy?";

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[2.5rem] py-8 pl-8 pr-4 transition-all duration-500 hover:-translate-y-2 ${isFullWidth ? "md:col-span-2" : ""
                } ${isSpecialBg
                  ? "bg-accent text-white shadow-xl"
                  : "bg-white border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]"
                }`}
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative z-10 flex items-start gap-6">
                {/* <div
                  className={`rounded-2xl p-4 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    isSpecialBg
                      ? "bg-white/20 text-white backdrop-blur-md"
                      : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                  }`}
                ></div> */}

                <div className="flex-1 min-w-0">
                  <h2
                    className={`text-2xl font-bold mb-4 ${isSpecialBg ? "text-white" : "text-primary"
                      }`}
                  >
                    {section.title}
                  </h2>

                  <div
                    className={`whitespace-pre-line break-words leading-relaxed text-sm sm:text-base font-medium ${isSpecialBg ? "text-blue-50" : "text-slate-600"
                      }`}
                  >
                    <p>{section.content}</p>
                  </div>

                  {section.title === "Grading System" && (
                    <div className="mt-8">
                      <ALevelGradingTable />
                    </div>
                  )}

                  {section.title === "Academic Session" && (
                    <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-10">
                      <div className="rounded-2xl border border-slate-200 bg-white max-w-full overflow-hidden">
                        <table className="w-full table-auto text-xs sm:text-sm">
                          <thead className="bg-blue-600 text-white">
                            <tr>
                              <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold w-[45%]">
                                Category
                              </th>
                              <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold w-[55%]">
                                Details
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-center sm:text-left text-[10px] sm:text-xs">
                                Class Duration
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-slate-600 text-center sm:text-left text-[10px] sm:text-xs">
                                45 Minutes
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-center sm:text-left text-[10px] sm:text-xs">
                                Class Hours
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-slate-600 text-center sm:text-left text-[10px] sm:text-xs">
                                11:00 AM – 5:00 PM
                              </td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-center sm:text-left text-[10px] sm:text-xs">
                                Running Days
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-slate-600 text-center sm:text-left text-[10px] sm:text-xs">
                                Sunday to Friday
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <AcademicSessionTable />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SCHOLARSHIP */}
      <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white py-8 pl-8 pr-4 mt-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.12)]">
        <div className="relative z-10 flex items-start gap-6">


          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Our Scholarships
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base">
              SAHSS provides scholarships for deserving and meritorious SEE
              graduates. Scholarship evaluation is based on{" "}
              <b className="font-semibold text-slate-800">
                50% SAHSS Entrance Score
              </b>{" "}
              and
              <b className="font-semibold text-slate-800"> 50% SEE Score</b>.
              Only 50% of the enrollment fee is charged. Admission form fee:{" "}
              <b className="font-semibold">Rs. 500</b>.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
              <div className="space-y-4">
                <h3 className="font-bold text-indigo-600 flex items-center gap-2">
                  <div className="h-1 w-4 rounded-full bg-indigo-600" />
                  Merit-Based Scholarships
                </h3>

                <ul className="space-y-2 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  <li>• 100% tuition fee waiver for SEE GPA 4.0*</li>
                  <li>• 100% tuition fee waiver for district toppers*</li>
                  <li>• 75% scholarship for school toppers*</li>
                  <li>• 25% tuition fee waiver for SEE GPA above 3.6</li>
                  <li>• 20% tuition fee waiver for SEE GPA above 3.2</li>
                  <li>• 15% tuition fee waiver for SEE GPA above 2.8</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-purple-600 flex items-center gap-2">
                  <div className="h-1 w-4 rounded-full bg-purple-600" />
                  Need-Based Scholarships
                </h3>

                <ul className="space-y-3 text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                  <li>
                    • Special privileges for deprived students
                    <span className="text-slate-800 font-semibold">
                      {" "}
                      (25% – 75% tuition support)
                    </span>
                  </li>
                  <li>
                    • Special privileges for students from minority sectors
                    <span className="text-slate-800 font-semibold">
                      {" "}
                      (25% – 75% tuition support)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400 font-medium">
              *Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
