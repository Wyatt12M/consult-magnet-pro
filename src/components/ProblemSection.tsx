import { AlertCircle, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Inconsistent Patient Flow",
    description: "Some months are packed, others are painfully slow. You can't forecast revenue or plan staffing with confidence.",
  },
  {
    icon: UserX,
    title: "Over-Reliance on Referrals",
    description: "Referrals are great — until they dry up. Without a system, you're always one quiet month away from a cash crunch.",
  },
  {
    icon: Clock,
    title: "Empty Slots, Lost Revenue",
    description: "Every unfilled appointment is revenue you'll never get back. Your overhead stays the same whether the chair is full or not.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Sound Familiar?
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
            Most Clinics Are Stuck in the Same Cycle
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
      </div>
    </section>
  );
};

export default ProblemSection;
