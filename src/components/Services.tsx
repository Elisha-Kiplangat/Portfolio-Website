
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faPalette, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: faCloud,
    title: 'Cloud Computing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
  {
    icon: faPalette,
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const Services = () => {
  return (
    <section className="bg-purple-50 py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What Services I'm Providing</h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-blue-100 shadow-md rounded-lg p-6 m-4 w-64 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 mx-auto mb-4 text-purple-600">
                <FontAwesomeIcon icon={service.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-center">
                <button className="btn btn-outline btn-purple-500 text-purple-500 py-2 px-4 rounded-full hover:bg-purple-700 flex items-center">
                  <FontAwesomeIcon icon={faArrowRight} className="font-bold" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
