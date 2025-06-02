import React from "react";
import { motion } from "framer-motion";

const headlines = [
  "Crafting seamless interfaces ✦",
  "✦ Building modern web experiences ✦",
  "React, Tailwind, and Next.js ✦",
];

const PortfolioMarquee = () => {
  const repeated = [...headlines, ...headlines, ...headlines];

  return (
      <div className="overflow-hidden w-full py-4">
        <motion.div
          className="flex gap-2 whitespace-nowrap text-white text-2xl font-bold uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
        >
          {repeated.map((text, index) => (
            <span key={index} className="px-8">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
  );
};

export default PortfolioMarquee;
