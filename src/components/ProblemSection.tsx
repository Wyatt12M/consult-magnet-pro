import { AlertCircle, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Unpredictable Patient Flow",
    description: "Strong months followed by slow months. Revenue becomes difficult to forecast. Staffing decisions feel risky.",
  },
  {
    icon: UserX,
    title: "Referral Dependency",
    description: "Referrals are valuable — but they are not a scalable growth strategy.",
  },
  {
    icon: Clock,
    title: "Empty Appointment Slots",
    description: "Unused capacity is unrecoverable revenue. Overhead remains constant whether your schedule is full or not.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            The Real Issue
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            If Growth Feels Inconsistent, It's Not a Marketing Problem — It's a Systems Problem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
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

        <p className="text-center text-muted-foreground text-base mt-12 max-w-xl mx-auto">
          Without a structured acquisition system, growth remains fragile.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
