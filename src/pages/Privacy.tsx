import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display font-800 text-3xl md:text-4xl text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="space-y-8 text-foreground/90 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-700 text-lg mb-3">1. Introduction</h2>
              <p>
                Northarion Partners ("we," "us," or "our") respects your privacy and is committed to
                protecting your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or engage our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, clinic name, and other details you voluntarily provide through our intake form or consultations.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, and other analytical data collected automatically.</li>
                <li><strong>Cookies & Tracking:</strong> We may use cookies and similar technologies to enhance your experience and gather usage information.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and schedule consultations</li>
                <li>To deliver and improve our services</li>
                <li>To send relevant communications about our offerings</li>
                <li>To analyze website usage and optimize performance</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information with trusted service providers who assist us in operating our website
                and conducting our business, provided they agree to keep your information confidential.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">5. Third-Party Services</h2>
              <p>
                Our website may contain links to third-party services such as Calendly for scheduling.
                These services have their own privacy policies, and we encourage you to review them.
                We are not responsible for the privacy practices of third-party services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">6. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">7. Your Rights</h2>
              <p>You may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please
                contact us at{" "}
                <a
                  href="mailto:wyatt@northarionpartners.com"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  wyatt@northarionpartners.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Privacy;
