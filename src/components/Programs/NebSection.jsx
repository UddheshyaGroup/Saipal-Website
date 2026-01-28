import { GraduationCap, FileText, ClipboardCheck, BarChart, Lightbulb, UserCheck, BookCheck, Clock, DollarSign, Award } from "lucide-react";
import { ImageSlider, ScholarshipCTA } from "./SharedComponents";

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

export default function NebSection() {
    return (
        <>
            <ImageSlider images={NEB_IMAGES} />

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-accent p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:rotate-6">
                            <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-3xl font-bold tracking-tight mb-6">
                                Why +2 at Saipal?
                            </h2>
                            <div className="space-y-6 text-blue-50/90 leading-relaxed text-base">
                                <p>
                                    One of the distinguishing features of our +2 program
                                    is the emphasis on holistic professional growth. We
                                    encourage every student to develop their unique
                                    potential rather than solely focusing on grades.
                                </p>
                                <p>
                                    Saipal Academy emphasizes a student-centered,
                                    interactive approach to learning. To deepen
                                    understanding, students engage in practical
                                    activities, research, and project work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                Enrollment Procedures And Criteria
                            </h2>
                            <div className="text-slate-600 font-medium leading-relaxed">
                                <p>
                                    Admission arrangements are discussed in detail with
                                    parents and it is carried out on the basis of
                                    entrance test followed by an interview. Students
                                    must pass SAHSS entrance test to be qualified for
                                    the admission. The final selection is decided by the
                                    selection committee of the college.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                Admission Requirement
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "2 pp size photographs",
                                    "1 copy of the Birth Certificate",
                                    "School Transfer Certificate",
                                    "Photocopy of the Last school Results",
                                    "Filled Application Form",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-slate-600 font-medium"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                Career Prospect
                            </h2>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                After successful completion of the +2 program, our
                                students are ready to study in any university in Nepal
                                or abroad. We also provide career counseling services.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                Evaluation
                            </h2>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                SAHSS has its own system of internal evaluation including
                                terminal tests, presentations and assignments. External
                                evaluations are set by the HSEB.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                Career Guidance And Counseling
                            </h2>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We provide expertise to pave the way for student's
                                career in multidisciplinary areas through guidance and
                                counseling.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                Advisory Council
                            </h2>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We have eminent personalities who provide expert
                                suggestions on academic matters and share their
                                experiences with students.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                Teaching Learning Methods & Techniques
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-slate-600 font-medium">
                                {[
                                    "Lectures followed by discussion",
                                    "Paper presentations",
                                    "Project work & Individual counseling",
                                    "Psychological counseling",
                                    "Use of ICT (Audio Video aids)",
                                    "Educational tours / Excursions",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                College Timings
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="px-6 py-4 text-left font-bold text-slate-900">Shift</th>
                                            <th className="px-6 py-4 text-left font-bold text-slate-900">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-white transition-colors">
                                            <td className="px-6 py-4 font-bold text-blue-600">Morning</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">6:30 AM – 11:30 AM</td>
                                        </tr>
                                        <tr className="hover:bg-white transition-colors">
                                            <td className="px-6 py-4 font-bold text-indigo-600">Day</td>
                                            <td className="px-6 py-4 text-slate-600 font-medium">11:00 AM – 4:45 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                Scholarship Information
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-blue-600 flex items-center gap-2">
                                        <div className="h-1 w-4 rounded-full bg-blue-600" />
                                        Merit-Based
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 font-medium text-sm">
                                        <li>• 100% waiver for GPA 4.0 or District Toppers</li>
                                        <li>• 75% for School Toppers</li>
                                        <li>• 15%–25% for GPA 2.8 and above</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-indigo-600 flex items-center gap-2">
                                        <div className="h-1 w-4 rounded-full bg-indigo-600" />
                                        Need-Based
                                    </h3>
                                    <p className="text-slate-600 font-medium text-sm">
                                        25%–75% tuition fee support for students from minority sectors or deprived backgrounds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-15px_rgba(59,130,246,0.1)]">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-primary mb-4">
                                NEB Grading System (2078)
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 mt-8">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="px-4 py-4 text-left font-bold text-slate-900">Score</th>
                                            <th className="px-4 py-4 text-center font-bold text-slate-900">GP</th>
                                            <th className="px-4 py-4 text-center font-bold text-slate-900">Grade</th>
                                            <th className="px-4 py-4 text-left font-bold text-slate-900">Evaluation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            ["90+", "4.0", "A+", "Outstanding"],
                                            ["80-90", "3.6", "A", "Excellent"],
                                            ["70-80", "3.2", "B+", "Very Good"],
                                            ["60-70", "2.8", "B", "Good"],
                                            ["50-60", "2.4", "C+", "Satisfactory"],
                                            ["40-50", "2.0", "C", "Acceptable"],
                                            ["Below 40", "<1.6", "D/NG", "Basic/NG"]
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white transition-colors">
                                                <td className="px-4 py-3 font-bold text-slate-700">{row[0]}</td>
                                                <td className="px-4 py-3 text-center text-blue-600 font-bold">{row[1]}</td>
                                                <td className="px-4 py-3 text-center text-indigo-600 font-bold">{row[2]}</td>
                                                <td className="px-4 py-3 text-slate-500 font-medium">{row[3]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ScholarshipCTA
                title="Apply for NEB +2 scholarship"
                description="Elevate your academic journey with our merit and need-based scholarships. Secure your future at Saipal Academy today."
            />
        </>
    );
}
