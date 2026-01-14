import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ accentColor }) => {
  // Add your project data here
  const projectData = [
    {
      id: 1,
      name: "Dormitory Management System",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/yohanes2124/dormitory-management",
      live: "https://dormitory-management-demo.vercel.app/",
      description: "Full-stack web application for managing dormitory operations including room allocation, student registration, and facility management."
    },
    {
      id: 2,
      name: "Kebele Management System",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/yohanes2124/kebele-management",
      live: "https://kebele-management-demo.vercel.app/",
      description: "Digital solution for Ethiopian local administration, handling citizen services, document management, and community records."
    },
    {
      id: 3,
      name: "Online Shopping Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/yohanes2124/online-shopping",
      live: "https://online-shopping-demo.vercel.app/",
      description: "E-commerce platform with user authentication, product catalog, shopping cart, payment integration, and order management."
    },
  ];

  return (
    <div name='projects' className='w-full md:h-screen text-white bg-[#1E90FF]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-white' style={{ borderColor: accentColor }}>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent applications</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projectData.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center text-center items-center mx-auto content-div bg-cover relative overflow-hidden h-[300px]'
            >
              {/* Hover Effect Layer */}
              <div className='opacity-0 group-hover:opacity-100 bg-[#0a192f]/95 absolute inset-0 flex flex-col justify-center items-center transition-all duration-300 p-4'>
                <span className='text-2xl font-bold text-white tracking-wider mb-2'>
                  {item.name}
                </span>
                <p className='text-white text-sm mb-4 px-2 leading-relaxed'>
                  {item.description}
                </p>
                <div className='pt-4 text-center'>
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-6 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-transform flex items-center justify-center mx-auto'>
                      <FaGithub size={24} />
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