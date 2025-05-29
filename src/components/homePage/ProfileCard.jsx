import Profile from '../../assets/person/pp.jpg';

function ProfileCard() {
  return (
    <section className="relative overflow-hidden flex flex-col p-6 md:p-16">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="space-y-2 pt-4">
            <h1 className="font-poppins text-5xl font-semibold text-gray-900 leading-tight">
              Hi, I'm <span className="inline-block relative">
                <span className="relative z-10">Namra Mahak</span>
                <span className="absolute left-0 bottom-1 h-6 w-full bg-[#ffcf5a] opacity-80 rounded-sm"></span>
              </span>
            </h1>
            <p className="text-3xl text-gray-800 font-righteous">
              Front-End Developer who builds
              responsive, clean UI with
              performance and pixel perfection
              at the core.
            </p>
          </div>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-md">
            <img
              src={Profile}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
      </div>

      <div className="flex flex-col py-6 md:px-14">
        <div className="w-full space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-indigo-500 mt-1 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <h6 className="font-poppins text-xl text-gray-900 leading-relaxed space-y-2">
            As a{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">front-end developer</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-blue-200 opacity-60 z-0 rounded-sm"></span>
            </span>
            , I build web interfaces that are fast, accessible, and visually engaging. I believe great UI isn't just about looks — it's about creating smooth, meaningful user interactions.

            <br /><br />

            I focus on writing clean, maintainable code with modern technologies like React, Tailwind CSS, and Next.js. My attention to performance and responsiveness ensures seamless experiences across all devices.

            <br /><br />

            Beyond the code, I bring a design-first mindset, collaborating closely with designers and product teams to bring ideas to life with polish and precision.

            <br /><br />

            Whether I'm improving an existing UI or building something from scratch, I always aim for elegance, usability, and speed — because good design should feel effortless.
          </h6>


          <a href="/about" className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-200 rounded-full hover:bg-indigo-300 transition">
            <img src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg" alt="arrow icon" className="w-4 h-4 invert"/>
            <span className="font-poppins text-base text-gray-900">
              Tell me more
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
export default ProfileCard;
