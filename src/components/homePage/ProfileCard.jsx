import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CountUp = ({ to, duration = 1000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / to), 50);

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [to, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

function ProfileCard() {
  return (
    <section className="relative overflow-hidden flex flex-col pb-4 md:pb-8 mb-4 md:mb-8">
      {/* Background Splash Gradient Blob */}
      <div
        className="absolute inset-0 -z-10 flex justify-center items-center border border-b-black"
        aria-hidden="true"
      >
        <div
          className="w-20 h-36 md:w-[600px] md:h-[700px] rounded-full bg-gradient-to-br from-[#ff80b5] to-[#9089fc] opacity-30 blur-[150px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex flex-col items-center justify-center gap-8 py-12 md:py-32">
        {/* Text Block */}
        <motion.div
          className="space-y-4 pt-4 flex flex-col items-center justify-center max-w-6xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-Berlleigh text-4xl md:text-[40px] text-black leading-tight">
            Hi,{" "}
            <span className="inline-block relative">
              <span className="relative z-10">I'm</span>{" "}
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative inline-block cursor-pointer"
              >
                <span className="relative z-10 text-black">Namra Mahak</span>
                <span className="absolute left-0 bottom-1 h-3 w-full bg-[#ffcf5a] opacity-80 rounded-full -z-0"></span>
              </motion.span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl text-black font-spaceGrotesk text-center">
            Front-End Developer who builds responsive, clean UI with performance
            and pixel perfection at the core.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="w-full md:flex md:justify-center p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/resume"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-black rounded-3xl hover:bg-gray-800 transition w-full md:w-auto"
          >
            <img
              src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
              alt="arrow icon"
              className="size-4"
            />
            <span className="font-spaceGrotesk text-lg text-white">
              View Resume
            </span>
          </Link>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          {/* Years of Experience */}
          <div className="font-Berlleigh text-3xl text-center">
            <div>
              <CountUp to={5} suffix="+" />
            </div>
            <div className="font-spaceGrotesk text-base leading-none">
              <div>years of</div>
              <div>experience</div>
            </div>
          </div>

          {/* Responsive Line */}
          <div className="bg-black md:w-[1px] md:h-16 w-16 h-[1px]" />

          {/* Projects Delivered */}
          <div className="font-Berlleigh text-3xl text-center">
            <div>
              <CountUp to={7} suffix="+" />
            </div>
            <div className="font-spaceGrotesk text-base leading-none">
              <div>projects</div>
              <div>delivered</div>
            </div>
          </div>

          {/* Responsive Line */}
          <div className="bg-black md:w-[1px] md:h-16 w-16 h-[1px]" />

          {/* Industries Served */}
          <div className="font-Berlleigh text-3xl text-center">
            <div>
              <CountUp to={3} />
            </div>
            <div className="font-spaceGrotesk text-base leading-none">
              <div>industries</div>
              <div>served</div>
            </div>
          </div>

          {/* Responsive Line */}
          <div className="bg-black md:w-[1px] md:h-16 w-16 h-[1px]" />

          {/* Client Satisfaction */}
          <div className="font-Berlleigh text-3xl text-center">
            <div>
              <CountUp to={100} suffix="%" />
            </div>
            <div className="font-spaceGrotesk text-base leading-none">
              <div>client</div>
              <div>satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProfileCard;
