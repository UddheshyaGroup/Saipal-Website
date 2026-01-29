import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ImageSlider({ images }) {
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

export function ScholarshipCTA({
    title,
    description,
    link = "/scholarships",
    buttonText = "Apply Now",
}) {
    return (
        <section className="mt-8 p-10 sm:p-14 bg-primary rounded-3xl text-center text-white shadow-lg">
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
