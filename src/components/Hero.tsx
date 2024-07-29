import Profile from '../assets/Profile.jpg'

const details = [
  {
    name: "I'm Elisha Kiplangat",
    title: "A Software Engineer",
    description: "I do web designing, development, UI/UX designing, and cloud computing services.",
    buttonText: "Learn more",
    image: Profile
  }
];

const Hero = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {details.map((detail, index) => (
            <div className='w-full flex flex-col md:flex-row items-center'>
          <div key={index} className="w-full md:w-2/3">
            <h1 className="text-5xl font-bold">{detail.name}</h1>
            <h3 className="text-xl font-bold my-7">{detail.title}</h3>
            <p className="mt-4 text-gray-600">{detail.description}</p>
            <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
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
