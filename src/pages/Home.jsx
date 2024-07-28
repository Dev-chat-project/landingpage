import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
<section className="relative h-screen flex items-center justify-center text-center bg-white-300 dark:bg-primary-color">
      <div className="absolute inset-0" aria-hidden="true"></div>
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to <span className="text-secondary-color dark:text-secondary-color">DevChat</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl">
          Connect with developers, join groups, and stay updated with the latest tech trends.
        </p>
        <div className="mt-8 flex justify-center">
        <Link
  to="/features"
  className="inline-block bg-primary-color dark:bg-secondary-color text-white font-semibold py-3 px-6 rounded-lg border-2 border-primary-color dark:border-secondary-color shadow-md hover:bg-secondary-color dark:hover:bg-primary-color transition-colors duration-300"
>
  Get Started
</Link>

        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
