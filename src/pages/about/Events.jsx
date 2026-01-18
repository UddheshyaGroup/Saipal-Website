
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const Events = () => {
    const events = [
        {
            id: 1,
            title: "Annual Sports Week 2026",
            date: "Feb 15 - Feb 21, 2026",
            time: "10:00 AM - 4:00 PM",
            location: "Saipal Sports Ground",
            category: "Sports",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
            description: "Join us for a week of competitive sports and team spirit. Students from all grades will participate in football, basketball, athletics, and more."
        },
        {
            id: 2,
            title: "Science & Tech Exhibition",
            date: "March 10, 2026",
            time: "11:00 AM - 3:00 PM",
            location: "Main Auditorium",
            category: "Academic",
            image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=2070&auto=format&fit=crop",
            description: "Witness the innovative projects and scientific models created by our brilliant students. A day dedicated to creativity and technology."
        },
        {
            id: 3,
            title: "Cultural Dance Performance",
            date: "April 14, 2026",
            time: "5:00 PM - 8:00 PM",
            location: "City Hall",
            category: "Cultural",
            image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop",
            description: "Celebrating our rich heritage through traditional dance and music performances by our talented students."
        },
    ];

    const pastEvents = [
        {
            title: "Graduation Ceremony 2025",
            date: "Dec 20, 2025",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Inter-School Debate",
            date: "Nov 15, 2025",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="bg-primary text-white py-20 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">Events & Happenings</h1>
                <p className="text-xl max-w-2xl mx-auto opacity-90">
                    Stay updated with the latest activities, workshops, and celebrations at Saipal Academy.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-8 border-accent pl-4">Upcoming Events</h2>

                <div className="grid gap-10">
                    {events.map((event) => (
                        <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row group">
                            <div className="md:w-2/5 overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full min-h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {event.category}
                                </div>
                            </div>
                            <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                    <Calendar size={18} />
                                    <span>{event.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors">{event.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-6 w-full border-t border-b py-4">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-accent" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-accent" />
                                        {event.location}
                                    </div>
                                </div>
                                <div>
                                    <button className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center gap-2">
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Past Events Section */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-8 border-gray-400 pl-4">Past Events</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastEvents.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-48 overflow-hidden">
                                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;
