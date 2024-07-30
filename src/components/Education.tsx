
const educationDetails = [
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "Kirinyaga University",
    description: "Graduated with honors, focusing on software development, algorithms, and systems engineering.",
    duration: "2016 - 2020"
  },
  {
    title: "Diploma in Computer Science",
    institution: "Nairobi Institute of Technology",
    description: "Specialized in computer programming, database management, and web development.",
    duration: "2014 - 2016"
  }
];

const Education = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="border-b-2 border-purple-500 w-32 mx-auto mb-8"></div>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            {educationDetails.map((edu, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-2">{edu.title}</h3>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <p className="text-gray-600 mb-4">{edu.description}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
