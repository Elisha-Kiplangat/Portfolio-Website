import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHouse, faBook, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import VehicleRental from '../assets/VehicleRental.jpg'
// import BookRepo from '../assets/BookRepo.jpg'

const services = [
  {
    icon: faHouse,
    title: 'E-Housing Application',
    description: 'A comprehensive fullstack solution for managing housing applications, including property listing, application submission, tenant management, and M-pesa payment processing.',
    github: 'https://github.com/Elisha-Kiplangat/E-Housing',
    liveLink: 'https://e-housing.vercel.app',
    image: "/Ehousing.jpeg"
  },
  
  {
    icon: faCar,
    title: 'Vehicle Rental Management',
    description: 'A comprehensive fullstack solution for managing vehicle rentals, including vehicle listing, rental booking, customer management, and payment processing.',
    github: 'https://github.com/Elisha-Kiplangat/Vehicle-Rental-Management-System-Frontend',
    liveLink: 'https://vehicle-car.vercel.app/',
    image: "./VehicleRental.jpg"
  },
  
  {
    icon: faBook,
    title: 'Book Repository',
    description: 'A fullstack web application for managing a collection of books. Users can add, update, delete, and search for books, with features like user authentication and role-based access.',
    github: 'https://github.com/Elisha-Kiplangat/Book-repository-frontend',
    liveLink: 'https://book-repository-frontend.vercel.app/',
    image: "/BookRepo.jpg"
  },
  {
    icon: faListCheck,
    title: 'Task Management',
    description: 'A comprehensive task management application that helps users organize and prioritize their tasks effectively.',
    github: 'https://github.com/Elisha-Kiplangat/Task-Management',
    liveLink: 'https://task-intelli.vercel.app/',
    image: "/TaskMngt.jpeg"
  },
];

const Services = () => {
  return (
    <section className="bg-purple-100 py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto text-center">
        <h2 className="text-black text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600 mb-8">
          <b>Check it out!</b> Some of the outstanding projects I have been working on with the skills and experience I have in Software Development
        </p>
        <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white shadow-2xl rounded-2xl overflow-hidden w-80 transform transition-all duration-500 hover:scale-100 hover:shadow-3xl hover:-translate-y-2 flex flex-col justify-between border border-gray-200"
            >
              <div className="relative">
                <div className='flex items-center space-x-4 p-6 pb-4 relative z-20'> 
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-100 transition-transform duration-300">
                    <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300">{service.title}</h3>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-500 to-indigo-600 w-full mb-6 transition-all duration-300"></div>
                
                <div className="relative overflow-hidden rounded-lg mx-6 mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-600 mb-6 px-6 leading-relaxed transition-colors duration-300">{service.description}</p>
              </div>
              
              <div className='px-6 pb-6'>
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full mb-6 transition-all duration-300"></div>                 
                <div className="flex justify-center space-x-4 mt-auto">
                  <a 
                    href={service.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-full flex items-center hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-sm mr-2" />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>
                  <a 
                    href={service.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-white border-2 border-purple-500 text-purple-600 py-2 px-4 rounded-full flex items-center hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  >
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
