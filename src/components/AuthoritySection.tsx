import { TrendingUp, RefreshCw, CalendarClock, AlertTriangle } from "lucide-react";

const points = [
  { icon: TrendingUp, text: "High lifetime value per TRT patient" },
  { icon: RefreshCw, text: "Recurring program-based revenue" },
  { icon: CalendarClock, text: "Capacity constraints" },
  { icon: AlertTriangle, text: "Revenue volatility from referral-only pipelines" },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Exclusive Focus
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Built Around Your Economics — Not Vanity Metrics
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            Most agencies optimize for traffic.
          </p>
          <p className="text-foreground font-display font-600 text-lg leading-relaxed mb-10">
            We optimize for consultation revenue.
          </p>

          <p className="font-display font-600 text-foreground text-lg mb-6">
            We understand:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-steel-light flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={20} />
                </div>
                <p className="text-foreground font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-foreground font-display font-600 text-base">
              Our systems are built around long-term recurring revenue — not short-term spikes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
