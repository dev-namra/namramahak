import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Merit",
    description:
      "Built APS-driven tools and dashboards to automate workflows and visualize digital twin data in real time.",
    date: "2023 – Present",
    link: "https://www.merit.co.uk/",
  },
  {
    title: "Zeppelin Design & Environments",
    description:
      "Led interior design projects from concept to delivery for hospitality and retail brands.",
    date: "2018 – 2020",
    link: "https://www.zeppelindesign.in/",
  },
  {
    title: "Sconce Global",
    description:
      "Designed and delivered exhibition spaces for global brands, handling everything from 3D visuals to client engagement.",
    date: "2014 – 2016",
    link: "https://www.sconceglobal.com/",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <motion.section
      className="relative overflow-hidden flex flex-col p-6 md:px-16 md:pb-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-7xl mx-auto mb-10 flex flex-col gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10 text-black">Experience</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-orange-300 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
          <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
            Things I've Been Busy With
          </h3>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((exp) => (
            <motion.a
              key={exp.title}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group block bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {exp.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <time className="text-gray-500 text-xs">{exp.date}</time>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRightIcon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="w-full pt-24 pb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] bg-black w-full" />
      </motion.div>
    </motion.section>
  );
}
