import { projects } from "../common/projects.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../common/ProjectCard.jsx";

const ProjectsSection = () => (
  <section className="w-full min-h-[50vh] p-6">
    <div className="max-w-6xl mx-auto flex flex-col gap-12">
      {/* Section Header */}
      <div className="text-center max-w-7xl mx-auto mb-8 flex flex-col gap-3">
        <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Projects</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-green-300 opacity-60 z-0 rounded-sm" />
          </span>
        </h2>
        <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
          What I've Been Building
        </h3>
      </div>

      {/* Use ProjectCard for first 3 projects */}
      <div className="grid grid-cols-1 gap-10">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All button */}
      <motion.div
        className="w-full md:flex md:justify-center p-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/projects"
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-3xl hover:bg-gray-800 transition w-full md:w-auto"
        >
          <img
            src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
            alt="arrow icon"
            className="size-4"
          />
          <span className="font-poppins text-lg text-white">
            View All Projects
          </span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
