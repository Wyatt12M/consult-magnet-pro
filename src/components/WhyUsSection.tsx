import { HeartPulse, DollarSign, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: HeartPulse,
    title: "We Understand Lifetime Value",
    description: "TRT and medical weight loss patients represent recurring revenue. Our campaigns are built around that economic reality.",
  },
  {
    icon: DollarSign,
    title: "We Prioritize Cash-Pay Growth",
    description: "Insurance introduces complexity. We focus on scalable, margin-focused patient acquisition.",
  },
  {
    icon: ShieldCheck,
    title: "We Scale Responsibly",
    description: "As your capacity fills, we adjust pacing to maintain quality and conversion efficiency.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-6">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Selective Partnerships Only
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            We do not work across industries.
          </h2>
        </div>
        <p className="text-center text-muted-foreground text-base mb-14 max-w-lg mx-auto">
          We do not manage general marketing campaigns. We partner exclusively with independent men's health clinics.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-light flex items-center justify-center mb-5">
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
