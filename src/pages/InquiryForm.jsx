import { useState } from "react";
import Input from "../components/layout/resuables/Input";
import Toast from "../components/layout/resuables/Toast";
import { AnimatePresence } from "framer-motion";

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
                    replyTo: { email: formData.email, name: formData.fullName },
                    subject: `New Inquiry Form Submission from ${formData.fullName}`,
                    htmlContent: `
            <h3>New Inquiry Submission</h3>
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Role:</strong> ${formData.role}</p>
            <p><strong>Student Name:</strong> ${formData.studentName}</p>
            <p><strong>Program:</strong> ${formData.program}</p>
            <p><strong>Grade:</strong> ${formData.grade}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Purpose:</strong> ${formData.purpose}</p>
            <p><strong>Mode:</strong> ${formData.mode}</p>
            <p><strong>Preferred Date/Time:</strong> ${formData.dateTime}</p>
            <p><strong>Source:</strong> ${formData.source}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
                }),
            });

            if (res.ok) {
                handleResponse(200, "Inquiry submitted successfully!");
            } else {
                const errorData = await res.json();
                handleResponse(res.status, errorData.message || "Failed to submit inquiry.");
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
                <h1 className=" flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary mb-2">
                    Inquiry Form
                </h1>


                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Applicant Info */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />

                        <div>
                            <label className="block text-sm font-semibold mb-1">Are you a</label>
                            <select name="role" value={formData.role} onChange={handleChange} required className="input">
                                <option value="">Select</option>
                                <option>Student</option>
                                <option>Parent / Guardian</option>
                            </select>
                        </div>

                        <Input label="Student’s Name" name="studentName" value={formData.studentName} onChange={handleChange} />

                        <div>
                            <label className="block text-sm font-semibold mb-1">Program of Interest</label>
                            <select name="program" value={formData.program} onChange={handleChange} required className="input">
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
                        <select name="purpose" value={formData.purpose} onChange={handleChange} required className="input">
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
                            value={formData.message}
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
                            <select name="mode" value={formData.mode} onChange={handleChange} className="input">
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
                        <select name="source" value={formData.source} onChange={handleChange} className="input">
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
                            disabled={status.submitting}
                            className={`w-full bg-primary hover:bg-accent transition text-white font-semibold py-3 rounded-xl shadow-md ${status.submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {status.submitting ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

<Input />

