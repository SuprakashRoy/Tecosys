import React, { useState } from 'react';
import logo from '../assets/logo-light.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="pl-5 flex items-center">
        <a href="https://www.tecosys.in">
          <img src={logo} alt="TECOSYS" className="h-8 w-8 mr-2 rounded-full" />
        </a>
        <a href="https://www.tecosys.in">
          <span className="font-bold">TECOSYS</span>
        </a>
      </div>
      <nav className="hidden md:flex space-x-8 font-bold">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="https://www.tecosys.in/about.html" className="hover:text-gray-300">About</a>
        <a href="https://www.tecosys.in/services.html" className="hover:text-gray-300">Products</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="https://www.tecosys.in/pricing.html" className="hover:text-gray-300">Pricing</a>
        <div className="relative group">
          <a href="#" className="hover:text-gray-300">Others ▼</a>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition duration-150 ease-in-out">
            <a href="https://www.tecosys.in/teams.html" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md">Teams</a>
            <a href="https://www.tecosys.in/faq-2.html" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md">FAQ</a>
          </div>
        </div>
      </nav>
      <div className="hidden md:flex items-center space-x-2 font-bold">
        <a href="https://www.tecosys.in/login.html" className="px-4 py-2 text-white hover:rounded-full hover:bg-gray-700">Login</a>
        <a href="https://www.tecosys.in/signup.html" className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">Sign up free</a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-black text-white text-center space-y-2 py-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="https://www.tecosys.in/about.html" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="https://www.tecosys.in/services.html" className="block px-4 py-2 hover:bg-gray-700">Products</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="https://www.tecosys.in/pricing.html" className="block px-4 py-2 hover:bg-gray-700">Pricing</a>
          <a href="https://www.tecosys.in/teams.html" className="block px-4 py-2 hover:bg-gray-700">Teams</a>
          <a href="https://www.tecosys.in/faq-2.html" className="block px-4 py-2 hover:bg-gray-700">FAQ</a>
          <a href="https://www.tecosys.in/login.html" className="w-full block px-4 py-2 text-white bg-gray-700 hover:bg-gray-600">Login</a>
          <a href="https://www.tecosys.in/signup.html" className="w-full block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Sign up free</a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
