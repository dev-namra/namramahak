import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    title: "Merit",
    description:
      "Developed web applications and custom Revit plugins using Autodesk Platform Services to automate design workflows and boost efficiency. Created interactive dashboards with Power BI and task flows using Power Automate to enhance project tracking and collaboration. Currently building a React app to visualize real-time digital twin data from Azure for improved operational insights.",
    date: "2023 - Present",
    link: "/experiences/pixelforge-studios",
  },
  {
    title: "Zeppelin Design and Environments",
    description:
      "Led the design and execution of commercial, hospitality, and retail projects for clients like Jaquar and Kampai, delivering high-quality results. Optimized construction documentation and streamlined processes to improve team efficiency and project delivery.",
    date: "2018 - 2020",
    link: "/experiences/visionary-labs",
  },
  {
    title: "Sconce Global",
    description:
      "Contributed to conceptual design, client presentations, and project coordination for clients like Honeywell, Schlumberger, and NIMHANS. Designed exhibition booths and sets for major events including Auto Expo and Def Expo.",
    date: "2014 - 2016",
    link: "/experiences/trendcraft-solutions",
  },
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-col p-6 md:p-20 gap-y-8">

        <div className="text-center md:text-left text-white">
            <h1 className="text-4xl md:text-8xl font-bold leading-none tracking-tight font-bebas">
                EXPERIENCE
            </h1>
        </div>

      {experiences.map((exp, index) => (
        <a
          href={exp.link}
          key={index}
          className="group bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl p-6 flex flex-col justify-between h-full shadow-lg"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
            <p className="text-sm text-gray-300">{exp.description}</p>
            <p className="text-xs text-gray-400">{exp.date}</p>
          </div>
          <div className="flex justify-end">
            <ArrowUpRightIcon className="size-12 text-[#f46c38]" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ExperienceSection;
