import React from "react";
import Home from "./Components/Home/Home"
import AboutPage from "./Components/AboutPage";
import ServicePage from "./Components/ServicePage";
import ContactPage from "./Components/ContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
