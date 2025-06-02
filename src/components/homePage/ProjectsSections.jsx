const projects = [
  {
    title: "Ibtida Restaurant",
    description:
      "This web application for Ibtaida allows users to browse the menu, make reservations, and explore features seamlessly. Built on the MERN stack (MongoDB, Express, React, Node.js), it provides an intuitive interface for viewing dish details and modifying reservations.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329f05748d6924d08a6d5_1400%20950.jpeg",
    link: "https://your-weather-app.com",
  },
  {
    title: "Product Designer Portfolio",
    description:
      "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-portfolio.com",
  },
  {
    title: "Product Designer Portfolio",
    description:
      "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-portfolio.com",
  },
  {
    title: "Product Designer Portfolio",
    description:
      "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-portfolio.com",
  },
  {
    title: "Product Designer Portfolio",
    description:
      "This portfolio website was designed for a product designer to highlight their work through a sleek, responsive interface. Built using React, it features dynamic project showcases, smooth animations, and a clean layout that emphasizes visual storytelling and user experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    link: "https://your-portfolio.com",
  },
];

const ProjectsSection = () => (
  <section className="w-full min-h-screen p-4 md:p-16">
    <div className="max-w-7xl mx-auto flex flex-col gap-16">
      <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            My <span className="relative inline-block">
              <span className="relative z-10 text-green-700">Projects</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-500 opacity-60 z-0 rounded-sm" />
            </span>
          </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-md"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
