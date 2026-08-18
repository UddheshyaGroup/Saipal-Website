import React, { useState, useEffect, useRef } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import { Plus, Edit, Trash2, Users, Link2, Upload, X, Image } from "lucide-react";

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export default function FacultyManager({ division = "school" }) {
  const isSchool = division === "school";
  const [faculty, setFaculty] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  // "url" | "upload"
  const [imageMode, setImageMode] = useState("url");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [fileSizeError, setFileSizeError] = useState("");
  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    qualification: "",
    experience: "",
    image: "",
    department: "",
  });

  const loadFaculty = async () => {
    try {
      const members = await cmsService.getFaculty(division);
      setFaculty(members);
    } catch (err) {
      console.error("Failed to load faculty:", err);
    }
  };

  useEffect(() => {
    loadFaculty();
    const handleCmsChange = () => loadFaculty();
    cmsBus.addEventListener("cms-data-changed", handleCmsChange);
    return () => cmsBus.removeEventListener("cms-data-changed", handleCmsChange);
  }, [division]);

  const resetImageState = () => {
    setImageFile(null);
    setImagePreview(null);
    setFileSizeError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOpenModal = (member = null) => {
    if (member) {
      setEditingMember(member);
      setForm({ ...member });
      setImagePreview(member.image || null);
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
      setFileSizeError(`File is too large (${(file.size / 1024 / 1024).toFixed(1)} MB). Maximum allowed size is ${MAX_FILE_SIZE_MB} MB.`);
      setImageFile(null);
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaveError("");

    try {
      if (imageMode === "upload" && imageFile) {
        // Upload via multipart/form-data → Cloudinary saipal_media/faculty/[division]
        await cmsService.saveFacultyMemberWithFile(
          { ...form, id: editingMember?.id || form.id, division },
          imageFile,
          division
        );
      } else {
        // URL mode — plain JSON save
        await cmsService.saveFacultyMember(
          { ...form, id: editingMember?.id || form.id, division },
          division
        );
      }
      setIsModalOpen(false);
      resetImageState();
    } catch (err) {
      setSaveError(err.message || "Failed to save. Check that the server is running.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Remove this faculty member?")) return;
    try { await cmsService.deleteFacultyMember(id); }
    catch (err) { alert("Delete failed: " + err.message); }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetImageState();
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="text-[#00AEEF]" /> Faculty &amp; Staff Directory
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
              <img src={member.image} alt={member.name} referrerPolicy="no-referrer" className="w-24 h-24 rounded-full object-cover mx-auto shadow-md border-2 border-[#00AEEF]" />
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
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {editingMember ? "Edit Member" : "Add Faculty Member"}
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

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

              {/* ── Profile Photo section ── */}
              <div>
                <label className="text-xs font-bold uppercase text-slate-500 block mb-2">Profile Photo</label>

                {/* Mode tabs */}
                <div className="flex rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 mb-3">
                  <button
                    type="button"
                    onClick={() => { setImageMode("url"); resetImageState(); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition ${
                      imageMode === "url"
                        ? "bg-[#00AEEF] text-white"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Link2 size={13} /> URL
                  </button>
                  <button
                    type="button"
                    onClick={() => { setImageMode("upload"); setForm({ ...form, image: "" }); }}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold transition ${
                      imageMode === "upload"
                        ? "bg-[#00AEEF] text-white"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    <Upload size={13} /> Upload
                  </button>
                </div>

                {imageMode === "url" ? (
                  <>
                    <input
                      type="text"
                      value={form.image}
                      onChange={(e) => { setForm({ ...form, image: e.target.value }); setImagePreview(e.target.value); }}
                      className="input"
                      placeholder="https://..."
                      required={imageMode === "url"}
                    />
                    {form.image && (
                      <img
                        src={imagePreview || form.image}
                        alt="preview"
                        referrerPolicy="no-referrer"
                        className="mt-2 w-16 h-16 rounded-full object-cover border-2 border-[#00AEEF] mx-auto"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {/* Drop zone / file picker */}
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-5 text-center cursor-pointer hover:border-[#00AEEF] transition group"
                    >
                      {imagePreview ? (
                        <div className="flex flex-col items-center gap-2">
                          <img src={imagePreview} alt="preview" className="w-20 h-20 rounded-full object-cover border-2 border-[#00AEEF]" />
                          <span className="text-xs text-slate-500 dark:text-slate-400">{imageFile?.name}</span>
                          <span className="text-[10px] text-slate-400">({(imageFile?.size / 1024 / 1024).toFixed(2)} MB)</span>
                          <span className="text-xs text-[#00AEEF] font-semibold">Click to change</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#00AEEF]/10 transition">
                            <Image size={22} className="text-slate-400 group-hover:text-[#00AEEF] transition" />
                          </div>
                          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Click to upload photo</p>
                          <p className="text-[10px] text-slate-400">JPG, PNG, WEBP &bull; Max {MAX_FILE_SIZE_MB} MB</p>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/gif,image/webp"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    {fileSizeError && (
                      <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2 mt-2">{fileSizeError}</p>
                    )}
                    {imageMode === "upload" && !imageFile && !editingMember && (
                      <p className="text-[10px] text-slate-400 mt-1 text-center">
                        No file chosen — a photo is required.
                      </p>
                    )}
                  </>
                )}
              </div>

              {saveError && <p className="text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2">{saveError}</p>}
              <div className="flex justify-end gap-2 pt-3">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-bold">Cancel</button>
                <button
                  type="submit"
                  disabled={saving || (imageMode === "upload" && !!fileSizeError)}
                  className="px-5 py-2 bg-[#00AEEF] text-white rounded-xl text-xs font-bold disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Save Member"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
