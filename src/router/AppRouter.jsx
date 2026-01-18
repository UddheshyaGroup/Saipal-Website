import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Introduction from "../pages/about/Introduction";
import PrincipalMessage from "../pages/about/PrincipalMessage";
import LifeAtSaipal from "../pages/about/LifeAtSaipal";
import Events from "../pages/about/Events";

import Programs from "../pages/Programs";
import Admissions from "../pages/Admissions";
import Scholarships from "../pages/Scholarships";
import Faculty from "../pages/Faculty";
import Gallery from "../pages/Gallery";
import AlbumDetails from "../pages/gallery/AlbumDetails";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Section Routes */}
        <Route path="/about" element={<Introduction />} /> {/* Default to Introduction */}
        <Route path="/about/introduction" element={<Introduction />} />
        <Route path="/about/principal" element={<PrincipalMessage />} />
        <Route path="/about/life-at-saipal" element={<LifeAtSaipal />} />
        <Route path="/about/events" element={<Events />} />

        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/faculty" element={<Faculty />} />

        {/* Gallery Routes */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<AlbumDetails />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
