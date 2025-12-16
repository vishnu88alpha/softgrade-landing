import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import ApplicationDevelopment from "./pages/services/ApplicationDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import CloudComputing from "./pages/services/CloudComputing";
import SoftwareTesting from "./pages/services/SoftwareTesting";

import Backend from "./pages/technologies/Backend";
import DevOps from "./pages/technologies/DevOps";
import API from "./pages/technologies/API";

import Banking from "./pages/industries/Banking";
import Education from "./pages/industries/Education";
import Healthcare from "./pages/industries/Healthcare";
import Insurance from "./pages/industries/Insurance";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        <Route path="/services/application-development" element={<ApplicationDevelopment />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/cloud-computing" element={<CloudComputing />} />
        <Route path="/services/software-testing" element={<SoftwareTesting />} />

        {/* Technologies */}
        <Route path="/technologies/backend" element={<Backend />} />
        <Route path="/technologies/devops" element={<DevOps />} />
        <Route path="/technologies/api" element={<API />} />

        {/* Industries */}
        <Route path="/industries/banking" element={<Banking />} />
        <Route path="/industries/education" element={<Education/>} />
        <Route path="/industries/healthcare" element={<Healthcare/>} />
        <Route path="/industries/insurance" element={<Insurance/>} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
