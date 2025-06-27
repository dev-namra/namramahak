import { useParams } from "react-router-dom";
import { projects } from "../components/common/projects.js";
import SparkConstructCaseStudy from "../components/projectPage/SparkConstructCaseStudy";
import IotAtlasCaseStudy from "../components/projectPage/IotAtlasCaseStudy";

// Map each case study ID to its React component
const CASE_STUDY_COMPONENTS = {
  "spark-construct": SparkConstructCaseStudy,
  "iot-atlas": IotAtlasCaseStudy,
};

export default function CaseStudyPage() {
  const { id } = useParams();
  const CaseStudyComponent = CASE_STUDY_COMPONENTS[id];
  const project = projects.find((p) => p.id === id && p.isCaseStudy);
  if (!CaseStudyComponent || !project) {
    return (
      <div className="text-center text-red-500 p-10">Case study not found.</div>
    );
  }

  return (
    <main>
      <CaseStudyComponent project={project} />
    </main>
  );
}
