import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Award, Building2, Quote, Settings, Save } from "lucide-react";

export function ScholarshipsManager({ division = "college" }) {
  const isSchool = division === "school";
  const [scholarships, setScholarships] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ title: "", coverage: "", eligibility: "", category: "Merit Waiver" });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const loadData = async () => {
    try {
      const data = await cmsService.getScholarships(division);
      setScholarships(data);
    } catch (err) {
      console.error("Failed to load scholarships:", err);
    }
  };
  useEffect(() => {
    loadData();
    const handleCmsChange = () => loadData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const handleOpenModal = (item = null) => {
    setSaveError("");
    if (item) { setEditingItem(item); setForm({ ...item }); }
    else { setEditingItem(null); setForm({ title: "", coverage: "", eligibility: "", category: isSchool ? "School Award" : "College Merit Waiver", division: division }); }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveScholarship({ id: editingItem?.id, ...form, division }, division);
      setIsModalOpen(false);
    } catch (err) {
      setSaveError(err.message || "Failed to save. Check that the server is running.");
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete scholarship entry?")) return;
    try { await cmsService.deleteScholarship(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="text-[#00AEEF]" /> Scholarships & Financial Aid
          </h1>
          <p className="text-xs text-slate-500 mt-1">Manage merit waivers, discounts, and eligibility requirements.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="bg-[#00AEEF] hover:bg-[#0097d1] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer">
          <Plus size={16} /> Add Scholarship Waiver
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {scholarships.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                {s.category}
              </span>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{s.title}</h3>
              <p className="text-xs font-semibold text-[#00AEEF]">{s.coverage}</p>
              <p className="text-xs text-slate-500">{s.eligibility}</p>
            </div>
            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button onClick={() => handleOpenModal(s)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-200"><Edit size={16} /></button>
              <button onClick={() => handleDelete(s.id)} className="p-2 bg-rose-50 text-rose-600 rounded-xl"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingItem ? "Edit Scholarship" : "Add Scholarship"}</h3>
            <form onSubmit={handleSave} className="space-y-3">
              <div><label className="text-xs font-bold uppercase text-slate-500">Title</label><input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="input" required /></div>
              <div><label className="text-xs font-bold uppercase text-slate-500">Coverage / Waiver Amount</label><input type="text" value={form.coverage} onChange={(e) => setForm({ ...form, coverage: e.target.value })} className="input" required /></div>
              <div><label className="text-xs font-bold uppercase text-slate-500">Eligibility Requirement</label><textarea rows={3} value={form.eligibility} onChange={(e) => setForm({ ...form, eligibility: e.target.value })} className="input py-2" required /></div>
              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold disabled:opacity-50">{saving ? "Saving…" : "Save Scholarship"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export function FacilitiesManager() {
  const [facilities, setFacilities] = useState([]);
  const [clubs, setClubs] = useState([]);

  const loadData = async () => {
    try {
      const [f, c] = await Promise.all([
        cmsService.getFacilities(),
        cmsService.getClubs(),
      ]);
      setFacilities(f);
      setClubs(c);
    } catch (err) {
      console.error("Failed to load facilities/clubs:", err);
    }
  };

  useEffect(() => {
    loadData();
    const handleCmsChange = () => loadData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="text-[#00AEEF]" /> Campus Facilities & Extra-Curricular Clubs
        </h1>
        <p className="text-xs text-slate-500 mt-1">Manage labs, playgrounds, Red Cross, STEAM & Robotics clubs.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-bold text-base text-slate-900 dark:text-white">Campus Facilities ({facilities.length})</h2>
          <div className="space-y-3">
            {facilities.map((f, i) => (
              <div key={f.id || i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs space-y-1">
                <p className="font-bold text-slate-800 dark:text-white">{f.title}</p>
                <p className="text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="font-bold text-base text-slate-900 dark:text-white">Student Clubs ({clubs.length})</h2>
          <div className="space-y-3">
            {clubs.map((c, i) => (
              <div key={c.id || i} className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs space-y-1">
                <p className="font-bold text-slate-800 dark:text-white">{c.icon} {c.title}</p>
                <p className="text-slate-500">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsManager({ division = "school" }) {
  const isSchool = division === "school";
  const accentBg = isSchool ? "bg-[#00AEEF] hover:bg-[#0096ce]" : "bg-[#2E3192] hover:bg-[#252880]";
  const accentText = isSchool ? "text-[#00AEEF]" : "text-[#2E3192]";
  const accentIconColor = isSchool ? "#00AEEF" : "#2E3192";

  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ name: "", relation: "", text: "", rating: 5 });
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const loadData = async () => {
    try {
      const data = await cmsService.getTestimonials(division);
      setTestimonials(data);
    } catch (err) {
      console.error("Failed to load testimonials:", err);
    }
  };

  useEffect(() => {
    loadData();
    const handleCmsChange = () => loadData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const handleOpenModal = (item = null) => {
    setSaveError("");
    if (item) {
      setEditingItem(item);
      setForm({ ...item });
    } else {
      setEditingItem(null);
      setForm({ name: "", relation: "", text: "", rating: 5, division: division });
    }
    setIsModalOpen(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveTestimonial({ id: editingItem?.id, ...form, division }, division);
      setIsModalOpen(false);
    } catch (err) {
      setSaveError(err.message || "Failed to save. Check that the server is running.");
    } finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    try { await cmsService.deleteTestimonial(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Quote className={accentText} style={{ color: accentIconColor }} /> {isSchool ? "Parent Testimonials" : "Community Reviews"}
          </h1>
          <p className="text-xs text-slate-500 mt-1">Manage feedback, alumni reviews, and parent testimonials.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className={`${accentBg} text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer`}
        >
          <Plus size={16} /> Add New Review
        </button>
      </div>

      {testimonials.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl text-slate-400">
          <Quote size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-semibold">No testimonials found</p>
          <p className="text-xs mt-1">Add your first testimonial using the button above.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={t.id || i} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between hover:border-[#00AEEF]/50 transition">
              <div className="space-y-3">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">"{t.text}"</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                  <p className={`${accentText} font-semibold text-xs mt-0.5`}>{t.relation}</p>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button
                    onClick={() => handleOpenModal(t)}
                    title="Edit testimonial"
                    className="p-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg transition"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => handleDelete(t.id)}
                    title="Delete testimonial"
                    className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {editingItem ? "Edit Testimonial" : "Add Testimonial"}
            </h3>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Name / Author</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Subodh Thapa"
                  className="input text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Relation / Subtitle</label>
                <input
                  type="text"
                  value={form.relation}
                  onChange={(e) => setForm({ ...form, relation: e.target.value })}
                  placeholder="e.g. NEB Alumnus (Batch 2024)"
                  className="input text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Review Text</label>
                <textarea
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="Write the testimonial content..."
                  className="input py-2 text-slate-900 resize-none"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500 block mb-1">Rating</label>
                <select
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                  className="input text-slate-900"
                >
                  <option value={5}>5 Stars ★★★★★</option>
                  <option value={4}>4 Stars ★★★★</option>
                  <option value={3}>3 Stars ★★★</option>
                </select>
              </div>
              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" disabled={saving} className={`px-5 py-2.5 ${accentBg} text-white rounded-xl text-xs font-bold disabled:opacity-50`}>{saving ? "Saving…" : "Save Testimonial"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteSettingsManager() {
  const [settings, setSettings] = useState({});
  const [savedMessage, setSavedMessage] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const loadSettings = async () => {
    try {
      const data = await cmsService.getSiteSettings();
      setSettings(data);
    } catch (err) {
      console.error("Failed to load site settings:", err);
    }
  };

  useEffect(() => {
    loadSettings();
    const handleCmsChange = () => loadSettings();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true); setSaveError("");
    try {
      await cmsService.saveSiteSettings(settings);
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 3000);
    } catch (err) {
      setSaveError(err.message || "Failed to save settings.");
    } finally { setSaving(false); }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Settings className="text-[#00AEEF]" /> Website Contact & Operational Settings
          </h1>
          <p className="text-xs text-slate-500 mt-1">Update phone numbers, email, campus address, and shift hours.</p>
        </div>
      </div>

      {savedMessage && (
        <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold text-center">
          Site settings saved successfully! Live website updated.
        </div>
      )}

      {saveError && (
        <div className="p-3 bg-rose-100 text-rose-800 rounded-xl text-xs font-bold text-center">{saveError}</div>
      )}

      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="text-xs font-bold uppercase text-slate-500">School Name</label><input type="text" value={settings.schoolName || ""} onChange={(e) => setSettings({ ...settings, schoolName: e.target.value })} className="input" required /></div>
          <div><label className="text-xs font-bold uppercase text-slate-500">Contact Email</label><input type="email" value={settings.email || ""} onChange={(e) => setSettings({ ...settings, email: e.target.value })} className="input" required /></div>
          <div><label className="text-xs font-bold uppercase text-slate-500">Primary Phone</label><input type="text" value={settings.phonePrimary || ""} onChange={(e) => setSettings({ ...settings, phonePrimary: e.target.value })} className="input" required /></div>
          <div><label className="text-xs font-bold uppercase text-slate-500">Secondary Phone</label><input type="text" value={settings.phoneSecondary || ""} onChange={(e) => setSettings({ ...settings, phoneSecondary: e.target.value })} className="input" /></div>
          <div className="md:col-span-2"><label className="text-xs font-bold uppercase text-slate-500">Campus Address</label><input type="text" value={settings.address || ""} onChange={(e) => setSettings({ ...settings, address: e.target.value })} className="input" required /></div>
          <div><label className="text-xs font-bold uppercase text-slate-500">School Shift Hours</label><input type="text" value={settings.schoolHours || ""} onChange={(e) => setSettings({ ...settings, schoolHours: e.target.value })} className="input" required /></div>
          <div><label className="text-xs font-bold uppercase text-slate-500">College Morning Shift</label><input type="text" value={settings.collegeManagementHours || ""} onChange={(e) => setSettings({ ...settings, collegeManagementHours: e.target.value })} className="input" required /></div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button type="submit" disabled={saving} className="bg-[#2E3192] text-white px-8 py-3 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer disabled:opacity-50">
            <Save size={16} /> {saving ? "Saving…" : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ScholarshipsManager;
