import { DollarSign, Users, Rocket, Wallet } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    text: "Revenue becomes unpredictable",
  },
  {
    icon: Users,
    text: "Hiring becomes reactive",
  },
  {
    icon: Rocket,
    text: "Expansion becomes risky",
  },
  {
    icon: Wallet,
    text: "Cash flow becomes exposed",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            The Real Issue
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Inconsistent Growth Is an Infrastructure Issue
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            When consultation volume fluctuates, it is rarely a demand issue.
          </p>
          <p className="text-foreground font-display font-600 text-lg leading-relaxed mb-10">
            It is a structural issue.
          </p>

          <p className="font-display font-600 text-foreground text-lg mb-6">
            Without a controlled acquisition system:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {problems.map((item, i) => (
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

          <p className="text-foreground font-display font-600 text-base text-center">
            Growth remains fragile.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
