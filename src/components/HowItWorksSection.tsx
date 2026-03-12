import { Search, Filter, CalendarPlus } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Strategic Patient Targeting",
    description: "We capture active buyers searching for TRT and medical weight loss services.",
  },
  {
    icon: Filter,
    step: "02",
    title: "Structured Qualification",
    description: "Prospective patients complete economic and clinical filters before entering your pipeline.",
  },
  {
    icon: CalendarPlus,
    step: "03",
    title: "Consultation Flow Control",
    description: "Volume is managed to maintain quality, show rates, and conversion efficiency.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Our Framework
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            From Search Intent to Scheduled Consultation
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="relative">
              <span className="font-display font-800 text-6xl text-muted/80 absolute -top-2 -left-2 select-none">
                {item.step}
              </span>
              <div className="pt-12">
                <div className="w-12 h-12 rounded-lg bg-steel-light flex items-center justify-center mb-4">
                  <item.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-display font-600 text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 border-t border-border pt-8 max-w-md mx-auto">
          <p className="text-muted-foreground text-base">
            This is not advertising.
          </p>
          <p className="text-foreground font-display font-600 text-base">
            It is revenue infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
