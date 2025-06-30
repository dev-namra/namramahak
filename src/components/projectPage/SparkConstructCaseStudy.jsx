import { motion } from "framer-motion";
import ProjectOverviewSection from "./ProjectOverviewSection";
import {
  projectData,
  sparkConstructChallenges,
  sparkConstructSolutions,
} from "./projectData";
import ChallengesSolutionsTable from "./ChallengesSolutionsTable";
import StepsList from "./spark/StepsList";
import { useNavigate } from "react-router-dom";
import SparkVideo from "../../assets/projects/spark/sparkconstructor.mp4";
import SparkPoster from "../../assets/projects/spark/SPARKHERO.png";

const Section = ({ title, children }) => (
  <motion.section
    className="max-w-6xl mx-auto my-16 px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-3xl font-bold mb-4 font-Berlleigh">{title}</h2>
    {children}
  </motion.section>
);

const SparkConstructCaseStudy = ({ project }) => {
  const navigate = useNavigate();
  const { sparkConstruct } = projectData;
  return (
    <div className="bg-white text-gray-900">
      <section className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto p-6">
          <button
            onClick={() => navigate("/projects")}
            className=" px-4 py-2 rounded hover:bg-gray-300 border-[2px] transition"
          >
            ← Back to All Projects
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          {/* Title and Description */}
          <div className="mb-12 mt-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold font-Berlleigh">
                {project.title}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 max-w-3xl mx-auto"
            >
              <p className="text-lg text-gray-700 font-spaceGrotesk">
                {project.description}
              </p>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full mx-auto"
            />
          </motion.div>
          <div className="max-w-6xl mx-auto p-6">
            <p className="text-center font-spaceGrotesk">
              <span className="font-semibold">Desclaimer: </span>Brand names,
              logos, and sensitive information have been hidden or blurred in
              accordance with confidentiality agreements and regulatory
              guidelines.{" "}
            </p>
          </div>
        </div>
      </section>

      <Section title="Overview">
        <ProjectOverviewSection
          projectName={sparkConstruct.projectName}
          projectDescription={sparkConstruct.projectDescription}
          scopeOfWork={sparkConstruct.scopeOfWork}
          services={sparkConstruct.services}
          industry={sparkConstruct.industry}
          year={sparkConstruct.year}
          techStack={sparkConstruct.techStack}
        />
      </Section>

      <Section title="Challenges & Solutions">
        <ChallengesSolutionsTable
          challenges={sparkConstructChallenges}
          solutions={sparkConstructSolutions}
          challengeHeading="Challenges"
          solutionHeading="How Spark Construct Solved These"
        />
      </Section>

      <Section title="How it Works">
        <div className="flex justify-center">
          <video
            src={SparkVideo}
            controls
            controlsList="nodownload"
            className="w-full max-w-3xl rounded-lg shadow-lg"
            poster={SparkPoster}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <StepsList />
        </div>
      </Section>

      {/* <Section title="Features">
        <h2 className="text-2xl font-semibold mb-2">Features & Capabilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Enhanced Visualization:</strong> Easily manipulate and
            interact with 3D models, improving design accuracy and project
            visualization.
          </li>
          <li>
            <strong>Data Export to Excel:</strong> Export model data for
            streamlined reporting, analysis, and sharing.
          </li>
          <li>
            <strong>Isolate Assemblies and Groups:</strong> Focus on specific
            assemblies or groups to reduce complexity and improve precision.
          </li>
          <li>
            <strong>Property Viewing:</strong> View properties alongside 3D
            elements for better understanding and team communication.
          </li>
          <li>
            <strong>Centralized Data Management:</strong> Store all project data
            in one place for easy access and management.
          </li>
          <li>
            <strong>Data Integrity:</strong> Maintain consistency and integrity
            across all project stages.
          </li>
        </ul>
      </Section> */}

      <Section title="Features">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="space-y-6">
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Immersive 3D Interaction
                </h3>
                <p className="text-gray-600">
                  Effortlessly explore and manipulate 3D models for enhanced
                  design accuracy and compelling project presentations.
                </p>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Seamless Data Export
                </h3>
                <p className="text-gray-600">
                  Instantly export model data to Excel to streamline reporting,
                  analysis, and sharing across teams.
                </p>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Focused Assembly Isolation
                </h3>
                <p className="text-gray-600">
                  Isolate specific assemblies or groups within complex models,
                  reducing visual clutter and enabling precision work.
                </p>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Integrated Property Insights
                </h3>
                <p className="text-gray-600">
                  Access detailed properties alongside 3D elements, improving
                  understanding and facilitating clear team communication.
                </p>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Centralized Project Data
                </h3>
                <p className="text-gray-600">
                  Keep all project assets and model data organized in a single,
                  accessible location, simplifying management and version
                  control.
                </p>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow flex flex-col md:flex-row md:items-center">
              <span className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mr-4 mb-2 md:mb-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Consistent Data Integrity
                </h3>
                <p className="text-gray-600">
                  Maintain accuracy and consistency throughout every stage of
                  your project, ensuring reliable results from concept to
                  completion.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="User Interface">
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Visual Design:</strong> Clean, minimalist, dark-themed
            interface with white and gray accents for readability and reduced
            eye strain.
          </li>
          <li>
            <strong>Navigation:</strong> Top navigation bar with logo and clear
            branding.
          </li>
          <li>
            <strong>Buttons & Icons:</strong> Clear text labels and familiar
            icons for intuitive use.
          </li>
          <li>
            <strong>Cards & Containers:</strong> Structured presentation of
            project and model information.
          </li>
          <li>
            <strong>Toggle Switches:</strong> Grid/list view toggles for user
            preference.
          </li>
        </ul>
      </Section>

      <Section title="Ideation and Development Process">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Identify Needs & Challenges:</strong> Assessed existing
            tools (like Revit), gathered feedback from various teams, and
            highlighted issues like high costs and limited accessibility.
          </li>
          <li>
            <strong>Concept Development:</strong> Defined core features,
            tailored VDC-specific functions, and designed tools for operations
            and maintenance.
          </li>
          <li>
            <strong>Technical Planning:</strong> Chose Autodesk Platform
            Services and Azure for scalability and security, and designed robust
            access control.
          </li>
          <li>
            <strong>Development & Implementation:</strong> Used Visual Studio
            Code, Git, and Azure DevOps for continuous integration and feature
            development, with iterative user feedback.
          </li>
        </ol>
      </Section>

      <Section title="Security & Privacy">
        <p>
          All data access is authenticated via Autodesk ID, and the application
          is hosted on private endpoints to ensure client confidentiality. No
          public links are available due to the sensitive nature of the project
          data.
        </p>
      </Section>

      <Section title="Results">
        <p>
          After launch, Spark Construct saw a 75% increase in site traffic and a
          40% boost in customer inquiries. The modern design helped build trust
          and clearly conveyed their services.
        </p>
      </Section>
    </div>
  );
};

export default SparkConstructCaseStudy;
