
import Profile from '../assets/Profile.jpg'

const Hero= () => {
  return (
    <section className="bg-white py-12 py-4 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold">I'm Elisha Kiplangat</h1>
          <h3 className="text-xl font-bold my-7">A Software Engineer</h3>
          <p className="mt-4 text-gray-600">
            I do web designing, development, UI/UX designing, and cloud computing services.
          </p>
          <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
            Learn more
          </button>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <img 
            src={Profile}
            alt="Hero Image" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
