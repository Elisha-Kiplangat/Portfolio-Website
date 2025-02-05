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
    <section id='Home' className="relative flex items-center justify-center mt-14 py-16 px-4 md:px-20 font-serif overflow-hidden bg-purple-100">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="text-yellow-400"
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
      
      <div className="container mx-auto flex flex-col md:flex-row items-center z-10">
        {details.map((detail, index) => (
          <div key={index} className='w-full flex flex-col md:flex-row items-center mt-4 text-black'>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className='text-2xl sm:text-4xl md:text-4xl font-bold mb-16'>
                <span className="text-black">{detail.salutation}</span>, 
                <span className="text-purple-600">
                  <Typewriter words={[detail.name]} loop={false} cursor={false} typeSpeed={100} delaySpeed={300} />
                </span>
              </h1>
              {detail.description.map((desc, descIndex) => (
                <p key={descIndex} className="mt-4 text-gray-700 text-lg">
                  {desc}
                </p>
              ))}
            </div>
            
            <motion.div 
              className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={detail.image} alt="Hero Image" className="w-full max-w-sm rounded-lg shadow-lg" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
