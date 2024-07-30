
const skills = [
  { name: 'TypeScript', logo: 'https://pin.it/Mt8iVYlej' },
  { name: 'JavaScript', logo: 'https://pin.it/Mt8iVYlej' },
  { name: 'PHP', logo: 'https://pin.it/3YGZxzjWy' },
  { name: 'Node', logo: 'https://pin.it/3YGZxzjWy' },
  { name: 'Hono', logo: 'https://example.com/path/to/hono-logo.png' },
  { name: 'Drizzle ORM', logo: 'https://example.com/path/to/drizzle-orm-logo.png' },
  { name: 'React', logo: 'https://pin.it/2DkmBhm1R' },
  { name: 'Tailwind CSS', logo: 'https://example.com/path/to/tailwind-logo.png' },
  { name: 'Postgres', logo: 'https://pin.it/3YGZxzjWy' },
  { name: 'Azure', logo: 'https://example.com/path/to/azure-logo.png' },
];

const Skills = () => {
  return (
    <section className="bg-blue-100 py-12 px-4 md:px-12 mt-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="border-b-2 border-purple-500 w-32 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 m-4 w-32 md:w-48 text-center">
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
