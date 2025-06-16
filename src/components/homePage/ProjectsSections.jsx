import { projects } from "../projectPage/projects";
import { motion } from "framer-motion";

const ProjectsSection = () => (
  <section className="w-full min-h-screen p-6 md:p-16">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      <motion.div
        className="text-center max-w-7xl mx-auto mb-10 flex flex-col gap-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Projects</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-green-300 opacity-60 z-0 rounded-sm" />
          </span>
        </h2>
        <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
          What I've Been Building
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
