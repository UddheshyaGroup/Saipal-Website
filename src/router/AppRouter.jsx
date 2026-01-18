import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Admissions from "../pages/Admissions";
import Scholarships from "../pages/Scholarships";
import Faculty from "../pages/Faculty";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
