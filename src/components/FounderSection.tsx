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
                Wyatt Murdock founded Northarion Partners with one focus: helping independent men's health clinics build predictable consultation volume for TRT and medical weight loss programs.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Most agencies sell marketing. Northarion sells a system — built around your patient economics, your clinical capacity, and your recurring revenue goals.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Every client engagement is personally overseen. No account managers. No handoffs. No generic playbooks.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                If your consultation calendar isn't as full or as predictable as your clinical capacity deserves, that's the problem Northarion was built to solve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
