const projects = [
  {
    title: "Ibtida Restaurant",
    description: "This web application for Ibtaida allows users to browse the menu, make reservations, and explore features seamlessly. Built on the MERN stack (MongoDB, Express, React, Node.js), it provides an intuitive interface for viewing dish details and modifying reservations.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329f05748d6924d08a6d5_1400%20950.jpeg",
    link: "https://your-weather-app.com",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
  },
  {
    title: "Product Designer Portfolio",
    description: "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-portfolio.com",
    clipPath: "ellipse(75% 50% at 50% 50%)",
  },
  {
    title: "Product Designer Portfolio",
    description: "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-ecommerce-ui.com",
    clipPath: "inset(10% round 30% 60%)",
  },
  {
    title: "Product Designer Portfolio",
    description: "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-ecommerce-ui.com",
    clipPath: "inset(10% round 30% 60%)",
  },
  {
    title: "Product Designer Portfolio",
    description: "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-ecommerce-ui.com",
    clipPath: "inset(10% round 30% 60%)",
  },
  {
    title: "Product Designer Portfolio",
    description: "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image: "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-ecommerce-ui.com",
    clipPath: "inset(10% round 30% 60%)",
  },
  
];

const ProjectsSection = () => (
  <section className="w-full min-h-screen py-16 px-4 relative overflow-hidden">
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-24">
      <h2 className="text-4xl md:text-5xl font-bold text-left text-white mb-8 drop-shadow-lg">
        Projects
      </h2>

      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`w-full md:w-[80%] ${
            idx % 2 === 0 ? "self-start" : "self-end"
          }`}
        >
          <div className="flex flex-col gap-6 p-6 hover:scale-[1.02] transition-transform">
            <div
              className="w-full h-64 bg-cover bg-center rounded-xl"
              style={{
                backgroundImage: `url(${project.image})`,
                clipPath: project.clipPath,
                WebkitClipPath: project.clipPath,
              }}
            />
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);



export default ProjectsSection;
