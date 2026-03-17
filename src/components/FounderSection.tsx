import founderHeadshot from "@/assets/founder-headshot.png";

const FounderSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center">
            {/* Headshot */}
            <div className="flex justify-center md:justify-start">
              <div className="w-56 h-56 rounded-2xl border border-border overflow-hidden">
                <img src={founderHeadshot} alt="Founder headshot" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                Who's Behind This
              </p>
              <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-4">
                Meet the Founder
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Wyatt built Northarion Partners after spending years managing paid acquisition for healthcare and direct-response brands. Having seen how most agencies failed clinics with generic playbooks, he set out to build something different — a firm focused exclusively on men's health, with systems designed around consultation economics.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Every engagement is personally overseen, and every system is built to match your clinic's capacity, margins, and growth timeline.
              </p>
              <div className="border-l-4 border-accent pl-5">
                <p className="text-foreground font-display font-600 text-sm italic">
                  "We don't scale by adding clients — we scale by deepening results for the ones we have."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
