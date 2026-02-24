import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ---------------- DATA ---------------- */

const albums = [
  {
    id: 1,
    title: "Annual Sports Day",
    cover: "/SportsDay/SportsImage1.jpeg",
    photos: [
      {
        url: "/SportsDay/SportsImage1.jpeg",
      },
      {
        url: "/SportsDay/SportsImage2.jpeg",
      },
      {
        url: "/SportsDay/SportsImage3.jpeg",
      },
      {
        url: "/SportsDay/SportsImage4.jpeg",
      },
      {
        url: "/SportsDay/SportsImage5.jpeg",
      },
      {
        url: "/SportsDay/SportsImage6.jpeg",
      },
      {
        url: "/SportsDay/SportsImage7.jpeg",
      },
      {
        url: "/SportsDay/SportsImage8.jpeg",
      },
      {
        url: "/SportsDay/SportsImage9.jpeg",
      },
      {
        url: "/SportsDay/SportsImage10.jpeg",
      },
      {
        url: "/SportsDay/SportsImage11.jpeg",
      },
      {
        url: "/SportsDay/SportsImage12.jpeg",
      },
      {
        url: "/SportsDay/SportsImage13.jpeg",
      },
      {
        url: "/SportsDay/SportsImage14.jpeg",
      },
    ],
  },
  {
    id: 2,
    title: "Hotel Management Practical",
    cover: "/HM_Practical/HmImage4.jpeg",
    photos: [
      {
        url: "/HM_Practical/HmImage4.jpeg",
      },
      {
        url: "/HM_Practical/HmImage2.jpg",
      },
      {
        url: "/HM_Practical/HmImage3.jpeg",
      },
      {
        url: "/HM_Practical/HmImage1.jpg",
      },
      {
        url: "/HM_Practical/HmImage5.jpeg",
      },
    ],
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Gallery() {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbRef = useRef(null);

  /* Lock scroll when slider open */
  useEffect(() => {
    if (activeAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [activeAlbum]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (!activeAlbum) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeSlider();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeAlbum]);

  const openSlider = (album) => {
    setActiveAlbum(album);
    setActiveIndex(0); // start from first image
  };

  const closeSlider = () => {
    setActiveAlbum(null);
  };

  const nextImage = () =>
    setActiveIndex((prev) => (prev + 1) % activeAlbum.photos.length);

  const prevImage = () =>
    setActiveIndex(
      (prev) =>
        (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length
    );

  /* Auto scroll thumbnail strip */
  useEffect(() => {
    if (thumbRef.current && activeAlbum) {
      const el = thumbRef.current.children[activeIndex];
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeIndex, activeAlbum]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-10 text-center text-4xl font-bold text-gray-900">
        School Gallery
      </h1>

      {/* ---------------- ALBUM GRID ---------------- */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {albums.map((album) => (
          <button
            key={album.id}
            onClick={() => openSlider(album)}
            className="group relative overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl"
          >
            <img
              src={album.cover}
              alt={album.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4 text-left">
              <h2 className="text-xl font-semibold text-white">
                {album.title}
              </h2>
              <p className="text-sm text-gray-200">
                {album.photos.length} Photos
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* ---------------- DIRECT IMAGE SLIDER ---------------- */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4">
              <h2 className="truncate pr-6 text-lg font-semibold text-gray-800">
                {activeAlbum.title}
              </h2>
              <button
                onClick={closeSlider}
                className="rounded-full bg-white p-2 hover:text-red-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Area */}
            <div className="relative flex items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
              <img
                src={activeAlbum.photos[activeIndex].url}
                alt=""
                className="h-[65vh] max-w-full object-contain rounded-lg shadow-xl"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft size={30} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight size={30} />
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="border-t bg-gray-50 px-4 py-4">
              <div ref={thumbRef} className="flex gap-3 overflow-x-auto pb-2">
                {activeAlbum.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      idx === activeIndex
                        ? "border-blue-500 scale-105"
                        : "border-transparent hover:border-blue-300"
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt=""
                      className="h-16 w-24 object-cover"
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
