import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ({ accentColor }) => {
  return (
    <div name='home' className='w-full h-screen bg-[#1E90FF]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='flex-1'>
            <p style={{ color: accentColor }} className='font-bold'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Yohanes</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a 3rd Year Computer Science Student.</h2>
            <div className='mt-4'>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 transition-all cursor-pointer' style={{ borderColor: accentColor }}>
                  View Work <HiArrowNarrowRight className='ml-3' />
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-shrink-0'>
            <img 
              src='/images/profile.jpg' 
              alt='Yohanes' 
              className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 shadow-lg'
              style={{ borderColor: accentColor }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;