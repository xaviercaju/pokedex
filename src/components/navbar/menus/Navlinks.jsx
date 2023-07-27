import React from 'react';

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a href="#" className="text-white hover:text-gray-100">
        Home
      </a>
      <a href="#" className="text-white hover:text-gray-100">
        Login
      </a>
      <a href="#" className="text-white hover:text-gray-100">
        Pokedex
      </a>
    </div>
  );
};

export default NavLinks;
