import React, { useState, useEffect } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Users } from "lucide-react";

export default function FacultyManager({ division = "school" }) {
  const isSchool = division === "school";
  const [faculty, setFaculty] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [form, setForm] = useState({
    name: "",
    role: "",
    qualification: "",
    experience: "",
    image: "",
    department: "",
  });

  const loadFaculty = () => {
    setFaculty(cmsService.getFaculty(division));
  };

  useEffect(() => {
    loadFaculty();
    const handleCmsChange = () => loadFaculty();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const handleOpenModal = (member = null) => {
    if (member) {
      setEditingMember(member);
      setForm({ ...member });
    } else {
      setEditingMember(null);
      setForm({
        name: "",
        role: isSchool ? "K-10 Teacher" : "Lecturer",
        qualification: isSchool ? "M.Ed. / B.Ed." : "M.Sc. / M.A. / M.B.S",
        experience: "5+ Years",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
        department: isSchool ? "Primary Level" : "A-Levels & +2 Science",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    cmsService.saveFacultyMember(
      {
        ...form,
        id: editingMember?.id || form.id,
        division: division, // Enforce current division!
      },
      division
    );
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Remove this faculty member from directory?")) {
      cmsService.deleteFacultyMember(id);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="text-[#00AEEF]" /> Faculty & Staff Directory
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage teacher profiles, qualifications, and department leaders.
          </p>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="bg-[#00AEEF] hover:bg-[#0097d1] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-md cursor-pointer"
        >
          <Plus size={16} /> Add Faculty Member
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((member, i) => (
          <div key={member.id || i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between p-5 space-y-4">
            <div className="space-y-3 text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto shadow-md border-2 border-[#00AEEF]" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{member.name}</h3>
                <p className="text-xs text-[#00AEEF] font-semibold">{member.role}</p>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{member.qualification}</p>
              <p className="text-[10px] text-slate-400 font-mono">{member.experience}</p>
            </div>

            <div className="flex justify-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button onClick={() => handleOpenModal(member)} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-200">
                <Edit size={16} />
              </button>
              <button onClick={() => handleDelete(member.id)} className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{editingMember ? "Edit Member" : "Add Faculty Member"}</h3>
            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Role / Position</label>
                <input type="text" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Qualification</label>
                <input type="text" value={form.qualification} onChange={(e) => setForm({ ...form, qualification: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Experience</label>
                <input type="text" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="input" required />
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Profile Photo URL</label>
                <input type="text" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="input" required />
              </div>
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button type="submit" className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold">Save Member</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
