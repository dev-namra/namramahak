import { projects } from "../components/projectPage/projects";
import Footer from "../components/common/Footer";
import { Section } from "lucide-react";

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
                A showcase of my recent work — from full-stack apps to frontend design portfolios.
            </p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
                <div
                key={idx}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow"
                >
                <div
                    className="h-56 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-2 rounded-md"
                    >
                    View Project
                    </a>
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
