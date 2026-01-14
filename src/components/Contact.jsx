import React, { useState } from 'react';
import { HiChevronDoubleUp, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaGithub, FaTelegram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Contact = ({ accentColor }) => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div name='contact' className='w-full min-h-screen bg-[#1E90FF] flex justify-center items-center p-4 relative overflow-hidden'>
        
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none'
            style={{ backgroundColor: accentColor }}></div>

        <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-12 relative z-10 pt-20'>
            
            <form onSubmit={handleSubmit} className='flex flex-col w-full bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4' style={{ borderColor: accentColor }}>Contact</p>
                    <p className='text-white py-4 font-medium'>Let's collaborate on something great</p>
                </div>

                {formStatus === 'success' && (
                    <div className='mb-4 p-4 bg-green-500/20 border border-green-500 rounded-md text-white'>
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}

                {formStatus === 'error' && (
                    <div className='mb-4 p-4 bg-red-500/20 border border-red-500 rounded-md text-white'>
                        Failed to send message. Please try again.
                    </div>
                )}

                <input className='bg-[#ccd6f6] p-3 text-gray-800 rounded-md outline-none focus:ring-2' type="text" placeholder='Name' name='name' required />
                <input className='my-4 p-3 bg-[#ccd6f6] text-gray-800 rounded-md outline-none focus:ring-2' type="email" placeholder='Email' name='email' required />
                <textarea className='bg-[#ccd6f6] p-3 text-gray-800 rounded-md outline-none focus:ring-2' name="message" rows="5" placeholder='Message' required></textarea>
                
                <button 
                  type='submit'
                  disabled={isSubmitting}
                  className='text-white border-2 px-6 py-3 mt-6 mr-auto transition-all font-bold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
                  style={{ borderColor: accentColor }}
                  onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = accentColor)}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <div className='flex flex-col justify-center text-white space-y-8'>
                <div>
                    <h3 className='text-2xl font-bold mb-4 text-white'>Contact Information</h3>
                    <p className='text-white'>Reach out directly if you have a specific project in mind!</p>
                </div>

                <div className='flex flex-col space-y-6'>
                    <div className='flex items-center group cursor-default'>
                        <div className='p-4 rounded-full bg-white/5 border border-white/10 mr-4'><HiOutlinePhone size={25} style={{ color: accentColor }} /></div>
                        <div>
                            <p className='text-white text-sm uppercase'>Phone</p>
                            <p className='text-lg font-medium text-white'>+251 926 773 037</p>
                        </div>
                    </div>
                    <div className='flex items-center group cursor-default'>
                        <div className='p-4 rounded-full bg-white/5 border border-white/10 mr-4'><HiOutlineMail size={25} style={{ color: accentColor }} /></div>
                        <div>
                            <p className='text-white text-sm uppercase'>Email</p>
                            <p className='text-lg font-medium text-white'>yohanesmitiku2124@gmail.com</p>
                        </div>
                    </div>
                </div>

                <Link to='home' smooth={true} duration={500} className='pt-8'>
                    <div className='flex flex-col items-start group cursor-pointer'>
                        <HiChevronDoubleUp size={40} style={{ color: accentColor }} className='animate-bounce' />
                        <p className='text-[10px] uppercase tracking-widest mt-2' style={{ color: accentColor }}>Back to top</p>
                    </div>
                </Link>

                {/* Social Links - Horizontal */}
                <div className='pt-8 border-t border-white/10'>
                    <p className='text-white text-sm uppercase mb-4'>Connect with me</p>
                    <div className='flex flex-wrap gap-4'>
                        <a 
                            href='https://t.me/JohnCs' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='flex items-center space-x-2 text-white hover:text-white transition-colors group'
                        >
                            <div className='p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors'>
                                <FaTelegram size={20} style={{ color: accentColor }} />
                            </div>
                            <span className='text-sm'>Telegram</span>
                        </a>
                        <a 
                            href='https://github.com/yohanes2124' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='flex items-center space-x-2 text-white hover:text-white transition-colors group'
                        >
                            <div className='p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors'>
                                <FaGithub size={20} style={{ color: accentColor }} />
                            </div>
                            <span className='text-sm'>GitHub</span>
                        </a>
                        <a 
                            href='https://facebook.com/john.mite' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='flex items-center space-x-2 text-white hover:text-white transition-colors group'
                        >
                            <div className='p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors'>
                                <FaFacebook size={20} style={{ color: accentColor }} />
                            </div>
                            <span className='text-sm'>Facebook</span>
                        </a>
                        <a 
                            href='https://tiktok.com/@yohanes.mitiku' 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className='flex items-center space-x-2 text-white hover:text-white transition-colors group'
                        >
                            <div className='p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors'>
                                <FaTiktok size={20} style={{ color: accentColor }} />
                            </div>
                            <span className='text-sm'>TikTok</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;