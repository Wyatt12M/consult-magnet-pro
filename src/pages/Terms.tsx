import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="font-display font-800 text-3xl md:text-4xl text-foreground mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="font-display font-600 text-lg text-muted-foreground mb-1">Northarion Partners</p>
          <p className="text-muted-foreground text-sm mb-10">Last updated: April 2, 2026</p>

          <div className="space-y-8 text-foreground/90 text-[15px] leading-relaxed">
            <div>
              <h2 className="font-display font-700 text-lg mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Northarion Partners website at northarionpartners.com, you agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you may not access the website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">2. Services</h2>
              <p>
                Northarion Partners provides patient acquisition and consultation growth services for independent men's health clinics. Our services include strategic consultation, advertising management, and systems implementation as outlined during the engagement process. Specific deliverables and terms are defined in individual client agreements.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">3. Use of the Website</h2>
              <p className="mb-2">You agree to use this website only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
                <li>Reproduce, distribute, or modify any content without prior written consent</li>
                <li>Use automated systems to scrape or extract data from the site</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website including text, graphics, logos, images, and software is the property of Northarion Partners and is protected by applicable intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">5. Consultation Bookings</h2>
              <p>
                Submitting an intake form or booking a consultation does not guarantee a client engagement. All prospective partnerships are subject to review and mutual agreement. Northarion Partners reserves the right to decline any engagement at its sole discretion.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">6. Results Disclaimer</h2>
              <p>
                Any results, metrics, or case studies referenced on this website represent outcomes achieved by specific clients under specific circumstances. Results vary based on factors including market conditions, clinical capacity, budget, and implementation. We do not guarantee specific outcomes for any engagement.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">7. Limitation of Liability</h2>
              <p>
                Northarion Partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or our services. Our total liability shall not exceed the amount paid by you for services during the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Northarion Partners, its owner, and any associated contractors from any claims, damages, or expenses arising from your use of the website or violation of these terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">9. Third Party Links</h2>
              <p>
                This website may contain links to third party websites or services that are not owned or controlled by Northarion Partners. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third party websites or services.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">10. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be resolved in the appropriate courts of the jurisdiction in which Northarion Partners operates.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">11. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after any changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="font-display font-700 text-lg mb-3">12. Contact</h2>
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

export default Terms;
