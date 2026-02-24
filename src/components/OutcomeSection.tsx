import { CalendarCheck, TrendingUp, Target } from "lucide-react";

const outcomes = [
  {
    icon: TrendingUp,
    metric: "20–40",
    label: "Qualified Consult Requests Per Month",
    description: "Built on active search intent and controlled qualification.",
  },
  {
    icon: CalendarCheck,
    metric: "Stable",
    label: "Forecastable Revenue",
    description: "Consultation volume you can plan staffing, expansion, and reinvestment around.",
  },
  {
    icon: Target,
    metric: "Controlled",
    label: "Scaling",
    description: "As capacity increases, acquisition scales with it.",
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
            What Structured Acquisition Produces
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
              <p className="text-primary-foreground/90 font-display font-600 text-sm mb-1">
                {item.label}
              </p>
              <p className="text-primary-foreground/60 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
