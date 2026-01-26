function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-gray-900">
      {/* CTA Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Have questions or need more information? We’d love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <form className="space-y-5 sm:space-y-6 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-lg border border-gray-100 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">
              Contact Details
            </h2>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone (School Block):</span>
              <a
                href="tel:+977014378154"
                className="text-blue-500 hover:underline block md:inline"
              >
                +977 01 4378154
              </a>
              <a
                href="tel:+977014650924"
                className="text-blue-500 hover:underline block md:inline ml-0 md:ml-2"
              >
                4650924
              </a>
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone (College Block):</span>
              <a
                href="tel:+977014009054"
                className="text-blue-500 hover:underline block md:inline ml-0 md:ml-2"
              >
                +977 01 4009054
              </a>
            </p>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Email:</span>
              <a
                href="mailto:mail@saipal.edu.np"
                className="text-blue-500 hover:underline block md:inline ml-0 md:ml-2"
              >
                mail@saipal.edu.np
              </a>
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">Address:</span> Dhumbarahi,
              Pipalbot, Kathmandu, Nepal
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="h-64 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.626447509625!2d85.3366906150722!3d27.723465982808337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c07c5e6e7%3A0x3a7583fb063c968b!2sSaipal%20Academy!5e0!3m2!1sen!2snp!4v1705999881234!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing location of Saipal Academy, Dhumbarahi, Kathmandu, Nepal"
              title="Saipal Academy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;