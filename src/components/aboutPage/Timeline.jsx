const Timeline = () => (
  <section>
    <div className="container max-w-5xl px-4 py-12 mx-auto">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
            <h3 className="text-3xl font-semibold">Experience</h3>
            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
              2019–2025
            </span>
          </div>
        </div>

        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:left-[6px] sm:before:left-[-12px] before:bg-gray-300 dark:before:bg-gray-300">

            {/* 1 */}
            <div className="flex flex-col sm:relative sm:before:left-[-35px] before:left-0 sm:before:absolute sm:before:top-2 before:top-2 sm:before:w-4 sm:before:h-4 before:w-3 before:h-3 sm:before:rounded-full before:rounded-full sm:before:z-[1] before:z-[1] before:absolute before:bg-blue-600 dark:before:bg-blue-600">
              <h3 className="text-xl font-semibold tracking-wide">Merit</h3>
              <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                Frontend Developer at Merit
              </time>
              <p className="mt-3">
                Contributing to the development of user-friendly web interfaces.
                Focused on performance, accessibility, and responsive design.
                Collaborating with designers and backend engineers to ship scalable features.
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col sm:relative sm:before:left-[-35px] before:left-0 sm:before:absolute sm:before:top-2 before:top-2 sm:before:w-4 sm:before:h-4 before:w-3 before:h-3 sm:before:rounded-full before:rounded-full sm:before:z-[1] before:z-[1] before:absolute before:bg-blue-600 dark:before:bg-blue-600">
              <h3 className="text-xl font-semibold tracking-wide">Merit</h3>
              <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                Automation Developer (Part-time)
              </time>
              <p className="mt-3">
                Built internal automation tools to streamline repetitive tasks using Python and JavaScript.
                Designed intuitive UIs and improved operational efficiency across teams.
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col sm:relative sm:before:left-[-35px] before:left-0 sm:before:absolute sm:before:top-2 before:top-2 sm:before:w-4 sm:before:h-4 before:w-3 before:h-3 sm:before:rounded-full before:rounded-full sm:before:z-[1] before:z-[1] before:absolute before:bg-blue-600 dark:before:bg-blue-600">
              <h3 className="text-xl font-semibold tracking-wide">Frasers Group</h3>
              <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                Sales Assistant
              </time>
              <p className="mt-3">
                Engaged with customers and managed point-of-sale systems.
                Supported team in inventory and visual merchandising tasks.
                Developed customer service and retail communication skills.
              </p>
            </div>

            {/* 4 */}
            <div className="flex flex-col sm:relative sm:before:left-[-35px] before:left-0 sm:before:absolute sm:before:top-2 before:top-2 sm:before:w-4 sm:before:h-4 before:w-3 before:h-3 sm:before:rounded-full before:rounded-full sm:before:z-[1] before:z-[1] before:absolute before:bg-blue-600 dark:before:bg-blue-600">
              <h3 className="text-xl font-semibold tracking-wide">Zeppelin Design and Environments</h3>
              <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                Senior Designer
              </time>
              <p className="mt-3">
                Managed end-to-end design process for experiential environments.
                Collaborated with cross-functional teams and mentored junior designers.
                Delivered spatial storytelling and brand-driven design solutions.
              </p>
            </div>

            {/* 5 */}
            <div className="flex flex-col sm:relative sm:before:left-[-35px] before:left-0 sm:before:absolute sm:before:top-2 before:top-2 sm:before:w-4 sm:before:h-4 before:w-3 before:h-3 sm:before:rounded-full before:rounded-full sm:before:z-[1] before:z-[1] before:absolute before:bg-blue-600 dark:before:bg-blue-600">
              <h3 className="text-xl font-semibold tracking-wide">Sconce Global</h3>
              <time className="text-xs tracking-wide uppercase dark:text-gray-600">
                Architect
              </time>
              <p className="mt-3">
                Led design and coordination of retail and commercial interior projects.
                Worked closely with clients and contractors to ensure design execution matched expectations.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Timeline;
