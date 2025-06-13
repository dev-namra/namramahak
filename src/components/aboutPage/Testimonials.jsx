import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Testimonials data
const testimonials = [
  {
    quote:
      "Namra is a rare blend of creative and technical expertise. Her work is not only visually polished but also highly functional.",
    name: "Micheal Gough",
    title: "Former Employee, Merit",
  },
  {
    quote:
      "Working with Namra was a breeze. Her attention to detail and innovative thinking always brought the best out of our projects.",
    name: "Ayesha Khan",
    title: "Product Designer, SpaceLab",
  },
  {
    quote:
      "Namra’s ability to bridge design with technology is truly impressive. A reliable and inspiring collaborator.",
    name: "Daniel V.",
    title: "Automation Engineer, ArchiTech",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <div className="w-full flex justify-center items-center">
      <section className="w-full">
        <div className="max-w-screen-xl p-4 mx-auto text-center lg:py-12 lg:px-6">
          <AnimatePresence mode="wait">
            <motion.figure
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="max-w-screen-md mx-auto bg-gray-100 p-8 rounded-lg shadow-md"
            >
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900">{testimonial.name}</div>
                  <div className="pl-3 text-sm font-light text-gray-500">
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
