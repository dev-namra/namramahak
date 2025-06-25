import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Merit",
    description:
      "Built APS-driven tools and dashboards to automate workflows and visualize digital twin data in real time.",
    position: "Front-End Developer",
    date: "2023 – Present",
    link: "https://www.merit.co.uk/",
  },
  {
    title: "Zeppelin Design & Environments",
    description:
      "Led interior design projects from concept to delivery for hospitality and retail brands.",
    position: "Senior Architect",
    date: "2018 – 2020",
    link: "https://www.zeppelindesign.in/",
  },
  {
    title: "Sconce Global",
    description:
      "Designed and delivered exhibition spaces for global brands, handling everything from 3D visuals to client engagement.",
    position: "Senior Designer",
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
      <div className="relative max-w-6xl mx-auto flex flex-col gap-12">
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
              className="group flex flex-col h-full bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-1 flex-col gap-y-2 space-y-2">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {exp.position}
                  </h2>
                  <h3 className="text-xl text-gray-900">{exp.title}</h3>
                </div>
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
        {/* CTA Button */}
        <motion.div
          className="w-full md:flex md:justify-center p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/about"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-3xl hover:bg-gray-800 transition w-full md:w-auto"
          >
            <img
              src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
              alt="arrow icon"
              className="size-4"
            />
            <span className="font-poppins text-lg text-white">
              More About Me
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
