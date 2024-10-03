import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import BackgroundImage from '../assets/BG-dark.jpg';

const WorkingProcess = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-center opacity-75 font-serif"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-4 sm:p-6 md:p-12">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Working Process</h2>
          <div className="mb-6">
            <button className="btn btn-outline border-4 border-blue-300 text-blue-300 rounded-full hover:bg-blue-500 hover:text-blue-300 flex items-center justify-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faPlay} className="font-bold text-2xl" />
            </button>
          </div>
          
          <p className=" sm:text-lg max-w-full sm:max-w-lg md:max-w-xl">
            My approach to every project is rooted in a clear understanding of the requirements and a commitment to delivering high-quality solutions. I focus on innovative design, efficient problem-solving, and continuous improvement to produce results that not only meet expectations but exceed them.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
