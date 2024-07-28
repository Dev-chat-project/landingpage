import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">DevChat</h3>
            <p className="text-sm">Connect with developers, join groups, and stay updated with the latest tech trends.</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-blue-600">
              <FaFacebook className="h-6 w-6" />
            </Link>
            <Link to="/" className="text-white hover:text-blue-400">
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link to="/" className="text-white hover:text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link to="/" className="text-white hover:text-blue-700">
              <FaLinkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2024 DevChat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
