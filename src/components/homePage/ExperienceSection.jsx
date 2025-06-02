import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Merit",
    description:
      "Built APS-powered web apps and Revit plugins to automate workflows. Spun up Power BI dashboards and Power Automate flows for live project insights. Now crafting a React dashboard to stream Azure digital-twin telemetry in real time.",
    date: "2023 – Present",
    link: "https://www.merit.co.uk/",
  },
  {
    title: "Zeppelin Design & Environments",
    description:
      "Led end-to-end delivery of hospitality and retail interiors—clients like Jaquar & Kampai. Streamlined CAD-to-construction docs and optimized team handoffs.",
    date: "2018 – 2020",
    link: "https://www.zeppelindesign.in/",
  },
  {
    title: "Sconce Global",
    description:
      "Designed high-impact exhibition booths for Honeywell, Schlumberger, Auto Expo, Def Expo & more. Managed client workshops and 3D visualizations from concept through install.",
    date: "2014 – 2016",
    link: "https://www.sconceglobal.com/",
  },
];

// Stagger animation config
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ExperienceSection() {
  return (
    <motion.section
      className="relative overflow-hidden flex flex-col p-6 md:p-16"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            My{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Experience</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-200 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-righteous">
            From building digital twins to crafting immersive brand experiences,
            here’s how I’ve helped teams innovate and deliver.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.a
              key={exp.title}
              href={exp.link}
              target="_blank"
              variants={cardVariant}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group block bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
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
    </motion.section>
  );
}
