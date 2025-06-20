import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNpm,
  FaNodeJs,
  FaGithub,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiVite,
  SiMongodb,
  SiExpress,
  SiJest,
} from "react-icons/si";

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Sass", icon: <FaSass className="text-pink-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Vite", icon: <SiVite className="text-yellow-500" /> },
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-black" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "GitHub Actions", icon: <FaGithub className="text-black" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "NPM", icon: <FaNpm className="text-red-600" /> },
    ],
  },
];

const ToolsSection = () => (
  <section className="w-full py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        className="text-center max-w-7xl mx-auto mb-10 flex flex-col gap-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Tech Stack</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-300 opacity-60 z-0 rounded-sm" />
          </span>
        </h2>
        <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
          Things I've Been Busy With
        </h3>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: About Tech Stack */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 md:mb-0">
          <div className="text-2xl md:text-3xl font-semibold text-gray-900 italic font-Berlleigh">
            Building robust, scalable, and delightful digital experiences with a
            modern tech stack I love to keep evolving.
          </div>
          <p className="mt-4 text-gray-600 text-lg">
            From expressive UIs to resilient backends, I use proven tools to
            deliver quality and innovation.
          </p>
        </div>
        {/* Divider for desktop */}
        <div className="hidden lg:block w-px h-64 bg-gray-200 mx-8" />
        {/* Right: Tech Stack Cards */}
        <div className="lg:w-1/2 w-full grid gap-6 md:grid-cols-2">
          {techStack.map((group, idx) => (
            <motion.div
              key={group.category}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <h3 className="text-lg font-bold text-green-700 mb-4 tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center group transition-transform duration-200 hover:scale-110"
                  >
                    <div className="text-3xl mb-1 transition-transform duration-200 group-hover:rotate-6 group-hover:scale-125">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Fun note at the bottom */}
      <p className="mt-12 text-center text-gray-500 text-sm">
        Always exploring new tools and frameworks!
      </p>
    </div>
  </section>
);

export default ToolsSection;
