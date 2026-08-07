import { useState } from "react";
import Input from "../components/layout/resuables/Input";
import Toast from "../components/layout/resuables/Toast";
import { AnimatePresence } from "framer-motion";
import { emailService } from "../services/emailService";

export default function Scholarships() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    applyingFor: "",
    currentSchool: "",
    grade: "",
    lastResult: "",
    scholarshipType: "",
    achievements: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
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
        applyingFor: "",
        currentSchool: "",
        grade: "",
        lastResult: "",
        scholarshipType: "",
        achievements: "",
        parentName: "",
        phone: "",
        email: "",
        address: "",
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

    const type = formData.applyingFor === "School Level" ? "school" : "college";
    const subject = `New Scholarship Application from ${formData.studentName}`;
    const htmlContent = `
      <h3>New Scholarship Application</h3>
      <p><strong>Student Full Name:</strong> ${formData.studentName}</p>
      <p><strong>Date of Birth:</strong> ${formData.dob}</p>
      <p><strong>Applying For:</strong> ${formData.applyingFor}</p>
      <p><strong>Current School/College:</strong> ${formData.currentSchool}</p>
      <p><strong>Current/Last Grade:</strong> ${formData.grade}</p>
      <p><strong>Last Exam Result:</strong> ${formData.lastResult}</p>
      <p><strong>Scholarship Type:</strong> ${formData.scholarshipType}</p>
      <p><strong>Achievements:</strong></p>
      <p>${formData.achievements}</p>
      <hr />
      <p><strong>Parent/Guardian Name:</strong> ${formData.parentName}</p>
      <p><strong>Mobile Number:</strong> ${formData.phone}</p>
      <p><strong>Email Address:</strong> ${formData.email}</p>
      <p><strong>Home Address:</strong> ${formData.address}</p>
      <hr />
      <p><strong>Additional Information:</strong></p>
      <p>${formData.message}</p>
    `;

    try {
      await emailService.sendEmail({
        type,
        subject,
        htmlContent,
        replyTo: { email: formData.email, name: formData.studentName },
        templateParams: {
          subject,
          from_name: formData.studentName,
          from_email: formData.email,
          dob: formData.dob,
          applying_for: formData.applyingFor,
          current_school: formData.currentSchool,
          grade: formData.grade,
          last_result: formData.lastResult,
          scholarship_type: formData.scholarshipType,
          achievements: formData.achievements,
          parent_name: formData.parentName,
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        }
      });
      handleResponse(200, "Scholarship application submitted successfully!");
    } catch (error) {
      handleResponse(500, error.message || "An error occurred. Please try again later.");
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
          Scholarship Application Form
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">

          {/* Student Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Student Full Name" name="studentName" value={formData.studentName} onChange={handleChange} required />
            <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} required />

            <div>
              <label className="block text-sm font-semibold mb-1">Applying For</label>
              <select name="applyingFor" value={formData.applyingFor} onChange={handleChange} required className="input">
                <option value="">Select</option>
                <option>A-Levels</option>
                <option>+2</option>
                <option>School Level</option>
              </select>
            </div>

            <Input label="Current School / College" name="currentSchool" value={formData.currentSchool} onChange={handleChange} />
            <Input label="Current / Last Grade" name="grade" value={formData.grade} onChange={handleChange} />
            <Input label="Last Exam Result (%) or GPA" name="lastResult" value={formData.lastResult} onChange={handleChange} />
          </div>

          {/* Scholarship Info */}
          <div>
            <label className="block text-sm font-semibold mb-1">Scholarship Type</label>
            <select name="scholarshipType" value={formData.scholarshipType} onChange={handleChange} required className="input">
              <option value="">Select</option>
              <option>Merit-Based</option>
              <option>Need-Based</option>
              <option>Sports Scholarship</option>
              <option>Talent-Based</option>
              <option>Special Consideration</option>
            </select>
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Academic / Sports / Other Achievements
            </label>
            <textarea
              name="achievements"
              value={formData.achievements}
              rows="3"
              onChange={handleChange}
              className="input resize-none"
              placeholder="Mention awards, ranks, competitions, certifications..."
            />
          </div>

          {/* Parent & Contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Parent / Guardian Name" name="parentName" value={formData.parentName} onChange={handleChange} required />
            <Input label="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} required />
            <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
            <Input label="Home Address" name="address" value={formData.address} onChange={handleChange} className="sm:col-span-2" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              rows="4"
              onChange={handleChange}
              className="input resize-none"
              placeholder="Explain your financial need, background, or motivation..."
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={status.submitting}
              className={`w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md ${status.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {status.submitting ? "Submitting..." : "Submit Scholarship Application"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

<Input />
