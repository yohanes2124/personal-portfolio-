import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ accentColor }) => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50'>
      <div>
        <h1 className='text-xl md:text-2xl font-bold ml-2' style={{ color: accentColor }}>YOHANES</h1>
      </div>

      {/* Menu Links - Responsive */}
      <ul className='flex'>
        {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
          <li key={item} className='px-2 md:px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-sm md:text-base'>
            <Link to={item} smooth={true} duration={500}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;