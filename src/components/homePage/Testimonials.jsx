import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    quote:
      "Namra consistently delivered above expectations. Her understanding of user needs is unmatched.",
    name: "Sophia Lee",
    title: "UX Lead, CodeVerse",
  },
  {
    quote:
      "Her ability to turn complex problems into elegant designs is outstanding. Highly recommended!",
    name: "Rahul S.",
    title: "CTO, NovaSoft",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 flex flex-col gap-14">
      {/* Heading */}
      <motion.div
        className="text-center max-w-7xl mx-auto mb-10 flex flex-col gap-3"
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

      {/* Main wrapper to handle arrows outside the card */}
      <div className="relative flex items-center justify-center max-w-5xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="absolute left-0 z-10 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronLeft className="size-8 text-gray-600" />
        </button>

        {/* Testimonial with AnimatePresence */}
        <div className="w-full sm:w-[90%] md:w-[80%]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.figure
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="p-8 rounded-xl text-center"
            >
              <svg
                className="h-10 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 font-spaceGrotesk">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <figcaption className="mt-6 flex justify-center items-center space-x-2 text-gray-700 text-sm">
                <span className="font-semibold">
                  {testimonials[currentIndex].name}
                </span>
                <span className="text-gray-500">/</span>
                <span>{testimonials[currentIndex].title}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="absolute right-0 z-10 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ChevronRight className="size-8 text-gray-600" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
