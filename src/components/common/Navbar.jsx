"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion variants for overlay and items
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "about", label: "About me" },
    { href: "cases", label: "Projects" },
    {
      href: "mailto:mahaknamra@gmail.com",
      label: (
        <>
          <img
            src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
            alt="mail icon"
            className="w-6 h-6 invert mr-3"
          />
          Let’s connect
        </>
      ),
      isMail: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#fbf4ec] shadow-md z-50">
      <nav className="max-w-7xl bg-[#fbf4ec] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-bold">
              nm.
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link, i) =>
              !link.isMail ? (
                <Link
                  key={i}
                  to={link.href}
                  className="text-black hover:underline px-3 py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-full text-black underline hover:bg-white"
                >
                  <img
                    src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                    alt="mail icon"
                    className="w-4 h-4 invert mr-2"
                  />
                  Let’s connect
                </a>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden z-60">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#fbf4ec] z-50 flex flex-col justify-center items-center p-8"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button inside the overlay */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-8 w-8 text-black" />
              </button>
            </div>
            <motion.ul className="mt-12 flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="w-full flex justify-center"
                >
                  {!link.isMail ? (
                    <Link
                      to={link.href}
                      className="text-black hover:underline text-3xl font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-black underline flex items-center text-3xl font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      <img
                        src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                        alt="mail icon"
                        className="w-6 h-6 invert mr-3"
                      />
                      Let’s connect
                    </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
