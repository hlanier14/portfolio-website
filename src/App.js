import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import DividendAnalysis from "./pages/DividendAnalysis";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Lending from "./pages/Lending";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/dividend-analysis" element={<DividendAnalysis />} />
          <Route path="/portfolio/lending" element={<Lending />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
