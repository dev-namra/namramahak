import { projects } from "../projectPage/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsSection = () => (
  <section className="w-full min-h-[50vh] p-6 md:py-16">
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

      {/* Project Cards Grid (only first 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.slice(0, 3).map((project, idx) => (
          <article
            key={project.id || idx}
            className="flex bg-white transition hover:shadow-xl overflow-hidden"
          >
            {/* Vertical Date Bar */}
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr] bg-gray-50">
              <time
                dateTime={project.date || "2025-01-01"}
                className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
              >
                <span>
                  {project.date ? project.date.split("-")[0] : "2025"}
                </span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>
                  {project.date
                    ? new Date(project.date).toLocaleString("default", {
                        month: "short",
                        day: "numeric",
                      })
                    : "Jun 20"}
                </span>
              </time>
            </div>

            {/* Project Image */}
            <div className="hidden sm:block sm:basis-56 relative">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between">
              <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-bold text-gray-900 uppercase">
                    {project.title}
                  </h3>
                </a>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {project.description}
                </p>
                <button className="bg-gray-400 text-black text-xs font-semibold uppercase px-2 py-1 rounded shadow">
                  {project.type}
                </button>
              </div>
              <div className="sm:flex sm:items-end sm:justify-end">
                {project.isCaseStudy ? (
                  <Link
                    to={`/case-study/${project.id}`}
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                  >
                    View Case Study
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

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
