import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const sessionPoints = [
  "Evaluate your current patient acquisition structure",
  "Identify volatility risks in your pipeline",
  "Outline how a structured system would generate 20–40 qualified consult requests per month",
];

const contactMethods = ["Phone", "Email", "Text Message"];

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    monthlyVolume: "",
    contactMethod: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open Calendly in new tab after short delay
    setTimeout(() => {
      window.open("https://calendly.com/wyatt-northarionpartners/30min", "_blank");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — Copy */}
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                Get Started
              </p>
              <h2 className="font-display font-800 text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
                Apply for a Private Growth Consultation
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                During this session, we will:
              </p>

              <div className="space-y-3 mb-8">
                {sessionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-primary-foreground/50 text-xs">
                If aligned, we'll discuss next steps.
              </p>
            </div>

            {/* Right — Intake form */}
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-primary-foreground/70 text-xs font-medium mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="clinicName" className="block text-primary-foreground/70 text-xs font-medium mb-1.5">
                      Clinic Name
                    </label>
                    <input
                      id="clinicName"
                      name="clinicName"
                      type="text"
                      required
                      maxLength={150}
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Peak Men's Health"
                    />
                  </div>

                  <div>
                    <label htmlFor="monthlyVolume" className="block text-primary-foreground/70 text-xs font-medium mb-1.5">
                      Current Monthly Consult Volume
                    </label>
                    <input
                      id="monthlyVolume"
                      name="monthlyVolume"
                      type="text"
                      required
                      maxLength={50}
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="e.g. 10–15 per month"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMethod" className="block text-primary-foreground/70 text-xs font-medium mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      id="contactMethod"
                      name="contactMethod"
                      required
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none"
                    >
                      <option value="" disabled className="text-foreground">Select one</option>
                      {contactMethods.map((m) => (
                        <option key={m} value={m} className="text-foreground">{m}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 mt-2"
                  >
                    Continue to Schedule Consultation
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-primary-foreground/40 text-[11px] text-center">
                    Your information is kept confidential and never shared.
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-accent" size={28} />
                  </div>
                  <h3 className="font-display font-700 text-xl text-primary-foreground mb-2">
                    Application Received
                  </h3>
                  <p className="text-primary-foreground/70 text-sm mb-4">
                    Opening Calendly to schedule your consultation…
                  </p>
                  <a
                    href="https://calendly.com/wyatt-northarionpartners/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                  >
                    Click here if not redirected
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
