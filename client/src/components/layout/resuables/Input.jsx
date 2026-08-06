/* Reusable Input Component (currently used in InquiryForm, Admissions Form, Scholarships Form) */
export default function Input({ label, className = "", ...props }) {
    return (
        <div className={className}>
            <label className="block text-sm font-semibold mb-1">{label}</label>
            <input {...props} className="input" />
        </div>
    );
}