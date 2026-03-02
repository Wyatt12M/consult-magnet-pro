import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const sessionPoints = [
  "Evaluate your current patient acquisition structure",
  "Identify volatility risks in your pipeline",
  "Outline how a structured system would generate 20–40 qualified consult requests per month",
];

const CTASection = () => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for the Calendly script to load, then init the widget
    const initCalendly = () => {
      if ((window as any).Calendly && calendlyRef.current) {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/wyatt-northarispartners/30min",
          parentElement: calendlyRef.current,
        });
      }
    };

    if ((window as any).Calendly) {
      initCalendly();
    } else {
      // Script not loaded yet, wait for it
      const interval = setInterval(() => {
        if ((window as any).Calendly) {
          clearInterval(interval);
          initCalendly();
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <section id="book" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
            Apply for a Private Growth Consultation
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            During this session, we will:
          </p>

          <div className="space-y-3 max-w-md mx-auto mb-8 text-left">
            {sessionPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <p className="text-primary-foreground/60 text-sm mb-10">
            If aligned, we'll discuss next steps.
          </p>

          <a
            href="#calendly-widget"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("calendly-widget")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-base font-semibold transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 mb-8"
          >
            Apply for a Private Growth Consultation
            <ArrowRight size={18} />
          </a>

          {/* Calendly inline widget */}
          <div id="calendly-widget" className="mt-8 mx-auto max-w-2xl rounded-xl overflow-hidden">
            <div
              ref={calendlyRef}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
