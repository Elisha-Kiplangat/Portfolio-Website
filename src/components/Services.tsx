import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const services = [
  {
    icon: faCode,
    title: 'Vehicle Rental Management Application',
    description: 'A comprehensive fullstack solution for managing vehicle rentals, including vehicle listing, rental booking, customer management, and payment processing.',
  },
  {
    icon: faCloud,
    title: 'Restaurant API',
    description: 'A backend API designed to manage restaurant operations, including handling menus, orders, reservations, inventory, staff, and customer data. The API supports CRUD operations for all entities and provides functionality for real-time order updates and reporting.',
  },
  {
    icon: faPalette,
    title: 'Book Repository',
    description: 'A fullstack web application for managing a collection of books. Users can add, update, delete, and search for books, with features like user authentication and role-based access.',
  },
  {
    icon: faPalette,
    title: 'Todo App',
    description: 'A simple yet functional task management application that allows users to create, update, delete, and organize tasks. It supports features like task categorization, prioritization, and due date reminders, with a user-friendly interface to track progress.',
  },
];

const Services = () => {
  return (
    <section className="bg-purple-50 py-12 px-4 md:px-20 font-serif">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600 mb-8">
          <b>Check it out!</b> Some of the outstanding projects I have been working on with the skills and experience I have in Software Development
        </p>
        <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-blue-100 shadow-md rounded-lg p-6 m-4 w-64 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mx-auto mb-4 text-purple-600">
                  <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className=''>
                <div className="border-b-2 border-purple-500 w-48 mx-auto mb-4"></div>
                  <div className="flex justify-around mt-auto">
                  <button className="btn btn-outline border-2 border-purple-500 text-purple-500 py-2 px-3 rounded-full flex items-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="text-2xl group-hover:text-white transition-colors" />
                  </button>
                  <button className='btn btn-outline border-2 border-purple-500 text-purple-500 py-2 px-2 rounded-full flex items-center group-hover:bg-purple-500 group-hover:text-white transition-colors'>
                    <p className="group-hover:text-white transition-colors">Link</p>
                  </button>
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
