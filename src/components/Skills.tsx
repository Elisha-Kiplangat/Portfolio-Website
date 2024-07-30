import Azure from '../assets/Azure.jpg'; 
import Hono from '../assets/Hono.jpg';
import JS from '../assets/JS.jpg';
import Node from '../assets/Node.jpg';
import php from '../assets/php.jpg';
import Postgres from '../assets/Postgres.jpg';
import React from '../assets/React.jpg';
import Tailwind from '../assets/Tailwind.jpg';
import Ts from '../assets/Ts.jpg';
import Drizzle from '../assets/Drizzle.jpeg'

const skills = [
  { name: 'TypeScript', logo: Ts },
  { name: 'JavaScript', logo: JS },
  { name: 'PHP', logo: php },
  { name: 'Node', logo: Node },
  { name: 'Hono', logo: Hono },
  { name: 'Drizzle ORM', logo: Drizzle },
  { name: 'React', logo: React },
  { name: 'Tailwind CSS', logo: Tailwind },
  { name: 'Postgres', logo: Postgres },
  { name: 'Azure', logo: Azure },
];

const Skills = () => {
  return (
    <section className="bg-blue-100 py-12 px-4 md:px-12 mt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="border-b-2 border-purple-500 w-32 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 m-4 w-32 md:w-48 text-center transform transition-transform duration-300 hover:scale-105">
              <img 
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
