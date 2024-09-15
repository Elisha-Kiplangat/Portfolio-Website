
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons';

const workExperiences = [
  {
    title: "Software Developer",
    duration: "2024-2024",
    description: "Developed web applications using modern frameworks and libraries. Collaborated with cross-functional teams to deliver high-quality products.",
    progressLabel: "Software Developer",
    progress: 80,
    icon: faCode,
  },
  {
    title: "Web Designer",
    duration: "2022-2023",
    description: "Designed user-friendly web interfaces and improved user experience through innovative design solutions working with Wordpress.",
    progressLabel: "Web Designer",
    progress: 70,
    icon: faPaintBrush,
  },
  {
    title: "UI/UX Designer",
    duration: "2024",
    description: "Created intuitive and engaging user interfaces for various web applications and mobile apps using Figma.",
    progressLabel: "UI/UX Designer",
    progress: 90,
    icon: faUser,
  },
  {
    title: "Graphic Designer",
    duration: "2023",
    description: "Developed visual content for marketing and branding purposes, including logos, brochures, and social media graphics.",
    progressLabel: "Graphic Designer",
    progress: 60,
    icon: faLaptop,
  },
];

const Experience = () => {
  return (
    <section id='Portfolio' className="bg-white py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-gray-600 mb-8">A showcase of the roles and projects that have shaped my career in software development.</p>
          <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workExperiences.map((experience, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
              <FontAwesomeIcon icon={experience.icon} className="text-purple-600 text-2xl mb-4" />
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-purple-600 mb-4">{experience.duration}</p>
              <p className="text-gray-600 mb-4">{experience.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-purple-600">{experience.progressLabel}</span>
                <span className="text-sm text-gray-500">{experience.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ width: `${experience.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
