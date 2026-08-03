import React, { useState, useEffect, useRef } from "react";
import { cmsService, cmsBus } from "../../../services/cmsService";
import {
  ImagePlus, FolderPlus, Trash2, Edit3, Save, X,
  ChevronLeft, Eye, AlertTriangle, Images, Link as LinkIcon,
  Upload, HardDrive,
} from "lucide-react";

export default function GalleryManager({ division }) {
  const [albums, setAlbums] = useState([]);
  const [view, setView] = useState("albums"); // "albums" | "photos"
  const [activeAlbum, setActiveAlbum] = useState(null);

  // Album form state
  const [showAlbumForm, setShowAlbumForm] = useState(false);
  const [editingAlbum, setEditingAlbum] = useState(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumCover, setAlbumCover] = useState("");

  // Photo add state
  const [addMode, setAddMode] = useState("upload"); // "upload" | "url"
  const [newPhotoUrl, setNewPhotoUrl] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadQueue, setUploadQueue] = useState([]); // previews before confirm
  const fileInputRef = useRef(null);

  const isSchool = division === "school";
  const accent = isSchool ? "#00AEEF" : "#2E3192";
  const accentBg = isSchool ? "bg-[#00AEEF]" : "bg-[#2E3192]";
  const accentText = isSchool ? "text-[#00AEEF]" : "text-[#2E3192]";

  const loadAlbums = () => setAlbums(cmsService.getGalleryAlbums(division));

  useEffect(() => {
    loadAlbums();
    const handler = () => loadAlbums();
    cmsBus.addEventListener("cms-data-changed", handler);
    return () => cmsBus.removeEventListener("cms-data-changed", handler);
  }, [division]);

  const refreshActive = (albumId) => {
    const updated = cmsService.getGalleryAlbums("all").find((a) => String(a.id) === String(albumId));
    setActiveAlbum(updated);
    loadAlbums();
  };

  // ── Album CRUD ──
  const openNewAlbum = () => {
    setEditingAlbum(null); setAlbumTitle(""); setAlbumCover(""); setShowAlbumForm(true);
  };
  const openEditAlbum = (album) => {
    setEditingAlbum(album); setAlbumTitle(album.title); setAlbumCover(album.cover || ""); setShowAlbumForm(true);
  };
  const saveAlbum = () => {
    if (!albumTitle.trim()) return;
    cmsService.saveGalleryAlbum({
      ...(editingAlbum || {}),
      title: albumTitle.trim(),
      cover: albumCover.trim() || (editingAlbum?.photos?.[0]?.url ?? ""),
      division,
    }, division);
    setShowAlbumForm(false);
    loadAlbums();
  };
  const deleteAlbum = (id) => {
    if (!window.confirm("Delete this album and all its photos?")) return;
    cmsService.deleteGalleryAlbum(id);
    loadAlbums();
  };

  // ── Photo CRUD ──
  const openAlbum = (album) => {
    setActiveAlbum(album); setView("photos");
    setNewPhotoUrl(""); setPhotoError(""); setUploadQueue([]);
  };

  // URL mode
  const addPhotoByUrl = () => {
    const url = newPhotoUrl.trim();
    if (!url) { setPhotoError("Please enter a photo URL."); return; }
    cmsService.addPhotoToAlbum(activeAlbum.id, url);
    setNewPhotoUrl(""); setPhotoError("");
    refreshActive(activeAlbum.id);
  };

  // Upload mode — read files as base64
  // Compress image via canvas before storing — keeps base64 size tiny (~120KB per photo)
  const compressImage = (file) =>
    new Promise((resolve, reject) => {
      if (!file.type.startsWith("image/")) { reject(new Error("Not an image")); return; }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("Read failed"));
      reader.onload = (ev) => {
        const img = new Image();
        img.onerror = () => reject(new Error("Load failed"));
        img.onload = () => {
          const MAX = 1200;
          let { width, height } = img;
          if (width > MAX || height > MAX) {
            if (width > height) { height = Math.round((height * MAX) / width); width = MAX; }
            else { width = Math.round((width * MAX) / height); height = MAX; }
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          canvas.getContext("2d").drawImage(img, 0, 0, width, height);
          resolve({ name: file.name, dataUrl: canvas.toDataURL("image/jpeg", 0.72) });
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    setPhotoError("");

    Promise.all(files.map((f) => compressImage(f).catch(() => null)))
      .then((results) => {
        const valid = results.filter(Boolean);
        if (!valid.length) setPhotoError("No valid images found. Please select JPG, PNG or WEBP files.");
        setUploadQueue((prev) => [...prev, ...valid]);
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
      });
  };

  const confirmUploads = () => {
    if (!uploadQueue.length) return;
    try {
      uploadQueue.forEach((item) => {
        cmsService.addPhotoToAlbum(activeAlbum.id, item.dataUrl);
      });
      setUploadQueue([]);
      setPhotoError("");
      refreshActive(activeAlbum.id);
    } catch (err) {
      if (err.name === "QuotaExceededError") {
        setPhotoError("Storage full. Try uploading fewer photos at a time, or delete unused ones first.");
      } else {
        setPhotoError("Upload failed: " + err.message);
      }
    }
  };

  const removeFromQueue = (idx) => {
    setUploadQueue((prev) => prev.filter((_, i) => i !== idx));
  };

  const removePhoto = (photoId) => {
    if (!window.confirm("Remove this photo?")) return;
    cmsService.removePhotoFromAlbum(activeAlbum.id, photoId);
    refreshActive(activeAlbum.id);
  };

  const setCoverFromPhoto = (url) => {
    cmsService.saveGalleryAlbum({ ...activeAlbum, cover: url }, division);
    setActiveAlbum((prev) => ({ ...prev, cover: url }));
    loadAlbums();
  };

  // ── PHOTO VIEW ──
  if (view === "photos" && activeAlbum) {
    const fresh = albums.find((a) => String(a.id) === String(activeAlbum.id)) || activeAlbum;
    return (
      <div className="space-y-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => { setView("albums"); setActiveAlbum(null); setUploadQueue([]); }}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition cursor-pointer"
          >
            <ChevronLeft size={16} /> Gallery Albums
          </button>
          <span className="text-slate-300">/</span>
          <span className={`text-sm font-bold ${accentText}`}>{fresh.title}</span>
          <span className="ml-auto text-xs text-slate-400">{fresh.photos?.length || 0} photos</span>
        </div>

        {/* Add Photo Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <ImagePlus size={16} style={{ color: accent }} /> Add Photos
            </h3>
            {/* Mode Toggle */}
            <div className="flex rounded-xl overflow-hidden border border-slate-200 text-xs font-bold">
              <button
                onClick={() => { setAddMode("upload"); setPhotoError(""); setNewPhotoUrl(""); }}
                className={`px-3 py-1.5 flex items-center gap-1.5 transition cursor-pointer ${addMode === "upload" ? `text-white` : "text-slate-500 hover:bg-slate-50"}`}
                style={addMode === "upload" ? { background: accent } : {}}
              >
                <HardDrive size={12} /> From Device
              </button>
              <button
                onClick={() => { setAddMode("url"); setPhotoError(""); setUploadQueue([]); }}
                className={`px-3 py-1.5 flex items-center gap-1.5 transition cursor-pointer ${addMode === "url" ? `text-white` : "text-slate-500 hover:bg-slate-50"}`}
                style={addMode === "url" ? { background: accent } : {}}
              >
                <LinkIcon size={12} /> From URL
              </button>
            </div>
          </div>

          {/* ── FROM DEVICE ── */}
          {addMode === "upload" && (
            <div className="space-y-3">
              {/* Drop zone */}
              <label
                htmlFor="gallery-file-input"
                className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 hover:border-slate-400 rounded-xl p-6 cursor-pointer transition bg-slate-50 hover:bg-slate-100 text-center"
              >
                <Upload size={28} className="text-slate-400" />
                <span className="text-sm font-semibold text-slate-600">Click to select photos</span>
                <span className="text-xs text-slate-400">JPG, PNG, WEBP, GIF — multiple files supported</span>
                <input
                  id="gallery-file-input"
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>

              {uploading && (
                <p className="text-xs text-slate-500 text-center animate-pulse">Reading files…</p>
              )}

              {/* Upload Queue Preview */}
              {uploadQueue.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Ready to add — {uploadQueue.length} photo{uploadQueue.length > 1 ? "s" : ""}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {uploadQueue.map((item, idx) => (
                      <div key={idx} className="relative group rounded-xl overflow-hidden aspect-square border border-slate-200 bg-slate-100">
                        <img src={item.dataUrl} alt={item.name} className="w-full h-full object-cover" />
                        <button
                          onClick={() => removeFromQueue(idx)}
                          className="absolute top-1 right-1 p-0.5 bg-rose-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
                        >
                          <X size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={confirmUploads}
                    className={`w-full ${accentBg} text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer`}
                  >
                    <ImagePlus size={15} /> Add {uploadQueue.length} Photo{uploadQueue.length > 1 ? "s" : ""} to Album
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── FROM URL ── */}
          {addMode === "url" && (
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <LinkIcon size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => { setNewPhotoUrl(e.target.value); setPhotoError(""); }}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl outline-none focus:ring-1 transition"
                    onKeyDown={(e) => e.key === "Enter" && addPhotoByUrl()}
                  />
                </div>
                <button
                  onClick={addPhotoByUrl}
                  className={`${accentBg} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 hover:opacity-90 transition cursor-pointer`}
                >
                  <ImagePlus size={15} /> Add
                </button>
              </div>
              {photoError && <p className="text-xs text-rose-500 flex items-center gap-1"><AlertTriangle size={12} />{photoError}</p>}
              {newPhotoUrl && (
                <img
                  src={newPhotoUrl} alt="preview"
                  className="h-28 rounded-xl object-cover border border-slate-200 mt-1"
                  onError={(e) => { e.target.style.display = "none"; setPhotoError("Could not load image from this URL."); }}
                />
              )}
            </div>
          )}
        </div>

        {/* Photo Grid */}
        {(!fresh.photos || fresh.photos.length === 0) ? (
          <div className="text-center py-16 text-slate-400 bg-white rounded-2xl border border-slate-200">
            <Images size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-semibold">No photos yet</p>
            <p className="text-xs mt-1">Upload from your device or add by URL above.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {fresh.photos.map((photo) => (
              <div key={photo.id} className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-square">
                <img src={photo.url} alt="" className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.background = "#e2e8f0"; e.target.style.display = "block"; }} />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2 p-2">
                  {fresh.cover !== photo.url ? (
                    <button onClick={() => setCoverFromPhoto(photo.url)}
                      className="text-[10px] bg-white/90 text-slate-700 px-2 py-1 rounded-lg font-bold hover:bg-white transition cursor-pointer">
                      Set Cover
                    </button>
                  ) : (
                    <span className="text-[10px] bg-amber-400 text-white px-2 py-1 rounded-lg font-bold">Cover ★</span>
                  )}
                  <button onClick={() => removePhoto(photo.id)}
                    className="p-1.5 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition cursor-pointer">
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── ALBUMS VIEW ──
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-extrabold text-slate-800">
            {isSchool ? "School" : "College"} Gallery
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage photo albums for the {isSchool ? "School" : "College"} gallery page.
          </p>
        </div>
        <button onClick={openNewAlbum}
          className={`${accentBg} text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition cursor-pointer shadow-sm`}>
          <FolderPlus size={16} /> New Album
        </button>
      </div>

      {/* Album Form Modal */}
      {showAlbumForm && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-800">{editingAlbum ? "Edit Album" : "New Album"}</h3>
              <button onClick={() => setShowAlbumForm(false)} className="p-1.5 hover:bg-slate-100 rounded-lg cursor-pointer"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Album Title *</label>
                <input type="text" value={albumTitle} onChange={(e) => setAlbumTitle(e.target.value)}
                  placeholder="e.g. Science Fair 2025"
                  className="w-full px-3 py-2.5 text-sm text-black border border-slate-200 rounded-xl outline-none focus:ring-1" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">Cover Image URL (optional)</label>
                <input type="url" value={albumCover} onChange={(e) => setAlbumCover(e.target.value)}
                  placeholder="https://example.com/cover.jpg"
                  className="w-full px-3 py-2.5 text-sm text-black border border-slate-200 rounded-xl outline-none focus:ring-1" />
                <p className="text-[10px] text-slate-400 mt-1">If blank, the first added photo becomes the cover.</p>
              </div>
              {albumCover && <img src={albumCover} alt="preview" className="h-28 w-full object-cover rounded-xl border border-slate-200"
                onError={(e) => e.target.style.display = "none"} />}
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={saveAlbum} disabled={!albumTitle.trim()}
                className={`flex-1 ${accentBg} text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer disabled:opacity-40`}>
                <Save size={15} /> {editingAlbum ? "Save Changes" : "Create Album"}
              </button>
              <button onClick={() => setShowAlbumForm(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition cursor-pointer">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Albums Grid */}
      {albums.length === 0 ? (
        <div className="text-center py-20 text-slate-400 bg-white rounded-2xl border border-slate-200">
          <Images size={48} className="mx-auto mb-3 opacity-20" />
          <p className="font-bold text-slate-500">No albums yet</p>
          <p className="text-xs mt-1">Click "New Album" to get started.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((album) => (
            <div key={album.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              <div className="relative h-44 bg-slate-100 cursor-pointer" onClick={() => openAlbum(album)}>
                {album.cover ? (
                  <img src={album.cover} alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => e.target.style.display = "none"} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Images size={36} className="text-slate-300" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="flex items-center gap-1.5 text-white text-sm font-bold bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <Eye size={14} /> Open Album
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {album.photos?.length || 0} photos
                </span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <p className="font-bold text-slate-700 text-sm truncate pr-2">{album.title}</p>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEditAlbum(album)} title="Edit"
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer">
                    <Edit3 size={14} />
                  </button>
                  <button onClick={() => deleteAlbum(album.id)} title="Delete"
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
