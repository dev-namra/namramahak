import Footer from "../components/common/Footer";
import { motion } from "framer-motion";
import ProjectCard from "../components/common/ProjectCard";
import { projects } from "../components/common/projects";

export default function ProjectsPage() {
  return (
    <section>
      <main className="pt-20 p-6 min-h-screen bg-[linear-gradient(360deg,_hsla(233,100%,90%,1)_0%,_hsla(0,0%,89%,1)_100%)]">
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          <motion.div
            className="text-center max-w-6xl mx-auto mt-12 md:mt-16 flex flex-col gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              All{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-black">Projects</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-300 opacity-60 z-0 rounded-sm" />
              </span>
            </h2>
            <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
              A showcase of my recent work
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
