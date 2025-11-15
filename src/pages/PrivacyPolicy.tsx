import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Privacy Policy | Vanshu Agarwal';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20 pb-16 bg-background" role="main">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="space-y-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </header>

          <section className="space-y-6 text-foreground/90">
            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Vanshu Agarwal's portfolio website. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Information We Collect</h2>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you contact us</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages</li>
                <li><strong>Communication Data:</strong> Messages sent through contact forms or chatbot</li>
              </ul>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Your Information</h2>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To improve our website and user experience</li>
                <li>To send project updates and relevant information (with your consent)</li>
                <li>To analyze website traffic and usage patterns</li>
              </ul>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Data Protection</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information. Your data is stored securely and is only accessible to authorized personnel. We do not sell or share your personal information with third parties without your explicit consent.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings. Essential cookies are necessary for website functionality.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
              <ul className="space-y-3 list-disc list-inside leading-relaxed">
                <li>Access your personal data we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Third-Party Services</h2>
              <p className="leading-relaxed">
                We may use third-party services for analytics, chatbot functionality, and email services. These services have their own privacy policies and data handling practices.
              </p>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:sanjayvansu1973@gmail.com" className="text-primary hover:underline">sanjayvansu1973@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919412104618" className="text-primary hover:underline">+91-9412104618</a></p>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-primary mb-4">Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
