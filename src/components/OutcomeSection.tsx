import { CalendarCheck, TrendingUp, Target } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    metric: "20–40",
    label: "New consult requests per month",
  },
  {
    icon: CalendarCheck,
    metric: "Fuller",
    label: "Schedules with qualified patients",
  },
  {
    icon: Target,
    metric: "Predictable",
    label: "Growth you can plan around",
  },
];

const OutcomeSection = () => {
  return (
    <section id="results" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            The Outcome
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl leading-tight">
            A Clinic That Runs on Systems, Not Hope
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {outcomes.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-accent" size={24} />
              </div>
              <p className="font-display font-800 text-3xl md:text-4xl mb-2">
                {item.metric}
              </p>
              <p className="text-primary-foreground/70 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
