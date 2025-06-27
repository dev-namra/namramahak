import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Timeline from "../aboutPage/Timeline";

export default function ExperienceSection() {
  return (
    <motion.section
      className="relative overflow-hidden flex flex-col md:pb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-6xl mx-auto flex flex-col gap-6">
        <Timeline />
        {/* CTA Button */}
        <motion.div
          className="w-full md:flex md:justify-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-3xl hover:bg-gray-800 transition w-full md:w-auto"
          >
            <img
              src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
              alt="arrow icon"
              className="size-4"
            />
            <span className="text-lg text-white font-spaceGrotesk">
              More About Me
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
