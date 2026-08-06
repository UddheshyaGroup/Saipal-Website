import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  MoveUp,
  MoveDown,
  Save,
  RotateCcw,
  CheckCircle,
  XCircle,
  HelpCircle,
  FolderPlus,
  Settings,
  Eye,
  Sparkles,
} from "lucide-react";
import { faqService, faqBus } from "../../services/faqService";

export default function AdminFaqManager() {
  const [activeTab, setActiveTab] = useState("faqs"); // 'faqs', 'categories', 'settings'
  const [faqs, setFaqs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [settings, setSettings] = useState({});
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("all");
  const [toastMessage, setToastMessage] = useState(null);

  // Modal / Form state for FAQ
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);
  const [faqForm, setFaqForm] = useState({
    question: "",
    answer: "",
    category: "general",
    isActive: true,
    relatedFaqIds: [],
  });

  // Category Modal / Form state
  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [catForm, setCatForm] = useState({ id: "", name: "", icon: "❓" });

  const loadData = () => {
    setFaqs(faqService.getFaqs("all", false));
    setCategories(faqService.getCategories());
    setSettings(faqService.getSettings());
  };

  useEffect(() => {
    loadData();
    const handleDataChange = () => loadData();
    faqBus.addEventListener("faq-data-changed", handleDataChange);
    return () => faqBus.removeEventListener("faq-data-changed", handleDataChange);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --- FAQ CRUD HANDLERS ---
  const handleOpenFaqModal = (faq = null) => {
    if (faq) {
      setEditingFaq(faq);
      setFaqForm({
        question: faq.question || "",
        answer: faq.answer || "",
        category: faq.category || "general",
        isActive: faq.isActive ?? true,
        relatedFaqIds: faq.relatedFaqIds || [],
      });
    } else {
      setEditingFaq(null);
      setFaqForm({
        question: "",
        answer: "",
        category: categories[0]?.id || "general",
        isActive: true,
        relatedFaqIds: [],
      });
    }
    setIsFaqModalOpen(true);
  };

  const handleSaveFaq = (e) => {
    e.preventDefault();
    if (!faqForm.question.trim() || !faqForm.answer.trim()) {
      alert("Question and Answer are required.");
      return;
    }

    faqService.saveFaq({
      id: editingFaq?.id,
      ...faqForm,
    });
    setIsFaqModalOpen(false);
    showToast(editingFaq ? "FAQ updated successfully!" : "New FAQ added successfully!");
  };

  const handleDeleteFaq = (id) => {
    if (window.confirm("Are you sure you want to delete this FAQ entry?")) {
      faqService.deleteFaq(id);
      showToast("FAQ deleted.");
    }
  };

  const handleToggleStatus = (id) => {
    faqService.toggleFaqStatus(id);
    showToast("Status updated.");
  };

  const handleMoveOrder = (index, direction) => {
    const list = [...filteredFaqs];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= list.length) return;

    const temp = list[index];
    list[index] = list[targetIndex];
    list[targetIndex] = temp;

    faqService.reorderFaqs(list);
    showToast("Display order updated.");
  };

  // --- CATEGORY CRUD HANDLERS ---
  const handleOpenCatModal = (cat = null) => {
    if (cat) {
      setEditingCat(cat);
      setCatForm({ id: cat.id, name: cat.name, icon: cat.icon || "📁" });
    } else {
      setEditingCat(null);
      setCatForm({ id: "", name: "", icon: "📁" });
    }
    setIsCatModalOpen(true);
  };

  const handleSaveCategory = (e) => {
    e.preventDefault();
    if (!catForm.name.trim()) return;

    faqService.saveCategory({
      id: editingCat ? editingCat.id : catForm.name.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: catForm.name,
      icon: catForm.icon,
    });
    setIsCatModalOpen(false);
    showToast("Category saved.");
  };

  const handleDeleteCategory = (id) => {
    if (window.confirm("Deleting a category will unassign associated FAQs. Continue?")) {
      faqService.deleteCategory(id);
      showToast("Category removed.");
    }
  };

  // --- SETTINGS HANDLERS ---
  const handleSaveSettings = (e) => {
    e.preventDefault();
    faqService.updateSettings(settings);
    showToast("Chatbot settings saved successfully!");
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset all FAQs, categories, and settings to default seed data?")) {
      faqService.resetToDefaults();
      showToast("All chatbot data reset to initial defaults.");
    }
  };

  const filteredFaqs = selectedCategoryFilter === "all"
    ? faqs
    : faqs.filter((f) => f.category === selectedCategoryFilter);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-6 right-6 z-50 bg-[#2E3192] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 border border-white/20 animate-bounce">
            <Sparkles size={18} className="text-[#00AEEF]" />
            <span className="text-sm font-semibold">{toastMessage}</span>
          </div>
        )}

        {/* ── HEADER ── */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider">
              Administration Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#2E3192] dark:text-white flex items-center gap-2">
              <HelpCircle className="text-[#00AEEF]" /> Chatbot FAQ Management
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Manage questions, answers, categories, and bot settings in real-time.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleResetDefaults}
              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw size={14} /> Reset Defaults
            </button>
          </div>
        </div>

        {/* ── NAVIGATION TABS ── */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-4">
          <button
            onClick={() => setActiveTab("faqs")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 transition border-b-2 cursor-pointer ${
              activeTab === "faqs"
                ? "border-[#00AEEF] text-[#00AEEF]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <HelpCircle size={16} /> FAQ Questions ({faqs.length})
          </button>
          <button
            onClick={() => setActiveTab("categories")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 transition border-b-2 cursor-pointer ${
              activeTab === "categories"
                ? "border-[#00AEEF] text-[#00AEEF]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <FolderPlus size={16} /> Categories ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`pb-3 text-sm font-bold flex items-center gap-2 transition border-b-2 cursor-pointer ${
              activeTab === "settings"
                ? "border-[#00AEEF] text-[#00AEEF]"
                : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            <Settings size={16} /> Bot Settings
          </button>
        </div>

        {/* ── TAB 1: FAQS MANAGER ── */}
        {activeTab === "faqs" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Filter Category:</span>
                <select
                  value={selectedCategoryFilter}
                  onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                  className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                >
                  <option value="all">All Categories</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.icon} {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => handleOpenFaqModal()}
                className="bg-[#00AEEF] hover:bg-[#0096ce] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Plus size={16} /> Add New FAQ
              </button>
            </div>

            {/* Table / List */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              {filteredFaqs.length === 0 ? (
                <div className="p-12 text-center text-slate-400">
                  No FAQs found in this category. Click "Add New FAQ" to create one.
                </div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredFaqs.map((faq, index) => {
                    const catObj = categories.find((c) => c.id === faq.category);
                    return (
                      <div
                        key={faq.id}
                        className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition"
                      >
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[#2E3192] dark:text-cyan-400">
                              {catObj ? `${catObj.icon} ${catObj.name}` : faq.category}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                faq.isActive
                                  ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                                  : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400"
                              }`}
                            >
                              {faq.isActive ? "Active" : "Inactive"}
                            </span>
                          </div>

                          <h3 className="font-bold text-slate-900 dark:text-white text-base">
                            {faq.question}
                          </h3>

                          <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2">
                            {faq.answer}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                          {/* Reorder Buttons */}
                          <div className="flex flex-col gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                            <button
                              onClick={() => handleMoveOrder(index, "up")}
                              disabled={index === 0}
                              title="Move Up"
                              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
                            >
                              <MoveUp size={12} />
                            </button>
                            <button
                              onClick={() => handleMoveOrder(index, "down")}
                              disabled={index === filteredFaqs.length - 1}
                              title="Move Down"
                              className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
                            >
                              <MoveDown size={12} />
                            </button>
                          </div>

                          {/* Toggle Active */}
                          <button
                            onClick={() => handleToggleStatus(faq.id)}
                            title={faq.isActive ? "Disable" : "Enable"}
                            className={`p-2 rounded-xl border cursor-pointer transition ${
                              faq.isActive
                                ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                                : "border-slate-200 text-slate-400 hover:bg-slate-100"
                            }`}
                          >
                            {faq.isActive ? <CheckCircle size={16} /> : <XCircle size={16} />}
                          </button>

                          {/* Edit */}
                          <button
                            onClick={() => handleOpenFaqModal(faq)}
                            className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl transition cursor-pointer"
                          >
                            <Edit size={16} />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteFaq(faq.id)}
                            className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition cursor-pointer"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── TAB 2: CATEGORIES MANAGER ── */}
        {activeTab === "categories" && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => handleOpenCatModal()}
                className="bg-[#00AEEF] hover:bg-[#0096ce] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <Plus size={16} /> Add Category
              </button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 bg-slate-100 dark:bg-slate-800 rounded-xl">
                      {cat.icon}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{cat.name}</h4>
                      <p className="text-slate-400 text-xs font-mono">ID: {cat.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleOpenCatModal(cat)}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 cursor-pointer"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="p-2 hover:bg-rose-50 rounded-lg text-rose-600 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: BOT SETTINGS ── */}
        {activeTab === "settings" && (
          <form
            onSubmit={handleSaveSettings}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Bot Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Bot Name
                </label>
                <input
                  type="text"
                  value={settings.botName || ""}
                  onChange={(e) => setSettings({ ...settings, botName: e.target.value })}
                  className="input"
                  required
                />
              </div>

              {/* Bot Status */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Status Indicator Text
                </label>
                <input
                  type="text"
                  value={settings.botStatus || ""}
                  onChange={(e) => setSettings({ ...settings, botStatus: e.target.value })}
                  className="input"
                  required
                />
              </div>

              {/* Avatar Image URL */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Bot Avatar Image URL
                </label>
                <div className="flex items-center gap-3">
                  <img
                    src={settings.botAvatar || "/Logo.png"}
                    alt="Avatar Preview"
                    className="w-12 h-12 rounded-full object-cover border p-1 bg-white"
                  />
                  <input
                    type="text"
                    value={settings.botAvatar || ""}
                    onChange={(e) => setSettings({ ...settings, botAvatar: e.target.value })}
                    className="input flex-1"
                    placeholder="https://..."
                  />
                </div>
              </div>

              {/* Welcome Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Initial Welcome Greeting
                </label>
                <textarea
                  rows={3}
                  value={settings.welcomeMessage || ""}
                  onChange={(e) => setSettings({ ...settings, welcomeMessage: e.target.value })}
                  className="input py-3"
                  required
                />
              </div>

              {/* Typing Delay */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Simulated Typing Delay (ms)
                </label>
                <input
                  type="number"
                  min={500}
                  max={4000}
                  step={100}
                  value={settings.typingDelayMs || 1300}
                  onChange={(e) => setSettings({ ...settings, typingDelayMs: parseInt(e.target.value) })}
                  className="input"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                type="submit"
                className="bg-[#2E3192] hover:bg-[#20236a] text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg transition flex items-center gap-2 cursor-pointer"
              >
                <Save size={16} /> Save Bot Settings
              </button>
            </div>
          </form>
        )}
      </div>

      {/* ── FAQ MODAL ── */}
      {isFaqModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-[#2E3192] dark:text-white">
              {editingFaq ? "Edit FAQ Entry" : "Create New FAQ Entry"}
            </h3>

            <form onSubmit={handleSaveFaq} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Category</label>
                <select
                  value={faqForm.category}
                  onChange={(e) => setFaqForm({ ...faqForm, category: e.target.value })}
                  className="input"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.icon} {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Question Prompt</label>
                <input
                  type="text"
                  value={faqForm.question}
                  onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                  className="input"
                  placeholder="e.g. What are the school timings?"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Predefined Answer</label>
                <textarea
                  rows={5}
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                  className="input py-3"
                  placeholder="Enter detailed response..."
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={faqForm.isActive}
                  onChange={(e) => setFaqForm({ ...faqForm, isActive: e.target.checked })}
                  className="w-4 h-4 accent-[#00AEEF]"
                />
                <label htmlFor="isActive" className="text-sm font-semibold text-slate-700 dark:text-slate-200 cursor-pointer">
                  Active (Visible to users)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsFaqModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#00AEEF] hover:bg-[#0097d1] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── CATEGORY MODAL ── */}
      {isCatModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <h3 className="text-xl font-bold text-[#2E3192] dark:text-white">
              {editingCat ? "Edit Category" : "Add New Category"}
            </h3>

            <form onSubmit={handleSaveCategory} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Category Name</label>
                <input
                  type="text"
                  value={catForm.name}
                  onChange={(e) => setCatForm({ ...catForm, name: e.target.value })}
                  className="input"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Emoji Icon</label>
                <input
                  type="text"
                  value={catForm.icon}
                  onChange={(e) => setCatForm({ ...catForm, icon: e.target.value })}
                  className="input"
                  maxLength={4}
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsCatModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#00AEEF] text-white rounded-xl text-xs font-bold shadow-md cursor-pointer"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
