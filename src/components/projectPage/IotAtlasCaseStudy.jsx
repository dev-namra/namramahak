import { motion } from "framer-motion";
import IotHeroImage from "../../../src/assets/projects/iot/iot-hero.png";
import ProjectOverviewSection from "./ProjectOverviewSection";
import ChallengesSolutionsTable from "./ChallengesSolutionsTable";
import {
  projectData,
  iotAtlasChallenges,
  iotAtlasSolutions,
} from "./projectData";
import IotVideo from "../../assets/projects/iot/IOT-APP-VIEWER.mp4";
import IotPoster from "../../assets/projects/iot/iot-hero.png";

import { useNavigate } from "react-router-dom";
import StepsListIoTAtlas from "./iot-atlas/StepsListIoTAtlas";

import { comparisonSlides } from "./comparisonSlides.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

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

const IotAtlasCaseStudy = ({ project }) => {
  const navigate = useNavigate();
  const { iotAtlas } = projectData;

  return (
    <div className="bg-white text-gray-900">
      <section className="py-20">
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
              src={IotHeroImage}
              alt={project.title}
              className="w-full md:w-2/3 mx-auto"
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
          projectName={iotAtlas.projectName}
          projectDescription={iotAtlas.projectDescription}
          scopeOfWork={iotAtlas.scopeOfWork}
          services={iotAtlas.services}
          industry={iotAtlas.industry}
          year={iotAtlas.year}
          techStack={iotAtlas.techStack}
        />
      </Section>

      <Section title="Challenges & Solutions">
        <ChallengesSolutionsTable
          challenges={iotAtlasChallenges}
          solutions={iotAtlasSolutions}
          challengeHeading="Challenges"
          solutionHeading="How IoT Atlas Solved These"
        />
      </Section>

      <Section title="How it Works">
        <div className="flex justify-center">
          <video
            src={IotVideo}
            controls
            controlsList="nodownload"
            className="w-full max-w-3xl rounded-lg shadow-lg"
            poster={IotPoster}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <StepsListIoTAtlas />
        </div>
      </Section>

      <Section title="Old vs New Frontend">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={8}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {comparisonSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
                <div className="flex-1 flex flex-col items-center">
                  <span className="mb-2 text-sm md:text-xl  font-semibold text-gray-600 font-spaceGrotesk">
                    Old {slide.label}
                  </span>
                  <img
                    src={slide.old}
                    alt={`Old ${slide.label}`}
                    className="rounded-lg shadow w-full  max-w-xl object-contain border"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="mb-2 text-sm md:text-xl font-semibold text-green-700 font-spaceGrotesk">
                    New {slide.label}
                  </span>
                  <img
                    src={slide.new}
                    alt={`New ${slide.label}`}
                    className="rounded-lg shadow w-full max-w-xl object-contain border"
                  />
                </div>
              </div>
              {slide.caption && (
                <p className="mt-4 text-center text-gray-700 text-sm md:text-lg font-spaceGrotesk">
                  {slide.caption}
                </p>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      <Section title="Features">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full text-blue-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8v4l3 3"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Real-Time Device Monitoring
                </h3>
                <p className="text-gray-600">
                  Instantly view live data streams from all connected IoT
                  devices, ensuring up-to-date insights and rapid response to
                  anomalies.
                </p>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-green-100 flex items-center justify-center rounded-full text-green-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"></path>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Guided Device Onboarding
                </h3>
                <p className="text-gray-600">
                  Effortlessly add new devices with step-by-step forms and
                  automated validation, reducing errors and setup time.
                </p>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-yellow-100 flex items-center justify-center rounded-full text-yellow-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Advanced Data Visualization
                </h3>
                <p className="text-gray-600">
                  Interactive charts and dashboards provide actionable insights
                  into device performance and trends.
                </p>
              </div>
            </div>
            {/* Feature Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Smart Search & Management
                </h3>
                <p className="text-gray-600">
                  Quickly search, filter, and manage devices and data streams,
                  even at scale.
                </p>
              </div>
            </div>
            {/* Feature Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-red-100 flex items-center justify-center rounded-full text-red-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 7h18M3 12h18M3 17h18"></path>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Responsive Access Anywhere
                </h3>
                <p className="text-gray-600">
                  Fully responsive UI ensures seamless experience on mobile,
                  tablet, and desktop for field engineers and admins.
                </p>
              </div>
            </div>
            {/* Feature Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow flex items-start gap-4 hover:shadow-lg transition">
              <span className="flex-shrink-0 w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full text-indigo-600 text-xl">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8v4l3 3"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Secure & Centralized Data
                </h3>
                <p className="text-gray-600">
                  All data is protected with enterprise-grade security and
                  stored centrally for easy management and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="User Interface">
        <div className="max-w-6xl px-4">
          <ul className="list-disc list-inside space-y-4 text-gray-800 text-base leading-relaxed font-spaceGrotesk">
            <li>
              <span className="font-semibold">Visual Design:</span>
              <span className="ml-1">
                Clean, minimalist, dark-themed interface with blue and white
                accents for high readability and reduced eye strain.
              </span>
            </li>
            <li>
              <span className="font-semibold">Navigation:</span>
              <span className="ml-1">
                Persistent top navigation bar with logo, clear branding, and
                quick access to all modules.
              </span>
            </li>
            <li>
              <span className="font-semibold">Buttons & Labels:</span>
              <span className="ml-1">
                Clear text labels and familiar UI patterns for intuitive,
                accessible actions.
              </span>
            </li>
            <li>
              <span className="font-semibold">Information Layout:</span>
              <span className="ml-1">
                Structured presentation of device and data information for
                clarity and quick scanning.
              </span>
            </li>
            <li>
              <span className="font-semibold">View Toggles:</span>
              <span className="ml-1">
                Grid/list view toggles let users personalize how they browse
                devices and data.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Ideation and Development Process">
        <ol className="list-decimal list-inside space-y-4 text-gray-800 text-base leading-relaxed font-spaceGrotesk">
          <li>
            <span className="font-semibold">Assessment & Audit:</span>
            <span className="ml-1">
              Inherited a legacy codebase built with vanilla CSS and Bootstrap.
              Conducted a thorough audit to identify inconsistencies, technical
              debt, and UI/UX pain points.
            </span>
          </li>
          <li>
            <span className="font-semibold">Requirement Gathering:</span>
            <span className="ml-1">
              Engaged with users and stakeholders to understand workflow
              challenges, security needs, and feature requests specific to IoT
              device management.
            </span>
          </li>
          <li>
            <span className="font-semibold">Design & Planning:</span>
            <span className="ml-1">
              Developed a new design system in Figma, focusing on clarity,
              responsiveness, and brand consistency. Planned a migration path to
              Tailwind CSS for maintainable, scalable styling.
            </span>
          </li>
          <li>
            <span className="font-semibold">Modernization & Refactoring:</span>
            <span className="ml-1">
              Rebuilt the entire frontend using React and Tailwind CSS,
              replacing Bootstrap components and custom CSS with utility-first
              classes for consistency and performance.
            </span>
          </li>
          <li>
            <span className="font-semibold">Feature Development:</span>
            <span className="ml-1">
              Implemented real-time data visualization, advanced device
              management, and responsive layouts. Integrated secure
              authentication and robust API connections.
            </span>
          </li>
          <li>
            <span className="font-semibold">Iterative Testing & Feedback:</span>
            <span className="ml-1">
              Deployed iterative builds, gathered user feedback, and refined
              features for usability and reliability.
            </span>
          </li>
          <li>
            <span className="font-semibold">Deployment & Handover:</span>
            <span className="ml-1">
              Launched the new app on Azure with private endpoints, ensuring
              enterprise-grade security and smooth user adoption.
            </span>
          </li>
        </ol>
      </Section>

      <Section title="Security & Privacy">
        <div className="max-w-6xl text-gray-800 text-base leading-relaxed font-spaceGrotesk">
          <p>
            IoT Atlas is strictly accessible only to authorized high-level
            management personnel. All data access is authenticated using secure,
            organization-level credentials, and the application is hosted on
            private cloud endpoints to ensure maximum confidentiality. No public
            links or open endpoints are exposed, and all sensitive operational
            and device data remains fully protected at all times, in line with
            executive security protocols.
          </p>
        </div>
      </Section>

      <Section title="Results">
        <div className="max-w-6xl text-gray-800 text-base leading-relaxed font-spaceGrotesk">
          <p>
            After launch, IoT Atlas empowered executive leadership with
            real-time visibility into critical operations, enabling data-driven
            decision-making at the highest level. The platform accelerated
            strategic planning and risk management, and received positive
            feedback for its clarity, security, and exclusive access tailored to
            management needs.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default IotAtlasCaseStudy;
