
import { Award, GraduationCap, Users } from "lucide-react";

const Scholarships = () => {
  const scholarships = [
    {
      title: "Merit-Based Scholarship",
      description: "Awarded to students with outstanding academic performance in their previous board examinations.",
      criteria: "GPA 3.8+ or equivalent",
      icon: <Award size={40} className="text-yellow-500" />
    },
    {
      title: "Need-Based Financial Aid",
      description: "Support for deserving students who demonstrate financial need. We believe no talent should go to waste due to lack of funds.",
      criteria: "Proof of financial status required",
      icon: <Users size={40} className="text-blue-500" />
    },
    {
      title: "Sports & Talent Scholarship",
      description: "For students who have represented the district, region, or nation in sports or extra-curricular activities.",
      criteria: "National/Regional Achievement Certificates",
      icon: <GraduationCap size={40} className="text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <div className="bg-accent text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships & Financial Aid</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          We are committed to recognizing talent and supporting education for all deserving students.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {scholarships.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-center mb-6">{item.description}</p>
              <div className="bg-blue-50 py-2 px-4 rounded-lg text-center">
                <span className="text-xs font-bold text-accent uppercase tracking-wide">Criteria</span>
                <p className="font-semibold text-gray-800">{item.criteria}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-10 bg-primary text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">How to Apply?</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-lg">Check Eligibility</h4>
                  <p className="text-blue-100 text-sm">Review the criteria for different scholarship schemes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-lg">Prepare Documents</h4>
                  <p className="text-blue-100 text-sm">Gather academic transcripts, certificates, and recommendation letters.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-lg">Submit Application</h4>
                  <p className="text-blue-100 text-sm">Fill out the online scholarship form during the admission process.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:w-1/2 p-10 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Application</h3>
            <p className="text-gray-600 mb-8 max-w-sm">
              Ready to take the next step? Apply for a scholarship today and unlock your potential.
            </p>
            <button className="bg-accent text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-lg hover:shadow-xl">
              Apply for Scholarship
            </button>
            <p className="mt-6 text-sm text-gray-400">
              * Deadline for first round: March 30, 2026
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scholarships;
