import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import logo from '../assets/Logo.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    root.classList.add('theme-switching');
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        root.classList.remove('theme-switching');
      });
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full theme-surface backdrop-blur-md shadow-2xl py-3 md:px-20 font-serif z-50 border-b">
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
            <p className="text-xs text-[var(--muted)]">Software Engineer</p>
          </div>
        </motion.div>

        <div className="hidden sm:flex space-x-2 font-bold">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="relative text-[var(--muted)] hover:text-[var(--accent)] px-4 py-2 rounded-full group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-20"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full"></div>
            </motion.a>
          ))}
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <motion.button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] hover:bg-[var(--accent-soft)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.button>
        </div>

        <div className="sm:hidden flex items-center">
          <button
            type="button"
            onClick={toggleTheme}
            className="mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] hover:bg-[var(--accent-soft)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-[var(--muted)] focus:outline-none p-2 rounded-lg hover:bg-[var(--accent-soft)]"
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
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'} theme-surface backdrop-blur-md border-t shadow-lg`}
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
              className="block text-[var(--muted)] py-3 px-6 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] rounded-lg w-full text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
