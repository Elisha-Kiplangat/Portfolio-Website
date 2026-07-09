import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Profile from '../assets/Profile.jpg';

interface Tdetails {
    salutation: string;
    name: string;
    description: string[];
    image: string;
}

const details: Tdetails[] = [
  {
    salutation: "Hello 👋",
    name: "I'm Elisha",
    description: [
      "A Software Engineer passionate about developing software applications that solve real-world problems while meeting users' expectations.",
      "I thrive in collaborative environments to innovate and build impactful solutions while continuously exploring new technologies."
    ],
    image: Profile
  }
];

const Hero = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 48 }, () => ({
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 2,
      glow: Math.random() > 0.7,
    }));
  }, []);


  return (
    <section id='Home' className="relative flex items-center justify-center mt-10 py-2 px-4 md:px-20 font-serif overflow-hidden min-h-screen bg-[var(--bg)]">
      
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                backgroundColor: 'var(--star-color)',
                boxShadow: star.glow ? '0 0 8px rgba(255, 255, 255, 0.85)' : 'none',
              }}
              animate={{ opacity: [0.2, 1, 0.35], scale: [1, 1.35, 1] }}
              transition={{ repeat: Infinity, duration: star.duration, delay: star.delay }}
            >
            </motion.div>
          ))}

        </div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center z-10 relative">
        {details.map((detail, index) => (
          <div key={index} className='w-full flex flex-col md:flex-row items-center gap-12 text-[var(--text)]'>
            
            <motion.div 
              className="w-full md:w-2/3 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="theme-surface backdrop-blur-sm rounded-3xl p-8 shadow-2xl border transform hover:scale-105">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight'>
                  <span className="text-[var(--text)]">{detail.salutation}</span>, 
                  &nbsp;
                  <span className="text-[var(--accent)]">
                    <Typewriter words={[detail.name]} loop={false} cursor={false} typeSpeed={100} delaySpeed={300} />
                  </span>
                </h1>
                
                <div className="space-y-6">
                  {detail.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      className="theme-surface backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: descIndex * 0.3 + 0.5, duration: 0.6 }}
                    >
                      <p className="text-[var(--muted)] leading-relaxed">
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 ml-2 flex justify-center md:justify-start items-center space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex space-x-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  
                  <motion.button
                    className="bg-[var(--accent)] text-white font-medium py-2 px-5 rounded-full shadow-lg hover:bg-[var(--accent-2)] hover:shadow-xl hover:brightness-110 hover:-translate-y-0.5 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer relative z-30 pointer-events-auto"
                    // style={{ backgroundColor: 'var(--accent)'}}
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/Resume.pdf';
                      link.download = 'Elisha_Kiplangat_Resume.pdf';
                      link.click();
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>Resume</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            
            
              <div className="relative group">
    
                
                <div className="relative theme-surface p-3 rounded-3xl shadow-2xl transform group-hover:scale-105">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={detail.image} 
                      alt="Hero Image" 
                      className="w-full max-w-sm object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-[var(--accent-soft)]"></div>
                  </div>
                </div>
                
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
