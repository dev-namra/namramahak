import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/person/pp.jpg";

export default function AboutPage() {
  return (
    <motion.main
      className="pt-16 bg-[linear-gradient(to_bottom,_#d1c4e9,_#f8bbd0,_#fbe9e7,_#fff9c4)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-4xl w-full p-8 md:p-16 flex flex-col md:flex-row items-center justify center gap-12">
        
        {/* Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-xl">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-gray-900 font-poppins">
            About Me
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed font-righteous">
            Hi! I’m Namra Mahak, a passionate Front-End Developer specializing
            in building responsive, accessible, and visually engaging web
            applications. With expertise in React, Tailwind CSS, and Next.js, I
            strive to create pixel-perfect UI that performs beautifully across
            all devices.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed font-righteous">
            I believe great web experiences come from clean code and
            thoughtful design, collaborating closely with designers and teams
            to bring ideas to life. When I’m not coding, you’ll find me
            exploring new design trends, experimenting with animations, or
            diving into the latest frontend technologies.
          </p>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 font-poppins">
              Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Framer Motion",
                "Git",
                "Responsive Design",
                "Accessibility",
              ].map((skill) => (
                <li
                  key={skill}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold font-poppins hover:bg-indigo-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.main>
  );
}
