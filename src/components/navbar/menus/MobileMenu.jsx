import React from "react";

const MobileMenu = ({ isOpen }) => {
    return (
      <div
        className={`md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-4 bg-black">
          <a href="#" className="block text-white hover:text-gray-100">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-100">
            Login
          </a>
          <a href="#" className="block text-white hover:text-gray-100">
            Pokedex
          </a>
        </div>
      </div>
    );
  };
  


const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        className={`text-white focus:outline-none hover:border-transparent bg-transparent transition-transform duration-300 ease-in-out ${
          isOpen ? "transform rotate-90" : ""
        }`}
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.3 6.3L17.7 17.7M6.3 17.7l11.4-11.4"
                stroke="white"
                strokeWidth="2"
              />
            </g>
          ) : (
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 4h16v3H4V4zm0 6h16v3H4v-3zm0 6h16v3H4v-3z"
              />
            </g>
          )}
        </svg>
      </button>
    </div>
  );
};

export { MobileMenu, MobileMenuButton };
