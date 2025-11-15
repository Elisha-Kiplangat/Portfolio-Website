import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-100 backdrop-blur-md shadow-2xl py-3 md:px-20 font-serif z-50 border-b border-purple-100">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <img 
              src={logo}
              alt="logo" 
              className="relative w-12 h-12 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Elisha
            </h1>
            <p className="text-xs text-gray-500">Software Engineer</p>
          </div>
        </motion.div>

        <div className="hidden sm:flex space-x-2 font-bold">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="relative text-gray-700 hover:text-purple-600 px-4 py-2 rounded-full transition-all duration-300 group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
            </motion.a>
          ))}
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          {/* <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Hire Me
          </motion.button> */}
        </div>

        <div className="sm:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-purple-100 transition-colors duration-300"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md border-t border-purple-100 shadow-lg`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center font-bold font-serif py-4 space-y-2">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="block text-gray-700 py-3 px-6 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-600 rounded-lg transition-all duration-300 w-full text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          {/* <motion.button
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            Hire Me
          </motion.button> */}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
