import { useState } from "react";

const programData = {
  alevels: {
    title: "Cambridge A-Levels",
    description:
      "Our A-Level program offers internationally recognized curriculum that prepares students for top universities worldwide. Subjects include Physics, Chemistry, Mathematics, Business, and more.",
  },
  neb: {
    title: "National Education Board (NEB) +2",
    description:
      "The NEB +2 program follows Nepal’s national education standards, offering comprehensive courses in Science, Management, and Humanities.",
  },
  school: {
    title: "School Level",
    description:
      "Our school-level program focuses on foundational knowledge and skills, fostering a lifelong love for learning.",
  },
};

function Programs() {
  const [activeTab, setActiveTab] = useState("alevels");

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-10 text-primary text-center">Our Programs</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12">
        {Object.keys(programData).map((key) => (
          <button
            key={key}
            className={`px-6 py-2 rounded-md font-semibold ${
              activeTab === key ? "bg-accent text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(key)}
          >
            {programData[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <section className="border p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">{programData[activeTab].title}</h2>
        <p>{programData[activeTab].description}</p>
      </section>
    </main>
  );
}

export default Programs;
