import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/person/pp.jpg";
import Timeline from '../components/aboutPage/Timeline';
import Education from "../components/aboutPage/Education";
import Testimonials from "../components/aboutPage/Testimonials";
import Certificates from "../components/aboutPage/Certificates";
import Footer from "../components/common/Footer";

export default function AboutPage() {
  return (
    <section>
      <motion.main
        className="pt-20 bg-[linear-gradient(360deg,_hsla(233,100%,90%,1)_0%,_hsla(0,0%,89%,1)_100%)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-12 flex flex-col gap-16">

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="size-48 rounded-full overflow-hidden">
              <img
                src={Profile}
                alt="Namra Mahak"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-5xl font-bold text-gray-900 font-poppins">
                Hello, I'm Namra Mahak
              </h1>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed font-light">
                I began my journey in architecture and evolved into a Front-End Developer
                & Automation Specialist. My passion lies in designing elegant, user-centric web interfaces,
                automating workflows, and building meaningful digital experiences.
                With React, Next.js, and Autodesk tools, I blend aesthetics with functionality.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Timeline />
          </div>
          <div className="flex justify-center">
            <Education />
          </div>
          <Certificates />
          <Testimonials />

          {/* Interests */}
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-gray-900 font-poppins">
              Outside of Work
            </h2>
            <p className="text-gray-800 leading-relaxed font-light">
              When I’m not designing or coding, I enjoy urban sketching, exploring architectural history, and hiking through nature trails. I also love experimenting with generative art and AI-assisted design tools.
            </p>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-indigo-700">5+</p>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-700">12+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-700">3</p>
              <p className="text-sm text-gray-600">Industries Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-700">100%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </section>

          {/* Skills */}
          <section className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-900 font-poppins">
              Tech Stack & Skills
            </h2>
            <ul className="flex flex-wrap gap-3">
              {["React","Next.js","Tailwind CSS","TypeScript","Node.js","Autodesk Platform Services","Power BI","Framer Motion","Responsive Design","Accessibility","Git","Figma"].map((skill) => (
                <li
                  key={skill}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold font-poppins hover:bg-indigo-700 transition"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </motion.main>  
      <Footer />  
    </section>
  );
}