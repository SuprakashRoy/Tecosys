import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-indigo-400 text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: '🌐',
      title: 'Multilingual Model Support',
      description: 'Our AI chatbots excel in multilingual communication, effortlessly interacting in various languages to ensure global inclusivity.'
    },
    {
      icon: '🎨',
      title: 'Image & Video Generation',
      description: 'Transforming text into stunning visuals, our AI chatbots generate high-quality images and videos, bringing your ideas to life.'
    },
    {
      icon: '👨‍💻',
      title: 'Code Generation & Debugging',
      description: 'Effortlessly generate and debug code with our AI, streamlining development processes and enhancing productivity.'
    },
    {
      icon: '🤖',
      title: 'User-Friendly Environment',
      description: 'Enjoy seamless interactions with our intuitive, user-friendly environment designed for maximum productivity and ease of use.'
    },
    {
      icon: '🩺',
      title: 'AI Engineer, AI Doctor, AI Researcher',
      description: 'Pioneering AI solutions, enhancing healthcare with intelligent diagnostics, and driving groundbreaking research for innovative discoveries.'
    },
    {
      icon: '🧠',
      title: 'Cognitive Task Automation',
      description: 'Revolutionize your workflow with AI-powered cognitive task automation, freeing up time for high-value activities.'
    }
  ];

  return (
    <div className="-mt-16 bg-gradient-to-b from-[#521880] via-purple-950 to-black text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Unparalleled Features for Enhanced Interaction
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how our advanced AI technologies are revolutionizing communication and efficiency.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
    </div>
  );
};

export default FeaturesSection;
