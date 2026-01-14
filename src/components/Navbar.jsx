import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = ({ accentColor }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <h1 className='text-2xl font-bold ml-2' style={{ color: accentColor }}>YOHANES</h1>
      </div>

      {/* Main Menu Links */}
      <ul className='hidden md:flex'>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
            <Link to={item} smooth={true} duration={500}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer pr-4'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl capitalize'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;