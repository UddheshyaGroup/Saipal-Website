
const PrincipalMessage = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <div className="bg-gray-50 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 border-l-8 border-primary pl-6">
                        Message from the Principal
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Image Column */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group">
                                <img
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
                                    alt="Principal"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="bg-accent text-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold">Dr. Suman Sharma</h3>
                                <p className="text-blue-200">Principal, Saipal Academy</p>
                                <div className="mt-4 pt-4 border-t border-blue-800 text-sm opacity-80">
                                    <p>PhD in Educational Leadership</p>
                                    <p>20+ Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-2/3">
                        <div className="prose prose-lg text-gray-700 max-w-none">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Saipal Academy</h2>

                            <p className="mb-6">
                                It is my distinct pleasure to welcome you to Saipal Academy. For over two decades, we have dedicated ourselves to the noble pursuit of academic excellence and holistic student development.
                            </p>

                            <blockquote className="border-l-4 border-primary pl-6 italic text-2xl text-gray-800 font-serif my-10 bg-gray-50 py-8 pr-4 rounded-r-lg">
                                "Education is not the learning of facts, but the training of the mind to think."
                            </blockquote>

                            <p className="mb-6">
                                At Saipal, we believe that every student possesses unique talents and potential waiting to be unlocked. Our approach goes beyond traditional rote learning; we foster critical thinking, creativity, and resilience. In a rapidly changing world, adaptability and character are just as important as academic grades.
                            </p>

                            <p className="mb-6">
                                Our dedicated faculty members are mentors who guide students through their educational journey with patience and expertise. We are equipped with modern facilities that support not just academic pursuits but also sports, arts, and technology, ensuring a well-rounded education.
                            </p>

                            <p className="mb-6">
                                We invite you to be part of our vibrant community where we celebrate diversity and strive for excellence in everything we do. Together, let us build a future where our children lead with integrity and knowledge.
                            </p>

                            <p className="mb-10">
                                Thank you for entrusting us with your child's future.
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                    alt="Signature"
                                    className="h-16 opacity-70"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrincipalMessage;
