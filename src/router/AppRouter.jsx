import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import GatewayHome from "../pages/GatewayHome";
import SchoolHome from "../pages/SchoolHome";
import SchoolAbout from "../pages/SchoolAbout";
import SchoolPrograms from "../pages/SchoolPrograms";
import SchoolAdmissions from "../pages/SchoolAdmissions";
import SchoolFaculty from "../pages/SchoolFaculty";
import SchoolActivities from "../pages/SchoolActivities";
import SchoolScholarships from "../pages/SchoolScholarships";
import SchoolInquiryForm from "../pages/SchoolInquiryForm";

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

function MainLayout() {
  const location = useLocation();
  const isGatewayPage = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {!isGatewayPage && <Navbar />}

      <Routes>
        {/* Gateway Root Route - Split-Screen Entrance */}
        <Route path="/" element={<GatewayHome />} />

        {/* School Division Dedicated Routes */}
        <Route path="/school" element={<SchoolHome />} />
        <Route path="/school/about" element={<SchoolAbout />} />
        <Route path="/school/programs" element={<SchoolPrograms />} />
        <Route path="/school/admissions" element={<SchoolAdmissions />} />
        <Route path="/school/faculty" element={<SchoolFaculty />} />
        <Route path="/school/activities" element={<SchoolActivities />} />
        <Route path="/school/scholarships" element={<SchoolScholarships />} />
        <Route path="/school/gallery" element={<Gallery />} />
        <Route path="/school/contact" element={<Contact />} />
        <Route path="/school/enquiry" element={<SchoolInquiryForm />} />
        <Route path="/school/blog" element={<Blog />} />
        <Route path="/school/blog/:id" element={<BlogDetail />} />

        {/* College Division Routes */}
        <Route path="/college" element={<Home />} />
        <Route path="/college/about" element={<About />} />
        <Route path="/college/programs" element={<Programs />} />
        <Route path="/college/admissions" element={<Admissions />} />
        <Route path="/college/scholarships" element={<Scholarships />} />
        <Route path="/college/faculty" element={<Faculty />} />
        <Route path="/college/gallery" element={<Gallery />} />
        <Route path="/college/contact" element={<Contact />} />
        <Route path="/college/enquiry" element={<InquiryForm />} />
        <Route path="/college/blog" element={<Blog />} />
        <Route path="/college/blog/:id" element={<BlogDetail />} />

        {/* Shared / Legacy Fallback Routes */}
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

      {!isGatewayPage && <Footer />}
    </>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default AppRouter;
