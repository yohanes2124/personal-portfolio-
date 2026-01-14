import React from 'react';

const About = ({ accentColor }) => {
  return (
    <div name='about' className='w-full h-screen bg-[#1E90FF] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 text-white' style={{ borderColor: accentColor }}>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Yohanes, a passionate Computer Science student. Welcome to my journey!</p>
            </div>
            <div>
              <p>I'm currently a 3rd year Computer Science student with a deep passion for creating 
              innovative software solutions. Through my academic journey and hands-on projects, I've 
              developed skills in full-stack development, building everything from dormitory management 
              systems to e-commerce platforms. I believe technology has the power to transform lives 
              and solve real-world problems. Every line of code I write brings me closer to my goal 
              of becoming a skilled software engineer who makes a positive impact in the tech world. 
              I'm excited about the future and eager to continue learning and growing!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;