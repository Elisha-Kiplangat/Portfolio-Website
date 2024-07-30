
import SetupImage from '../assets/Setup.jpg';

const aboutDetails = [
  {
    sectionTitle: "About Me",
    description: "I pursued Bachelor of Science in Software Engineering from Kirinyaga University.",
    subTitle: "Developing With a Passion While Exploring The New Technologies.",
    paragraphs: [
      "I am a dedicated software engineer with a strong foundation in computer science principles and a passion for developing innovative software solutions. My expertise lies in web development, UI/UX design, and cloud computing services.",
      "Throughout my career, I have consistently demonstrated the ability to solve complex problems, work effectively in team settings, and deliver high-quality software products. I am committed to continuous learning and staying up-to-date with the latest industry trends and technologies.",
      "With a keen eye for detail and a focus on user experience, I strive to create applications that are not only functional but also intuitive and visually appealing."
    ],
    image: SetupImage
  }
];

const About = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto">
        {aboutDetails.map((detail, index) => (
          <div key={index}>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">{detail.sectionTitle}</h2>
              <p className="text-gray-600 mb-8">{detail.description}</p>
              <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
            </div>
            <div>
              <h3 className="text-2xl text-center font-bold mb-4">{detail.subTitle}</h3>
              <div className="border-b-2 border-purple-500 w-48 ml-48 mb-8"></div>
              {detail.paragraphs.slice(0, 1).map((para, idx) => (
                <p key={idx} className="text-gray-600 mb-8">{para}</p>
              ))}
              <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 mb-8">Contact Me</button>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pl-8">
                {detail.paragraphs.slice(1).map((para, idx) => (
                  <p key={idx} className="text-gray-600 mb-4">{para}</p>
                ))}
              </div>
              <div className="w-full md:w-1/2 h-96 mb-8 md:mb-0">
                <img 
                  src={detail.image}
                  alt="Profile" 
                  className="w-4/5 h-96 float-right rounded-lg shadow-lg border-4 border-purple-500"
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
