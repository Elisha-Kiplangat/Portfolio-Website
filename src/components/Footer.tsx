import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter, faWhatsapp, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Logo.png'

const Footer = () => {
  return (
  <footer className="footer bg-blue-100 w-full py-8 px-4 md:px-20 sm:px-7 font-serif text-base-content flex justify-between ">
   <div className="flex items-center text-gray-600">
  <p className="text-sm">
    &copy; {new Date().getFullYear()} Elisha. All rights reserved.
  </p>
</div>
  <div className="flex items-center">
    <img 
      src={logo}
      alt="logo" 
      className="w-5 h-5 rounded-lg"
    />
  </div>
  <div className="hidden md:flex items-center gap-5 mr-0">
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
  
  
</footer>
  )
}

export default Footer