import { motion } from "framer-motion";

const Divider = () => {
  return (
    <section>
      <motion.div
        className="w-full py-6 md:py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="h-[0.5px] bg-black w-full" />
      </motion.div>
    </section>
  );
};

export default Divider;
