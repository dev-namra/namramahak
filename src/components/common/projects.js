import sparkhero from '../../assets/projects/spark/SPARKHERO.png';
import sparkmockup from '../../assets/projects/spark/spark-mockup.png';
import portfoliomockup from '../../assets/projects/portfolio/portfolio-mockup.png'

export const projects = [
  {
    id: "spark-construct",
    title: "Spark Construct",
    description:
      "Spark Construct is a powerful web application built on Autodesk Platform Services, designed to streamline and enhance the way teams collaborate, manage, and review digital design projects.",
    image: sparkhero,
    mockup: sparkmockup,
    isCaseStudy: true,
    link: null, 
    type: "Full Stack",
    tags: [
            "JavaScript", "Tailwind CSS", "Express", "NodeJS", "Azure DevOps",
            "Azure Portal", "Autodesk Platform Services API", "SQL", "PowerBI",
            "REST API", "3D Viewer", "Authentication"
          ]

  },
  {
    id: "iot-atlas",
    title: "IoT Atlas",
    description:
      "IoT Atlas is a robust platform for aggregating, visualizing, and managing IoT device data in real time, providing actionable insights for smart environments.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
    mockup: sparkmockup,
    isCaseStudy: true,
    link: null, 
    type: "Frontend",
    tags: [
            "React", "Tailwind CSS", ".NET", "Azure DevOps", "Azure Portal", "Docker",
            "IoT", "Real-Time Data", "Device Management", "Data Visualization"
          ]
  },
  {
    id: "my-portfolio",
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website to showcase my work, skills, and projects, with a focus on user experience and accessibility.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
      mockup: portfoliomockup,
    link: "https://dev-namra.github.io/namramahak/",
    isCaseStudy: false,
    type: "Full Stack",
    tags: [
            "React", "Tailwind CSS", "GitHub", "Material Tailwind", "Framer Motion",
            "Formspree", "Responsive Design"
          ]

  },
  {
    id: "ibtida-restaurant",
    title: "Ibtida Restaurant",
    description:
      "A restaurant website featuring a digital menu, online ordering, and a visually engaging design for a seamless customer experience.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
      mockup: sparkmockup,
    link: "https://ibtida.netlify.app/",
    isCaseStudy: false,
    type: "Full Stack",
    tags: [
            "React", "Tailwind CSS", "GitHub", "MongoDB",
            "Browsing Menu", "Restaurant Website", "Responsive Design", "React Form Submission"
          ]

  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "A simple and intuitive BMI calculator app built with Tailwind CSS, allowing users to quickly assess their body mass index.",
    image:
      "https://cdn.prod.website-files.com/66d055121da6237b656b1947/66d329d85ff66494d31306e1_1400%20x%201900%20s.jpg",
      mockup: sparkmockup,
    link: "https://bmicalculator-tailwind.netlify.app/",
    isCaseStudy: false,
    type: "Full Stack",
    tags: [
            "HTML", "Tailwind CSS", "JavaScript",
            "Calculator", "Responsive", "Vanilla JS", "Accessibility"
          ]
  },
];
