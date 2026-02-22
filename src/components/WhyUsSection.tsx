import { HeartPulse, DollarSign, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: HeartPulse,
    title: "We Understand Men's Health LTV",
    description: "TRT and weight loss patients have high lifetime value. We build campaigns that attract the right patients who stay and pay.",
  },
  {
    icon: DollarSign,
    title: "We Focus on Cash-Pay Growth",
    description: "No insurance headaches. We specialize in helping clinics grow their cash-pay consult volume — the revenue that matters most.",
  },
  {
    icon: ShieldCheck,
    title: "We Don't Work with Everyone",
    description: "We only partner with men's health clinics. That focus means better results, faster ramp-up, and campaigns built on real data from your niche.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Why Us
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            Built Exclusively for Men's Health Clinics
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-accent-light flex items-center justify-center mb-5">
                <item.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display font-600 text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
