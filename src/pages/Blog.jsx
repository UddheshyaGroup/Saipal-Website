import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight } from "react-icons/fa";

import { BLOG_POSTS } from "../data/blogData";

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="text-primary pt-5 pb-5 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-64 h-64  rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96  rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
          >
            Stay updated with the latest stories, achievements, and academic
            insights from Saipal Academy.
          </motion.p>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-5 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="max-w-4xl mx-auto px-6 mt-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 border border-blue-100">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Never Miss an Update
            </h2>
            <p className="text-gray-600">
              Subscribe to our monthly newsletter to get the latest Saipal
              stories directly in your inbox.
            </p>
          </div>
          <div className="flex-1 w-full md:ml-8">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
              />
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-15230508530ec-8eb0f023f0ed?auto=format&fit=crop&q=80&w=800";
          }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <FaTag className="text-[10px]" /> {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-primary" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <FaUser className="text-primary" /> By {post.author}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>

        <div className="mt-auto">
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm"
          >
            Read Full Article <FaArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}