const Education = () => (
  <section>
    <div className="container w-full py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        {/* Section Header */}
        <div className="col-span-12 sm:col-span-3">
          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-600">
            <h3 className="text-3xl font-semibold">Education</h3>
            <span className="text-sm font-bold tracking-wider uppercase text-gray-600 dark:text-gray-400">
              2012–2023
            </span>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="relative col-span-12 space-y-6 sm:col-span-9">
          <div className="col-span-12 relative px-4 space-y-12 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:left-[6px] sm:before:left-[-12px] before:bg-gray-300 dark:before:bg-gray-300">

            {/* Entry 1 */}
            <div className="flex flex-col relative before:absolute before:top-2 before:left-0 sm:before:left-[-35px] before:w-3 before:h-3 sm:before:w-4 sm:before:h-4 before:rounded-full before:bg-green-600 dark:before:bg-green-600 z-10">
              <h3 className="text-xl font-semibold tracking-wide">
                Queen's University Belfast, UK
              </h3>
              <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-gray-400">
                MSc BIM Project Management (2022–2023)
              </time>
              <p className="mt-3">
                Specialized in Building Information Modelling and digital project delivery in construction.
                Developed expertise in coordinating interdisciplinary teams using BIM tools such as Revit,
                Navisworks, and Synchro. Completed a dissertation on digital twin implementation in infrastructure projects.
              </p>
            </div>

            {/* Entry 2 */}
            <div className="flex flex-col relative before:absolute before:top-2 before:left-0 sm:before:left-[-35px] before:w-3 before:h-3 sm:before:w-4 sm:before:h-4 before:rounded-full before:bg-green-600 dark:before:bg-green-600 z-10">
              <h3 className="text-xl font-semibold tracking-wide">
                Jamia Millia Islamia University, India
              </h3>
              <time className="text-xs tracking-wide uppercase text-gray-600 dark:text-gray-400">
                Bachelor of Architecture (2014–2019)
              </time>
              <p className="mt-3">
                Completed a five-year professional program in architecture with a focus on sustainable design,
                construction technology, and urban planning. Final thesis project explored modular housing
                solutions for urban expansion. Participated in national design competitions and architectural workshops.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
