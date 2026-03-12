import { CheckCircle } from "lucide-react";

const criteria = [
  "Operate established TRT and/or medical weight loss programs",
  "Have the clinical capacity to support increased consultation volume",
  "Understand patient lifetime value and margin structure",
  "Are ready to implement scalable growth systems",
];

const QualificationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Who We Work With
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Independent, Cash-Pay Clinics Ready to Scale
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Northarion Partners works exclusively with independent, cash-pay men's health clinics that:
          </p>

          <div className="space-y-4 mb-10">
            {criteria.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-steel-light flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="text-accent" size={18} />
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              We are not a fit for early-stage startups or clinics seeking general marketing support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
