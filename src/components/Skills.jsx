import React, { useState, useEffect } from 'react';

const Skills = ({ accentColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentages, setAnimatedPercentages] = useState({});

  const skills = [
    { id: 1, name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', percentage: 84 },
    { id: 2, name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', percentage: 82 },
    { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', percentage: 80 },
    { id: 4, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', percentage: 78 },
    { id: 5, name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', percentage: 79 },
    { id: 6, name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', percentage: 81 },
    { id: 7, name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', percentage: 78 },
    { id: 8, name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', percentage: 80 },
    { id: 9, name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', percentage: 83 },
    { id: 10, name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', percentage: 82 },
    { id: 11, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', percentage: 81 },
    { id: 12, name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', percentage: 84 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.querySelector('[name="skills"]');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = [];

    skills.forEach((skill) => {
      const animateSkill = () => {
        let currentValue = 0;
        const targetValue = skill.percentage;
        const duration = 2000; // 2 seconds for smooth fill
        const steps = 60; // 60 steps for smooth animation
        const increment = targetValue / steps;
        const stepDuration = duration / steps;

        let step = 0;
        const fillInterval = setInterval(() => {
          step++;
          currentValue = Math.min(currentValue + increment, targetValue);
          
          setAnimatedPercentages(prev => ({
            ...prev,
            [skill.id]: Math.round(currentValue)
          }));

          if (step >= steps) {
            clearInterval(fillInterval);
          }
        }, stepDuration);
      };

      // Initial animation with staggered start
      setTimeout(() => {
        animateSkill();
      }, Math.random() * 1000);

      // Random interval between 4-8 seconds for each skill
      const randomInterval = Math.random() * 4000 + 4000;
      const interval = setInterval(() => {
        animateSkill();
      }, randomInterval);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div name='skills' className='w-full h-screen bg-[#1E90FF] text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4' style={{ borderColor: accentColor }}>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
              {skills.map(({ id, name, icon, percentage }, index) => (
                <div 
                  key={id} 
                  className={`shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#112240] p-4 rounded-lg transform transition-all ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                    <div className='relative'>
                      <img 
                        className={`w-20 mx-auto mb-4 transition-transform duration-300 ${
                          isVisible ? 'rotate-0' : 'rotate-12'
                        }`} 
                        src={icon} 
                        alt={`${name} icon`} 
                      />
                      {/* Floating animation for icons */}
                      <div className='absolute inset-0 w-20 h-20 mx-auto animate-pulse opacity-20 rounded-full' 
                           style={{ backgroundColor: accentColor }}></div>
                    </div>
                    <p className='mb-2 font-semibold'>{name}</p>
                    <div className='w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden'>
                        <div 
                            className='h-2 rounded-full relative'
                            style={{ 
                                width: `${animatedPercentages[id] || 0}%`, 
                                backgroundColor: accentColor,
                                transition: 'width 0.05s linear'
                            }}
                        >
                          {/* Shimmer effect */}
                          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse'></div>
                        </div>
                    </div>
                    <p 
                      className='text-sm font-bold transition-all duration-300' 
                      style={{ color: accentColor }}
                    >
                      {animatedPercentages[id] || 0}%
                    </p>
                </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;