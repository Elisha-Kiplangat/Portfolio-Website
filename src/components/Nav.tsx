import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md bg-purple-300 py-4 px-4 md:px-20 font-serif">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="rounded-full bg-red-400 w-8 h-8 flex items-center justify-center">
            
          </div>
        </div>
        <div className="hidden sm:flex space-x-4 font-bold">
          <a href="#home" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            About
          </a>
          <a href="#portfolio" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-700 hover:bg-purple-400 p-2 rounded">
            Contact
          </a>
        </div>
        <div className="hidden sm:flex space-x-4">
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
            Hire Me
          </button>
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
        <div className="sm:hidden flex flex-col items-center">
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
          <button className="block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mx-4 my-2">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
