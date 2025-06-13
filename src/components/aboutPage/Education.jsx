const educationData = [
  {
    institution: "Queen's University Belfast, UK",
    degree: "MSc BIM Project Management (2022–2023)",
    description: `Specialized in Building Information Modelling and digital project delivery in construction.
Developed expertise in coordinating interdisciplinary teams using BIM tools such as Revit,
Navisworks, and Synchro. Completed a dissertation on digital twin implementation in infrastructure projects.`,
  },
  {
    institution: "Jamia Millia Islamia University, India",
    degree: "Bachelor of Architecture (2014–2019)",
    description: `Completed a five-year professional program in architecture with a focus on sustainable design,
construction technology, and urban planning. Final thesis project explored modular housing
solutions for urban expansion. Participated in national design competitions and architectural workshops.`,
  },
];

const Education = () => (
  <section>
    <div className="container w-full py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        {/* Header */}
        <div className="col-span-12 sm:col-span-3">
          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-600">
            <h3 className="text-3xl font-semibold">Education</h3>
            <span className="text-sm font-bold tracking-wider uppercase text-gray-600 dark:text-gray-400">
              2012–2023
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="col-span-12 sm:col-span-9">
          <div className="relative flex flex-col">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 w-0.5 h-full bg-gray-300 dark:bg-gray-600 z-0" />
            <div className="flex flex-col space-y-12">
              {educationData.map((item, idx) => (
                <div key={idx} className="relative flex items-start">
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-green-600 rounded-full z-10 -translate-x-1/2" />

                  {/* Content */}
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold tracking-wide">{item.institution}</h3>
                    <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-gray-400 block">
                      {item.degree}
                    </time>
                    <p className="mt-3 whitespace-pre-line">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
