const Privacy = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Privacy Policy
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-center mb-12 leading-relaxed">
        At MovieMaster Pro, we take your privacy seriously. This Privacy Policy
        explains what information we collect, how we use it, and how we protect
        your data. By using our platform, you agree to the practices described
        below.
      </p>

      <div className="space-y-12 text-gray-800 dark:text-gray-200 leading-relaxed">
        {/* 1. Information Collection */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            1. Information We Collect
          </h2>
          <p>
            We collect information that you provide directly, such as your name,
            email address, and account credentials. We also automatically collect
            information when you interact with the platform, including your
            browsing behavior, IP address, device type, and activity logs.
          </p>
          <p>
            This information allows us to provide personalized experiences,
            enhance security, and improve the overall quality of the platform.
          </p>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Maintain and manage your account.</li>
            <li>Deliver personalized movie recommendations and content.</li>
            <li>Communicate updates, announcements, and offers.</li>
            <li>Improve the platform, fix bugs, and optimize performance.</li>
          </ul>
          <p className="mt-2">
            We do not sell or rent your personal information to third parties for
            marketing purposes.
          </p>
        </section>

        {/* 3. Cookies & Tracking */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance user experience,
            track usage patterns, and provide analytics. Cookies help remember
            user preferences and improve site functionality.
          </p>
          <p>
            You may disable cookies in your browser settings; however, some features
            may not function properly if cookies are disabled.
          </p>
        </section>

        {/* 4. Data Security */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            4. Data Security
          </h2>
          <p>
            We implement industry-standard security measures, including encryption
            and secure servers, to protect your data. While no system is completely
            secure, we continuously improve security protocols to safeguard your
            personal information.
          </p>
          <p>
            Users are responsible for maintaining the confidentiality of their
            passwords and account credentials.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            5. Third-Party Services
          </h2>
          <p>
            We may use trusted third-party services to help run the platform,
            including analytics, payment processors, and hosting providers. These
            services are only permitted to use your information as needed to
            perform their functions.
          </p>
        </section>

        {/* 6. Children’s Privacy */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            6. Children’s Privacy
          </h2>
          <p>
            MovieMaster Pro does not knowingly collect personal information from
            children under the age of 13. If we become aware that we have collected
            information from a child, we will delete it promptly.
          </p>
        </section>

        {/* 7. User Rights */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            7. Your Rights
          </h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Access the information we hold about you.</li>
            <li>Request corrections or updates to your personal data.</li>
            <li>Request deletion of your account and personal information.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </section>

        {/* 8. Changes to This Policy */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes
            in our practices or legal requirements. The latest version will
            always be posted on this page. Continued use of MovieMaster Pro
            after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        {/* 9. Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            9. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact our support team at{" "}
            <span className="text-red-500">support@moviemasterpro.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
