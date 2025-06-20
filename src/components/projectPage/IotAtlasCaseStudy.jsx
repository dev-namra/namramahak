export default function SparkConstructCaseStudy({ project }) {
  return (
    <main className="pt-20 p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="my-4 rounded-lg shadow-lg"
      />
    </main>
  );
}
