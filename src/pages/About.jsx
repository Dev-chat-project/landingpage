import { Link } from "react-router-dom";
const About = () => {
  return (
    <section className="bg-white dark:bg-primary-color text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold mb-6">
              About <span className="text-secondary-color">DevChat</span>
            </h1>
            <p className="text-lg mb-6">
              Welcome to DevChat! We are dedicated to providing a platform where developers can connect, collaborate, and stay informed about the latest trends in technology.
            </p>
            <p className="text-lg">
              Our mission is to enhance communication and collaboration among developers worldwide. Through our platform, we aim to facilitate knowledge sharing and foster a thriving developer community.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              // src="https://via.placeholder.com/400x300"
              src="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About DevChat"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://thumbs.dreamstime.com/z/portrait-cheerful-smiling-young-man-folded-arms-joyful-handsome-men-crossed-hands-studio-shot-isolated-gray-195089624.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Ali Hassan
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                UI/UX Designer. Ensures DevChat is user-friendly and visually appealing.
              </p>
            </div>

            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Lathila
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
              Front-End Developer. Specializes in creating responsive and engaging user interfaces.
              </p>
            </div>


            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Swipa
              </h3>
              <p className="text-gray-700 dark:text-gray-300">

              Front-End Developer. Specializes in creating responsive and engaging user interfaces.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32r0pwl79OIe7C4qV3zuByHE5sevX_AcY8g&s"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Salman Ali
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Front-End Developer. Specializes in creating responsive and engaging user interfaces.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7CH2bTx8kyDAU6Zc6rR0fX2X_4NGiANCTw&s"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Dave
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
              Backend Developer. Focuses on making DevChat secure, scalable, and reliable.

              </p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-80">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqQyy_dtZvstOR_-EpfdrKOrcAeMmWVhIHxA&s"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4 ring-4 ring-secondary-color dark:ring-secondary-color"
              />
              <h3 className="text-xl font-semibold mb-2 text-secondary-color dark:text-secondary-color">
              Nawaz
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
              Backend Developer. Focuses on making DevChat secure, scalable, and reliable.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg mb-6">
            Have questions or feedback? We’d love to hear from you! Reach out to us via email.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary-color text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-primary-color transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
