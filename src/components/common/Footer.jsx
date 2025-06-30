import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Name */}
        <a
          href="/namramahak/#/"
          className="text-xl font-semibold text-white hover:text-white transition"
        >
          Namra Mahak
        </a>

        {/* Navigation Links */}
        <nav className="flex space-x-8">
          <a
            href="/namramahak/#/"
            className="hover:text-white transition text-sm font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-white transition text-sm font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-white transition text-sm font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Contact & Social */}
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex flex-col space-y-1 text-center md:text-left">
            <p>mahaknamra@gmail.com</p>
            <p>(+44) 755266019</p>
          </div>

          <div className="flex space-x-4 text-2xl">
            <a
              href="https://linkedin.com/in/namra-mahak"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/dev-namra"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright + Tech Stack */}
      <div className="max-w-6xl mx-auto text-center mt-8 space-y-2 text-xs text-gray-500 border-t border-gray-600 pt-4 md:pt-6">
        <p>
          &copy; {new Date().getFullYear()} Namra Mahak. All rights reserved.
        </p>
        <p>
          Made with{" "}
          <a
            href="https://reactjs.org"
            className="underline hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tailwindcss.com"
            className="underline hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
