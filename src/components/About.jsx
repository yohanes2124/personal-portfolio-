import React from 'react';

const About = ({ accentColor }) => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#1E90FF] text-white px-4 py-16'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='text-center pb-12'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 text-white' style={{ borderColor: accentColor }}>
            About
          </p>
        </div>
        
        <div className='space-y-8'>
          <div className='text-center'>
            <p className='text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed'>
              Hi. I'm Yohanes, a passionate Computer Science student. Welcome to my journey!
            </p>
          </div>
          <div className='text-center max-w-4xl mx-auto'>
            <p className='text-base sm:text-lg leading-relaxed text-white'>
              I'm currently a 3rd year Computer Science student with a deep passion for creating 
              innovative software solutions. Through my academic journey and hands-on projects, I've 
              developed skills in full-stack development, building everything from dormitory management 
              systems to e-commerce platforms. I believe technology has the power to transform lives 
              and solve real-world problems. Every line of code I write brings me closer to my goal 
              of becoming a skilled software engineer who makes a positive impact in the tech world. 
              I'm excited about the future and eager to continue learning and growing!
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;