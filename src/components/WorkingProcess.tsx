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
      <div className="relative z-10 text-white p-6 md:p-12">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <button className="btn btn-outline border-4 border-blue-300 text-blue-300 rounded-full hover:bg-blue-500 hover:text-blue-300 flex items-center justify-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faPlay} className="font-bold text-2xl" />
            </button>
          </div>
          <h2 className="text-4xl font-bold mb-4">Working Process</h2>
          <p className="text-lg max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
