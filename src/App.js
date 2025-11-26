import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-background-default dark:bg-background-dark flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
