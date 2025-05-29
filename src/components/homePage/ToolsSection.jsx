import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiVite } from "react-icons/si";

const tools = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Sass", icon: <FaSass className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "NPM", icon: <FaNpm className="text-red-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
];

const ToolsSection = () => (
  <section className="w-full py-16 relative overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute inset-0 z-0"/>
    {/* Content */}
    <div className="relative z-10 max-w-5xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 drop-shadow-lg">
        My Front-End Toolkit
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center justify-center bg-white/70 rounded-xl shadow-md p-6 hover:scale-105 transition-transform border border-gray-100"
          >
            <div className="text-5xl mb-3">{tool.icon}</div>
            <span className="text-lg font-medium text-gray-800">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ToolsSection;
