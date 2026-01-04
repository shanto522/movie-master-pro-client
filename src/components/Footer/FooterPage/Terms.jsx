const Terms = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Terms & Conditions
      </h1>

      <p className="text-gray-700 dark:text-gray-300 text-center mb-12 leading-relaxed">
        Welcome to MovieMaster Pro. By accessing or using this platform, you
        agree to comply with the following terms and conditions. Please read
        them carefully before using our services.
      </p>

      <div className="space-y-10 text-gray-800 dark:text-gray-200 leading-relaxed">
        {/* 1. Acceptance */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            1. Acceptance of Terms
          </h2>
          <p>
            By registering an account or accessing MovieMaster Pro, you agree to
            these Terms & Conditions, as well as any other guidelines, policies,
            or rules posted on the platform. If you do not agree to these terms,
            you must not use the service.
          </p>
        </section>

        {/* 2. User Accounts */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            2. User Accounts
          </h2>
          <p>
            Users are responsible for creating and maintaining secure login
            credentials. You must provide accurate information during
            registration and update it when necessary. You are responsible for
            all activity under your account.
          </p>
        </section>

        {/* 3. Content & Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            3. Content & Intellectual Property
          </h2>
          <p>
            All content available on MovieMaster Pro, including movies, images,
            descriptions, and metadata, is owned by MovieMaster Pro or properly
            licensed. You may not reproduce, distribute, or modify this content
            without explicit permission.
          </p>
        </section>

        {/* 4. User Conduct */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            4. User Conduct
          </h2>
          <p>
            Users agree not to post harmful, offensive, or illegal content.
            Harassment, spamming, or any activity that disrupts the platform is
            strictly prohibited. MovieMaster Pro reserves the right to suspend
            or terminate accounts that violate these rules.
          </p>
        </section>

        {/* 5. Privacy */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            5. Privacy & Data Usage
          </h2>
          <p>
            Your personal information will be collected and used in accordance
            with our Privacy Policy. We do not sell or share your data for
            marketing purposes. By using the platform, you consent to data
            processing for service improvement and analytics.
          </p>
        </section>

        {/* 6. Payment & Subscription (Optional for future features) */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            6. Payment & Subscription
          </h2>
          <p>
            If any premium services or subscription features are introduced,
            users must pay applicable fees. Payments are non-refundable unless
            otherwise stated. MovieMaster Pro reserves the right to change
            pricing or subscription terms at any time.
          </p>
        </section>

        {/* 7. Termination */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            7. Termination
          </h2>
          <p>
            MovieMaster Pro may suspend or terminate user accounts at its sole
            discretion for violations of these Terms & Conditions or disruptive
            behavior. Termination does not absolve any liability for actions
            taken prior to account closure.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            8. Limitation of Liability
          </h2>
          <p>
            MovieMaster Pro provides the platform "as-is" without warranties of
            any kind. We are not liable for indirect, incidental, or
            consequential damages arising from platform use or inability to
            access services.
          </p>
        </section>

        {/* 9. Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            9. Changes to Terms
          </h2>
          <p>
            These Terms & Conditions may be updated from time to time. Users are
            encouraged to review them periodically. Continued use of MovieMaster
            Pro after changes implies acceptance of the updated terms.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            10. Governing Law
          </h2>
          <p>
            These terms shall be governed by the laws of Bangladesh. Disputes
            arising from these terms will be resolved under applicable
            Bangladeshi law.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
