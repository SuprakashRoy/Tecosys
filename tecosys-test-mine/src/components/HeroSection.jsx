import React from 'react';
import { motion } from 'framer-motion';
import bot from '../assets/hero-img-2.png';

const HeroSection = () => {
  const linkedin = () => {
    window.location.href = 'https://www.linkedin.com/company/tecosysin/about/';
  };

  const whitepaper = () => {
    window.location.href = 'https://www.tecosys.in/down-whitepaper.html';
  };

  const chat = () =>{
    window.location.href = 'https://cerina.tecosys.in/'
  }

  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-purple-900 text-white min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore the Next Generation AI Models with Tecosys
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Tecosys is the hub of next-gen AI models. We're pioneering neuromorphic computing, 
              quantum machine learning, transformers, diffusion, and GAN technologies. 
              Discover our services and dive into the future of AI.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={linkedin}
                className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Follow Us
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={whitepaper}
                className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
              >
                Read Whitepaper
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={chat}
                className="px-6 py-3 bg-green-700 text-white rounded-full hover:bg-indigo-700 transition duration-300 flex items-center"
              >
                Start Chatting Free
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <motion.img
              src={bot}
              alt="AI Robot"
              className="w-full max-w-md mx-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-purple-500 rounded-full filter blur-3xl"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
