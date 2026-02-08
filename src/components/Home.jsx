import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ({ accentColor }) => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#1E90FF] px-4 sm:px-6 py-20 pt-[80px] md:pt-[100px]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center min-h-screen'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12'>
          {/* Text Content */}
          <div className='flex-1 text-center md:text-left w-full'>
            <p style={{ color: accentColor }} className='font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3'>Hi, my name is</p>
            <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight'>Yohanes</h1>
            <h2 className='text-lg sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-snug'>I'm a 3rd Year Computer Science Student.</h2>
            <div className='mt-6 sm:mt-8'>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-white border-2 px-4 sm:px-6 py-2 sm:py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 cursor-pointer mx-auto md:mx-0 text-sm sm:text-base transition-all' style={{ borderColor: accentColor }}>
                  View Work <HiArrowNarrowRight className='ml-2 sm:ml-3' />
                </button>
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className='flex-shrink-0'>
            <img 
              src='/images/profile.jpg' 
              alt='Yohanes' 
              className='w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-lg hover:scale-105 transition-transform duration-300'
              style={{ borderColor: accentColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;