import { TrendingUp, RefreshCw, CalendarClock, AlertTriangle } from "lucide-react";

const points = [
  { icon: TrendingUp, text: "High lifetime value per patient" },
  { icon: RefreshCw, text: "Recurring program revenue" },
  { icon: CalendarClock, text: "Capacity-sensitive scheduling" },
  { icon: AlertTriangle, text: "The risk of unpredictable patient flow" },
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
            Built for Cash-Pay Men's Health Clinics
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Northarion Partners works exclusively with independent men's health clinics operating cash-pay TRT, weight loss, and hormone optimization programs.
          </p>

          <p className="font-display font-600 text-foreground text-lg mb-6">
            We understand your economics:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-light flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={20} />
                </div>
                <p className="text-foreground font-medium text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-muted-foreground text-base leading-relaxed">
              Our focus isn't traffic. It isn't vanity metrics.
            </p>
            <p className="text-foreground font-display font-600 text-base mt-1">
              It's booked consultations that convert into long-term recurring revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
