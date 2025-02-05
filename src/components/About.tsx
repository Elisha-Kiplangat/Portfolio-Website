
import SetupImage from '../assets/Setup.jpg';

const aboutDetails = [
  {
    sectionTitle: "About Me",
    description: "I pursued Bachelor of Science in Software Engineering from Kirinyaga University.",
    subTitle: "Developing With a Passion While Exploring The New Technologies.",
    paragraphs: [
      "I am a passionate software engineer with a strong foundation in software engineering principles and a passion for developing innovative software solutions.",
      "My journey in technology and software development has allowed me to gain expertise in React, Node.js, PostgreSQL, TypeScript, and Azure Cloud.",
      "With a keen eye for detail and a focus on user experience, I strive to create applications that are not only functional but also intuitive. I actively engage with the tech community, sharing knowledge, collaborating on projects and fostering innovation through teamwork."
    ],
    image: SetupImage
  }
];

const About = () => {
  return (
    <section id='About' className="bg-white py-12 px-4 md:px-20 font-serif">
      <div className="container">
        {aboutDetails.map((detail, index) => (
          <div key={index}>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{detail.sectionTitle}</h2>
              <p className="text-gray-600 mb-8">{detail.description}</p>
              <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
            </div>
            <div>
              <h3 className="text-2xl text-center font-bold mb-4">{detail.subTitle}</h3>
              <div className="border-b-2 border-purple-500 w-48 lg:ml-48 md:ml-5 sm:ml-0 mb-8"></div>
              
              {/* <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mb-8">Contact Me</button> */}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/2 md:pl-0">
              {detail.paragraphs.slice(0, 1).map((para, id) => (
                <p key={id} className="text-gray-600 mb-8">{para}</p>
              ))}
                {detail.paragraphs.slice(1).map((para, id) => (
                  <p key={id} className="text-gray-600 mb-4">{para}</p>
                ))}
              </div>
              <div className="flex w-full sm:w-3/4 md:w-1/3 lg:w-1/4 aspect-w-4 aspect-h-3 mb-8 md:mb-0 border-8 rounded-lg border-blue-400 overflow-hidden mx-auto">
                <img 
                  src={detail.image}
                  alt="Profile" 
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
