import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-primary-color dark:text-white-600 shadow-light ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl font-bold dark:text-white text-secondary-color">DevChat</Link>
            </div>
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              <Link to="/" className="dark:text-white text-gray-900  hover:text-secondary-color dark:hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium">Home</Link>
              <Link to="/features" className="dark:text-white text-gray-900  hover:text-secondary-color dark:hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium">Features</Link>
              <Link to="/pricing" className="dark:text-white text-gray-900  hover:text-secondary-color dark:hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium">Pricing</Link>
              <Link to="/about" className="dark:text-white text-gray-900  hover:text-secondary-color dark:hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium">About</Link>
              <Link to="/contact" className="dark:text-white text-gray-900  hover:text-secondary-color dark:hover:text-gray-300 px-3 py-2 rounded-md text-lg font-medium">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="bg-gray-200 dark:bg-secondary-color relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Enable dark mode</span>
              <span
                className={`${
                  darkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200`}
              />
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/features" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Features</Link>
            <Link to="/pricing" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
            <Link to="/about" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-900 dark:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
