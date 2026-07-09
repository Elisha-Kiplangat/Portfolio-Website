
import SetupImage from '../assets/Setup.jpg';

const aboutDetails = [
  {
    sectionTitle: "About Me",
    description: "I pursued Bachelor of Science in Software Engineering from Kirinyaga University.",
    subTitle: "Developing With a Passion While Exploring The New Technologies.",
    paragraphs: [
      "I am a passionate Software Developer with a strong foundation in software engineering principles and a passion for developing innovative software solutions.",
      "My journey in technology and software development has allowed me to gain expertise in React, Node.js, PostgreSQL, TypeScript, and Azure Cloud.",
      "With a keen eye for detail and a focus on user experience, I strive to create applications that are not only functional but also intuitive. I actively engage with the tech community, sharing knowledge, collaborating on projects and fostering innovation through teamwork."
    ],
    image: SetupImage
  }
];

const About = () => {
  return (
    <section id='About' className="relative bg-[var(--bg)] py-10 px-4 md:px-20 font-serif overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-200 rounded-full opacity-20 translate-x-24 translate-y-24"></div> */}
      
      <div className="container mx-auto relative z-10">
        {aboutDetails.map((detail, index) => (
          <div key={index} className="max-w-6xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-block">
                <h2 className="text-3xl font-bold bg-[var(--accent)] bg-clip-text text-transparent mb-4">
                  {detail.sectionTitle}
                </h2>
                <div className="h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] w-28 mx-auto mb-4 rounded-full"></div>
              </div>
              <p className="text-[var(--text)] max-w-2xl mx-auto leading-relaxed">
                {detail.description}
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="theme-surface backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[--accent-soft] transform hover:scale-105">
                <h3 className="text-2xl font-bold text-[var(--text)] mb-4 leading-tight">
                  {detail.subTitle}
                </h3>
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent w-48 mx-auto"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              
              <div className="space-y-4">
                <div className="theme-surface backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-[--accent-soft] transform hover:scale-105">
                  {detail.paragraphs.slice(0, 1).map((para, id) => (
                    <p key={id} className="text-[var(--text)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {detail.paragraphs.slice(1).map((para, id) => (
                    <div key={id} className="theme-surface backdrop-blur-sm rounded-xl p-4 shadow-lg border border-[--accent-soft] transform hover:scale-105">
                      <p className="text-[var(--text)]   leading-relaxed">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative theme-surface backdrop-blur-sm p-2 rounded-2xl shadow-2xl transform group-hover:scale-105">
                    <div className="relative overflow-hidden rounded-xl">
                      <img 
                        src={detail.image}
                        alt="Profile" 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                    </div>
                  </div>
                  {/* Decorative elements around image */}
                  {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400 rounded-full opacity-60"></div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
