import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Friendbuy from "./pages/Friendbuy.jsx";
import About from "./pages/About.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import SampleMe from "./pages/SampleMe.jsx";
import Ring from "./pages/Ring.jsx";
import Antimap from "./pages/Antimap.jsx";
import Projects from "./pages/Projects.jsx";
import Puttanddoodle from "./pages/puttanddoodle.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="projects/friendbuy" element={<Friendbuy />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/sampleme" element={<SampleMe />} />
        <Route path="projects/ring" element={<Ring />} />
        <Route path="projects/antimap" element={<Antimap />} />
        <Route path="projects/puttanddoodle" element={<Puttanddoodle />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </StrictMode>
  </BrowserRouter>
);
