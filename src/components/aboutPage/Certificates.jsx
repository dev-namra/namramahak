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
      <h2 className="text-3xl font-semibold text-gray-900 font-poppins">
        Certifications & Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {certificates.map((cert, index) => (
          <div key={index} className="border-b border-neutral-200 pb-4">
            <p className="font-medium text-gray-800">{cert.title}</p>
            <p className="text-sm text-gray-600">
              {cert.issuer} · {cert.date}
            </p>
            {cert.skills && (
              <p className="text-xs text-gray-500">{cert.skills}</p>
            )}
            {cert.credentialId && (
              <p className="text-xs text-gray-500">
                Credential ID: {cert.credentialId}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
