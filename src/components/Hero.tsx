import Profile from '../assets/Profile.jpg'

interface Tdetails {
    salutation: string;
    name: string;
    title: string;
    description: string[];
    buttonText: string;
    image: string;
}

const details: Tdetails[] = [
  {
    salutation:"Hello 👋",
    name: "I'm Elisha Kiplangat",
    title: "A Software Engineer",
    description: [
    "Welcome to my portfolio! I specialize in developing robust applications, crafting engaging software designs, designing intuitive UI/UX, and leveraging cloud technologies to deliver innovative solutions.",
    "A fullstack software developer, passionate about building both frontend and backend systems, ensuring seamless integration between them. I work with a range of technologies to create scalable, efficient, and user-friendly web applications."
    ],
    buttonText: "Learn more",
    image: Profile
  }
];

const Hero = () => {
  
  return (
    <section id='Home' className="bg-purple-100 mt-14 py-5 px-4 md:px-20 font-serif">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {details.map((detail, index) => (
            <div className='w-full flex flex-col md:flex-row items-center mt-4'>
          <div key={index} className="w-full md:w-2/3">
            <h1 className='text-3xl sm:text-4xl md:text-4xl font-bold mb-1 mb-0 flex justify-center'>{detail.salutation}</h1><br/>
            <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold flex justify-center">{detail.name}</h2>
            <p className='flex justify-center'><h3 className="sm:text-2xl md:text-2xl lg:text-xl text-purple-900 w-fit font-bold my-7 p-1 outline rounded-lg">{detail.title}</h3></p>
            {detail.description.map((desc, descIndex) => (
            <p key={descIndex} className="mt-4 mr-3 text-gray-700">
              {desc}
            </p>
            ))}
            <button className="mt-10 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                
                {detail.buttonText}
            </button>
          </div>
          
          
          <div key={index} className="w-full md:w-1/2 mt-4 md:mt-0">
          <img 
            src={detail.image}
            alt="Hero Image" 
            className="w-full h-100 rounded-lg shadow-lg"
            />
          </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
