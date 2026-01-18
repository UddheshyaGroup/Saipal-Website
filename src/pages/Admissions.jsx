function Admissions() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Admissions</h1>

      <p className="mb-8 text-center">
        Saipal Academy offers admissions for Cambridge A-Levels, NEB +2, and School programs. Please fill the registration form below to apply.
      </p>

      {/* Placeholder: Embed Google Form */}
      <div className="w-full h-[800px]">
        <iframe
          src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Admissions Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </main>
  );
}

export default Admissions;
