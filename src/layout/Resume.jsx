import Footer from "../components/common/Footer";
import ResumeNamra from "../assets/ResumeNamra.pdf";

const Resume = () => (
  <main className="mt-10 md:mt-20">
    <section className="max-w-3xl mx-auto p-6 font-sans bg-white border shadow-lg rounded-lg my-12 md:my-20">
      {/* Header */}
      <header className="mb-8 border-b pb-4 flex justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-Berlleigh">
            Namra Mahak
          </h1>
          <p className="text-gray-600 font-spaceGrotesk">
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
        <div>
          <a
            href={ResumeNamra}
            download="Namra_Mahak_Resume.pdf"
            className="px-4 py-2  bg-black rounded-full text-white hover:bg-gray-300 transition flex items-center z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download .pdf
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 font-Berlleigh">
          Profile
        </h2>
        <p className="text-gray-700 font-spaceGrotesk">
          Front-End Developer with a background in architecture, blending design
          and technology to create seamless user experiences. Skilled in React,
          JavaScript, Tailwind, and Node.js, with experience in automating
          design workflows and building scalable web applications. Passionate
          about crafting responsive interfaces and optimizing performance.
          Thrive in Agile environments, solving complex problems through
          innovation and collaboration.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 font-Berlleigh">
          Experience
        </h2>
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 font-spaceGrotesk">
            Frontend Developer | Merit
          </h3>
          <span className="text-gray-600 text-sm">
            Newcastle Upon Tyne, UK | Aug 2023 – Present
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk">
            <li>
              Developed a web application using Autodesk Platform Services to
              enhance and automate design and manufacturing workflows.
            </li>
            <li>
              Built custom Revit plugins to streamline design processes,
              improving efficiency across multiple projects.
            </li>
            <li>
              Implemented Power BI to create interactive dashboards and track
              KPIs, reducing project time by 20%.
            </li>
            <li>
              Leveraged Power Automate to develop task flows in Microsoft
              Planner, enhancing team collaboration and task management.
            </li>
            <li>
              Collaborated with cross-functional teams in an Agile environment
              to deliver high-quality web applications using Node.js and
              JavaScript.
            </li>
            <li>
              Developing a React application that visualizes real-time digital
              twin data from Azure, enabling better decision-making and
              operational insights.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-bold text-gray-800 font-spaceGrotesk">
            Senior Designer | Zeppelin Design and Environments
          </h3>
          <span className="text-gray-600 text-sm">
            India | Oct 2020 – Sep 2022
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk">
            <li>
              Led design and execution of commercial, hospitality, and retail
              projects, ensuring high-quality outcomes for clients such as
              Jaquar and Kampai.
            </li>
            <li>
              Streamlined processes, optimized construction documentation, and
              collaborated with teams to enhance efficiency and project
              delivery.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-gray-800 font-spaceGrotesk">
            Architect | Sconce Global
          </h3>
          <span className="text-gray-600 text-sm">
            India | Sep 2019 – Oct 2020
          </span>
          <ul className="list-disc list-inside mt-2 text-gray-700 font-spaceGrotesk">
            <li>
              Worked on conceptual design, client presentations, and
              coordination for projects with clients like Honeywell,
              Schlumberger, and NIMHANS.
            </li>
            <li>
              Designed exhibition booths and sets for major events like Auto
              Expo and Def Expo.
            </li>
          </ul>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 font-Berlleigh">
          Technical Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-spaceGrotesk">
          <li>
            <strong>Frontend Development:</strong> React.js, React-Redux, React
            Router, React Hooks, Axios, Tailwind CSS, Sass, Material-UI, GraphQL
          </li>
          <li>
            <strong>Core Technologies:</strong> JavaScript (ES6+), JSX, HTML5,
            CSS3, C#, Node.js
          </li>
          <li>
            <strong>Tools & Platform:</strong> GitHub, Azure DevOps, Postman,
            CI/CD, Firebase, Docker, Power Automate, Power BI
          </li>
          <li>
            <strong>Design & Testing:</strong> SEO, Responsive Web Design, GUI,
            Unit Testing, Debugging, Performance Optimization, Bug Tracking
          </li>
        </ul>
      </section>

      {/* Education and Certifications */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2 font-Berlleigh">
          Education & Certifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 font-spaceGrotesk">
          <li>BIM Project Management | Queens University, Belfast, UK</li>
          <li>
            Bachelor of Architecture | Jamia Millia Islamia University, India
          </li>
          <li>
            Certified in ReactJS for Frontend Development and GraphQL with React
            for Web Development
          </li>
        </ul>
      </section>
    </section>
    <Footer />
  </main>
);

export default Resume;
