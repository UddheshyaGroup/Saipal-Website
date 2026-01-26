import { useState } from "react";
import Input from "../components/layout/resuables/Input";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Form Submitted:", formData);
    alert("Admission form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
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
              <select name="gender" onChange={handleChange} required className="input">
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Applying For</label>
              <select name="applyingFor" onChange={handleChange} required className="input">
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
            <select name="documents" onChange={handleChange} className="input">
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
              className="w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Submit Admission Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

<Input />