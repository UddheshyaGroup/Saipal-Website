import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Programs from "../pages/Programs";
import Admissions from "../pages/Admissions";
import Scholarships from "../pages/Scholarships";
import Faculty from "../pages/Faculty";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";
import InquiryForm from "../pages/InquiryForm";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import Game from "../pages/Game";
import QuizGame from "../components/Games/QuizGame";
import DecisionMakingGame from "../components/Games/DecisionMakingGame";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/academicgame" element={<Game />} />
        <Route path="/academicgame/quiz" element={<QuizGame />} />
        <Route path="/academicgame/decision" element={<DecisionMakingGame />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiry" element={<InquiryForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
