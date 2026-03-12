import { ArrowUp, MapPin } from "lucide-react";

const caseStudies = [
  {
    clinic: "Independent TRT Clinic",
    location: "Dallas, TX",
    before: "8 referral-based consults/month",
    after: "31 qualified inbound consults/month",
    timeline: "90 days",
    outcome: "Revenue stabilized enough to hire a second provider and expand to a second location.",
  },
  {
    clinic: "Men's Health & Weight Loss Center",
    location: "Scottsdale, AZ",
    before: "12 consults/month via mixed channels",
    after: "27 consults/month from structured acquisition",
    timeline: "60 days",
    outcome: "Eliminated dependency on physician referral networks and reduced cost per acquisition by 40%.",
  },
  {
    clinic: "Hormone Optimization Practice",
    location: "Charlotte, NC",
    before: "Sporadic volume, 5–18 consults/month",
    after: "Consistent 22 qualified consults/month",
    timeline: "75 days",
    outcome: "Achieved predictable cash flow for the first time in 3 years, enabling planned equipment investment.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Proven Results
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            Real Outcomes From Real Clinics
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium mb-4">
                <MapPin size={14} className="text-accent" />
                <span>{study.clinic} — {study.location}</span>
              </div>

              <div className="flex-1 space-y-4 mb-5">
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Before</p>
                  <p className="text-foreground text-sm font-medium">{study.before}</p>
                </div>
                <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                  <div className="flex items-center gap-1.5 mb-1">
                    <ArrowUp size={12} className="text-accent" />
                    <p className="text-xs text-accent uppercase tracking-wider font-semibold">After — {study.timeline}</p>
                  </div>
                  <p className="text-foreground text-sm font-semibold">{study.after}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-xs leading-relaxed border-t border-border pt-4">
                {study.outcome}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-10 max-w-md mx-auto">
          Results are representative of partner outcomes. Individual results vary based on market conditions, clinical capacity, and engagement level.
        </p>
      </div>
    </section>
  );
};

export default ResultsSection;
