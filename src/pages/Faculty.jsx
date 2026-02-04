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
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-gray-100">
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover"
              />
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
      {
        name: "Mr. Sri Hari Timalsina",
        role: "Biology Lecturer",
        image:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Sangat Thapa",
        role: "Accounting Lecturer",
        image:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Balkrishna Poudel",
        role: "General Paper Lecturer",
        image:
          "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Jay Prakash Mishra",
        role: "Physics Lecturer",
        image:
          "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Ruman Thapa",
        role: "Computer Lecturer",
        image:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Prabigya Tuladhar",
        role: "Business Lecturer",
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Sundar Pariyar",
        role: "Economics Lecturer",
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Devraj Poudel",
        role: "Mathematics Lecturer",
        image:
          "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    neb: [
      {
        name: "Mr. Arjun Thapa Magar",
        role: "English Lecturer",
        image:
          "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Ms. Bhagwati Neupane",
        role: "Nepali Lecturer",
        image:
          "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Amol Rajlawat",
        role: "Tourism and Mountaineering Lecturer",
        image:
          "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Santosh Karki",
        role: "Economics Lecturer",
        image:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Khagendra Lamsal",
        role: "Social Lecturer",
        image:
          "https://images.pexels.com/photos/2379002/pexels-photo-2379002.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Nischal Subedi",
        role: "Accounting Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Prakash Mani Lamsal",
        role: "Nepali Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Pratik Malla",
        role: "Hotel Management Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Prem Bahadur Budha",
        role: "Computer Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Ramhari Bohara",
        role: "Accounting Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Ram Prajapti",
        role: "Economics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Sabita Aryal",
        role: "Social Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Dipesh Joshi",
        role: "Economics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Mohan Pradhan",
        role: "Mathematics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Sangya Khatiwada",
        role: "English Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Mim Sedhain",
        role: "Nepali Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Ms. Manisha Rasaili",
        role: "Economics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Ms. Apekshya Phuyal",
        role: "Zoology Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Kishor Rai",
        role: "Lab (Chem/Bio)",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Surya Dhami",
        role: "Lab (Physics)",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Mahendra Gahatraj",
        role: "Botany Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Roma Singh",
        role: "English Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Yubraj Poudel",
        role: "Physics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Ashok Raj Joshi",
        role: "Physics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Jitesh Kumar Jha",
        role: "Chemistry Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Devraj Poudel",
        role: "Mathematics Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Rama Kafle",
        role: "Chemistry Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Mr. Keshav Bhatta",
        role: "Chemistry Lecturer",
        image:
          "https://images.pexels.com/photos/1181689/pexels-photo-1181689.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
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
