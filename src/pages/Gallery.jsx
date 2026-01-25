import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
  const [activeImage, setActiveImage] = useState(null);

  // Disable background scroll when popup is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeImage]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-gray-900">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
          School Gallery
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Discover the vibrant moments, events, and everyday experiences that
          make life at Saipal inspiring and memorable.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {galleryImages.map((img) => (
          <button
            key={img.id}
            onClick={() => setActiveImage(img)}
            className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition bg-gray-100"
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-40 sm:h-48 md:h-52 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end">
              <p className="text-white text-sm font-semibold p-3">
                {img.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Popup Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-accent text-white">
              <h2 className="text-sm sm:text-base font-semibold truncate">
                {activeImage.title}
              </h2>
              <button
                onClick={() => setActiveImage(null)}
                className="hover:text-red-300 transition"
              >
                <X size={26} />
              </button>
            </div>

            {/* Image Area */}
            <div className="flex-1 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
