export default function OverviewSection() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Left Section */}
      <div className="flex-1 opacity-100 transform-none">
        {/* Project Overview */}
        <div className="mb-12">
          <div className="prose max-w-none text-gray-700">
            <p className="font-spaceGrotesk">
              Spark Construct is a secure, web-based 3D model management
              application built on Autodesk Platform Services and hosted on
              private endpoints for enterprise data security. Designed for
              engineering, construction, and manufacturing teams, it enables
              seamless BIM360 model access, visualization, and
              collaboration—without requiring Revit licenses or advanced
              technical skills. The application is fully responsive, ensuring
              seamless access and functionality across mobile, tablet, and
              desktop devices, optimizing flexibility in diverse work
              environments.
            </p>
          </div>
        </div>

        {/* Scope of Work */}
        <div>
          <h2 className="text-3xl font-bold mb-6 font-Berlleigh">
            Scope of Work
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p className="font-spaceGrotesk">
              I led the full-stack development of Spark Construct using
              JavaScript, Tailwind CSS for styling, and Node.js middleware. The
              app is hosted on Azure with private endpoints, ensuring
              enterprise-grade security using TruStack. I implemented secure
              integration with Autodesk Platform Services, connected the
              application to databases to enable logging and real-time
              monitoring, and collaborated closely with stakeholders to tailor
              features to real-world engineering and construction workflows.
            </p>
            <p className="font-spaceGrotesk">
              My responsibilities included UI/UX design, backend development,
              authentication, data management, and deployment management on
              Azure.
            </p>
          </div>
        </div>
      </div>

      {/* Right Info Section */}
      <div className="flex flex-col flex-shrink-0 w-full md:w-80 space-y-8 opacity-100 transform-none">
        <div>
          <p className="text-gray-500 font-semibold mb-1">Services:</p>
          <h2 className="text-xl font-semibold">Full Stack Development</h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-1">Industry:</p>
          <h2 className="text-xl font-semibold">Software</h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-1">Year:</p>
          <h2 className="text-xl font-semibold">2023 - Ongoing</h2>
        </div>

        <div>
          <p className="text-gray-500 font-semibold mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Figma",
              "JavaScript",
              "Node.js",
              "Tailwind CSS",
              "Azure Cloud",
              "TruStack Security",
              "Autodesk Platform Services Integration",
              "SQL",
              "Database Logging & Monitoring",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full select-none cursor-default"
                aria-disabled="true"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
