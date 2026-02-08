import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ accentColor }) => {
  const projectData = [
    {
      id: 1,
      name: "Dormitory Management System",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/yohanes2124/dormitory-management",
      live: "https://dormitory-management-demo.vercel.app/",
      description: "Full-stack web application for managing dormitory operations including room allocation, student registration, and facility management."
    },
  ];

  return (
    <div name='projects' className='w-full min-h-screen text-white bg-[#1E90FF] px-4 sm:px-6 py-16 sm:py-20'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='text-center pb-8 sm:pb-12'>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 text-white' style={{ borderColor: accentColor }}>
            Projects
          </p>
          <p className='py-4 sm:py-6 text-sm sm:text-base md:text-lg'>Check out some of my recent applications</p>
        </div>

        {/* Centered Project Container */}
        <div className='flex justify-center'>
          {projectData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-[#040c16] group rounded-xl flex justify-center text-center items-center content-div bg-cover relative overflow-hidden h-[250px] sm:h-[300px] md:h-[320px] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] transition-all'
            >
              {/* Hover Effect Layer */}
              <div className='opacity-0 group-hover:opacity-100 bg-[#0a192f]/95 absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 p-4 sm:p-6'>
                <span className='text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wider mb-2 sm:mb-3 md:mb-4 line-clamp-2'>
                  {item.name}
                </span>
                <p className='text-white text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 px-2 leading-relaxed text-center line-clamp-3'>
                  {item.description}
                </p>
                <div className='pt-2'>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-700 font-bold text-sm sm:text-base md:text-lg hover:scale-110 transition-transform flex items-center justify-center gap-2'>
                      <FaGithub size={20} />
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;