import React from "react";
import { motion } from "framer-motion";
import SparkHeroImage from "../../../src/assets/projects/spark/sparkHero.jpg";
import OverviewSection from "./spark/OverviewSection";
import StepsWithImages from "./spark/StepsWithImages";

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
  return (
    <div className="bg-white text-gray-900">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title and Description */}
          <div className="my-12 text-center">
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
              src={SparkHeroImage}
              alt={project.title}
              className="w-full md:w-2/3 mx-auto"
            />
          </motion.div>
        </div>
      </section>

      <Section title="Overview">
        <OverviewSection />
      </Section>

      <Section title="Challenges & Solutions">
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-lg font-semibold text-red-600 border-r border-gray-300">
                  Challenges
                </th>
                <th className="px-6 py-3 text-left text-lg font-semibold text-green-600">
                  How Spark Construct Solved These
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 bg-white">
              <tr>
                <td className="px-6 py-4 align-top border-r border-gray-300">
                  No accessible tool existed that allowed team members to easily
                  visualize and interact with 3D models without complex
                  software.
                </td>
                <td className="px-6 py-4 align-top">
                  Provided a secure, web-based 3D model viewer accessible to all
                  team members without requiring specialized software like
                  Revit.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 align-top border-r border-gray-300">
                  Revit software required significant time for loading and
                  processing models, causing delays in project workflows.
                </td>
                <td className="px-6 py-4 align-top">
                  Delivered significantly faster model loading times through
                  optimized integration with Autodesk Platform Services.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 align-top border-r border-gray-300">
                  Collaboration between teams was inefficient due to lack of
                  real-time updates and shared working environments.
                </td>
                <td className="px-6 py-4 align-top">
                  Enabled real-time collaboration and updates, ensuring all
                  stakeholders stay synchronized throughout the project
                  lifecycle.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 align-top border-r border-gray-300">
                  Factory teams faced difficulties interpreting complex 3D
                  designs, leading to miscommunication and errors on site.
                </td>
                <td className="px-6 py-4 align-top">
                  Simplified 3D visualization for factory teams, reducing
                  miscommunication and enabling precise interpretation of
                  complex designs.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 align-top border-r border-gray-300">
                  Mobile and remote access was limited, restricting flexibility
                  for on-the-go decision-making and model review.
                </td>
                <td className="px-6 py-4 align-top">
                  Offered a fully responsive application accessible on mobile,
                  tablet, and desktop devices, supporting flexible, on-the-go
                  workflows.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="How it Works">
        <StepsWithImages />
      </Section>

      <Section title="Advantages">
        <h2 className="text-2xl font-semibold mb-2">Key Advantages</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            No Revit License Required: Considerable cost savings for teams.
          </li>
          <li>
            No Specialized Skills Needed: Web-based, with a gentle learning
            curve.
          </li>
          <li>
            Faster Model Loading: Significantly improves productivity and
            reduces downtime.
          </li>
          <li>
            Cost-Effective Subscription: Only deployment and a general
            subscription fee, no per-user costs.
          </li>
        </ul>
      </Section>

      <Section title="Features">
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
            <strong>Real-Time Collaboration:</strong> Collaborate in real-time,
            ensuring everyone is up-to-date and reducing delays.
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
      </Section>

      <Section title="Application Features - Technical">
        <h2 className="text-2xl font-semibold mb-2">Technical Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Secure BIM360 Access:</strong> Users authenticate via
            Autodesk ID, ensuring only authorized access.
          </li>
          <li>
            <strong>Dynamic Project Cards:</strong> For each hub, projects are
            fetched and displayed as cards with interactive controls for model
            navigation.
          </li>
          <li>
            <strong>Federated Model Viewing:</strong> Users can open federated
            models and interact with them in-browser.
          </li>
          <li>
            <strong>Advanced Property Table:</strong> Loads model properties in
            bulk, supports real-time updates, and allows filtering/highlighting
            of assemblies and groups.
          </li>
        </ul>
      </Section>

      <Section title="User Interface">
        <h2 className="text-2xl font-semibold mb-2">
          User Interface & Experience
        </h2>
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
        <h2 className="text-2xl font-semibold mb-2">
          Ideation & Development Process
        </h2>
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

      <Section title="Deployment & Impact">
        <h2 className="text-2xl font-semibold mb-2">Deployment & Impact</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Factory Integration:</strong> Integrated with factory
            systems, trained staff, and collected feedback for improvements.
          </li>
          <li>
            <strong>Internal Teams:</strong> Customized features for different
            teams, conducted workshops, and refined functionalities.
          </li>
          <li>
            <strong>Client Access:</strong> Created secure client portals for
            real-time project visualization and feedback-driven enhancements.
          </li>
        </ul>
      </Section>

      <Section title="Security & Privacy">
        <h2 className="text-2xl font-semibold mb-2">Security & Privacy</h2>
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
