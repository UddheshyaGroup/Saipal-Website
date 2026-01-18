import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] bg-accent overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Saipal Academy Building"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
                        About Saipal
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl font-light">
                        Excellence in Education Since 2005
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                    <div>
                        <h2 className="text-4xl font-bold text-accent mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Saipal Academy is more than just an educational institution; it is a community dedicated to fostering academic excellence and holistic growth. Located in the heart of the city, we provide a serene and stimulating environment where young minds can flourish.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our curriculum is designed to challenge students while providing them with the support they need to succeed. With state-of-the-art facilities and a team of dedicated educators, we are shaping the leaders of tomorrow.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 rounded-xl transform rotate-3"></div>
                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
                            alt="Students Learning"
                            className="relative rounded-xl shadow-2xl w-full h-96 object-cover"
                        />
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary group">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To provide a holistic learning environment that fosters academic excellence, character development, and social responsibility, empowering students to become compassionate global citizens.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-accent group">
                        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-accent mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be a premier educational institution recognized nationally and globally for academic innovation, integrity, and the success of our alumni in diverse fields.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-accent rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Abstract Pattern */}
                        <svg width="100%" height="100%">
                            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" className="text-white" fill="currentColor" />
                            </pattern>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                        </svg>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Join Our Community</h2>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                        Discover the difference a Saipal education can make in your child's future.
                    </p>
                    <Link to="/admissions" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors relative z-10">
                        Apply Now <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
