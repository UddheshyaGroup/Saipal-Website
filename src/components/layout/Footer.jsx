import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* About Saipal */}
        <div>
          <h3 className="text-xl font-bold mt-6 mb-6">Saipal Academy</h3>
          <p className="text-gray-300 mb-4">
            Providing world-class education through Cambridge A-Levels, NEB +2,
            and School programs with a focus on excellence and leadership.
          </p>

          <div className="flex space-x-4 text-gray-300">
            <a href="https://facebook.com/saipalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com/saipalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com/saipalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com/company/saipalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://youtube.com/saipalacademy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mt-6 mb-6">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li><a href="/" className="hover:text-accent transition">Home</a></li>
            <li><a href="/about" className="hover:text-accent transition">About Us</a></li>
            <li><a href="/programs" className="hover:text-accent transition">Programs</a></li>
            <li><a href="/admissions" className="hover:text-accent transition">Admissions</a></li>
            <li><a href="/scholarships" className="hover:text-accent transition">Scholarships</a></li>
            <li><a href="/gallery" className="hover:text-accent transition">Gallery</a></li>
            <li><a href="/faculty" className="hover:text-accent transition">Faculty</a></li>
            <li><a href="/contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mt-6 mb-6">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <span>Dhumbarahi, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              <a href="tel:+977014378154" className="hover:text-accent transition">
                +977-01-4378154
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              <a href="tel:+977014009054" className="hover:text-accent transition">
                +977-01-4009054
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <a href="mailto:mail@saipal.edu.np" className="hover:text-accent transition">
                mail@saipal.edu.np
              </a>
            </li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="text-xl font-bold mt-6 mb-6">Academic Hours</h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <FaClock className="mt-1" />
              <div>
                <p className="font-medium text-white">Sunday – Friday</p>
                <p>9:00 AM – 5:00 PM</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaClock className="mt-1" />
              <div>
                <p className="font-medium text-white">Admissions Desk</p>
                <p>9:00 AM – 4:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary/50 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-1 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <span>
            © {new Date().getFullYear()} Saipal Academy. All rights reserved. Powered by: {" "}
            <a
              href="https://uddheshyagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-accent transition"
            >
              Uddheshya Group
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
