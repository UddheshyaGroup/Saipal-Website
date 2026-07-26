import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* About Saipal */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <img
              src="/Logo.png"
              alt="Saipal Academy Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="text-gray-200 text-sm leading-relaxed mb-6">
            Empowering students with world-class education from Pre-Primary through Grade 10, Cambridge A-Levels, and NEB +2 programs in Kathmandu, Nepal.
          </p>

          <div className="flex space-x-6 text-gray-300">
            <a
              href="https://facebook.com/saipalacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition p-2 bg-white/10 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="https://instagram.com/saipalacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition p-2 bg-white/10 rounded-full"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="https://youtube.com/@saipalacademy2002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition p-2 bg-white/10 rounded-full"
              aria-label="YouTube"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Divisions & Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Academic Divisions</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/school" className="hover:text-accent transition font-semibold text-white">
                🏫 Saipal School (K-10)
              </Link>
            </li>
            <li>
              <Link to="/school/programs" className="hover:text-accent transition pl-4 block text-xs">
                - School Curriculum (K-10)
              </Link>
            </li>
            <li>
              <Link to="/school/admissions" className="hover:text-accent transition pl-4 block text-xs">
                - School Admissions
              </Link>
            </li>

            <li className="pt-3">
              <Link to="/college" className="hover:text-accent transition font-semibold text-white">
                🎓 Saipal College (+2 & A-Levels)
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-accent transition pl-4 block text-xs">
                - Cambridge A-Levels & NEB +2
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:text-accent transition pl-4 block text-xs">
                - College Admissions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-accent" />
              <span>Dhumbarahi, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0 text-accent" />
              <a href="tel:+977014378154" className="hover:text-accent transition">
                +977-01-4378154 / 4009054
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-accent" />
              <a href="mailto:mail@saipal.edu.np" className="hover:text-accent transition">
                mail@saipal.edu.np
              </a>
            </li>
          </ul>
        </div>

        {/* Academic Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-accent">Academic Hours</h3>

          <ul className="space-y-4 text-xs text-gray-300">
            <li className="flex items-start gap-3">
              <FaClock className="mt-0.5 text-accent shrink-0" />
              <div>
                <p className="font-bold text-white text-sm">School Division</p>
                <p>9:00 AM – 4:00 PM (Sun - Fri)</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaClock className="mt-0.5 text-accent shrink-0" />
              <div>
                <p className="font-bold text-white text-sm">College Division</p>
                <p>6:00 AM – 11:00 AM <span className="text-gray-400">(Management)</span></p>
                <p>11:00 AM – 5:00 PM <span className="text-gray-400">(Science & A-Levels)</span></p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 text-center py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <span>
            {new Date().getFullYear()} © Saipal Academy. All rights reserved.
          </span>
          <span>
            Powered by:{" "}
            <a
              href="https://uddheshyagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-300 hover:text-accent transition"
            >
              Uddheshya Group
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
