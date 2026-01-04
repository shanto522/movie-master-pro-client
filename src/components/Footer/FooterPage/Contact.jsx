const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Contact Us
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-center mb-12 leading-relaxed">
        We value your feedback and are here to help. Whether you have a
        question, suggestion, or technical issue, our support team is ready to
        assist you. Please use the contact information below or the form to
        reach out to us.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Information */}
        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Email
            </h2>
            <p>support@moviemasterpro.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Phone
            </h2>
            <p>+880 1XXX-XXXXXX</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Office Address
            </h2>
            <p>Dhaka, Bangladesh</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Support Hours
            </h2>
            <p>Monday - Friday, 9:00 AM - 6:00 PM (GMT+6)</p>
          </section>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            Our support team typically responds within 24 hours. For urgent
            issues, please call our phone number for immediate assistance.
          </p>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Subject
            </label>
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-300 font-medium">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 dark:border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-gray-800 dark:text-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
