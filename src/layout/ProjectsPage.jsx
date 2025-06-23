import { projects } from "../components/projectPage/projects";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <section>
      <main className="pt-20 p-6 min-h-screen bg-[linear-gradient(360deg,_hsla(233,100%,90%,1)_0%,_hsla(0,0%,89%,1)_100%)]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Header */}
          <header>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
              All <span className="text-green-700 relative z-10">Projects</span>
            </h1>
            <p className="text-gray-600 mt-2 max-w-2xl">
              A showcase of my recent work — from full-stack apps to frontend
              design portfolios.
            </p>
          </header>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-[1200px]">
            {projects.map((project, idx) => (
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
                    {/* Type Badge */}
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
        </div>
      </main>
      <Footer />
    </section>
  );
}
