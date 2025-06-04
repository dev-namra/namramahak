import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaNpm, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiTypescript, SiVite } from "react-icons/si";
import { motion } from "framer-motion";

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

const ToolsTicker = () => {
  return (
    <section className="w-full py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            My <span className="relative inline-block">
              <span className="relative z-10 text-green-700">Toolkit</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-500 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
      </div>
      <div className="overflow-hidden">
        <motion.div
          className="flex py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex flex-col items-center justify-center p-4 min-w-[120px] hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-2 hover:animate-bounce">{tool.icon}</div>
              <span className="text-lg font-medium text-gray-800 whitespace-nowrap">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsTicker;