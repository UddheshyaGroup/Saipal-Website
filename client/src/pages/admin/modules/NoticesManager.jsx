import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Bell, Check, Sparkles } from "lucide-react";

export default function NoticesManager({ division = "all" }) {
  const [notices, setNotices] = useState([]);
  const [tickers, setTickers] = useState([]);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);

  const defaultDivision = division && division !== "all" ? division : "college";

  const [noticeForm, setNoticeForm] = useState({
    title: "",
    date: "",
    tag: "Notice",
    color: "bg-[#00AEEF]",
    division: defaultDivision,
    content: "",
    status: "published",
  });

  const [isTickerModalOpen, setIsTickerModalOpen] = useState(false);
  const [editingTicker, setEditingTicker] = useState(null);
  const [tickerForm, setTickerForm] = useState({ text: "", division: defaultDivision, isActive: true });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const loadData = async () => {
    try {
      const [n, t] = await Promise.all([
        cmsService.getNotices(division),
        cmsService.getTickers(division),
      ]);
      setNotices(n);
      setTickers(t);
    } catch (err) {
      console.error("Failed to load notice data:", err);
    }
  };

  useEffect(() => {
    loadData();
    const handleCmsChange = () => loadData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  // --- NOTICE HANDLERS ---
  const handleOpenNoticeModal = (notice = null) => {
    setSaveError("");
    const targetDiv = division && division !== "all" ? division : "college";
    if (notice) {
      setEditingNotice(notice);
      setNoticeForm({
        title: notice.title || "",
        date: notice.date || new Date().toLocaleDateString(),
        tag: notice.tag || "Notice",
        color: notice.color || "bg-[#00AEEF]",
        division: notice.division || targetDiv,
        content: notice.content || notice.description || "",
        status: notice.status || "published",
      });
    } else {
      setEditingNotice(null);
      setNoticeForm({
        title: "",
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        tag: "Admissions",
        color: "bg-[#00AEEF]",
        division: targetDiv,
        content: "",
        status: "published",
      });
    }
    setIsNoticeModalOpen(true);
  };

  const handleSaveNotice = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveNotice(
        { id: editingNotice?.id, ...noticeForm, division: noticeForm.division || division },
        noticeForm.division || division
      );
      setIsNoticeModalOpen(false);
    } catch (err) {
      setSaveError(err.message || "Failed to save notice. Check that the server is running.");
    } finally { setSaving(false); }
  };

  const handleDeleteNotice = async (id) => {
    if (!window.confirm("Delete this notice?")) return;
    try { await cmsService.deleteNotice(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  // --- TICKER HANDLERS ---
  const handleOpenTickerModal = (ticker = null) => {
    setSaveError("");
    const targetDiv = division && division !== "all" ? division : "college";
    if (ticker) {
      setEditingTicker(ticker);
      setTickerForm({ text: ticker.text || "", division: ticker.division || targetDiv, isActive: ticker.isActive ?? true });
    } else {
      setEditingTicker(null);
      setTickerForm({ text: "", division: targetDiv, isActive: true });
    }
    setIsTickerModalOpen(true);
  };

  const handleSaveTicker = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveTicker({ id: editingTicker?.id, ...tickerForm }, tickerForm.division || division);
      setIsTickerModalOpen(false);
    } catch (err) {
      setSaveError(err.message || "Failed to save ticker.");
    } finally { setSaving(false); }
  };

  const handleDeleteTicker = async (id) => {
    if (!window.confirm("Delete ticker item?")) return;
    try { await cmsService.deleteTicker(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* ── HEADER ── */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="text-[#00AEEF]" /> Notices & Announcement Tickers
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage top scrolling news tickers and notice board cards for School & College.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleOpenTickerModal()}
            className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Plus size={14} /> Add Ticker Text
          </button>
          <button
            onClick={() => handleOpenNoticeModal()}
            className="bg-[#00AEEF] hover:bg-[#0097d1] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <Plus size={14} /> Add Notice Card
          </button>
        </div>
      </div>

      {/* ── SECTION 1: TICKERS ── */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles size={16} className="text-[#00AEEF]" /> Top Banner Scrolling Tickers
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-slate-800 border rounded-xl overflow-hidden">
          {tickers.length === 0 ? (
            <p className="p-4 text-xs text-slate-400">No ticker messages found for this portal.</p>
          ) : (
            tickers.map((t) => (
              <div key={t.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#2E3192] dark:text-cyan-400">
                      {t.division}
                    </span>
                    <span className={`text-[10px] font-bold ${t.isActive ? "text-emerald-500" : "text-slate-400"}`}>
                      {t.isActive ? "Active" : "Disabled"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{t.text}</p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => handleOpenTickerModal(t)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => handleDeleteTicker(t.id)} className="p-1.5 hover:bg-rose-50 rounded-lg text-rose-600">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── SECTION 2: NOTICE CARDS ── */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900 dark:text-white">Notice Board Cards</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {notices.map((n) => (
            <div key={n.id} className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold text-white px-2.5 py-0.5 rounded-full ${n.color || "bg-[#00AEEF]"}`}>
                    {n.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{n.date}</span>
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">{n.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{n.content || n.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-slate-400">Division: {n.division}</span>
                <div className="flex gap-1">
                  <button onClick={() => handleOpenNoticeModal(n)} className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-700 dark:text-slate-300">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => handleDeleteNotice(n.id)} className="p-1.5 hover:bg-rose-100 rounded text-rose-600">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NOTICE MODAL ── */}
      {isNoticeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingNotice ? "Edit Notice" : "Add Notice Card"}</h3>
            <form onSubmit={handleSaveNotice} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Title</label>
                <input type="text" value={noticeForm.title} onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })} className="input" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">Date</label>
                  <input type="text" value={noticeForm.date} onChange={(e) => setNoticeForm({ ...noticeForm, date: e.target.value })} className="input" required />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">Tag</label>
                  <input type="text" value={noticeForm.tag} onChange={(e) => setNoticeForm({ ...noticeForm, tag: e.target.value })} className="input" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">Division</label>
                  <select value={noticeForm.division} onChange={(e) => setNoticeForm({ ...noticeForm, division: e.target.value })} className="input">
                    <option value="school">School Division</option>
                    <option value="college">College Division</option>
                    <option value="all">All Divisions (Both)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-slate-500">Tag Color</label>
                  <select value={noticeForm.color} onChange={(e) => setNoticeForm({ ...noticeForm, color: e.target.value })} className="input">
                    <option value="bg-[#00AEEF]">Cyan (#00AEEF)</option>
                    <option value="bg-[#2E3192]">Navy (#2E3192)</option>
                    <option value="bg-emerald-600">Green</option>
                    <option value="bg-amber-600">Amber</option>
                    <option value="bg-slate-600">Gray</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Description / Details</label>
                <textarea rows={3} value={noticeForm.content} onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })} className="input py-2" />
              </div>
              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsNoticeModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold disabled:opacity-50">{saving ? "Saving…" : "Save Notice"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── TICKER MODAL ── */}
      {isTickerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingTicker ? "Edit Ticker" : "Add Ticker Item"}</h3>
            <form onSubmit={handleSaveTicker} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Ticker Text</label>
                <textarea rows={3} value={tickerForm.text} onChange={(e) => setTickerForm({ ...tickerForm, text: e.target.value })} className="input py-2" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Target Division</label>
                <select value={tickerForm.division} onChange={(e) => setTickerForm({ ...tickerForm, division: e.target.value })} className="input">
                  <option value="school">School Only</option>
                  <option value="college">College Only</option>
                  <option value="all">All (School &amp; College)</option>
                </select>
              </div>
              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsTickerModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold disabled:opacity-50">{saving ? "Saving…" : "Save Ticker"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
