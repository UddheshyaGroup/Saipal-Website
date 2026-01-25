import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BLOG_POSTS } from "../data/blogData";

export default function BlogDetail() {
    const { id } = useParams();
    const post = BLOG_POSTS.find((b) => b.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-bold text-primary mb-4">Post Not Found</h2>
                <Link to="/blog" className="text-accent hover:underline flex items-center gap-2">
                    <FaArrowLeft /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-12">
                    <div className="max-w-4xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4"
                        >
                            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                {post.category}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-6 text-white/90 text-sm sm:text-base font-medium"
                        >
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-secondary" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaUser className="text-secondary" /> {post.author}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= CONTENT SECTION ================= */}
            <section className="max-w-4xl mx-auto px-6 mt-20 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">




                    <article
                        className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary prose-headings:font-bold prose-h3:text-2xl prose-p:leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                {post.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Published by</p>
                                <p className="font-bold text-primary">{post.author}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <span className="text-sm font-bold text-gray-400">Share:</span>
                            {/* Added simple placeholders for share functionality */}
                            <div className="flex gap-3">
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                                    <FaFacebookF size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                                    <FaTwitter size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-colors cursor-pointer text-gray-500">
                                    <FaLinkedinIn size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= RELATED POSTS ================= */}
            <section className="max-w-7xl mx-auto px-6 mt-20">
                <h2 className="text-3xl font-bold text-primary mb-10 text-center">Continue Reading</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {BLOG_POSTS.filter(b => b.id !== post.id).slice(0, 3).map((related) => (
                        <Link key={related.id} to={`/blog/${related.id}`} className="group block h-full">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full border border-gray-100">
                                <div className="h-48 overflow-hidden">
                                    <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{related.category}</span>
                                    <h3 className="text-xl font-bold text-primary mt-2 group-hover:text-accent line-clamp-2 transition-colors">{related.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
