import Footer from "../components/common/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Resume = () => (
  <main className="mt-10 md:mt-20">
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="max-w-3xl mx-auto p-6 font-sans bg-white border shadow-lg rounded-lg my-12 md:my-20"
    >
      {/* Header */}
      <header className="mb-8 border-b pb-4 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-Berlleigh">
            Namra Mahak
          </h1>
          <p className="text-gray-600 text-base font-spaceGrotesk">
            Front-End Developer | Newcastle Upon Tyne, UK
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500 font-spaceGrotesk">
            <span>+44 07552660019</span>
            <span>mahaknamra@gmail.com</span>
            <a
              href="https://github.com/dev-namra"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/namra-mahak"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Profile */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="mb-8"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2 font-Berlleigh">
          Profile
        </h2>
        <p className="text-gray-700 text-base font-spaceGrotesk">
          Passionate frontend developer with a background in architecture,
          specializing in building responsive, user-friendly web applications
          using React, JavaScript, and modern CSS frameworks. Thrive in Agile
          environments, solving complex problems through innovation and
          collaboration.
        </p>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="mb-8"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-4 font-Berlleigh">
          Experience
        </h2>

        {/* Merit */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 font-spaceGrotesk text-base">
            Frontend Developer | Merit
          </h3>
          <span className="text-gray-600 text-sm">
            Newcastle Upon Tyne, UK | Aug 2023 – Present
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk text-base">
            <li>
              Joined as an Automation Developer and introduced modern web
              development to the company, initiating digital transformation.
            </li>
            <li>
              <strong>Designed and led development of Merit Spark</strong> — a
              secure internal web app that provides 3D model viewing,
              measurement tools, and manufacturing elements in a predefined
              assembly.
              <ul className="list-disc list-inside ml-5">
                <li>
                  Built using{" "}
                  <strong>HTML, TailwindCSS, Node.js, Express</strong>, SQL, and
                  the <strong>Autodesk Platform Services API</strong>.
                </li>
                <li>
                  Hosted on <strong>Azure Private Endpoints</strong>, with usage
                  analytics via <strong>Power BI</strong>.
                </li>
                <li>
                  Replaced Assemble software for 62+ users, saving over{" "}
                  <strong>£19,000 annually</strong> in licensing costs.
                </li>
                <li>
                  Streamlined communication across teams through visual query
                  resolution within the app.
                </li>
              </ul>
            </li>
            <li>
              <strong>Developed a real-time IoT dashboard</strong> using{" "}
              <strong>React, TailwindCSS, .NET APIs</strong>, and Docker.
            </li>
            <li>
              <strong>Collaborating with an AI engineer</strong> on a
              GPT-powered bidding assistant tool; handling frontend integration.
            </li>
            <li>
              Built and maintained <strong>Power Automate</strong> flows to sync
              Kanban boards with <strong>Power BI</strong> for real-time
              reporting.
            </li>
          </ul>
        </div>

        {/* Zeppelin */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 font-spaceGrotesk text-base">
            Senior Designer | Zeppelin Design and Environments
          </h3>
          <span className="text-gray-600 text-sm">
            India | Oct 2020 – Sep 2022
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk text-base">
            <li>
              Led design and execution of commercial, hospitality, and retail
              projects for clients like <strong>Jaquar</strong> and{" "}
              <strong>Kampai</strong>.
            </li>
            <li>
              Coordinated with vendors and contractors for high-quality
              delivery.
            </li>
            <li>
              Streamlined documentation workflows to increase team efficiency.
            </li>
            <li>Conducted site visits and design presentations to clients.</li>
          </ul>
        </div>

        {/* Sconce */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 font-spaceGrotesk text-base">
            Architect | Sconce Global
          </h3>
          <span className="text-gray-600 text-sm">
            India | Sep 2019 – Oct 2020
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk text-base">
            <li>
              Created conceptual designs and presentations for{" "}
              <strong>Honeywell</strong>, <strong>Schlumberger</strong>, and{" "}
              <strong>NIMHANS</strong>.
            </li>
            <li>
              Designed booths for large-scale expos such as{" "}
              <strong>Auto Expo</strong> and <strong>Def Expo</strong>.
            </li>
            <li>
              Collaborated with cross-functional teams to ensure build accuracy.
            </li>
            <li>Delivered on tight timelines for high-visibility projects.</li>
          </ul>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="mb-8"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2 font-Berlleigh">
          Technical Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-spaceGrotesk text-base">
          <li>
            <strong>Frontend Development:</strong> React.js, Redux, Router,
            Hooks, Axios, Tailwind CSS, Sass, MUI, GraphQL, Framer Motion
          </li>
          <li>
            <strong>Core Technologies:</strong> JavaScript (ES6+), JSX, HTML5,
            CSS3, Node.js, C#
          </li>
          <li>
            <strong>Tools & Platforms:</strong> GitHub, Azure DevOps, Postman,
            CI/CD, Firebase, Docker, Power Automate, Power BI
          </li>
          <li>
            <strong>Design & Testing:</strong> SEO, Responsive Design, GUI,
            Debugging, Unit Testing, Performance Optimization
          </li>
        </ul>
      </motion.section>

      {/* Education & Certifications */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2 font-Berlleigh">
          Education & Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-spaceGrotesk text-base">
          <li> MSc BIM Project Management | Queens University, Belfast, UK</li>
          <li>
            Bachelor of Architecture | Jamia Millia Islamia University, India
          </li>
          <li>Certified in ReactJS and GraphQL for Web Development</li>
        </ul>
      </motion.section>
    </motion.section>
    <Footer />
  </main>
);

export default Resume;
