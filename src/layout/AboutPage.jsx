import React from "react";
import { motion } from "framer-motion";
import Profile from "../assets/person/pp.jpg";
import Timeline from "../components/aboutPage/Timeline";
import Education from "../components/aboutPage/Education";
import Certificates from "../components/aboutPage/Certificates";
import Footer from "../components/common/Footer";
import Interests from "../components/aboutPage/Interests";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section>
      <motion.main
        className="pt-20"
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
              <h1 className="text-5xl font-bold text-gray-900 font-Berlleigh">
                Hello, I'm Namra Mahak
              </h1>
              <p className="mt-4 text-lg text-gray-800 leading-relaxed font-light font-spaceGrotesk">
                I began my journey in architecture and evolved into a Front-End
                Developer & Automation Specialist. My passion lies in designing
                elegant, user-centric web interfaces, automating workflows, and
                building meaningful digital experiences. With React, Next.js,
                and Autodesk tools, I blend aesthetics with functionality.
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

          <Interests />

          <motion.div
            className="w-full md:flex md:justify-center px-6 pb-6 md:pb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-3xl hover:bg-gray-800 transition w-full md:w-auto"
            >
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                alt="arrow icon"
                className="size-4"
              />
              <span className="text-lg text-white font-spaceGrotesk">
                Let's Connect
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </section>
  );
}
