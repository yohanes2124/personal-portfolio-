import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = ({ accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='fixed w-full h-[60px] md:h-[80px] flex justify-between items-center px-4 md:px-6 bg-[#0a192f] text-gray-300 z-50 shadow-lg'>
      <div>
        <h1 className='text-lg md:text-2xl font-bold' style={{ color: accentColor }}>YOHANES</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-2 lg:gap-4'>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item} className='px-3 lg:px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-sm lg:text-base transition-all'>
            <Link to={item} smooth={true} duration={500}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className='md:hidden text-2xl transition-all duration-300'
        style={{ color: accentColor }}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='absolute top-[60px] left-0 w-full bg-[#0a192f] md:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-300'>
          <ul className='flex flex-col py-4'>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item} className='px-6 py-3 cursor-pointer capitalize font-medium hover:bg-[#112240] transition-colors border-b border-gray-700 last:border-b-0'>
                <Link to={item} smooth={true} duration={500} onClick={closeMenu}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;