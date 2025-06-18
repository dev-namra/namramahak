import { useParams } from "react-router-dom";
import { projects } from "../components/projectPage/projects";

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id && p.isCaseStudy);

  if (!project) {
    return <div>Case study not found.</div>;
  }

  return (
    <main className="pt-20 p-6 min-h-screen">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="my-4 rounded-lg"
      />
      <p className="mb-4">{project.caseStudyContent}</p>
      {/* Add more sections as needed */}
    </main>
  );
}
