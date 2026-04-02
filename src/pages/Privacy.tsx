import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display font-800 text-3xl md:text-4xl text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="font-display font-600 text-lg text-muted-foreground mb-1">Northarion Partners</p>
          <p className="text-muted-foreground text-sm mb-10">Last updated: April 2, 2026</p>

          <div className="space-y-8 text-foreground/90 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-700 text-lg mb-3">Overview</h2>
              <p>
                Northarion Partners ("we," "us," or "our") operates northarionpartners.com. This Privacy Policy explains how we collect, use, and protect information when you visit our website or inquire about our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">What Information We Collect</h2>
              <p className="mb-2 font-medium">Information you provide directly:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your clinic or company name</li>
                <li>Your phone number</li>
                <li>Any additional information you include when requesting a consultation</li>
              </ul>
              <p className="mb-2 font-medium">Information collected automatically:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and general location</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on the site</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Respond to inquiries about our services</li>
                <li>Schedule and conduct consultations</li>
                <li>Follow up on consultation requests you initiated</li>
                <li>Improve our website experience</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p>We do not sell your information. We do not share your information with third parties for their own marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Cookies</h2>
              <p>
                Our website may use basic cookies to support site functionality and understand general visitor behavior. You can control cookie preferences through your browser settings at any time. Disabling cookies may affect some functionality of the site.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Third Party Services</h2>
              <p>
                We may use third party tools to support our operations including appointment scheduling and electronic document signing. Each third party service operates under its own privacy policy.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. To request deletion of your information contact us at the address below.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Your Rights</h2>
              <p className="mb-2">Depending on your location you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Access the information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of follow up communications at any time</li>
              </ul>
              <p>To exercise any of these rights contact us directly.</p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Marketing Communications</h2>
              <p>
                If you submit a contact form or book a consultation you may receive follow up communications related to your inquiry. You can opt out at any time by replying to any message with "unsubscribe" or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Children's Privacy</h2>
              <p>
                Our services are directed exclusively at business owners and medical professionals. We do not knowingly collect information from anyone under the age of 18.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Changes to This Policy</h2>
              <p>
                We may update this policy periodically. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">Contact</h2>
              <p>Northarion Partners</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:wyatt@northarionpartners.com"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  wyatt@northarionpartners.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://northarionpartners.com"
                  className="text-accent underline hover:text-accent/80 transition-colors"
                >
                  northarionpartners.com
                </a>
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
