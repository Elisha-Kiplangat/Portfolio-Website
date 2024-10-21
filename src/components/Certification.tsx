import teach2give from '../assets/teach2GiveLogo.jpeg'
import FreeCodeCamp from '../assets/FreeCodeCamp.jpeg'

const certifications = [
  {
    title: "Software Development",
    organization: "Teach2Give",
    logo: teach2give,
    date: "July 2024",
    link: ""
  },
  {
    title: "Foundational C# with Microsoft",
    organization: "FreeCodeCamp",
    logo: FreeCodeCamp,
    date: "October 2024",
    link: "https://freecodecamp.org/certification/fcc0d6b80ec-0928-4e5c-ac07-8655d6868be4/foundational-c-sharp-with-microsoft"
  }
];

const Certification = () => {
  return (
    <section className="bg-gray-200 py-16 px-4 md:px-20 font-serif">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-800">Certifications</h2>
    <p className="text-lg text-gray-600 mb-8">Below are some of the certifications I've earned, showcasing my skills and expertise.</p>
    <div className="border-b-2 border-purple-500 w-16 mx-auto mb-12"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="bg-blue-200 shadow-md hover:shadow-xl transform transition-transform duration-300 rounded-lg p-6 group"
        >
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
            {cert.title}
          </h3>
          <div className='flex flex-row gap-8 justify-center'>
            <div className='h-10 w-10'>
              <img src= {cert.logo} alt="logo" />
            </div>
            <div>
              <p className="text-md text-gray-800">{cert.organization}</p>
              <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
          
            </div>
          </div>
          <div className="flex justify-center">
            
            {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn border-2 border-purple-500 text-purple-500 py-2 px-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out">
                      Verify
                    </button>
                  </a>
                ) : (
                  <button className="btn border-2 border-purple-500 text-purple-500 py-2 px-4 rounded-full opacity-50 cursor-not-allowed" disabled>
                    Verify
                  </button>
                )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Certification;
