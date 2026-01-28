import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- GALLERY DATA ---------------- */

const galleryImages = [
  {
    id: 1,
    title: "Annual Sports Day",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Science Exhibition",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Classroom Activities",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Computer Lab Session",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "School Cultural Event",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "Library & Study Time",
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Morning Assembly",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const thumbContainerRef = useRef(null);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex === null) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      }
      if (e.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  const openImage = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () =>
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    if (thumbContainerRef.current && activeIndex !== null) {
      const activeThumb = thumbContainerRef.current.children[activeIndex];
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeIndex]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          School Gallery
        </h1>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Moments that make Saipal Academy special – events, activities, and everyday joy.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {galleryImages.map((img, index) => (
          <button
            key={img.id}
            type="button"
            onClick={() => openImage(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <img
              src={img.image}
              alt={img.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <p className="absolute bottom-3 left-3 right-3 truncate text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {img.title}
            </p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-md transition-opacity duration-300">
          {/* Modal Container - slightly narrower & more elegant on large screens */}
          <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200/50 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">

            {/* Header - clean & professional */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3.5 sm:px-6">
              <h2 className="truncate pr-6 text-lg font-semibold text-gray-800 sm:text-xl">
                {galleryImages[activeIndex].title}
              </h2>
              <button
                onClick={closeModal}
                className="flex items-center justify-center rounded-full bg-white/80 p-2 text-gray-600 shadow-sm transition hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                aria-label="Close gallery"
              >
                <X size={26} strokeWidth={2.5} />
              </button>
            </div>

            {/* Main Image Area - better proportions & centering */}
            <div className="relative flex flex-1 items-center justify-center bg-gradient-to-b from-gray-50 to-white p-4 sm:p-8">
              <img
                src={galleryImages[activeIndex].image}
                alt={galleryImages[activeIndex].title}
                className="h-[60vh] sm:h-[70vh] max-w-full object-contain rounded-lg shadow-xl"
              />

              {/* Navigation Arrows - larger touch areas, semi-transparent */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:h-14 sm:w-14"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} strokeWidth={2.5} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:h-14 sm:w-14"
                aria-label="Next image"
              >
                <ChevronRight size={32} strokeWidth={2.5} />
              </button>
            </div>

            {/* Footer with Thumbnails + Optional Caption */}
            <div className="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6">
              {/* Title/Caption repeated here for context when scrolling thumbnails */}
              <p className="mb-3 text-center text-sm font-medium text-gray-700 sm:hidden">
                {galleryImages[activeIndex].title}
              </p>

              <div
                ref={thumbContainerRef}
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-blue-400 sm:gap-3"
              >
                {galleryImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${idx === activeIndex
                      ? "border-blue-500 shadow-md scale-105"
                      : "border-transparent hover:border-blue-300 hover:shadow-sm hover:scale-105"
                      }`}
                  >
                    <img
                      src={img.image}
                      alt={img.title}
                      className="h-14 w-20 object-cover transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-24"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}