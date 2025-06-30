function ProjectOverviewSection({
  projectName,
  projectDescription,
  scopeOfWork,
  services,
  industry,
  year,
  techStack,
}) {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1 opacity-100 transform-none">
        {/* Project Overview */}
        <div className="mb-12">
          <div className="prose max-w-none text-gray-700">
            <p className="font-spaceGrotesk">{projectDescription}</p>
          </div>
        </div>

        {/* Scope of Work */}
        <div>
          <h2 className="text-3xl font-bold mb-6 font-Berlleigh">
            Scope of Work
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            {scopeOfWork.map((paragraph, idx) => (
              <p key={idx} className="font-spaceGrotesk">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Info Section */}
      <div className="flex flex-col flex-shrink-0 w-full md:w-80 space-y-8 opacity-100 transform-none">
        <div>
          <p className="text-gray-500 font-semibold mb-1 font-Berlleigh">
            Services:
          </p>
          <h2 className="text-xl font-semibold font-spaceGrotesk">
            {services}
          </h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-1 font-Berlleigh">
            Industry:
          </p>
          <h2 className="text-xl font-semibold font-spaceGrotesk">
            {industry}
          </h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-1 font-Berlleigh">
            Year:
          </p>
          <h2 className="text-xl font-semibold font-spaceGrotesk">{year}</h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-2 font-Berlleigh">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2 font-spaceGrotesk">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full select-none cursor-default"
                aria-disabled="true"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverviewSection;
