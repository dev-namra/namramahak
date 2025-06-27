import { motion } from "framer-motion";

const timelineData = [
  {
    company: "Merit",
    title: "Frontend Developer",
    description: `Contributing to the development of user-friendly web interfaces.
Focused on performance, accessibility, and responsive design.
Collaborating with designers and backend engineers to ship scalable features.`,
    duration: "2023-present",
  },
  {
    company: "Merit",
    title: "Automation Developer",
    description: `Built internal automation tools to streamline repetitive tasks using Python and JavaScript.
Designed intuitive UIs and improved operational efficiency across teams.`,
    duration: "2023-2023",
  },
  {
    company: "Frasers Group",
    title: "Sales Assistant",
    description: `Engaged with customers and managed point-of-sale systems.
Supported team in inventory and visual merchandising tasks.
Developed customer service and retail communication skills.`,
    duration: "2022-2023",
  },
  {
    company: "Zeppelin Design and Environments",
    title: "Senior Designer",
    description: `Managed end-to-end design process for experiential environments.
Collaborated with cross-functional teams and mentored junior designers.
Delivered spatial storytelling and brand-driven design solutions.`,
    duration: "2020-2022",
  },
  {
    company: "Sconce Global",
    title: "Architect",
    description: `Led design and coordination of retail and commercial interior projects.
Worked closely with clients and contractors to ensure design execution matched expectations.`,
    duration: "2019-2020",
  },
];

const Timeline = () => (
  <section className="max-w-6xl mx-auto p-6">
    <div className="py-12">
      {/* Main flex container */}
      <div className="flex flex-col justify-between items-start sm:flex-row gap-8 md:gap-36">
        {/* Section Header */}
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-black font-b">
                Experience
              </span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-300 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
          <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
            Things I've Been Busy With
          </h3>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6">
                {timelineData.map((item, index) => (
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div class="font-caveat font-medium text-2xl text-black font-Berlleigh mb-1 sm:mb-0">
                      {item.title}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time class="sm:absolute -left-6 translate-y-0.5 inline-flex items-center justify-center text-xs uppercase w-24 md:w-28 h-6 mb-3 sm:mb-0 text-black bg-emerald-100 rounded-full font-Berlleigh">
                        {item.duration}
                      </time>
                      <div className="text-xl font-bold text-slate-900 font-Berlleigh">
                        {item.company}
                      </div>
                    </div>
                    <div className="text-slate-500 font-spaceGrotesk">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Timeline;
