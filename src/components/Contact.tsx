import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faWhatsapp, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_ID
    )
    .then(() => {
      toast.success('Email sent successfully!', {
        position: "top-right"
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
    })
    .catch(() => {
      toast.error('Failed to send email. Please try again.', {
        position: "top-right"
      });
      setIsSending(false);
    });
  };

  return (
    <div id='Contact' className="bg-purple-100 py-10 font-serif">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-black text-3xl font-bold mb-4">Stay In Touch</h2>
          <p className="text-gray-600 mb-8">Reach out at any time with the contact info below</p>
          <div className="border-b-2 border-purple-500 w-16 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Reach out</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
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
      className="mt-1 block w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
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
      className="mt-1 block w-full px-3 py-2 border bg-blue-50 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  
  <button
        type="submit"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send'}
  </button>
  
</form>

          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Connect</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-800">Address:</p>
                <p className="text-purple-800">Kutus, Kirinyaga, Kenya</p>
              </div>
              {/* <div>
                <p className="text-lg font-medium text-gray-800">Phone:</p>
                <p className="text-purple-800">+254 700123762</p>
              </div> */}
              <div>
                <p className="text-lg font-medium text-gray-800">Email:</p>
                <p className="text-gray-600">
                  <a href="mailto:elishakiplanga@gmail.com" className="text-blue-500">elishakiplanga@gmail.com</a>
                </p>
              </div>
              <div className="border-b-2 border-purple-500 w-full mx-auto mb-8"></div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/elisha-kiplangat-111904260/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://x.com/ElishaKiplangat" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
                <a href="https://wa.me/+254700123762" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-600 transition-colors" />
                </a>
                <a href="https://www.facebook.com/elisha.rono.908" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-700 hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://github.com/Elisha-Kiplangat" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
