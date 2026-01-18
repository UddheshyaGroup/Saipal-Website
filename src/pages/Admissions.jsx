
import { CheckCircle, FileText, Calendar, ArrowRight } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      id: 1,
      title: "Online Registration",
      description: "Fill out the application form with your personal and academic details.",
      icon: <FileText size={24} />
    },
    {
      id: 2,
      title: "Entrance Examination",
      description: "Appear for the entrance test on the scheduled date. Syllabus is available for download.",
      icon: <CheckCircle size={24} />
    },
    {
      id: 3,
      title: "Interview",
      description: "Selected candidates will be called for an interview with the academic committee.",
      icon: <Calendar size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-accent text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-20 transform -skew-y-3 scale-110"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Saipal Academy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 font-light">
            Embark on a journey of excellence. Admissions open for A-Levels and NEB +2.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Admission Process */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Admission Process</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>

            {steps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-xl shadow-lg text-center relative pt-12">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center border-4 border-white shadow-md text-2xl font-bold">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                <div className="mt-6 flex justify-center text-primary">
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Information Side */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Apply?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">World-Class Faculty</h3>
                  <p className="text-gray-600">Learn from experienced educators and industry experts dedication to your success.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Modern Facilities</h3>
                  <p className="text-gray-600">Access state-of-the-art labs, libraries, and sports complexes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Global Opportunities</h3>
                  <p className="text-gray-600">Our alumni study at prestigious universities around the world.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-accent mb-4">Need Help with Admissions?</h3>
              <p className="text-gray-700 mb-6">Our admissions counselors are here to guide you through every step of the process.</p>
              <div className="font-semibold text-gray-900">
                Call us at: <span className="text-primary">+977-01-4378154</span>
              </div>
            </div>
          </div>

          {/* Form Side - Simulating the Google Form or a nice wrapper */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gray-900 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Application Form</h3>
              <p className="text-gray-400 text-sm mt-1">Academic Session 2026/27</p>
            </div>
            <div className="p-8">
              {/* 
                     For now, using a placeholder message and button since the real Google Form URL was a placeholder.
                     If there was a real URL, I would embed it nicely here.
                 */}
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText size={40} className="text-gray-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Ready to Apply?</h4>
                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                  Click the button below to open the official admission form in a new secure window.
                </p>
                <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-primary transition-colors inline-flex items-center gap-2">
                  Open Application Form <ArrowRight size={20} />
                </button>

                <p className="mt-6 text-xs text-gray-400">
                  * Application fee may apply.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admissions;
