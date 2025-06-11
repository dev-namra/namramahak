const timelineData = [
  {
    company: "Merit",
    title: "Frontend Developer at Merit",
    description: `Contributing to the development of user-friendly web interfaces.
Focused on performance, accessibility, and responsive design.
Collaborating with designers and backend engineers to ship scalable features.`,
  },
  {
    company: "Merit",
    title: "Automation Developer (Part-time)",
    description: `Built internal automation tools to streamline repetitive tasks using Python and JavaScript.
Designed intuitive UIs and improved operational efficiency across teams.`,
  },
  {
    company: "Frasers Group",
    title: "Sales Assistant",
    description: `Engaged with customers and managed point-of-sale systems.
Supported team in inventory and visual merchandising tasks.
Developed customer service and retail communication skills.`,
  },
  {
    company: "Zeppelin Design and Environments",
    title: "Senior Designer",
    description: `Managed end-to-end design process for experiential environments.
Collaborated with cross-functional teams and mentored junior designers.
Delivered spatial storytelling and brand-driven design solutions.`,
  },
  {
    company: "Sconce Global",
    title: "Architect",
    description: `Led design and coordination of retail and commercial interior projects.
Worked closely with clients and contractors to ensure design execution matched expectations.`,
  },
];

const Timeline = () => (
  <section>
    <div className="container w-full py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        {/* Header */}
        <div className="col-span-12 sm:col-span-3">
          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
            <h3 className="text-3xl font-semibold">Experience</h3>
            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
              2019–2025
            </span>
          </div>
        </div>
        {/* Timeline */}
        <div className="col-span-12 sm:col-span-9">
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-300 dark:bg-gray-600 z-0" />
            <div className="flex flex-col space-y-12">
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative flex items-start">
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10 -translate-x-1/2" />

                  {/* Content */}
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold tracking-wide">{item.company}</h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-600 block">
                      {item.title}
                    </time>
                    <p className="mt-3 whitespace-pre-line">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default Timeline;
