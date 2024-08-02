import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faWhatsapp, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
  <footer className="footer bg-blue-100 w-fit py-10 px-4 md:px-20 font-serif text-base-content flex justify-between ">
  <div className='flex items-center'>
    CopyRight
  </div>
  <div className="flex items-center">
    <div className="rounded-full bg-red-400 w-8 h-8 flex items-center justify-center">
    </div>
  </div>
  <div className="hidden md:flex items-center gap-5 mr-0">
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
  
  
</footer>

  )
}

export default Footer