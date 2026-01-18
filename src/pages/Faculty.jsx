const facultyData = {
  alevels: [
    { name: "Mr. Raj Sharma", role: "Physics Lecturer" },
    { name: "Ms. Sunita Gurung", role: "Mathematics Lecturer" },
    // Add more A-level faculty here
  ],
  neb: [
    { name: "Mr. Binod KC", role: "Accountancy Lecturer" },
    { name: "Ms. Maya Lama", role: "English Lecturer" },
    // Add more NEB faculty here
  ],
};

function Faculty() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Faculty</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-primary">A-Level Faculty</h2>
        <ul className="list-disc list-inside space-y-2">
          {facultyData.alevels.map((f, i) => (
            <li key={i}>
              <strong>{f.name}</strong> - {f.role}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-primary">NEB Faculty</h2>
        <ul className="list-disc list-inside space-y-2">
          {facultyData.neb.map((f, i) => (
            <li key={i}>
              <strong>{f.name}</strong> - {f.role}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Faculty;
