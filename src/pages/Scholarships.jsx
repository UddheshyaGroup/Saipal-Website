import { useState } from "react";
import Input from "../components/layout/resuables/Input";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scholarship Form Submitted:", formData);
    alert("Scholarship application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
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
              <select name="applyingFor" onChange={handleChange} required className="input">
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
            <select name="scholarshipType" onChange={handleChange} required className="input">
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
              className="w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Submit Scholarship Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

<Input />
