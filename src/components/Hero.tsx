import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
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
  return (
    <section id='Home' className="relative flex items-center justify-center mt-10 py-2 px-4 md:px-20 font-serif overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 min-h-screen">
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-15 animate-bounce"></div>
      
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="text-yellow-400 pointer-events-none"
              style={{
                fontSize: `${Math.random() * 1 + 0.5}rem`,
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
              }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
            >
              ✦
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center z-10 relative">
        {details.map((detail, index) => (
          <div key={index} className='w-full flex flex-col md:flex-row items-center gap-12 text-black'>
            
            <motion.div 
              className="w-full md:w-2/3 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-100/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100/50 transform hover:scale-105 transition-all duration-300">
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight'>
                  <span className="text-gray-800">{detail.salutation}</span>, 
                  &nbsp;
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    <Typewriter words={[detail.name]} loop={false} cursor={false} typeSpeed={100} delaySpeed={300} />
                  </span>
                </h1>
                
                <div className="space-y-6">
                  {detail.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      className="bg-blue-50/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: descIndex * 0.3 + 0.5, duration: 0.6 }}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 flex justify-center md:justify-start items-center space-x-6"
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
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium py-2 px-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm cursor-pointer relative z-30"
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
            
            <motion.div 
              className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative bg-purple-200 p-3 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={detail.image} 
                      alt="Hero Image" 
                      className="w-full max-w-sm object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                />
                
                {/* Orbiting elements */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"
                  animate={{ 
                    rotate: 360,
                    x: [30, -30, 30],
                    y: [0, -20, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
