import { motion } from "framer-motion";

const interests = [
  "doodle",
  "watch series",
  "coding for fun",
  "simulation games",
  "walk",
  "explore",
];

const Interests = () => (
  <section className="flex flex-col gap-8 py-4 md:py-12 max-w-6xl mx-auto p-6">
    {/* Title */}
    <motion.div
      className="text-center mx-auto mb-8 flex flex-col gap-3"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
        <span className="relative inline-block">
          <span className="relative z-10 text-black">Outside Of Work</span>
          <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-200 opacity-60 z-0 rounded-sm" />
        </span>
      </h2>
    </motion.div>

    {/* Description */}
    <motion.p
      className="text-gray-800 leading-relaxed font-light text-center md:text-left font-spaceGrotesk"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      When I'm not designing or coding, I enjoy doodling, watching series,
      coding for fun, playing simulation games, walking, and exploring new
      places. I love experimenting with generative art and AI-assisted design
      tools.
    </motion.p>

    {/* Collage of Doodles */}
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      {/* Placeholder for your doodle collage */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-lg bg-slate-100 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-slate-400 font-spaceGrotesk">Doodle {i}</span>
        </motion.div>
      ))}
    </motion.div>

    {/* Interests as Tags */}
    <motion.div
      className="flex flex-wrap justify-center gap-2 font-spaceGrotesk"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
    >
      {interests.map((interest, i) => (
        <motion.div
          key={i}
          className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-spaceGrotesk"
          whileHover={{ scale: 1.1, backgroundColor: "#fef08a" }}
        >
          {interest}
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Interests;
