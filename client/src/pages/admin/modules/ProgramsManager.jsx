import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, GraduationCap } from "lucide-react";

export default function ProgramsManager({ division = "college" }) {
  const isSchool = division === "school";
  const [programs, setPrograms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [form, setForm] = useState({
    title: "",
    code: "alevels",
    badge: "GLOBAL STANDARD",
    image: "/CambridgeLogo.png",
    description: "",
    details: "",
    division: division,
  });

  const loadPrograms = async () => {
    try {
      const data = await cmsService.getPrograms(division);
      setPrograms(data);
    } catch (err) {
      console.error("Failed to load programs:", err);
    }
  };

  useEffect(() => {
    loadPrograms();
    const handleCmsChange = () => loadPrograms();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const handleOpenModal = (program = null) => {
    if (program) {
      setEditingProgram(program);
      setForm({ ...program });
    } else {
      setEditingProgram(null);
      setForm({
        title: "",
        code: isSchool ? "new-school-level" : "new-college-prog",
        badge: isSchool ? "SCHOOL LEVEL" : "GLOBAL STANDARD",
        image: isSchool ? "/school-level.jpeg" : "/CambridgeLogo.png",
        description: "",
        details: "",
        division: division,
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveProgram(
        { id: editingProgram?.id, ...form, division },
        division
      );
      setIsModalOpen(false);
    } catch (err) {
      setSaveError(err.message || "Failed to save. Check that the server is running.");
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this program?")) return;
    try { await cmsService.deleteProgram(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="text-[#00AEEF]" /> Academic Programs Manager
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Edit Cambridge A-Levels, NEB +2, and School Level offerings.
          </p>
        </div>

        <button onClick={() => handleOpenModal()} className="bg-[#00AEEF] hover:bg-[#0097d1] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer">
          <Plus size={16} /> Add Program Card
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <div key={p.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={p.image} alt={p.title} className="w-14 h-14 rounded-xl object-contain border p-1" />
                <div>
                  <span className="text-[10px] font-bold text-[#00AEEF] uppercase tracking-wider">{p.badge}</span>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{p.title}</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">{p.description}</p>
              <p className="text-[11px] text-slate-400 font-mono">{p.details}</p>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button onClick={() => handleOpenModal(p)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-200">
                <Edit size={16} />
              </button>
              <button onClick={() => handleDelete(p.id)} className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingProgram ? "Edit Program" : "Add Program"}</h3>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Program Title</label>
                <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Badge Label</label>
                <input type="text" value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Image URL</label>
                <input type="text" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Short Summary</label>
                <textarea rows={2} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input py-2" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Curriculum Details</label>
                <textarea rows={3} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} className="input py-2" />
              </div>
              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold disabled:opacity-50">{saving ? "Saving…" : "Save Program"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
