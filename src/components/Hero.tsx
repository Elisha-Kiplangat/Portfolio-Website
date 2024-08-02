import Profile from '../assets/Profile.jpg'

interface Tdetails {
    salutation: string;
    name: string;
    title: string;
    description: string;
    buttonText: string;
    image: string;
}

const details: Tdetails[] = [
  {
    salutation:"Hello 👋",
    name: "I'm Elisha Kiplangat",
    title: "A Software Engineer",
    description: "Welcome to my Portfolio. I do web designing, development, UI/UX designing, and cloud computing services.",
    buttonText: "Learn more",
    image: Profile
  }
];

const Hero = () => {
  return (
    <section className="bg-purple-100 py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {details.map((detail, index) => (
            <div className='w-full flex flex-col md:flex-row items-center'>
          <div key={index} className="w-full md:w-2/3">
            <h1 className='text-5xl font-bold mb-4 sm:text-xl mb-0 flex justify-center'>{detail.salutation}</h1><br/>
            <h2 className="text-3xl font-bold sm:text-3xl flex justify-center">{detail.name}</h2>
            <h3 className="text-xl text-purple-900 w-fit font-bold my-7 p-1 outline rounded-lg sm:flex justify-center">{detail.title}</h3>
            <p className="mt-4 text-gray-600">{detail.description}</p>
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
