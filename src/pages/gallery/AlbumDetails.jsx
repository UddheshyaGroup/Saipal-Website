
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const AlbumDetails = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [selectedImage, setSelectedImage] = useState(null);

    // Mock Data Generation based on ID (In a real app, fetch from API)
    // We'll generate slightly different titles/images based on ID just for demo

    const getAlbumTitle = (albumId) => {
        const titles = {
            "sports-meet-2025": "Annual Sports Meet 2025",
            "graduation-2024": "Graduation Ceremony 2024",
            "science-exhibition": "Science Exhibition",
            "cultural-fest": "Cultural Fest",
            "educational-tour": "Educational Tour - Pokhara",
            "art-workshop": "Fine Arts Workshop"
        };
        return titles[albumId] || "Album Details";
    };

    // Generate mock images
    const totalImages = 32; // Simulating 32 images
    const images = Array.from({ length: totalImages }, (_, i) => ({
        id: i + 1,
        url: `https://picsum.photos/seed/${id}-${i}/800/600`, // Random consistent images
        thumbnail: `https://picsum.photos/seed/${id}-${i}/400/300`,
        caption: `Photo ${i + 1}`
    }));

    const totalPages = Math.ceil(images.length / itemsPerPage);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const currentImages = images.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <div className="min-h-screen bg-gray-50 font-sans py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Back and Title */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <Link
                        to="/gallery"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors mb-4 md:mb-0"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Albums
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900 border-b-4 border-accent pb-2">
                        {getAlbumTitle(id)}
                    </h1>
                    <div className="w-24"></div> {/* Spacer for centering if needed */}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {currentImages.map((img) => (
                        <div
                            key={img.id}
                            className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                        >
                            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                                <img
                                    src={img.thumbnail}
                                    alt={img.caption}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full font-semibold transition-colors ${currentPage === i + 1
                                        ? "bg-accent text-white"
                                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-screen">
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.caption}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-md shadow-2xl"
                        />
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        <p className="text-white text-center mt-4 text-lg font-light">{selectedImage.caption}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlbumDetails;
