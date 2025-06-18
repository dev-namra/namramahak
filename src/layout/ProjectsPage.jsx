import { projects } from "../components/projectPage/projects";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <section>
      <main className="pt-20 p-6 min-h-screen bg-[linear-gradient(360deg,_hsla(233,100%,90%,1)_0%,_hsla(0,0%,89%,1)_100%)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
              All <span className="text-green-700 relative z-10">Projects</span>
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              A showcase of my recent work — from full-stack apps to frontend
              design portfolios.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-green-700 text-white text-xs font-semibold uppercase px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 flex-grow text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  {project.isCaseStudy ? (
                    <Link
                      to={`/case-study/${project.id}`}
                      className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md text-center transition-colors"
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-center transition-colors"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
