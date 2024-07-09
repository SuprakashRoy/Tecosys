import React, { useState } from 'react';
import logo from '../assets/logo-light.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const notify = () => toast("Email submitted");
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
        // toast("Wow so easy!");
      setError('');
      console.log(email)
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-blue-900 text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-purple-400">
          Let's get started and enjoy the power of AI
        </h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex justify-center items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="px-4 py-3 rounded-l-lg border-none text-black focus:outline-none w-full max-w-md"
            />
            <button
              type="submit"
              onClick={notify}
              className="px-6 py-3 bg-purple-500 text-white font-bold rounded-r-lg hover:bg-purple-600 transition-colors"
            >
              Get Started
            </button>
            <ToastContainer />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          <div>
            <h3 className="font-bold mb-4 text-2xl">Primary Pages</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-2xl">Utility Pages</h3>
            <ul className="space-y-2">
              <li><a href="#whitepaper" className="hover:text-purple-400 transition-colors">Whitepaper</a></li>
              <li><a href="#signup" className="hover:text-purple-400 transition-colors">Signup</a></li>
              <li><a href="#login" className="hover:text-purple-400 transition-colors">Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-2xl">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#facebook" className="hover:text-purple-400 transition-colors">Facebook</a></li>
              <li><a href="#twitter" className="hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="#instagram" className="hover:text-purple-400 transition-colors">Instagram</a></li>
              <li><a href="#linkedin" className="hover:text-purple-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <img src={logo} alt="Company Logo" className="mx-auto mb-4 w-24 h-24 rounded-full" />
          <p>&copy; 2024, All Rights Reserved by Tecosys</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
