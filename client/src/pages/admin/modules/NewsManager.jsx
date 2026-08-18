import React, { useState, useEffect, useRef } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Newspaper, Link2, Upload, X, Image } from "lucide-react";

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const NEWS_CATEGORIES = ["School News", "College News", "Announcements", "Events", "Achievements", "Community", "General"];

export default function NewsManager({ division = "school" }) {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  // Image mode
  const [imageMode, setImageMode] = useState("url");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileSizeError, setFileSizeError] = useState("");
  const fileInputRef = useRef(null);

  const [newsForm, setNewsForm] = useState({
    title: "",
    category: "Announcements",
    author: "Saipal Admin",
    date: "",
    image: "",
    summary: "",
    content: "",
  });

  const isSchool = division === "school";
  const accentBg = isSchool ? "bg-[#00AEEF] hover:bg-[#0096ce]" : "bg-[#2E3192] hover:bg-[#252880]";
  const accentHex = isSchool ? "#00AEEF" : "#2E3192";
  const badgeColor = isSchool ? "bg-[#00AEEF]" : "bg-[#2E3192]";

  const loadNews = async () => {
    try {
      const posts = await cmsService.getNewsPosts(division);
      setNews(posts);
    } catch (err) {
      console.error("Failed to load news:", err);
    }
  };

  useEffect(() => {
    loadNews();
    const handleCmsChange = () => loadNews();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const resetImageState = () => {
    setImageFile(null);
    setImagePreview(null);
    setFileSizeError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingNews(item);
      setNewsForm({
        title: item.title || "",
        category: item.category || "Announcements",
        author: item.author || "Saipal Admin",
        date: item.date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        image: item.image || "",
        summary: item.summary || "",
        content: item.content || "",
      });
      setImagePreview(item.image || null);
    } else {
      setEditingNews(null);
      setNewsForm({
        title: "",
        category: "Announcements",
        author: "Saipal Admin",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        image: "",
        summary: "",
        content: "<p>Write the full news article here...</p>",
      });
      setImagePreview(null);
    }
    setImageMode("url");
    resetImageState();
    setSaveError("");
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileSizeError("");
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileSizeError(`File too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Max ${MAX_FILE_SIZE_MB} MB.`);
      setImageFile(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSaveNews = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaveError("");
    try {
      const postData = { id: editingNews?.id, ...newsForm, division };
      if (imageMode === "upload" && imageFile) {
        await cmsService.saveNewsPostWithFile(postData, imageFile, division);
      } else {
        await cmsService.saveNewsPost(postData, division);
      }
      setIsModalOpen(false);
      resetImageState();
    } catch (err) {
      setSaveError(err.message || "Failed to save. Check that the server is running.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteNews = async (id) => {
    if (!window.confirm("Delete this news article?")) return;
    try { await cmsService.deleteNewsPost(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Newspaper style={{ color: accentHex }} />
            News Articles
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Publish latest news, announcements, and event updates.
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className={`${accentBg} text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer`}
        >
          <Plus size={16} /> Post News Article
        </button>
      </div>

      {/* News Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.length === 0 && (
          <p className="col-span-full text-center text-slate-400 text-sm py-12">No news articles yet. Click "Post News Article" to get started.</p>
        )}
        {news.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
              <div className="h-44 bg-slate-200 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <span className={`absolute top-3 left-3 ${badgeColor} text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow`}>
                  {item.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-400 font-medium flex items-center justify-between">
                  <span>By {item.author}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug line-clamp-2">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3">{item.summary}</p>
              </div>
            </div>
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2 bg-slate-50/50 dark:bg-slate-950/50">
              <button onClick={() => handleOpenModal(item)} className="p-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-300">
                <Edit size={16} />
              </button>
              <button onClick={() => handleDeleteNews(item.id)} className="p-2 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-100">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {editingNews ? "Edit News Article" : "Post News Article"}
              </h3>
              <button type="button" onClick={() => { setIsModalOpen(false); resetImageState(); }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveNews} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Title</label>
                <input type="text" value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} className="input" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Category</label>
                  <select value={newsForm.category} onChange={(e) => setNewsForm({ ...newsForm, category: e.target.value })} className="input">
                    {NEWS_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-500">Author</label>
                  <input type="text" value={newsForm.author} onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })} className="input" required />
                </div>
              </div>

              {/* Cover Image — URL or Upload */}
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500 block mb-2">Cover Image</label>
                <div className="flex rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 mb-3">
                  <button type="button" onClick={() => { setImageMode("url"); resetImageState(); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition ${imageMode === "url" ? "bg-[#00AEEF] text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}>
                    <Link2 size={13} /> URL
                  </button>
                  <button type="button" onClick={() => { setImageMode("upload"); setNewsForm({ ...newsForm, image: "" }); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition ${imageMode === "upload" ? "bg-[#00AEEF] text-white" : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}`}>
                    <Upload size={13} /> Upload
                  </button>
                </div>

                {imageMode === "url" ? (
                  <>
                    <input type="text" value={newsForm.image}
                      onChange={(e) => { setNewsForm({ ...newsForm, image: e.target.value }); setImagePreview(e.target.value); }}
                      className="input" placeholder="https://..." required={imageMode === "url"} />
                    {newsForm.image && (
                      <img src={imagePreview || newsForm.image} alt="preview" referrerPolicy="no-referrer"
                        className="mt-2 h-32 w-full object-cover rounded-xl border border-slate-200 dark:border-slate-700"
                        onError={(e) => { e.target.style.display = "none"; }} />
                    )}
                  </>
                ) : (
                  <>
                    <div onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-5 text-center cursor-pointer hover:border-[#00AEEF] transition group">
                      {imagePreview ? (
                        <div className="flex flex-col items-center gap-2">
                          <img src={imagePreview} alt="preview" className="h-32 w-full object-cover rounded-xl" />
                          <span className="text-xs text-slate-500">{imageFile?.name} — {(imageFile?.size / 1024 / 1024).toFixed(2)} MB</span>
                          <span className="text-xs text-[#00AEEF] font-semibold">Click to change</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2 py-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#00AEEF]/10 transition">
                            <Image size={22} className="text-slate-400 group-hover:text-[#00AEEF] transition" />
                          </div>
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Click to upload cover image</p>
                          <p className="text-[10px] text-slate-400">JPG, PNG, WEBP • Max {MAX_FILE_SIZE_MB} MB</p>
                        </div>
                      )}
                    </div>
                    <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/gif,image/webp" className="hidden" onChange={handleFileChange} />
                    {fileSizeError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2 mt-1">{fileSizeError}</p>}
                  </>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">Summary / Teaser</label>
                <textarea rows={2} value={newsForm.summary} onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })} className="input py-2" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-slate-500">HTML / Markdown Content Body</label>
                <textarea rows={6} value={newsForm.content} onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })} className="input py-2 font-mono text-xs" required />
              </div>

              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button type="button" onClick={() => { setIsModalOpen(false); resetImageState(); }} className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving || (imageMode === "upload" && !!fileSizeError)}
                  className={`px-6 py-2.5 ${accentBg} text-white rounded-xl text-xs font-bold shadow-md disabled:opacity-50`}>
                  {saving ? "Publishing…" : "Publish Article"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
