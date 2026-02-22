import { Search, Filter, CalendarPlus } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Attract High-Intent Patients",
    description: "We put your clinic in front of men actively searching for TRT, weight loss, and hormone optimization — right when they're ready to act.",
  },
  {
    icon: Filter,
    step: "02",
    title: "Capture & Qualify Requests",
    description: "Interested patients fill out a qualification form so your team only speaks with people who are a real fit for your services.",
  },
  {
    icon: CalendarPlus,
    step: "03",
    title: "Fill Your Schedule",
    description: "Qualified consult requests flow directly into your calendar. Your team focuses on what they do best — patient care.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Simple Process
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {steps.map((item, i) => (
            <div key={i} className="relative">
              <span className="font-display font-800 text-6xl text-muted/80 absolute -top-2 -left-2 select-none">
                {item.step}
              </span>
              <div className="pt-12">
                <div className="w-12 h-12 rounded-lg bg-blue-accent-light flex items-center justify-center mb-4">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
