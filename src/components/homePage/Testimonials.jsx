import { motion } from "framer-motion";
import shambhavee from "../../assets/person/shambhavee.jpg";
import kshitij from "../../assets/person/kshitij.png";
import manli from "../../assets/person/manli.jpg";

const testimonials = [
  {
    name: "Manli Zhu",
    role: "AI Engineer, Merit",
    image: manli,
    review:
      "I’m continually impressed by Namra’s mastery of front-end development. Her clean, efficient code and intuitive UI designs translate complex requirements into elegant, responsive interfaces. An invaluable asset to any team.",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Shambhavee Pandey",
    role: "Dev Project Lead",
    image: shambhavee,
    review:
      "Namra Mahak is an exceptionally driven and versatile professional, rapidly evolving from a programming novice to a multifaceted developer within just six months. Her impressive mastery of languages and frameworks—ranging from Python and C# to React and Azure—has enabled her to deliver impactful solutions, including a web app now used by over 65 users. Namra’s architectural background shines through in her elegant frontend designs, blending technical acumen with creative vision. Her relentless pursuit of knowledge and ability to translate ideas into seamless applications make her an invaluable asset to any team.",
    bgColor: "bg-orange-50",
  },
  {
    name: "Kshitij Vats",
    role: "Senior Architect, Zeppelin Design and Environments",
    image: kshitij,
    review:
      "Namra’s ability to bridge design with technology is truly impressive. A reliable and inspiring collaborator.",
    bgColor: "bg-blue-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading animation */}
      <motion.div
        className="text-center mx-auto mb-10 flex flex-col gap-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-Berlleigh text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10 text-black">Testimonials</span>
            <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-200 opacity-60 z-0 rounded-sm" />
          </span>
        </h2>
        <h3 className="font-Berlleigh text-xl text-gray-900 leading-tight">
          What people I've worked with have said about me.
        </h3>
      </motion.div>

      {/* Cards animation container */}
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className={`rounded-3xl p-6 shadow-md ${t.bgColor} transition-transform hover:-translate-y-1 duration-200`}
            variants={cardVariants}
          >
            <div className="flex items-center mb-5">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border border-white shadow-md"
              />
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-gray-900 font-Berlleigh">
                  {t.name}
                </h5>
                <p className="text-sm text-gray-700 font-spaceGrotesk">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="text-gray-800 text-sm leading-relaxed font-spaceGrotesk">
              {t.review}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
