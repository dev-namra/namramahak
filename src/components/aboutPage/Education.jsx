import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Queen's University Belfast, UK",
    degree: "MSc BIM Project Management",
    duration: "2022–2023",
    description: `Specialized in Building Information Modelling and digital project delivery in construction.
Developed expertise in coordinating interdisciplinary teams using BIM tools such as Revit,
Navisworks, and Synchro. Completed a dissertation on digital twin implementation in infrastructure projects.`,
  },
  {
    institution: "Jamia Millia Islamia University, India",
    degree: "Bachelor of Architecture",
    duration: "2014–2019",
    description: `Completed a five-year professional program in architecture with a focus on sustainable design,
construction technology, and urban planning. Final thesis project explored modular housing
solutions for urban expansion. Participated in national design competitions and architectural workshops.`,
  },
];

const Education = () => (
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
              <span className="relative z-10 text-black font-b">Education</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-green-300 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
          <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
            Academic & Professional Studies
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
                {educationData.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-8 sm:pl-32 py-6 group"
                  >
                    <div className="font-caveat font-medium text-2xl text-black font-Berlleigh mb-1 sm:mb-0">
                      {item.degree}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-green-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute -left-6 translate-y-0.5 inline-flex items-center justify-center text-xs uppercase w-24 md:w-28 h-6 mb-3 sm:mb-0 text-black bg-emerald-100 rounded-full font-Berlleigh">
                        {item.duration}
                      </time>
                      <div className="text-xl font-bold text-slate-900 font-Berlleigh">
                        {item.institution}
                      </div>
                    </div>
                    <div className="text-slate-500 whitespace-pre-line font-spaceGrotesk">
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

export default Education;
