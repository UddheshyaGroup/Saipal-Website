
import { Link } from "react-router-dom";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  // Mock data for Albums
  const albums = [
    {
      id: "sports-meet-2025",
      title: "Annual Sports Meet 2025",
      count: 24,
      cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "graduation-2024",
      title: "Graduation Ceremony 2024",
      count: 45,
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "science-exhibition",
      title: "Science Exhibition",
      count: 18,
      cover: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "cultural-fest",
      title: "Cultural Fest",
      count: 32,
      cover: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "educational-tour",
      title: "Educational Tour - Pokhara",
      count: 50,
      cover: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: "art-workshop",
      title: "Fine Arts Workshop",
      count: 12,
      cover: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white border-b pt-16 pb-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Photo Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Capturing moments, memories, and milestones at Saipal Academy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Link
              to={`/gallery/${album.id}`}
              key={album.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  src={album.cover}
                  alt={album.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 z-20 flex items-center gap-1">
                  <ImageIcon size={14} /> {album.count} Photos
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
                  {album.title}
                </h3>
                <div className="flex items-center text-accent font-semibold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                  View Album <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
