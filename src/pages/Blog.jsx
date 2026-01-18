
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Saipal Students Win National Robotics Competition",
      excerpt: "Our team 'RoboSaipal' secured the first position in the National High School Robotics Championship held in Kathmandu.",
      date: "Jan 10, 2026",
      author: "Admin",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a785?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Importance of Extra-Curricular Activities",
      excerpt: "Why balancing academics with sports and arts is crucial for holistic development. Read insights from our Principal.",
      date: "Dec 28, 2025",
      author: "Principal Desk",
      category: "Education",
      image: "https://images.unsplash.com/photo-1544928147-79a2e746b50d?q=80&w=2066&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Preparing for A-Level Exams: Tips & Tricks",
      excerpt: "Expert advice from our faculty on how to manage time and prepare effectively for the upcoming Cambridge examinations.",
      date: "Nov 15, 2025",
      author: "Academic Head",
      category: "Academics",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white border-b py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest News & Stories</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-500">
          Updates, achievements, and insights from Saipal Academy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
              <div className="h-60 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent z-10 uppercase tracking-widest">
                  {post.category}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-accent font-bold hover:text-primary transition-colors inline-flex items-center gap-2 mt-auto"
                >
                  Read Full Story <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
