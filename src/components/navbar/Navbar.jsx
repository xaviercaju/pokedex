import React, { useState } from 'react';
import {MobileMenu, MobileMenuButton} from './menus/MobileMenu' ;





import NavLinks from './menus/Navlinks';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenuContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <MobileMenu isOpen={isOpen} />
      </>
    );
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg fixed top-4 left-4 right-4 z-10 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-white text-lg font-semibold">Home</h1>
          </div>
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <NavLinks />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
}

export default Navbar;