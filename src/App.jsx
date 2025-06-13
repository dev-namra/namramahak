import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Homepage from "./layout/Homepage";
import About from "./layout/AboutPage";
import ProjectsPage from "./layout/ProjectsPage";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
