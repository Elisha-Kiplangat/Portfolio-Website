
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const services = [
  {
    icon: faCode,
    title: 'Vehicle Rental Management Application',
    description: 'This is an online platform which allows users to rent/book a vehicle for their travels efficiently. It entails Payment service with stripe for customers to pay. The user can book a vehicle, on the other hand, the admin manages the all services',
  },
  {
    icon: faCloud,
    title: 'Restaurant API',
    description: '',
  },
  {
    icon: faPalette,
    title: 'Book Repository',
    description: 'A fullstack application for managing books database',
  },
  {
    icon: faPalette,
    title: 'Todo App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
  },
];

const Services = () => {
  return (
    <section className="bg-purple-50 py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"> Projects</h2>
        <p className="text-gray-600 mb-8"><b>Check it out!</b> Some of the the Outstanding projects i have been working on with the Skills and Experience i have in Software Development</p>
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
              <div className="border-b-2 border-purple-500 mx-auto mb-4"></div>
              <div className="flex justify-around">
                <button className="btn btn-outline border-2 btn-purple-500 text-purple-500 py-2 px-3 rounded-full hover:bg-purple-700 flex items-center">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-purple-800 hover:text-gray-900 transition-colors" />
                  {/* <FontAwesomeIcon icon={faArrowRight} className="font-bold" /> */}
                </button>
                <button className='btn btn-outline border-2 btn-purple-500 text-purple-500 py-2 px-2 rounded-full hover:bg-purple-700 flex items-center'>
                  <p className="text-purple-800 hover:text-gray-900 transition-colors">Link</p>
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
