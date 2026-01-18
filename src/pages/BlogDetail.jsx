
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogDetail = () => {
    const { id } = useParams();

    // Mock data lookup (In real app, fetch from API)
    const post = {
        title: "Saipal Students Win National Robotics Competition",
        date: "Jan 10, 2026",
        author: "Admin",
        category: "Achievement",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a785?q=80&w=2070&auto=format&fit=crop",
        content: `
      <p class="mb-6">We are thrilled to announce that the robotics team from Saipal Academy, "RoboSaipal", has secured the first position in the prestigious National High School Robotics Championship held in Kathmandu this weekend.</p>
      
      <p class="mb-6">The competition featured over 50 schools from across the country. Our students demonstrated exceptional skill, creativity, and teamwork in designing and programming an autonomous robot capable of navigating complex mazes and performing specific tasks.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900">The Journey to Victory</h3>
      <p class="mb-6">Preparation for the event began three months ago. Under the guidance of our Computer Science faculty, students spent countless hours after school perfecting their algorithms and hardware designs. "It was a challenging journey, but the learning experience was invaluable," said the team captain.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900">What's Next?</h3>
      <p class="mb-6">As winners of the national leg, the team has now qualified to represent Nepal in the International Robotics Olympiad to be held in Singapore later this year. We wish them all the best for their future endeavors!</p>
      
      <p>We would like to thank the parents and teachers for their unwavering support.</p>
    `
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Image */}
            <div className="w-full h-[50vh] relative">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
                    <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Back to Blog
                    </Link>
                    <div className="flex gap-4 mb-4">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            {post.category}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-white/90 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} /> {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={18} /> {post.author}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div
                    className="prose prose-lg prose-blue max-w-none text-gray-700 leading-loose"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>

                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-6">Share this post</h3>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 border rounded-full hover:bg-gray-50 transition-colors">Facebook</button>
                        <button className="px-6 py-2 border rounded-full hover:bg-gray-50 transition-colors">Twitter</button>
                        <button className="px-6 py-2 border rounded-full hover:bg-gray-50 transition-colors">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
