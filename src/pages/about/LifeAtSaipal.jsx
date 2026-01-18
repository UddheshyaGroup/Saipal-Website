
const LifeAtSaipal = () => {
    const activities = [
        {
            title: "Extracurricular Excellence",
            description: "From robotics club to debate society, we offer a wide range of activities to spark every interest.",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop",
            align: "left",
        },
        {
            title: "Sports & Athletics",
            description: "Our world-class sports facilities nurture physical health, teamwork, and competitive spirit.",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
            align: "right",
        },
        {
            title: "Arts & Culture",
            description: "Regular cultural events, music classes, and art exhibitions allow students to express their creativity.",
            image: "https://images.unsplash.com/photo-1506157788151-246e04d41e7d?q=80&w=2000&auto=format&fit=crop",
            align: "left",
        },
        {
            title: "Community Service",
            description: "We instill a sense of responsibility through various community outreach programs and social service initiatives.",
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
            align: "right",
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="bg-accent text-white py-20 px-6 text-center">
                <h1 className="text-5xl font-bold mb-6">Life at Saipal</h1>
                <p className="text-xl max-w-2xl mx-auto text-blue-100">
                    A vibrant campus life that goes beyond textbooks. Discover the energy, creativity, and spirit of our students.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="space-y-24">
                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${item.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}
                        >
                            <div className="lg:w-1/2 overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="lg:w-1/2 space-y-6">
                                <div className="w-16 h-1 bg-primary mb-2"></div>
                                <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LifeAtSaipal;
