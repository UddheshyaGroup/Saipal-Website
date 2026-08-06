import { useState } from "react";
import Input from "../components/layout/resuables/Input";
import Toast from "../components/layout/resuables/Toast";
import { AnimatePresence } from "framer-motion";

export default function SchoolInquiryForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    gradeSeeking: "",
    phone: "",
    email: "",
    address: "",
    purpose: "",
    message: "",
    mode: "",
    dateTime: "",
    source: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearStatus = () => {
    setStatus((prev) => ({ ...prev, info: { error: false, msg: null } }));
  };

  const handleResponse = (resStatus, msg) => {
    if (resStatus === 200) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        parentName: "",
        studentName: "",
        gradeSeeking: "",
        phone: "",
        email: "",
        address: "",
        purpose: "",
        message: "",
        mode: "",
        dateTime: "",
        source: "",
      });
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || import.meta.env.BREVO_API_KEY;
    const BREVO_FROM = import.meta.env.VITE_BREVO_FROM || import.meta.env.BREVO_FROM || "mail@saipal.edu.np";

    if (!BREVO_API_KEY) {
      handleResponse(400, "API Key is missing. Please check configuration.");
      return;
    }

    try {
      const res = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "Saipal School Website", email: BREVO_FROM },
          to: [{ email: BREVO_FROM, name: "Saipal School Admissions Desk" }],
          replyTo: { email: formData.email, name: formData.parentName },
          subject: `New School Inquiry Submission from ${formData.parentName} (${formData.gradeSeeking})`,
          htmlContent: `
            <h3>New Saipal School Inquiry</h3>
            <p><strong>Parent / Guardian Name:</strong> ${formData.parentName}</p>
            <p><strong>Student Name:</strong> ${formData.studentName}</p>
            <p><strong>Grade Seeking:</strong> ${formData.gradeSeeking}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Purpose:</strong> ${formData.purpose}</p>
            <p><strong>Preferred Meeting Mode:</strong> ${formData.mode}</p>
            <p><strong>Preferred Date/Time:</strong> ${formData.dateTime}</p>
            <p><strong>How Heard:</strong> ${formData.source}</p>
            <p><strong>Message / Notes:</strong></p>
            <p>${formData.message}</p>
          `,
        }),
      });

      if (res.ok) {
        handleResponse(200, "School inquiry submitted successfully! Our team will contact you shortly.");
      } else {
        const errorData = await res.json();
        handleResponse(res.status, errorData.message || "Failed to submit inquiry.");
      }
    } catch (error) {
      handleResponse(500, "An error occurred. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header Banner */}
      <section className="bg-[#2E3192] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            Saipal School (K – Grade 10)
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            School Admission Inquiry Form
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Fill out the form below to inquire about admissions, schedule a campus visit, or learn more about our K–10 curriculum.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <AnimatePresence>
          {status.info.msg && (
            <Toast
              message={status.info.msg}
              type={status.info.error ? "error" : "success"}
              onClose={clearStatus}
            />
          )}
        </AnimatePresence>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Applicant & Student Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Parent / Guardian Full Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />

              <Input
                label="Child / Student’s Full Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Grade Seeking Admission For *
                </label>
                <select
                  name="gradeSeeking"
                  value={formData.gradeSeeking}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="">Select Grade Level</option>
                  <option>Playgroup / Nursery (Pre-Primary)</option>
                  <option>LKG / UKG (Pre-Primary)</option>
                  <option>Grade 1 – 3 (Primary)</option>
                  <option>Grade 4 – 5 (Primary)</option>
                  <option>Grade 6 – 8 (Lower Secondary)</option>
                  <option>Grade 9 – 10 (SEE Preparation)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Purpose of Inquiry *
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="">Select Purpose</option>
                  <option>School Admission Information</option>
                  <option>Schedule Campus Visit & Tour</option>
                  <option>Fee Structure & Scholarships</option>
                  <option>Transportation & Bus Network</option>
                  <option>Curriculum & STEAM Labs</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Mobile Phone Number *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <Input
              label="Current Residence Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="e.g. Dhumbarahi, Kathmandu"
            />

            {/* Additional Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Additional Notes / Questions
              </label>
              <textarea
                name="message"
                value={formData.message}
                rows="4"
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] resize-none"
                placeholder="Write any specific questions about your child's previous schooling or interests..."
              />
            </div>

            {/* Preferred Meeting Mode & Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Contact Mode
                </label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
                >
                  <option value="">Select Mode</option>
                  <option>In-Person School Visit</option>
                  <option>Phone Call back</option>
                  <option>Email Response</option>
                </select>
              </div>

              <Input
                label="Preferred Visit Date & Time"
                name="dateTime"
                type="datetime-local"
                value={formData.dateTime}
                onChange={handleChange}
              />
            </div>

            {/* Source */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                How did you hear about Saipal School?
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00AEEF] bg-white"
              >
                <option value="">Select Option</option>
                <option>Friends / Family Recommendation</option>
                <option>Social Media (Facebook / Instagram)</option>
                <option>Website / Google Search</option>
                <option>School Event / Banner</option>
                <option>Other</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-[#00AEEF] hover:bg-[#0096ce] transition text-white font-bold py-3.5 rounded-xl shadow-md ${
                  status.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {status.submitting ? "Submitting Inquiry..." : "Submit School Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
