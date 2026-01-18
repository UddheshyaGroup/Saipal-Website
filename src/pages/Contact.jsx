function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form Placeholder */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full border rounded px-4 py-2"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Details</h2>
          <p>Phone: +977-01-4378154</p>
          <p>Email: info@saipal.edu.np</p>
          <p>Address: Saipal Academy, Kathmandu, Nepal</p>

          <div className="mt-6 border rounded overflow-hidden h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Saipal Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
