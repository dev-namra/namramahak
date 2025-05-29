import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    title: "Merit",
    description:
      "Built APS-powered web apps and Revit plugins to automate workflows. Spun up Power BI dashboards and Power Automate flows for live project insights. Now crafting a React dashboard to stream Azure digital-twin telemetry in real time.",
    date: "2023 – Present",
    link: "/experiences/merit",
  },
  {
    title: "Zeppelin Design & Environments",
    description:
      "Led end-to-end delivery of hospitality and retail interiors—clients like Jaquar & Kampai. Streamlined CAD-to-construction docs and optimized team handoffs.",
    date: "2018 – 2020",
    link: "/experiences/zeppelin",
  },
  {
    title: "Sconce Global",
    description:
      "Designed high-impact exhibition booths for Honeywell, Schlumberger, Auto Expo, Def Expo & more. Managed client workshops and 3D visualizations from concept through install.",
    date: "2014 – 2016",
    link: "/experiences/sconce",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden flex flex-col p-6 md:p-16 bg-white">
      <div className="relative max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="font-poppins text-5xl font-semibold text-gray-900 leading-tight">
            My <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">Experience</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-200 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-righteous">
            From building digital twins to crafting immersive brand experiences, here’s how I’ve helped teams innovate and deliver.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <a
              key={exp.title}
              href={exp.link}
              className="group block bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <time className="text-gray-500 text-xs">{exp.date}</time>
                <ArrowUpRightIcon className="w-5 h-5 text-blue-500 group-hover:text-blue-600 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
