import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Gallery() {
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

  return (
    <main className="mt-12">
      <div className="items-center text-center mb-10">
        <h1 className="text-lg md:text-3xl lg:text-5xl mb-6 font-bold tracking-tight text-gray-900">
          School Gallery
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600">
          Moments that make Saipal Academy special – events, activities, and
          everyday joy.
        </p>
      </div>
      <div className="app mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          {galleryImages.map((img) => (
            <a
              key={img.id}
              href={img.image}
              data-sub-html={img.title}
              className="relative group block overflow-hidden rounded-2xl lg:rounded-3xl m-2"
            >
              <img
                className="max-w-full m-auto block rounded-2xl lg:rounded-3xl transition-transform duration-300 group-hover:scale-105"
                src={img.image}
                alt={img.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-3xl" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 truncate">
                {img.title}
              </p>
            </a>
          ))}
        </LightGallery>
      </div>
    </main>
  );
}
