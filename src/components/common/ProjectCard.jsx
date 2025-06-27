import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <article
      className="relative bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-10 flex flex-col justify-end h-72 sm:h-80 md:h-[500px] rounded-2xl"
      style={{ backgroundImage: `url(${project.mockup})` }}
    >
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-end justify-between text-white">
        {/* Left: Project description */}
        <div className="w-full sm:w-2/3 md:w-1/2 bg-white/10 backdrop-blur-md shadow-lg border border-white/40 p-4 rounded-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 font-Berlleigh">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base mb-4 font-spaceGrotesk">
            {project.description}
          </p>
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

        {/* Right: Tags (hidden on mobile) */}
        <div className="hidden sm:flex sm:w-1/2 flex-wrap gap-2 justify-end">
          {project.tags?.map((tag, tagIdx) => (
            <span
              key={tagIdx}
              className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 font-spaceGrotesk text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
