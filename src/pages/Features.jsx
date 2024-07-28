
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="bg-white dark:bg-primary-color text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          Explore the <span className="text-secondary-color">Features</span> of DevChat
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              One-to-One Chat
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Enjoy private conversations with your friends and colleagues in a secure and efficient manner.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Group Chats
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Create groups to collaborate with teams or communities and share ideas seamlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Theme Toggling
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Switch between light and dark modes to suit your preference and work environment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Search Groups/Users
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Easily find and connect with groups or users using our search functionality.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Authentication & Authorization
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Secure access with user authentication and authorization to keep your data safe.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Chat Backup
            </h2>
            <p className="text-gray-800 dark:text-gray-300">
              Ensure your chat history is backed up and easily recoverable in case of data loss.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block bg-secondary-color text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary-color transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
