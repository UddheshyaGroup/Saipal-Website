
import { Linkedin, Mail } from "lucide-react";

const Faculty = () => {
  const facultyMembers = {
    "A-Level Faculty": [
      {
        name: "Dr. Rajesh Hamal",
        position: "Physics Coordinator",
        qualification: "PhD in Physics",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Ms. Anita Sherpa",
        position: "Mathematics Lecturer",
        qualification: "M.Sc. Mathematics",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
      },
      {
        name: "Mr. Sanjay Gupta",
        position: "Computer Science",
        qualification: "M.Tech CS",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
      }
    ],
    "NEB Faculty": [
      {
        name: "Mr. Binod KC",
        position: "Accountancy",
        qualification: "MBA, CA Final",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Ms. Maya Lama",
        position: "English Literature",
        qualification: "M.A. English",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
      },
      {
        name: "Dr. Sameer Thapa",
        position: "Biology Dept. Head",
        qualification: "PhD Biology",
        image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Meet the dedicated educators and mentors shaping the minds of tomorrow.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {Object.entries(facultyMembers).map(([category, members]) => (
          <div key={category} className="mb-20 last:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 border-l-8 border-accent pl-4">{category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/80 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                      <div className="flex gap-4">
                        <button className="p-2 bg-white rounded-full text-accent hover:text-primary transition-colors">
                          <Linkedin size={20} />
                        </button>
                        <button className="p-2 bg-white rounded-full text-accent hover:text-primary transition-colors">
                          <Mail size={20} />
                        </button>
                      </div>
                    </div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-2">{member.position}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{member.qualification}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Faculty;
