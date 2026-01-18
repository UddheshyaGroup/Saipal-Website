function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">About Saipal Academy</h1>

      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Saipal Academy has been a leader in education since [Year]. We are committed to nurturing young minds with
          quality education aligned with global and national standards.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To provide a holistic learning environment that fosters academic excellence and
          character development.
        </p>
        <p className="mt-2">
          <strong>Vision:</strong> To be recognized as a premier educational institution shaping future leaders
          equipped for global challenges.
        </p>
      </section>

      {/* Message from Principal */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Message from the Principal</h2>
        <blockquote className="border-l-4 border-accent pl-6 italic text-gray-700">
          "At Saipal Academy, every student is valued and empowered to reach their full potential. We believe in
          fostering a supportive and challenging academic environment that prepares students for success beyond
          the classroom."
          <br />
          <span className="block mt-4 font-semibold text-primary">— Principal Name</span>
        </blockquote>
      </section>
    </main>
  );
}

export default About;
