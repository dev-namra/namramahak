import { motion } from "framer-motion";

const Divider = () => {
  return (
    <section>
      <motion.div
        className="w-full pt-24 pb-12"
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

// {/* <hr className="border-black border-t border-[0.5px] w-full my-4" /> */}
export default Divider;
