const AboutUs = () => {
  return (
    <div className="max-w-[1370px] mx-auto">
        <title>About Us | MovieMater Pro</title>
      {/* Hero Section */}
      <section className="">
        <div className=" px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            We build modern, secure, and user-focused digital experiences
            designed to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-10">
        <div className=" px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              We are a technology-driven platform focused on delivering
              reliable, scalable, and easy-to-use solutions. Every feature we
              design is guided by real user needs, performance, and long-term
              maintainability.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
            <ul className="space-y-4">
              <li>✔ User-centric product design</li>
              <li>✔ Secure & scalable architecture</li>
              <li>✔ Modern UI & best UX practices</li>
              <li>✔ Fully responsive on all devices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8">
        <div className=" px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our mission is to build secure, scalable, and intuitive
              applications that simplify everyday tasks and provide meaningful
              value to users.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We aim to become a trusted digital platform where users feel
              confident, empowered, and satisfied with every interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className=" px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Modern Technology",
              "Fast Performance",
              "Secure Authentication",
              "Clean & Scalable Code",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-10">
        <div className=" px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Technology We Use</h2>
          <p className="max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400">
            Built using modern, proven technologies to ensure performance,
            security, and scalability.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MongoDB",
              "Firebase / JWT",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-white dark:bg-gray-900 shadow text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Build Something Meaningful
        </h2>
        <p className="mb-6 opacity-90">
          Join us today and experience a modern, reliable digital platform.
        </p>
        <button className="px-8 py-3 rounded-xl btn-pro">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
