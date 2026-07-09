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
    <section className="bg-[var(--bg)] py-16 px-4 md:px-20 font-serif">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6 text-[var(--accent)]">Certifications</h2>
    <p className="text-lg text-[var(--muted)] mb-8">Below are some of the certifications I've earned, showcasing my skills and expertise.</p>
    <div className="border-b-2 border-[var(--accent-2)] w-16 mx-auto mb-12"></div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {certifications.map((cert, index) => (
        <div 
          key={index} 
          className="bg-[var(--surface)] shadow-md hover:shadow-xl transform rounded-lg p-6 group"
        >
          <h3 className="text-2xl font-semibold mb-3 text-[var(--text)] group-hover:text-[var(--accent)]">
            {cert.title}
          </h3>
          <div className='flex flex-row gap-8 justify-center'>
            <div className='h-10 w-10'>
              <img src= {cert.logo} alt="logo" />
            </div>
            <div>
              <p className="text-md text-[var(--text)]">{cert.organization}</p>
              <p className="text-sm text-[var(--muted)] mb-4">{cert.date}</p>
          
            </div>
          </div>
          <div className="flex justify-center">
            
            {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn border-2 border-[var(--accent-2)] text-[var(--accent)] py-2 px-4 rounded-full hover:bg-[var(--accent)] hover:text-white">
                      Verify
                    </button>
                  </a>
                ) : (
                  <button className="btn border-2 border-[var(--accent)] text-[var(--text)] py-2 px-4 rounded-full opacity-50 cursor-not-allowed" disabled>
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
