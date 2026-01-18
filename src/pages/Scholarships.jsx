function Scholarships() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Scholarships</h1>

      <p className="mb-8 text-center">
        Apply for merit-based scholarships at Saipal Academy by filling the form below.
      </p>

      {/* Placeholder: Embed Google Form */}
      <div className="w-full h-[800px]">
        <iframe
          src="https://docs.google.com/forms/d/e/YOUR_SCHOLARSHIP_FORM_ID/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Scholarship Application Form"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}

export default Scholarships;
