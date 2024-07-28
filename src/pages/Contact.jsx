
const Contact = () => {
  return (
    <section className="bg-white dark:bg-primary-color text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          Contact <span className="text-secondary-color">Us</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary-color dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition-transform transform focus:scale-105"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow  appearance-none border rounded w-full py-2 px-3 text-secondary-color dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition-transform transform focus:scale-105"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 " htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary-color  dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline transition-transform transform focus:scale-105 "
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-secondary-color hover:bg-primary-color text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Get in Touch
            </h2>
            <p className="text-gray-800 dark:text-gray-300 mb-4">
              If you have any questions, feel free to reach out to us at:
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Email: <a href="mailto:dev@example.com" className="text-secondary-color">devchat062@gmail.com</a>
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              Phone: <a href="tel:0335519154" className="text-secondary-color">+92 335519154</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
