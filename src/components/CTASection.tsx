import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="book" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-800 text-3xl md:text-4xl text-primary-foreground leading-tight mb-4">
            Ready to implement a Predictable Growth System?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto">
            Apply for a private growth consultation. We'll review your current patient acquisition structure and outline how we would generate 20–40 qualified consult requests per month.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-base font-semibold transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 mb-8"
          >
            Apply for a Private Growth Consultation
            <ArrowRight size={18} />
          </a>

          {/* Calendly placeholder */}
          <div className="mt-8 mx-auto max-w-md rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-10 text-center">
            <p className="text-primary-foreground/50 text-sm">
              Calendly embed will appear here
            </p>
            <p className="text-primary-foreground/30 text-xs mt-1">
              Replace this with your Calendly inline widget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
