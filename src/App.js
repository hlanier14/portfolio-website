import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div class="relative md:flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
