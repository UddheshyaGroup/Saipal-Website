import { useState } from "react";
import Input from "../components/layout/resuables/Input";
import Toast from "../components/layout/resuables/Toast";
import { AnimatePresence } from "framer-motion";

export default function Admissions() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    applyingFor: "",
    gradeApplying: "",
    previousSchool: "",
    lastGrade: "",
    parentName: "",
    relation: "",
    phone: "",
    email: "",
    address: "",
    documents: "",
    message: "",
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
        studentName: "",
        dob: "",
        gender: "",
        applyingFor: "",
        gradeApplying: "",
        previousSchool: "",
        lastGrade: "",
        parentName: "",
        relation: "",
        phone: "",
        email: "",
        address: "",
        documents: "",
        message: "",
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
      handleResponse(400, "API Key is missing. Please check your configuration.");
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
          sender: { name: "Saipal Website", email: BREVO_FROM },
          to: [{ email: BREVO_FROM, name: "Saipal Academy Admin" }],
          replyTo: { email: formData.email, name: formData.studentName },
          subject: `New Admission Application from ${formData.studentName}`,
          htmlContent: `
            <h3>New Admission Application</h3>
            <p><strong>Student Full Name:</strong> ${formData.studentName}</p>
            <p><strong>Date of Birth:</strong> ${formData.dob}</p>
            <p><strong>Gender:</strong> ${formData.gender}</p>
            <p><strong>Applying For:</strong> ${formData.applyingFor}</p>
            <p><strong>Grade Applying For:</strong> ${formData.gradeApplying}</p>
            <hr />
            <p><strong>Previous School:</strong> ${formData.previousSchool}</p>
            <p><strong>Last Grade Completed:</strong> ${formData.lastGrade}</p>
            <hr />
            <p><strong>Parent/Guardian Name:</strong> ${formData.parentName}</p>
            <p><strong>Relation:</strong> ${formData.relation}</p>
            <p><strong>Mobile Number:</strong> ${formData.phone}</p>
            <p><strong>Email Address:</strong> ${formData.email}</p>
            <p><strong>Home Address:</strong> ${formData.address}</p>
            <hr />
            <p><strong>Documents:</strong> ${formData.documents}</p>
            <p><strong>Additional Message:</strong></p>
            <p>${formData.message}</p>
          `,
        }),
      });

      if (res.ok) {
        handleResponse(200, "Admission form submitted successfully!");
      } else {
        const errorData = await res.json();
        handleResponse(res.status, errorData.message || "Failed to submit admission form.");
      }
    } catch (error) {
      handleResponse(500, "An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <AnimatePresence>
        {status.info.msg && (
          <Toast
            message={status.info.msg}
            type={status.info.error ? "error" : "success"}
            onClose={clearStatus}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-10">
        <h1 className="flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary mb-2">
          Admission Form
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">

          {/* Student Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Student Full Name" name="studentName" value={formData.studentName} onChange={handleChange} required />
            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />

            <div>
              <label className="block text-sm font-semibold mb-1">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className="input">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Applying For</label>
              <select name="applyingFor" value={formData.applyingFor} onChange={handleChange} required className="input">
                <option value="">Select</option>
                <option>A-Levels</option>
                <option>+2</option>
                <option>School Level</option>
              </select>
            </div>

            <Input label="Grade Applying For" name="gradeApplying" value={formData.gradeApplying} onChange={handleChange} />
          </div>

          {/* Academic Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Previous School" name="previousSchool" value={formData.previousSchool} onChange={handleChange} />
            <Input label="Last Grade Completed" name="lastGrade" value={formData.lastGrade} onChange={handleChange} />
          </div>

          {/* Parent Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Parent / Guardian Name" name="parentName" value={formData.parentName} onChange={handleChange} required />
            <Input label="Relation to Student" name="relation" value={formData.relation} onChange={handleChange} />
          </div>

          {/* Contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} required />
            <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
            <Input label="Home Address" name="address" value={formData.address} onChange={handleChange} className="sm:col-span-2" />
          </div>

          {/* Documents */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Documents Available
            </label>
            <select name="documents" value={formData.documents} onChange={handleChange} className="input">
              <option value="">Select</option>
              <option>Marksheet</option>
              <option>Transfer Certificate</option>
              <option>Character Certificate</option>
              <option>All Documents</option>
              <option>Not Available Yet</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              rows="4"
              onChange={handleChange}
              className="input resize-none"
              placeholder="Any special notes or information..."
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md ${status.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {status.submitting ? "Submitting..." : "Submit Admission Form"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

<Input />

