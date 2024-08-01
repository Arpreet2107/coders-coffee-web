import React from 'react';
import {
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaPhone,
    FaTelegram,
    FaMapMarkedAlt
} from 'react-icons/fa'; 
import CreditCards from '../../assets/website/credit-cards.webp';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
        <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* COMPANY DETAILS SECTION */}
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}                
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Coders Cafe</h1>
                    <p className='text-sm max-w-[300px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere assumenda officia maxime rem. Dolorem, magni.
                    </p>
                    <div>
                        <p className='flex items-center gap-2 mt-2'>
                            <FaPhone />
                            +91 984XXXXXXX
                        </p>
                        <p className='flex items-center gap-2 mt-2'>
                            <FaMapMarkedAlt /> Pune, Maharashtra
                        </p>
                    </div>
                </motion.div>
                {/* FOOTER LINKS SECTION */}
                <motion.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.2,
                        duration: 0.6,
                    }}                
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {/* FIRST COLUMN SECTIONS */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        {/* SECOND COLUMN SECTION */}
                        <div>
                            <ul className='space-y-2'>
                                <li>Services</li>
                                <li>FAQ</li>
                                <li>Blog</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
                {/* SOCIAL LINKS SECTION */}
                <motion.div
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}                
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-105 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-105 duration-300'/>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold mb-2'>Payment Methods</h1>
                        <img src={CreditCards} alt="credit-cards" className='w-[80%]' />
                    </div>
                </motion.div>
            </div>
            {/* COPYRIGHT SECTION */}
            <p className='text-white text-center mt-8 pt-8 border-t-2'>
                Copyright &copy; Company Name. All rights reserved.
            </p>
        </div>
    </div>
  );
};

export default Footer;
