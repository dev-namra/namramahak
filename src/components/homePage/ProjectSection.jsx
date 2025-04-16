import React from "react";

const projects = [
  {
    title: "Ibtida Restaurant",
    description:
      "This web application for Ibtaida allows users to browse the menu, make reservations, and explore features seamlessly. Built on the MERN stack (MongoDB, Express, React, Node.js), it provides an intuitive interface for viewing dish details and modifying reservations.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329f05748d6924d08a6d5_1400%20950.jpeg",
    link: "/projects/lines",
    github: "https://github.com/yourusername/ibtida-restaurant",
    demo: "https://ibtida-restaurant-demo.com",
  },
  {
    title: "Product Designer Portfolio",
    description:
      "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "/projects/nashra",
    github: "https://github.com/yourusername/product-designer-portfolio",
    demo: "https://product-designer-demo.com",
  },
  {
    title: "Newcastle Central Mosque",
    description:
      "This website for Newcastle Central Mosque was developed using Vanilla JavaScript and Tailwind CSS, focusing on simplicity, speed, and accessibility. It includes essential features like prayer times, announcements, and community updates—ensuring a user-friendly experience across devices.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d3298edae8658b7e8f73be_1400%20x%20950.jpeg",
    link: "/projects/ruya",
    github: "https://github.com/yourusername/central-mosque-site",
    demo: "https://newcastle-mosque-demo.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="flex flex-col p-6 md:p-20 gap-y-8">
      <div className="text-center md:text-left text-white">
        <h1 className="text-4xl md:text-8xl font-bold leading-none tracking-tight font-bebas">
          PROJECTS
        </h1>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group block bg-transparent border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <img
                src="https://cdn.prod.website-files.com/66cf60cc29b4f70b379f8183/66d05a413ccb871c8b07a201_north_east_24dp_F46C38_FILL0_wght400_GRAD0_opsz24.svg"
                alt="arrow icon"
                className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-[#F46C38] hover:bg-orange-600 rounded-lg transition"
                >
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
