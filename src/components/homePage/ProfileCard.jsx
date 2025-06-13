import { motion } from "framer-motion";
import Profile from '../../assets/person/pp.jpg';

function ProfileCard() {
  return (
    <section className="relative overflow-hidden flex flex-col p-6 md:px-16 md:pt-16">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Text Block */}
        <motion.div
          className="space-y-4 pt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Hi!<br />
            <span className="inline-block relative">
              <span className="relative z-10 text-4xl md:text-5xl">I'm </span>
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-block cursor-pointer"
              >
                <span className="relative z-10 text-4xl md:text-5xl text-indigo-600">Namra Mahak</span>
                <span className="absolute left-0 bottom-0 h-3 w-full bg-[#ffcf5a] opacity-80 rounded-full -z-0"></span>
              </motion.span>
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-800 font-righteous">
            Front-End Developer who builds
            responsive, clean UI with
            performance and pixel perfection
            at the core.
          </p>
        </motion.div>

        {/* Profile Image with Hover Zoom */}
        <motion.div
          className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={Profile}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col py-6 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="w-full space-y-6">
          {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-indigo-300 rounded-full my-8 mx-auto w-2/3"
        />

        {/* Text after divider with slow animation */}
        <motion.h6
          className="font-poppins text-xl text-gray-900 leading-relaxed space-y-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        >
          As a{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-blue-600">front-end developer,  </span>
            <span className="absolute inset-x-0 bottom-1 h-2 bg-blue-200 opacity-60 z-0 rounded-sm"></span>
          </span>
           I build web interfaces that are fast, accessible, and visually engaging. I believe great UI isn't just about looks — it's about creating smooth, meaningful user interactions.

          <br /><br />

          I focus on writing clean, maintainable code with modern technologies like React, Tailwind CSS, and Next.js. My attention to performance and responsiveness ensures seamless experiences across all devices.

          <br /><br />

          Beyond the code, I bring a design-first mindset, collaborating closely with designers and product teams to bring ideas to life with polish and precision. Whether I'm improving an existing UI or building something from scratch, I always ..
        </motion.h6>


          {/* CTA Button */}
          <motion.div
            className="w-full md:flex md:justify-center py-6 md:py-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="/about"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-200 rounded-3xl hover:bg-indigo-300 transition w-full md:w-auto"
            >
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                alt="arrow icon"
                className="w-4 h-4 invert"
              />
              <span className="font-poppins text-lg text-black">
                Tell me more
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProfileCard;
