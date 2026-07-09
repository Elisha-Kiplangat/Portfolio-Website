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
    <div id='Contact' className="bg-[var(--bg)] py-10 font-serif">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[var(--accent)] text-3xl font-bold mb-4">Stay In Touch</h2>
          <p className="text-[var(--muted)] mb-8">Reach out at any time with the contact info below</p>
          <div className="border-b-2 border-[var(--accent-2)] w-16 mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--surface)] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[var(--accent)]">Reach out</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-[var(--text)]">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full px-3 py-2 border border-[var(--accent-2)] bg-[var(--surface)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Name"
      value={formData.name} 
      onChange={handleChange}
      required
    />
  </div>
  
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-[var(--text)]">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full px-3 py-2 border border-[var(--accent-2)] bg-[var(--surface)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>
  
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-[var(--text)]">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="mt-1 block w-full px-3 py-2 border border-[var(--accent-2)] bg-[var(--surface)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Your Message"
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  
  <button
        type="submit"
        className="inline-block bg-[var(--accent)] text-white px-4 py-2 rounded-md hover:bg-[var(--accent-2)] transition-colors"
        disabled={isSending}
      >
        {isSending ? 'Sending...' : 'Send'}
  </button>
  
</form>

          </div>
          <div className="bg-[var(--surface)] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-[var(--text)]">Connect</h2>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-[var(--text)]">Address:</p>
                <p className="text-[var(--muted)]">Nairobi, Kenya</p>
              </div>
              {/* <div>
                <p className="text-lg font-medium text-gray-800">Phone:</p>
                <p className="text-purple-800">+254 700123762</p>
              </div> */}
              <div>
                <p className="text-lg font-medium text-[var(--text)]">Email:</p>
                <p className="text-[var(--muted)]">
                  <a href="mailto:elishakiplanga@gmail.com" className="text-blue-500">elishakiplanga@gmail.com</a>
                </p>
              </div>
              <div className="border-b-2 border-[var(--accent-2)] w-full mx-auto mb-8"></div>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/elisha-kiplangat/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
                <a href="https://x.com/El_i_sha" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faXTwitter} className="text-2xl text-[var(--text)] hover:text-[var(--accent-2)] transition-colors" />
                </a>
                <a href="https://wa.me/+254700123762" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-600 transition-colors" />
                </a>
                <a href="https://www.facebook.com/ElsTechie" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
                <a href="https://github.com/Elisha-Kiplangat" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-[var(--text)] hover:text-[var(--accent-2)] transition-colors" />
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
