import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ project }) => {
  const tagsToShow = project.tags?.slice(0, 6) || [];

  return (
    <motion.article
      className="relative bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-10 flex flex-col justify-end h-96 sm:h-80 md:h-[500px] rounded-2xl"
      style={{ backgroundImage: `url(${project.mockup})` }}
    >
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 font-spaceGrotesk text-sm text-white">
        {project.type}
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={contentVariants}
        className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end justify-between text-white"
      >
        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md shadow-lg border border-white/40 p-4 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 font-Berlleigh">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base mb-4 font-spaceGrotesk">
            {project.description}
          </p>
          <div className="hidden sm:flex flex-wrap gap-2 mb-4">
            {tagsToShow.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 font-spaceGrotesk text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            {project.isCaseStudy ? (
              <Link
                to={`/case-study/${project.id}`}
                className="inline-flex items-center gap-2 text-black bg-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 transition border border-black"
              >
                View Case study <i className="bi bi-arrow-right"></i>
              </Link>
            ) : (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black bg-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-100 transition border border-black"
              >
                View Project <i className="bi bi-arrow-right"></i>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
