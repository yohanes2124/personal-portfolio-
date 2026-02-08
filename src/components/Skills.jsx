import React from 'react';

const Skills = ({ accentColor }) => {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', percentage: 84 },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', percentage: 82 },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', percentage: 80 },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', percentage: 78 },
    { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', percentage: 79 },
    { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', percentage: 81 },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', percentage: 78 },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', percentage: 80 },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', percentage: 83 },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', percentage: 82 },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', percentage: 81 },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', percentage: 84 },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-[#1E90FF] text-white px-4 sm:px-6 py-16 sm:py-20'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='text-center pb-8 sm:pb-12'>
          <p className='text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4' style={{ borderColor: accentColor }}>Skills</p>
          <p className='py-4 sm:py-6 text-sm sm:text-base md:text-lg'>These are the technologies I've worked with</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6'>
          {skills.map((skill) => (
            <div key={skill.name} className='shadow-md shadow-[#040c16] hover:scale-105 duration-300 bg-[#112240] p-3 sm:p-4 rounded-lg transition-all'>
              <img className='w-12 sm:w-16 md:w-20 mx-auto mb-2 sm:mb-3 md:mb-4' src={skill.icon} alt={`${skill.name} icon`} />
              <p className='mb-2 font-semibold text-center text-xs sm:text-sm md:text-base'>{skill.name}</p>
              <div className='w-full bg-gray-700 rounded-full h-1.5 sm:h-2 mb-2'>
                <div 
                  className='h-1.5 sm:h-2 rounded-full transition-all duration-500'
                  style={{ 
                    width: `${skill.percentage}%`, 
                    backgroundColor: accentColor
                  }}
                ></div>
              </div>
              <p className='text-xs font-bold text-center' style={{ color: accentColor }}>
                {skill.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;