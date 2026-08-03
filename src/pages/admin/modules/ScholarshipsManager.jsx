import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Award, Building2, Quote, Settings, Save } from "lucide-react";

export function ScholarshipsManager({ division = "college" }) {
  const isSchool = division === "school";
  const [scholarships, setScholarships] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ title: "", coverage: "", eligibility: "", category: "Merit Waiver" });

  const loadData = () => setScholarships(cmsService.getScholarships(division));
  useEffect(() => {
    loadData();
    const handleCmsChange = () => loadData();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const handleOpenModal = (item = null) => {
    if (item) { setEditingItem(item); setForm({ ...item }); }
    else { setEditingItem(null); setForm({ title: "", coverage: "", eligibility: "", category: isSchool ? "School Award" : "College Merit Waiver", division: division }); }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    cmsService.saveScholarship({ id: editingItem?.id, ...form, division: division }, division);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete scholarship entry?")) cmsService.deleteScholarship(id);
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
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold">Save Scholarship</button>
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

  const loadData = () => {
    setFacilities(cmsService.getFacilities());
    setClubs(cmsService.getClubs());
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

export function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const loadData = () => setTestimonials(cmsService.getTestimonials());

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
          <Quote className="text-[#00AEEF]" /> Community Testimonials
        </h1>
        <p className="text-xs text-slate-500 mt-1">Manage parent and alumni feedback quotes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={t.id || i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <p className="text-xs text-slate-600 dark:text-slate-300 italic">"{t.text}"</p>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
              <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
              <p className="text-[#00AEEF] font-semibold text-[11px]">{t.relation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteSettingsManager() {
  const [settings, setSettings] = useState(cmsService.getSiteSettings());
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    cmsService.saveSiteSettings(settings);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
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
          <button type="submit" className="bg-[#2E3192] text-white px-8 py-3 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer">
            <Save size={16} /> Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default ScholarshipsManager;
