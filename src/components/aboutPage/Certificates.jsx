import { motion } from "framer-motion";

const certificates = [
  {
    title: "Full-Stack JavaScript Development",
    issuer: "LinkedIn",
    date: "Mar 2025",
    skills: "MongoDB · Node.js · React",
  },
  {
    title: "Learning Next.js",
    issuer: "LinkedIn",
    date: "Mar 2025",
  },
  {
    title: "React in Action",
    issuer: "LinkedIn",
    date: "Mar 2025",
    skills: "React · Deployment",
  },
  {
    title: "Practical GitHub Actions",
    issuer: "LinkedIn",
    date: "Mar 2025",
    skills: "CI/CD · GitHub",
  },
  {
    title: "Web Development",
    issuer: "Sololearn",
    date: "Mar 2025",
    skills: "Frontend · Backend Basics",
  },
  {
    title: "Learn HTML",
    issuer: "Codecademy",
    date: "Nov 2023",
    credentialId: "6544F27DF2",
  },
  {
    title: "Learn JavaScript",
    issuer: "Codecademy",
    date: "Nov 2023",
    credentialId: "654DF99A0A",
  },
  {
    title: "Learn CSS",
    issuer: "Codecademy",
    date: "Oct 2023",
    credentialId: "6547F6EA62",
  },
  {
    title: "Learn C#",
    issuer: "Codecademy",
    date: "Sep 2023",
    credentialId: "6527E11733",
  },
];

export default function Certificates() {
  return (
    <section className="flex flex-col gap-6">
      <motion.div
        className="text-center mx-auto mb-10 flex flex-col gap-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">
              Certificates & Courses
            </span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-200 opacity-60 z-0 rounded-sm" />
          </span>
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <div key={index} className="border-b border-neutral-200 pb-4">
            <p className="font-medium font-Berlleigh text-gray-800 text-base md:text-xl">
              {cert.title}
            </p>
            <p className="text-sm text-gray-600 font-spaceGrotesk">
              {cert.issuer} · {cert.date}
            </p>
            {cert.skills && (
              <p className="text-xs text-gray-500 font-spaceGrotesk">
                {cert.skills}
              </p>
            )}
            {cert.credentialId && (
              <p className="text-xs text-gray-500 font-spaceGrotesk">
                Credential ID: {cert.credentialId}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
