import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(32);
  const footerHeight = 160;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;

      if (pageHeight - scrollPosition < footerHeight) {
        setBottomOffset(footerHeight + 16);
      } else {
        setBottomOffset(32);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{ bottom: bottomOffset }}
        className="fixed right-8 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 shadow-lg transition-all duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="text-sm font-medium opacity-80 hidden sm:inline group-hover:opacity-100 transition-opacity duration-200">
          Back to Top
        </span>
      </button>
    )
  );
}
