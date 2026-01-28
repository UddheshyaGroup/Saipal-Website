import { GraduationCap } from "lucide-react";
import { ImageSlider, ScholarshipCTA } from "./SharedComponents";

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

export default function SchoolSection() {
    return (
        <>
            <ImageSlider images={SCHOOL_IMAGES} />

            <div className="mt-16 space-y-8">
                <div className="group relative overflow-hidden rounded-[2.5rem] bg-accent p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md shadow-inner">
                            <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-3xl font-bold tracking-tight mb-6">
                                Why Saipal School?
                            </h2>
                            <div className="space-y-6 text-blue-50/90 leading-relaxed text-lg">
                                <p>
                                    Every child is encouraged to grow in a healthy
                                    manner. Each student is encouraged to sharpen
                                    their inner talents and not just focus on grades.
                                </p>
                                <p>
                                    We provide a platform to explore oneself and
                                    identify core competence. This is facilitated by
                                    optimal class sizes and close, intimate
                                    teacher-student relationships.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ScholarshipCTA
                title="Begin Your Journey at Saipal"
                description="Shape your child's future with a strong academic foundation. Contact our admissions desk to learn more about our school programs."
                link="/enquiry"
                buttonText="Learn More"
            />
        </>
    );
}
