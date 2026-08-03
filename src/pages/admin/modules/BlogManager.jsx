import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, FileText, Image as ImageIcon, Eye } from "lucide-react";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    category: "Academics",
    author: "Academic Dept.",
    date: "",
    image: "",
    summary: "",
    content: "",
  });

  const loadBlogs = () => {
    setBlogs(cmsService.getBlogPosts());
  };

  useEffect(() => {
    loadBlogs();
    const handleCmsChange = () => loadBlogs();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  const handleOpenModal = (blog = null) => {
    if (blog) {
      setEditingBlog(blog);
      setBlogForm({
        title: blog.title || "",
        category: blog.category || "Academics",
        author: blog.author || "Saipal Editorial",
        date: blog.date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        image: blog.image || "",
        summary: blog.summary || "",
        content: blog.content || "",
      });
    } else {
      setEditingBlog(null);
      setBlogForm({
        title: "",
        category: "Academics",
        author: "Academic Dept.",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
        summary: "",
        content: "<p>Write full blog article here...</p>",
      });
    }
    setIsModalOpen(true);
  };

  const handleSaveBlog = (e) => {
    e.preventDefault();
    cmsService.saveBlogPost({
      id: editingBlog?.id,
      ...blogForm,
    });
    setIsModalOpen(false);
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm("Delete this blog article?")) {
      cmsService.deleteBlogPost(id);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="text-[#00AEEF]" /> Blog & News Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, and publish school news, event recaps, and study guides.
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-[#00AEEF] hover:bg-[#0097d1] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer"
        >
          <Plus size={16} /> Write New Article
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-44 bg-slate-200 relative overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-[#2E3192] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow">
                  {blog.category}
                </span>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-400 font-medium flex items-center justify-between">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">
                  {blog.summary}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2 bg-slate-50/50 dark:bg-slate-950/50">
              <button onClick={() => handleOpenModal(blog)} className="p-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-300">
                <Edit size={16} />
              </button>
              <button onClick={() => handleDeleteBlog(blog.id)} className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BLOG MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{editingBlog ? "Edit Article" : "Write New Article"}</h3>

            <form onSubmit={handleSaveBlog} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Title</label>
                <input type="text" value={blogForm.title} onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })} className="input" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Category</label>
                  <select value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="input">
                    <option value="Academics">Academics</option>
                    <option value="Events">Events</option>
                    <option value="Innovation">Innovation</option>
                    <option value="Student Life">Student Life</option>
                    <option value="Education">Education</option>
                    <option value="Achievements">Achievements</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Author</label>
                  <input type="text" value={blogForm.author} onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })} className="input" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Cover Image URL</label>
                <input type="text" value={blogForm.image} onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })} className="input" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Summary / Teaser</label>
                <textarea rows={2} value={blogForm.summary} onChange={(e) => setBlogForm({ ...blogForm, summary: e.target.value })} className="input py-2" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">HTML / Markdown Content Body</label>
                <textarea rows={6} value={blogForm.content} onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })} className="input py-2 font-mono text-xs" required />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" className="px-6 py-2.5 bg-[#00AEEF] text-white rounded-xl text-xs font-bold shadow-md">Publish Article</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
