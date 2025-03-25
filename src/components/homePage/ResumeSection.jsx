import React from "react";

const Company = ({name, position, date}) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
      <h2>{date}</h2>
    </div>
  )
}

const Resume = () => {
  const companies = [
    { name: "Merit", position: "Frontend Developer", date: "2022 - Present" },
    { name: "Zeppelin Design and Environments", position: "Senior Designer", date: "2018 - 2020" },
    { name: "Sconce Global", position: "Architect", date: "2016 - 2018" },
    { name: "Facebook", position: "UI Designer", date: "2014 - 2016" },
  ];

  return (
    <div className="flex flex-col bg-gray-100 p-4 md:p-16 rounded-lg shadow-lg max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-6">Work Experience</h1>
      {companies.map((company, index) => (
        <div key={index}>
          <Company name={company.name} position={company.position} date={company.date} />
          {index !== companies.length - 1 && <div className="border-b w-full my-2"></div>}
        </div>
      ))}
    </div>
  );
};

const SkillTag = ({ skill }) => {
  return (
    <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
      {skill}
    </span>
  );
};

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Redux",
    "Framer Motion",
  ];

  return (
    <div className="p-8 md:p-16 bg-gray-600 rounded-4xl">
      <h2 className="text-3xl font-bold mb-4">My Skills</h2>
      <div className="flex flex-wrap gap-2">
        {frontendSkills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const WorkTogether = () => {
  return (
    <div className="bg-black p-8 md:p-16 rounded-4xl">
      <h2 className="text-3xl font-bold mb-4 text-white">Send me a Message</h2>
    </div>

  )
}


// Digital Tools Component
const DigitalTools = () => {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Digital Tools Card 1 */}
      <div className="card p-6 bg-white shadow-lg rounded-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/66453803ed369ca04756b04e_websites-made-with-webflow-simplefolio-webflow-ecommerce-template.png"
          alt="Webflow"
          className="max-w-xs mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">Websites made with Webflow</h3>
        <p className="text-gray-500">Webflow</p>
      </div>

      {/* Digital Tools Card 2 */}
      <div className="card p-6 bg-white shadow-lg rounded-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/664536d7a2900310e1bba406_projects-designed-in-figma-simplefolio-webflow-ecommerce-template.png"
          alt="Figma"
          className="max-w-xs mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">200+ projects designed in Figma</h3>
        <p className="text-gray-500">Figma</p>
      </div>

      {/* Digital Tools Card 3 */}
      <div className="card p-6 bg-white shadow-lg rounded-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/664538035a626197649175ab_3-years-using-notion-simplefolio-webflow-ecommerce-template.png"
          alt="Notion"
          className="max-w-xs mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold mb-2">3+ Years using Notion</h3>
        <p className="text-gray-500">Notion</p>
      </div>
    </div>
  );
};

// Main Resume Section Component
const ResumeSection = () => {
  return (
    <section className="py-16">
      <div className="flex gap-8 flex-grow">
        <Resume />
        <div className="flex flex-col gap-8 h-full">
          <Skills />
          <WorkTogether />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
