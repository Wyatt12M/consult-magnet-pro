import { Shield, MapPin, UserCheck, Gauge } from "lucide-react";

const details = [
  {
    icon: MapPin,
    title: "Regional Exclusivity",
    description: "We only partner with one clinic per metro area — your territory remains protected.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Management",
    description: "A single point of contact who understands your clinic's operations, margins, and growth goals.",
  },
  {
    icon: Gauge,
    title: "Capacity-Matched Intake Pacing",
    description: "We scale volume to match your clinical bandwidth — no overflow, no idle capacity.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Selective Partnerships
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Built for Depth, Not Volume
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            We partner with a limited number of men's health clinics per region. We do not operate across unrelated industries.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {details.map((item, i) => (
              <div
                key={i}
                className="bg-card rounded-xl border border-border p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-steel-light flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-display font-600 text-sm text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-foreground font-display font-600 text-base mb-1">
              Our focus is singular:
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Building predictable, margin-aligned consultation systems for established clinics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
