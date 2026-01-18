
import { useState } from "react";
import { BookOpen, Award, Users, ArrowRight } from "lucide-react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("alevels");

  const programData = {
    alevels: {
      title: "Cambridge A-Levels",
      subtitle: "Gateway to Global Opportunities",
      description: "Our Cambridge A-Level program is designed for students who aspire to study at top universities worldwide. With a rigorous curriculum and emphasis on critical thinking, students are prepared for global challenges.",
      features: [
        "Internationally recognized qualification",
        "Flexible subject combinations",
        "Assessment based on understanding and application",
        "Pathway to prestigious universities in US, UK, Australia, etc."
      ],
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Business", "Economics", "Accounting", "Sociology", "Psychology"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
    },
    neb: {
      title: "NEB +2 Program",
      subtitle: "Excellence in National Curriculum",
      description: "A comprehensive program following the National Examination Board (NEB) curriculum, focusing on Science, Management, and Humanities streams with a modern pedagogical approach.",
      features: [
        "Strong foundation for medical, engineering & technical fields",
        "Integrated coaching for entrance examinations",
        "Practical-based learning approach",
        "Holistic development through extra-curriculars"
      ],
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Accountancy", "Economics", "Business Studies", "Social Studies", "English", "Nepali"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
    },
    school: {
      title: "School Level (Grade 1-10)",
      subtitle: "Building Strong Foundations",
      description: "Our school program emphasizes holistic development, creativity, and values. We create a nurturing environment where children love to learn and explore.",
      features: [
        "Child-centric teaching methodology",
        "Focus on arts, sports, and life skills",
        "Safe and stimulating environment",
        "Regular parent-teacher engagement"
      ],
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Nepali", "Computer Science", "Health & PE", "Moral Education", "Arts & Craft"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Programs</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Choose the path that leads to your future. Accredited programs designed for success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(programData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 border-2 ${activeTab === key
                ? "bg-accent text-white border-accent shadow-lg scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent"
                }`}
            >
              {programData[key].title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{programData[activeTab].title}</h2>
              <p className="text-xl text-accent font-medium mb-6">{programData[activeTab].subtitle}</p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                {programData[activeTab].description}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="text-accent" size={24} /> Key Features
              </h3>
              <ul className="space-y-3 mb-8">
                {programData[activeTab].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-accent transition-colors inline-flex items-center gap-2">
                Apply for this Program <ArrowRight size={20} />
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={programData[activeTab].image}
                  alt={programData[activeTab].title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="bg-white rounded-2xl p-10 shadow-lg boRder border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="text-accent" size={28} /> Curriculum & Subjects
            </h3>
            <div className="flex flex-wrap gap-3">
              {programData[activeTab].subjects.map((subject, idx) => (
                <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm font-semibold border border-blue-100 hover:bg-blue-100 transition-colors">
                  {subject}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Programs;
