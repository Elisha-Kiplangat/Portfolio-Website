import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-200 shadow-md py-4 md:px-20 font-serif">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full bg-red-400 w-8 h-8 flex items-center justify-center">
            
          </div>
        </div>
        <div className="hidden sm:flex space-x-4 font-bold">
          <a href="/Hero" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Home
          </a>
          <a href="/About" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="/Skills" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Portfolio
          </a>
          <a href="/Contact" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
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
          <a href="#home" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Home
          </a>
          <a href="#about" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="#portfolio" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Portfolio
          </a>
          <a href="#contact" className="block text-gray-700 py-2 px-4 hover:bg-purple-400 p-2 rounded">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
