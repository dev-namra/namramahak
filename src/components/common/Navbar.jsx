import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-[85%] mx-auto mt-8 md:mt-12 bg-[#fafafa] fixed left-1/2 transform -translate-x-1/2 rounded-full border z-50">
        <div className="flex items-center justify-between p-4 px-8 relative">
          {/* Logo */}
          <a href="/" className="text-xl font-bold flex justify-center items-center">
            nm.
          </a>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-black">Home</a>
            <i className="ri-shining-fill text-sm"></i>
            <a href="/projects" className="text-gray-700 hover:text-black">Projects</a>
            <i className="ri-shining-fill text-sm"></i>
            <a href="/about" className="text-gray-700 hover:text-black">About</a>
            <i className="ri-shining-fill text-sm"></i>
            <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
          </div>

          {/* Social Links */}
          <div className="items-center space-x-4 hidden md:flex">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border rounded-lg">
              <i className="ri-linkedin-box-fill text-gray-700 hover:text-black text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border rounded-lg">
              <i className="ri-github-fill text-2xl text-gray-700 hover:text-black"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden relative z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
        <div className={`absolute top-24 mt-2 left-1/2 -translate-x-1/2 w-[65%] bg-white shadow-lg border rounded-lg p-8 z-10 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-96"}`}>
          <div className="flex flex-col space-y-2">
            <a href="/" className="block text-gray-700 hover:text-black">Home</a>
            <a href="/portfolio" className="block text-gray-700 hover:text-black">Portfolio</a>
            <a href="/about" className="block text-gray-700 hover:text-black">About</a>
            <a href="/contact" className="block text-gray-700 hover:text-black">Contact</a>
            <div className="flex justify-center space-x-4 pt-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border rounded-lg">
                <i className="ri-linkedin-box-fill text-gray-700 hover:text-black text-2xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border rounded-lg">
                <i className="ri-github-fill text-2xl text-gray-700 hover:text-black"></i>
              </a>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
