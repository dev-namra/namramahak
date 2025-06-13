import { projects } from "../projectPage/projects";

const ProjectsSection = () => (
  <section className="w-full min-h-screen p-6 md:p-16">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            My <span className="relative inline-block">
              <span className="relative z-10 text-green-700">Projects</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-500 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>

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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
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
