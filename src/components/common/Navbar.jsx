import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f4f4f4] shadow-md">
      <nav className="max-w-7xl bg-[#fbf4ec] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              nm.
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-black hover:underline px-3 py-2">
              Home
            </a>
            <a href="/about" className="text-black hover:underline px-3 py-2">
              About me
            </a>
            <a href="/cases" className="text-black hover:underline px-3 py-2">
              Cases
            </a>
            <a
              href="mailto:sarah@meeuw.com"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent rounded-full text-black underline hover:bg-white"
            >
              <img
                src="https://framerusercontent.com/images/kwWGJqjqkaDHrNQQL85ebAFUpc.svg"
                alt="mail icon"
                className="w-4 h-4 invert mr-2"
              />
              Let’s connect
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
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
      {isOpen && (
        <div className="fixed inset-0 bg-[#fbf4ec] z-50 flex flex-col justify-center items-center space-y-8 p-8">
          <a
            href="/"
            className="text-black hover:underline text-3xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black hover:underline text-3xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            About me
          </a>
          <a
            href="/cases"
            className="text-black hover:underline text-3xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="mailto:sarah@meeuw.com"
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
        </div>
      )}


    </header>
  );
}
