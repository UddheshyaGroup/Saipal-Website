import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  Users,
  Target,
  Clock,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Lightbulb,
  UserCheck,
  BookCheck,
  DollarSign,
  BarChart,
} from "lucide-react";

// --- Data ---

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

const NEB_IMAGES = [
  {
    url: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
    title: "Library Sessions",
    description: "Focused Learning Environment",
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/10/22/16/39/laboratory-498516_1280.jpg",
    title: "Science Labs",
    description: "Practical Experiments and Research",
  },
  {
    url: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
    title: "Management Workshops",
    description: "Developing Business Acumen",
  },
];

const SCHOOL_IMAGES = [
  {
    url: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_1280.jpg",
    title: "Creative Arts",
    description: "Unleashing Imagination",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/08/06/22/01/books-2596809_1280.jpg",
    title: "Early Reading",
    description: "Building Strong Foundations",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg",
    title: "Interactive Classrooms",
    description: "Engaging and Fun Learning",
  },
];

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

function ImageSlider({ images = ALEVEL_IMAGES }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(interval);
  });

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-3xl group">
        <div
          className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-12 text-white">
                <h3 className="text-xl font-bold sm:text-3xl md:text-4xl line-clamp-2">
                  {image.title}
                </h3>
                <p className="mt-1.5 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 line-clamp-3 max-w-[90%] sm:max-w-2xl">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-xl transition hover:bg-white/20 border border-white/20 md:left-6 md:p-3 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-xl transition hover:bg-white/20 border border-white/20 md:right-6 md:p-3 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentIndex
                ? "w-8 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute right-4 top-4 z-10 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

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
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold text-slate-700 w-[30%]">
              AS Level
            </th>
            <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold text-slate-700 w-[30%]">
              A Level
            </th>
            <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold text-slate-700 w-[40%]">
              PUM Range
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {grades.map((grade, index) => (
            <tr
              key={index}
              className="hover:bg-slate-50/50 transition-colors"
            >
              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-[10px] sm:text-xs text-center sm:text-left">
                {grade.as}
              </td>
              <td className="px-1 sm:px-2 py-3 text-slate-700 text-[10px] sm:text-xs text-center sm:text-left">
                {grade.aLevel}
              </td>
              <td className="px-1 sm:px-2 py-3 text-slate-600 text-[10px] sm:text-xs text-center sm:text-left">
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
            <tr
              key={index}
              className="hover:bg-slate-50/50 transition-colors"
            >
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

function ScholarshipCTA({
  title,
  description,
  link = "/scholarships",
  buttonText = "Apply Now",
}) {
  return (
    <section className="mt-8 p-10 sm:p-14 bg-accent rounded-3xl text-center text-white shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-blue-50 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
        {description}
      </p>
      <Link
        to={link}
        className="inline-flex items-center justify-center bg-white text-primary font-bold px-10 py-4 rounded-xl shadow-md hover:bg-blue-50 transition-all duration-300"
      >
        {buttonText}
        <span className="ml-2">→</span>
      </Link>
    </section>
  );
}

function Programs() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeStream, setActiveStream] = useState("science");
  const [activeTable, setActiveTable] = useState("medical");

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

  const getStreamColor = () => {
    switch (activeTable) {
      case "medical":
      case "engineering":
      case "management":
      case "humanities":
        return {
          gradient: "from-blue-600 to-blue-700",
          bg: "bg-blue-600",
          hover: "hover:bg-blue-50",
        };
      default:
        return {
          gradient: "from-blue-600 to-blue-700",
          bg: "bg-blue-600",
          hover: "hover:bg-blue-50",
        };
    }
  };

  const { gradient, hover } = getStreamColor();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white m-0">
      <div className="mx-auto w-full max-w-screen-2xl px-4 pt-5 pb-0 sm:px-6 sm:pt-16 sm:pb-0 lg:px-8">
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
              className={`group relative overflow-hidden rounded-2xl px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 ${activeTab === key
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

            {/* --- SECTION: CAMBRIDGE A-LEVELS (Unchanged) --- */}
            {activeTab === "alevels" && (
              <>
                <ImageSlider images={ALEVEL_IMAGES} />

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 p-8">
                    <div className="flex items-start gap-4 text-center sm:text-left flex-col sm:flex-row items-center sm:items-start">
                      <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-3 text-white shadow-lg">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-primary">
                        Why Cambridge A-Levels?
                      </h2>
                    </div>

                    <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-center sm:text-left">
                      <p>
                        The recognition of the qualification that is accepted
                        and valued by educational institutions and employers
                        worldwide is crucial. Cambridge syllabus are
                        world-class, flexible and focused on detailed study,
                        making them highly relevant qualifications in today's
                        context.
                      </p>
                      <p>
                        Examinations are conducted and moderated by UCLES
                        (University of Cambridge Local Examination Syndicate),
                        held every six months allowing students to prepare
                        effectively. A wide variety of subjects and syllabi are
                        available to meet students' needs from a global
                        perspective.
                      </p>

                      <div className="pt-4">
                        <h3 className="text-xl font-bold text-primary mb-3">
                          Recognition in Nepal
                        </h3>
                        <p>
                          GCE Advanced level courses are recognized by academic
                          institutions worldwide including Tribhuvan University,
                          Kathmandu University and other universities in Nepal.
                          According to TU handbook, A Level is equivalent to
                          grade 12.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-8">
                    <h3 className="text-2xl font-bold text-primary">
                      Course Structure
                    </h3>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <button
                        onClick={() => {
                          setActiveStream("science");
                          setActiveTable("medical");
                        }}
                        className={`rounded-xl py-3.5 font-semibold transition-all ${activeStream === "science"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                      >
                        Science
                      </button>
                      <button
                        onClick={() => {
                          setActiveStream("non-science");
                          setActiveTable("management");
                        }}
                        className={`rounded-xl py-3.5 font-semibold transition-all ${activeStream === "non-science"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                      >
                        Non-Science
                      </button>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {getStreamTables().map((stream) => (
                        <button
                          key={stream}
                          onClick={() => setActiveTable(stream)}
                          className={`rounded-xl py-3 text-sm font-semibold transition-all ${activeTable === stream
                            ? `bg-gradient-to-r ${gradient} text-white shadow-md`
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}
                        >
                          {stream.charAt(0).toUpperCase() + stream.slice(1)}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-200 max-w-full sm:max-w-2xl overflow-hidden">
                      <table className="w-full table-auto text-xs sm:text-sm">
                        <thead>
                          <tr
                            className={`bg-gradient-to-r ${gradient} text-white`}
                          >
                            <th className="px-1 sm:px-2 py-3 text-left font-bold w-[65%]">
                              Subject
                            </th>
                            <th className="px-1 sm:px-2 py-3 text-center font-bold w-[35%]">
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {getCurrentCourses().map((course, index) => (
                            <tr
                              key={index}
                              className={`border-b border-slate-100 last:border-0 transition-colors ${hover} ${index % 2 === 0 ? "bg-white" : "bg-slate-50"
                                }`}
                            >
                              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-[9px] sm:text-xs leading-tight sm:leading-normal">
                                {course.subject}
                              </td>
                              <td className="px-3 py-3 sm:px-6 sm:py-4">
                                <span
                                  className={`inline-flex rounded-full px-3 py-1 text-[10px] sm:text-xs font-semibold ${course.type === "Core"
                                    ? "bg-rose-100 text-rose-700"
                                    : "bg-amber-100 text-amber-700"
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

                    <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm text-slate-700 border border-blue-200 max-w-full sm:max-w-2xl mx-auto">
                      <span className="font-semibold">Note:</span> Students
                      choose 4 core subjects and can select additional subjects
                      based on their career goals and university requirements.
                    </div>
                  </div>
                </div>

                <div className="mt-16 space-y-8">
                  {[
                    {
                      title: "Why choose Cambridge A Levels at Saipal Academy?",
                      icon: Award,
                      content: `Saipal, in its 14 years' history has produced outstanding results. One of our students Risav Karna, achieved the World Top result in General Papers and twelve others have achieved Nepal Top awards in various subjects in different international examinations. Saipal is registered at the ministry of education for conducting Cambridge A Level courses. Saipal, with its Center Number NP715 is validated by University of Cambridge, UK. The students studying A Level courses are assured about the validity of their studies at Saipal Academy where the team of teaching faculty is striving for students' desirable results in their endeavors.`,
                    },
                    {
                      title: "Objective of Saipal A Level Program",
                      icon: Target,
                      content:
                        "The objective of Saipal A Level is to create an environment that would facilitate extensive learning opportunity and enable each individual to compete at home and abroad.",
                    },
                    {
                      title: "Admission Procedure",
                      icon: BookOpen,
                      content:
                        "Prospective students at Saipal A Level are required to sit for an entrance examination and interview. Candidates will be offered an admission, based on the admission committee's assessment taking into consideration of past academic performance, performance in the entrance examination, and the level of intelligence.",
                    },
                    {
                      title: "Eligibility for Enrollment",
                      icon: Users,
                      content:
                        "Students who is to pursue A Levels at Saipal Academy must have passed SEE or hold an equivalent degree (O Level, CBSE, and so on) to be eligible for admission.",
                    },
                    {
                      title: "Enrollment Procedure",
                      icon: BookOpen,
                      content:
                        "Admission are announced immediately after the completion of SEE examination each other. Prospective students are required to collect admission forms and sit for an entrance test. All applications must submit the following with the application form: Duly completed application form attached with two color passport sized photographs. Certified copies of relevant academic/professional qualification and transcripts. Application processing fee NRS. 1000/- (gets one Saipal T-shirt).",
                    },
                    {
                      title: "Examination System",
                      icon: BookOpen,
                      content:
                        "The AS and A Level final examinations are held twice a year in May/June and October/ November, the results of which are published in August and January respectively.",
                    },
                    {
                      title: "Grading System",
                      icon: Award,
                      content:
                        "Students are expected to take at least four subjects including English General Paper. They may take more than the required credits depending upon their interests and capabilities. Students are assessed on a grade scale from A* awarded for the highest level of achievement, to E indicating the minimum required performance to constitute as a pass. U stands for ungraded which is a fail.",
                    },
                    {
                      title: "Academic Session",
                      icon: Calendar,
                      content:
                        "Saipal A Level academic year begins in June and ends in May of the following year. The time and schedule of the whole session can be assessed in academic calendar.",
                    },
                    {
                      title: "Our Scholarships",
                      icon: Award,
                      content: `SAHSS has a provision of scholarships for the deserving and meritorious SEE graduates. The provision of scholarship is based on the score of SAHSS entrance score (50%) and SEE Score (50%) = 50 % of enrollment fee will be charged. Admission form charge Rs.500

                            Saipal A Level Scholarships
                                                
                            Merit Based:
                            • 100% tuition fee waiver for students scoring 4.0 in their SEE exams.*
                            • 100% tuition fee waiver for district toppers.*
                            • 75% scholarship for students who have topped the School in their SEE exams.*
                            • 25% tuition fee waiver for students scoring above 3.6 in their SEE exams.
                            • 20% tuition fee waiver for students scoring above 3.2 in their SEE exams.
                            • 15% tuition fee waiver for students scoring above 2.8 in their SEE exams.
                                                
                            Need Based:
                            • Special privileges for deprived students. (Ranging from 25% to 75% on Tuition Fees)
                            • Special privileges for students from Minority sectors. (Ranging from 25% to 75% on Tuition Fees)`,
                    },
                  ].map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <div
                        key={index}
                        className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="text-xl font-bold text-primary sm:text-2xl">
                              {section.title}
                            </h2>
                            <p className="mt-4 whitespace-pre-line text-slate-600 leading-relaxed break-words">
                              {section.content}
                            </p>

                            {section.title === "Grading System" && (
                              <div className="mt-8 flex justify-center sm:justify-start">
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

                <ScholarshipCTA
                  title="Apply for A-Level Scholarship"
                  description="Unlock your academic potential at Saipal Academy with our exclusive scholarship program. Limited spots available — apply today!"
                />
              </>
            )}

            {/* --- SECTION: NEB +2 --- */}
            {activeTab === "neb" && (
              <>
                <ImageSlider images={NEB_IMAGES} />

                <div className="mt-16 space-y-8">
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 p-4 sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 text-white shadow-lg shrink-0">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                          Why +2 at Saipal ?
                        </h2>
                        <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base break-words">
                          <p className="break-words">
                            One of the distinguishing features of our +2 program
                            is the emphasis on holistic professional growth. We
                            encourage every student to develop their unique
                            potential rather than solely focusing on grades.
                            What matters most is the aptitude and attitude to
                            excel in one's chosen field. At Saipal, we provide a
                            platform for students to explore their strengths and
                            identify core competencies, facilitated by optimal
                            class sizes and close mentorship from experienced
                            faculty.
                          </p>
                          <p className="break-words">
                            Saipal Academy emphasizes a student-centered,
                            interactive approach to learning. To deepen
                            understanding, students engage in practical
                            activities, research, and project work. Our
                            methodology includes laboratory experiments, journal
                            reviews, case studies, presentations, and group
                            discussions. We aim to equip every student with
                            confidence, self-respect, and dynamism, preparing
                            them to face real-world challenges and contribute
                            meaningfully to the nation's development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 text-white shadow-lg shrink-0">
                        <FileText className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                          Enrollment Procedures And Criteria
                        </h2>
                        <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base break-words">
                          <p className="break-words">
                            Students must have secured at least second division
                            in SEE exams or passed the O levels. Students must
                            visit the college with parents/guardians with
                            equivalent transfer/character certificate, mark
                            sheet, and 2 recent PP size photographs while
                            applying for the admission. Admission arrangements
                            are discussed in detail with parents and it is
                            carried out on the basis of entrance test followed
                            by an interview. Students must pass SAHSS entrance
                            test to be qualified for the admission. The final
                            selection is decided by the admission. The final
                            selection is decided by the selection committee of
                            the college. Students must fill in a commitment form
                            at the time of admission. Enrollment fee is only
                            charged once for the entire session.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <ClipboardCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Admission Requirement
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm sm:text-base">
                          {[
                            "2 pp size photographs",
                            "1 copy of the Birth Certificate",
                            "School Transfer Certificate",
                            "Photocopy of the Last school Results",
                            "Filled Application Form",
                          ].map((item, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-3 text-slate-600"
                            >
                              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Career Prospect
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                          After successful completion of the +2 program at
                          SAIPAL ACADEMY, our students are ready to face the
                          real world and choose any field they want to pursue
                          they career in. With our world-class education
                          facility the students are fully accomplished to study
                          in any university here in Nepal or abroad as well. We
                          also, provide career counseling services to our
                          students in case they are confused on making a career
                          choice.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <BarChart className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Evaluation
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                          SAHSS has its own system of internal evaluation for
                          the assessment of the student. They must take terminal
                          tests, involve in classroom presentation and complete
                          every home assignment. Student should mandatorily
                          attend and pass terminal and pre-board examination.
                          The external evaluations are set by the HSEB.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Career Guidance And Counseling
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                          In today’s competitive world, career guidance and
                          counseling is very important. At Saipal we counsel our
                          students for their future prospects. We believe that
                          career related tests, guidance, and other necessary
                          counseling are important for students hence, we
                          provide our expertise to pave the way for student’s
                          career in multidisciplinary areas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <UserCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Advisory Council
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                          We have eminent personalities from different walks of
                          life in our advisory board who regularly provide
                          expert suggestions on academic matters. We also invite
                          experts from different professions to interact and
                          share their experiences among students.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <BookCheck className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Teaching Learning Methods & Techniques
                        </h2>
                        <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Lectures followed by discussion.</li>
                            <li>
                              Daily, Weekly or Monthly assignment / Paper
                              presentation
                            </li>
                            <li>Home assignment / project work</li>
                            <li>Individual counseling</li>
                            <li>Psychological counseling</li>
                            <li>Use of ICT (Audio Video aids)</li>
                            <li>Educational tours / Excursions</li>
                            <li>
                              Provision of visiting classes from renowned
                              personalities.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          College Timings
                        </h2>
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-white max-w-full overflow-hidden">
                          <table className="w-full table-auto text-xs sm:text-sm">
                            <thead className="bg-blue-600 text-white">
                              <tr>
                                <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold w-[40%]">
                                  Shift
                                </th>
                                <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold w-[60%]">
                                  Time
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-center sm:text-left text-[10px] sm:text-xs">
                                  Morning
                                </td>
                                <td className="px-1 sm:px-2 py-3 text-slate-600 text-center sm:text-left text-[10px] sm:text-xs">
                                  6:30 AM – 11:30 AM
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-center sm:text-left text-[10px] sm:text-xs">
                                  Day
                                </td>
                                <td className="px-1 sm:px-2 py-3 text-slate-600 text-center sm:text-left text-[10px] sm:text-xs">
                                  11:00 AM – 4:45 PM
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <DollarSign className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          Scholarship Information
                        </h2>

                        <div className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                          <p>
                            SAHSS provides scholarships for deserving and
                            meritorious SEE graduates. Scholarships are
                            calculated based on:
                          </p>

                          <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                            <li>50% SAHSS Entrance Score</li>
                            <li>50% SEE Examination Score</li>
                          </ul>

                          <div className="mt-4 space-y-2 text-slate-700">
                            <p>
                              <span className="font-semibold">
                                Enrollment Fee:
                              </span>{" "}
                              50% will be charged
                            </p>
                            <p>
                              <span className="font-semibold">
                                Admission Form Fee:
                              </span>{" "}
                              Rs. 500
                            </p>
                          </div>

                          <div className="mt-5 space-y-5">
                            {/* Merit Based */}
                            <div className="break-words">
                              <h3 className="font-semibold text-primary text-lg">
                                Merit-Based Scholarships
                              </h3>
                              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1 text-sm sm:text-base">
                                <li>
                                  100% tuition fee waiver for SEE GPA 4.0
                                  holders*
                                </li>
                                <li>
                                  100% tuition fee waiver for district toppers*
                                </li>
                                <li>75% scholarship for school toppers*</li>
                                <li>
                                  25% tuition fee waiver for GPA above 3.6
                                </li>
                                <li>
                                  20% tuition fee waiver for GPA above 3.2
                                </li>
                                <li>
                                  15% tuition fee waiver for GPA above 2.8
                                </li>
                              </ul>
                            </div>

                            {/* Need Based */}
                            <div className="break-words">
                              <h3 className="font-semibold text-primary text-lg">
                                Need-Based Scholarships
                              </h3>
                              <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1 text-sm sm:text-base">
                                <li>
                                  25%–75% tuition fee support for deprived
                                  students
                                </li>
                                <li>
                                  25%–75% tuition fee support for students from
                                  minority sectors
                                </li>
                              </ul>
                            </div>
                          </div>

                          <p className="mt-4 text-[12px] text-slate-500">
                            *Terms and conditions apply.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 hover:shadow-md hover:border-blue-200 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-blue-100 p-2 sm:p-2.5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold text-primary sm:text-2xl">
                          NEB Grading System (2078)
                        </h2>

                        <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                          The Government of Nepal has introduced a new letter
                          grading system (2078), applicable from Grade 1 to
                          Grade 12. One credit hour equals 32 hours of
                          teaching-learning activities. The pass mark is 35%.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                      <table className="w-full table-auto text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="px-1 sm:px-2 py-3 text-center sm:text-left font-bold text-slate-700 w-[8%]">
                              #
                            </th>
                            <th className="px-1 sm:px-2 py-3 text-left font-bold text-slate-700 w-[24%]">
                              Score
                            </th>
                            <th className="px-1 sm:px-2 py-3 text-center font-bold text-slate-700 w-[14%]">
                              GP
                            </th>
                            <th className="px-1 sm:px-2 py-3 text-center font-bold text-slate-700 w-[14%]">
                              Grade
                            </th>
                            <th className="px-1 sm:px-2 py-3 text-left font-bold text-slate-700 w-[40%]">
                              Evaluation
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            ["1", "90 and above", "4.0", "A+", "Outstanding"],
                            ["2", "80 – 90", "3.6", "A", "Excellent"],
                            ["3", "70 – 80", "3.2", "B+", "Very Good"],
                            ["4", "60 – 70", "2.8", "B", "Good"],
                            ["5", "50 – 60", "2.4", "C+", "Satisfactory"],
                            ["6", "40 – 50", "2.0", "C", "Acceptable"],
                            ["7", "35 – 40", "1.6", "D", "Basic"],
                            ["8", "Below 35", "—", "NG", "Not Graded"],
                          ].map((row, index) => (
                            <tr
                              key={index}
                              className="hover:bg-slate-50 transition-colors group"
                            >
                              <td className="px-1 sm:px-2 py-3 text-slate-400 font-medium text-[9px] sm:text-xs text-center sm:text-left">
                                {row[0]}
                              </td>
                              <td className="px-1 sm:px-2 py-3 font-semibold text-slate-900 text-[10px] sm:text-xs">
                                {row[1]}
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-center">
                                <span className="inline-flex rounded-lg bg-blue-50 px-1 py-0.5 font-bold text-blue-600 text-[9px] sm:text-xs">
                                  {row[2]}
                                </span>
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-center text-[10px] sm:text-sm font-bold text-slate-900">
                                {row[3]}
                              </td>
                              <td className="px-1 sm:px-2 py-3 text-slate-600 font-medium sm:font-normal text-[9px] sm:text-xs leading-tight sm:leading-normal">
                                {row[4]}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="mt-4 text-[11px] text-slate-500 italic">
                      * Pass mark is 35%. Students scoring below this are marked
                      as Non-Graded (NG).
                    </p>
                  </div>
                </div>

                <ScholarshipCTA
                  title="Apply for NEB +2 scholarship"
                  description="Elevate your academic journey with our merit and need-based scholarships. Secure your future at Saipal Academy today."
                />
              </>
            )}

            {/* --- SECTION: SCHOOL LEVEL --- */}
            {activeTab === "school" && (
              <>
                <ImageSlider images={SCHOOL_IMAGES} />

                <div className="mt-16 space-y-8">
                  <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 p-4 sm:p-8">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-2 sm:p-3 text-white shadow-lg shrink-0">
                        <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
                          Why Saipal School?
                        </h2>
                        <div className="mt-6 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base break-words">
                          <p className="break-words">
                            One of the best USPs (Unique Selling Proposition) or
                            distinguishing features of the school is that every
                            child is encouraged to grow in a healthy manner. The
                            best part of the school lies in the fact that each
                            student is encouraged to sharpen his/her inner
                            talents and not just focus on scoring higher grades.
                            What matters is not the grades rather the aptitude
                            and the attitude to excel in what one does best.
                          </p>

                          <p className="break-words">
                            At Saipal we simply provide a platform to explore
                            oneself and identity his/her core competence to
                            capitalize on it. This is facilitated by the same
                            sized classrooms, close and intimate relationship
                            between teachers and students and sufficient space
                            to participate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ScholarshipCTA
                  title="Begin Your Journey at Saipal"
                  description="Shape your child's future with a strong academic foundation. Contact our admissions desk to learn more about our school programs."
                  link="/admissions"
                  buttonText="Learn More"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Programs;
