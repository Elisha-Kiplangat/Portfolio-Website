import { useState } from 'react';
import logo from '../assets/Logo.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-200 shadow-md py-4 md:px-20 font-serif z-50">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={logo}
            alt="logo" 
            className="w-10 h-10 rounded-lg"
            />
        </div>
        <div className="hidden sm:flex space-x-4 font-bold">
          <a href="#Home" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Home
          </a>
          <a href="#About" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="#Portfolio" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Portfolio
          </a>
          <a href="#Contact" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Contact
          </a>
        </div>
        <div className="hidden sm:flex space-x-4">
          
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center font-bold font-serif">
          <a href="#Home" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Home
          </a>
          <a href="#About" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="#Portfolio" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Portfolio
          </a>
          <a href="#Contact" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
