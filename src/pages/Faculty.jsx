import { User } from "lucide-react";

function FacultySection({ title, data }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        {title}
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col items-center text-center"
          >
            {/* User Icon Instead of Image */}
            <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-4 border-2 border-gray-200">
              <User size={48} className="text-gray-400" />
            </div>

            <h3 className="text-lg font-semibold text-primary">{f.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{f.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Faculty() {
  const facultyData = {
    alevels: [
      { name: "Mr. Sri Hari Timalsina", role: "Biology Lecturer" },
      { name: "Mr. Sangat Thapa", role: "Accounting Lecturer" },
      { name: "Mr. Balkrishna Poudel", role: "General Paper Lecturer" },
      { name: "Mr. Jay Prakash Mishra", role: "Physics Lecturer" },
      { name: "Mr. Ruman Thapa", role: "Computer Lecturer" },
      { name: "Mr. Prabigya Tuladhar", role: "Business Lecturer" },
      { name: "Mr. Sundar Pariyar", role: "Economics Lecturer" },
      { name: "Mr. Devraj Poudel", role: "Mathematics Lecturer" },
    ],
    neb: [
      { name: "Mr. Arjun Thapa Magar", role: "English Lecturer" },
      { name: "Ms. Bhagwati Neupane", role: "Nepali Lecturer" },
      {
        name: "Mr. Amol Rajlawat",
        role: "Tourism and Mountaineering Lecturer",
      },
      { name: "Mr. Santosh Karki", role: "Economics Lecturer" },
      { name: "Mr. Khagendra Lamsal", role: "Social Lecturer" },
      { name: "Mr. Nischal Subedi", role: "Accounting Lecturer" },
      { name: "Mr. Prakash Mani Lamsal", role: "Nepali Lecturer" },
      { name: "Mr. Pratik Malla", role: "Hotel Management Lecturer" },
      { name: "Mr. Prem Bahadur Budha", role: "Computer Lecturer" },
      { name: "Mr. Ramhari Bohara", role: "Accounting Lecturer" },
      { name: "Mr. Ram Prajapti", role: "Economics Lecturer" },
      { name: "Mr. Sabita Aryal", role: "Social Lecturer" },
      { name: "Mr. Dipesh Joshi", role: "Economics Lecturer" },
      { name: "Mr. Mohan Pradhan", role: "Mathematics Lecturer" },
      { name: "Mr. Sangya Khatiwada", role: "English Lecturer" },
      { name: "Mr. Mim Sedhain", role: "Nepali Lecturer" },
      { name: "Ms. Manisha Rasaili", role: "Economics Lecturer" },
      { name: "Ms. Apekshya Phuyal", role: "Zoology Lecturer" },
      { name: "Mr. Kishor Rai", role: "Lab (Chem/Bio)" },
      { name: "Mr. Surya Dhami", role: "Lab (Physics)" },
      { name: "Mr. Mahendra Gahatraj", role: "Botany Lecturer" },
      { name: "Mr. Roma Singh", role: "English Lecturer" },
      { name: "Mr. Yubraj Poudel", role: "Physics Lecturer" },
      { name: "Mr. Ashok Raj Joshi", role: "Physics Lecturer" },
      { name: "Mr. Jitesh Kumar Jha", role: "Chemistry Lecturer" },
      { name: "Mr. Devraj Poudel", role: "Mathematics Lecturer" },
      { name: "Mr. Rama Kafle", role: "Chemistry Lecturer" },
      { name: "Mr. Keshav Bhatta", role: "Chemistry Lecturer" },
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 text-gray-900">
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Our Faculty
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Meet the talented faculty members who inspire, mentor, and nurture
          students to achieve their fullest potential every day.
        </p>
      </div>

      <FacultySection title="A-Level Faculty" data={facultyData.alevels} />
      <FacultySection title="NEB Faculty" data={facultyData.neb} />
    </main>
  );
}
