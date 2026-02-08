import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = ({ accentColor }) => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#1E90FF] px-4 py-20'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center min-h-screen'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          <div className='flex-1 text-center md:text-left'>
            <p style={{ color: accentColor }} className='font-bold text-lg mb-2'>Hi, my name is</p>
            <h1 className='text-4xl md:text-7xl font-bold text-white mb-4'>Yohanes</h1>
            <h2 className='text-xl md:text-4xl font-bold text-white mb-6'>I'm a 3rd Year Computer Science Student.</h2>
            <div className='mt-6'>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-white border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 cursor-pointer mx-auto md:mx-0' style={{ borderColor: accentColor }}>
                  View Work <HiArrowNarrowRight className='ml-3' />
                </button>
              </Link>
            </div>
          </div>
          <div>
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