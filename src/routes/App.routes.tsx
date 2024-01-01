// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import CaseConverter from "../pages/CaseConverter";
import Footer from "../components/Footer";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <main className="container max-w-screen-xl px-8 ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-converter" element={<CaseConverter />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
