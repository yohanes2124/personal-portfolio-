import React, { useState, useRef } from 'react';
import { HiChevronDoubleUp, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaGithub, FaTelegram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';
import emailjs from '@emailjs/browser';

const Contact = ({ accentColor }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Replace these with your EmailJS credentials
    const serviceId = 'service_77zjw87';
    const templateId = 'template_oxzl35o';
    const publicKey = 'WkR-6N6DZHccg0TsS';

    console.log('Sending email with:', { serviceId, templateId, publicKey });
    console.log('Form data:', formData);

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Success:', result.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsLoading(false);
      }, (error) => {
        console.log('Error:', error);
        setStatus('Failed to send message. Please try again.');
        setIsLoading(false);
      });
  };
  return (
    <div name='contact' className='w-full min-h-screen bg-[#1E90FF] px-4 py-16'>
      <div className='max-w-[1000px] mx-auto'>
        <div className='text-center pb-12'>
          <p className='text-2xl md:text-4xl font-bold inline border-b-4' style={{ borderColor: accentColor }}>Contact</p>
          <p className='text-white py-6 font-medium text-base md:text-lg'>Let's collaborate on something great</p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {/* Simple Contact Form */}
          <div className='flex flex-col w-full bg-white/5 p-6 md:p-8 rounded-2xl'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
              <input 
                className='bg-[#ccd6f6] p-3 text-gray-800 rounded-md mb-4' 
                type="text" 
                name="name"
                placeholder='Name' 
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                className='bg-[#ccd6f6] p-3 text-gray-800 rounded-md mb-4' 
                type="email" 
                name="email"
                placeholder='Email' 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea 
                className='bg-[#ccd6f6] p-3 text-gray-800 rounded-md mb-6' 
                rows="4" 
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button 
                type="submit"
                disabled={isLoading}
                className={`text-white border-2 px-6 py-3 hover:scale-105 duration-300 font-bold ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ borderColor: accentColor }}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col justify-center text-white space-y-6 md:space-y-8'>
            <div className='text-center md:text-left'>
              <h3 className='text-xl md:text-2xl font-bold mb-4 text-white'>Contact Information</h3>
              <p className='text-white text-sm md:text-base'>Reach out directly if you have a specific project in mind!</p>
            </div>

            <div className='flex flex-col space-y-4 md:space-y-6'>
              <div className='flex items-center justify-center md:justify-start'>
                <div className='p-3 md:p-4 rounded-full bg-white/5 mr-4'>
                  <HiOutlinePhone size={20} style={{ color: accentColor }} />
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-white text-xs md:text-sm uppercase'>Phone</p>
                  <p className='text-base md:text-lg font-medium text-white'>+251 926 773 037</p>
                </div>
              </div>
              <div className='flex items-center justify-center md:justify-start'>
                <div className='p-3 md:p-4 rounded-full bg-white/5 mr-4'>
                  <HiOutlineMail size={20} style={{ color: accentColor }} />
                </div>
                <div className='text-center md:text-left'>
                  <p className='text-white text-xs md:text-sm uppercase'>Email</p>
                  <p className='text-sm md:text-lg font-medium text-white break-all'>yohanesmitiku2124@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='pt-6 md:pt-8 border-t border-white/10'>
              <p className='text-white text-sm uppercase mb-4 text-center md:text-left'>Connect with me</p>
              <div className='grid grid-cols-2 gap-3 md:gap-4'>
                <a href='https://t.me/JohnCs' target='_blank' rel='noopener noreferrer'
                   className='flex items-center space-x-2 text-white hover:scale-105 duration-300 justify-center md:justify-start'>
                  <FaTelegram size={20} style={{ color: accentColor }} />
                  <span className='text-sm md:text-base'>Telegram</span>
                </a>
                <a href='https://github.com/yohanes2124' target='_blank' rel='noopener noreferrer'
                   className='flex items-center space-x-2 text-white hover:scale-105 duration-300 justify-center md:justify-start'>
                  <FaGithub size={20} style={{ color: accentColor }} />
                  <span className='text-sm md:text-base'>GitHub</span>
                </a>
                <a href='https://facebook.com/john.mite' target='_blank' rel='noopener noreferrer'
                   className='flex items-center space-x-2 text-white hover:scale-105 duration-300 justify-center md:justify-start'>
                  <FaFacebook size={20} style={{ color: accentColor }} />
                  <span className='text-sm md:text-base'>Facebook</span>
                </a>
                <a href='https://tiktok.com/@yohanes.mitiku' target='_blank' rel='noopener noreferrer'
                   className='flex items-center space-x-2 text-white hover:scale-105 duration-300 justify-center md:justify-start'>
                  <FaTiktok size={20} style={{ color: accentColor }} />
                  <span className='text-sm md:text-base'>TikTok</span>
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <Link to='home' smooth={true} duration={500} className='pt-6 md:pt-8 flex justify-center'>
              <div className='flex flex-col items-center cursor-pointer'>
                <HiChevronDoubleUp size={32} style={{ color: accentColor }} />
                <p className='text-xs uppercase mt-2' style={{ color: accentColor }}>Back to top</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;