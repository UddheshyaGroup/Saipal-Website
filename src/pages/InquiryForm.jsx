import { useState } from "react";
import Input from "../components/layout/resuables/Input";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        role: "",
        studentName: "",
        program: "",
        grade: "",
        phone: "",
        email: "",
        address: "",
        purpose: "",
        message: "",
        mode: "",
        dateTime: "",
        source: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Inquiry Submitted:", formData);
        alert("Inquiry submitted successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-10">
                <h1 className=" flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary mb-2">
                    Inquiry Form
                </h1>


                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Applicant Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />

                        <div>
                            <label className="block text-sm font-semibold mb-1">Are you a</label>
                            <select name="role" onChange={handleChange} required className="input">
                                <option value="">Select</option>
                                <option>Student</option>
                                <option>Parent / Guardian</option>
                            </select>
                        </div>

                        <Input label="Student’s Name" name="studentName" value={formData.studentName} onChange={handleChange} />

                        <div>
                            <label className="block text-sm font-semibold mb-1">Program of Interest</label>
                            <select name="program" onChange={handleChange} required className="input">
                                <option value="">Select</option>
                                <option>A-Levels</option>
                                <option>+2</option>
                                <option>School level</option>
                            </select>
                        </div>

                        <Input label="Grade" name="grade" value={formData.grade} onChange={handleChange} />
                    </div>

                    {/* Contact */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Mobile Number" name="phone" value={formData.phone} onChange={handleChange} required />
                        <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                        <Input label="Home Address" name="address" value={formData.address} onChange={handleChange} className="sm:col-span-2" />
                    </div>

                    {/* Purpose */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Purpose of Inquiry</label>
                        <select name="purpose" onChange={handleChange} required className="input">
                            <option value="">Select</option>
                            <option>Admission Information</option>
                            <option>Course Details</option>
                            <option>Fees & Scholarships</option>
                            <option>Transfer / Migration</option>
                            <option>Academic Counseling</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">Inquiry Details</label>
                        <textarea
                            name="message"
                            rows="4"
                            onChange={handleChange}
                            className="input resize-none"
                            placeholder="Briefly explain what you want to discuss..."
                        />
                    </div>

                    {/* Meeting */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Preferred Mode</label>
                            <select name="mode" onChange={handleChange} className="input">
                                <option value="">Select</option>
                                <option>In-person meeting</option>
                                <option>Phone call</option>
                                <option>Online meeting</option>
                            </select>
                        </div>

                        <Input label="Preferred Date & Time" name="dateTime" type="datetime-local" value={formData.dateTime} onChange={handleChange} />
                    </div>

                    {/* Source */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">How did you hear about Saipal School?</label>
                        <select name="source" onChange={handleChange} className="input">
                            <option value="">Select</option>
                            <option>Friends / Family</option>
                            <option>Social Media</option>
                            <option>Website</option>
                            <option>School Visit</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md"
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

<Input />

