import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Sidebar from "./components/Sidebar";
import MobileFooter from "./components/MobileFooter";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-background-default dark:bg-background-dark">
        <Sidebar />
        <div className="flex-1 md:ml-64 flex flex-col min-h-screen pt-16 md:pt-0 bg-background-default dark:bg-background-dark">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Portfolio />} />
            </Routes>
          </main>
          <MobileFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
