const Help = () => {
  return (
    <div className=" px-6 sm:px-12 lg:px-28 py-4">
      <div className="max-w-[1340px] mx-auto space-y-10">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Help Center
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Practical guides and answers to help you get the most out of
            <span className="font-semibold text-red-500"> MovieMaster Pro</span>.
          </p>
        </section>

        {/* Topics Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Getting Started",
              text: "Create an account, explore movies, and build your personal collection in minutes.",
            },
            {
              title: "Movie Management",
              text: "Add, edit, and organize movies directly from your dashboard.",
            },
            {
              title: "Wishlist",
              text: "Save movies for later and keep track of what you want to watch next.",
            },
            {
              title: "Account Settings",
              text: "Update profile information, manage preferences, and secure your account.",
            },
            {
              title: "Dark Mode",
              text: "Switch between light and dark themes for a better viewing experience.",
            },
            {
              title: "Privacy & Security",
              text: "Understand how we protect your data and ensure platform safety.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl py-12 px-6">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Need Personal Assistance?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our support team is available to help you with any questions or issues.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition font-medium"
          >
            Contact Support
          </a>
        </section>
      </div>
    </div>
  );
};

export default Help;
