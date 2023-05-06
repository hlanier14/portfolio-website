import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import DividendAnalysis from "./pages/DividendAnalysis";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div class="relative md:flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<Article />} />
          <Route path="/projects/dividend-analysis" element={<DividendAnalysis />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
