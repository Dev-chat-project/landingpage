

const Pricing = () => {
  return (
    <section className="bg-white dark:bg-primary-color text-gray-900 dark:text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center mb-12">
          Pricing Plans for <span className="text-secondary-color">DevChat</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Plan 1 */}
          <div className="bg-gray-100 dark:bg-gray-800  p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Free Plan
            </h2>
            <p className="text-lg font-bold mb-4">$0<span className="text-base text-gray-500">/month</span></p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>FREE</li>
              <li>Group Creation</li>
              <li>Theme toggling</li>
            </ul>
          </div>

          {/* Plan 2 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Pro Plan
            </h2>
            <p className="text-lg font-bold mb-4">$0<span className="text-base text-gray-500">/month</span></p>
            <ul className="list-disc list-inside mb-6 space-y-2">
            <li>FREE</li>
              <li>Group Creation</li>
              <li>Theme toggling</li>
            </ul>

          </div>

          {/* Plan 3 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-color dark:text-secondary-color">
              Enterprise Plan
            </h2>
            <p className="text-lg font-bold mb-4">$0<span className="text-base text-gray-500">/month</span></p>
            <ul className="list-disc list-inside mb-6 space-y-2">
            <li>FREE</li>
              <li>Group Creation</li>
              <li>Theme toggling</li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing