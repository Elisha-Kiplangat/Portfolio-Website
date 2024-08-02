import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faWhatsapp, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10 font-serif">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay In Touch</h2>
          <p className="text-gray-600 mb-8">Reach out to me at any time with the contact info below</p>
          <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Details</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-700">Address:</p>
                <p className="text-gray-600">Kutus, Kirinyaga, Kenya</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">Phone:</p>
                <p className="text-gray-600">+254700123762</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">Email:</p>
                <p className="text-gray-600">
                  <a href="mailto:elishakiplanga@gmail.com" className="text-blue-500">elishakiplanga@gmail.com</a>
                </p>
              </div>
              <div className="border-b-2 border-purple-500 w-full mx-auto mb-8"></div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/elisha-kiplangat-111904260/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-500 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://wa.me/+254700123762" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-600 transition-colors" />
                </a>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-700 hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://github.com/Elisha-Kiplangat" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-800 hover:text-gray-900 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
