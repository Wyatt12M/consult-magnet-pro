const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-warm-gray">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Selective Partnerships
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight mb-6">
            Selective Partnerships
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We partner with a limited number of men's health clinics per region.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            We do not operate across unrelated industries.
          </p>

          <div className="border-l-4 border-accent pl-6">
            <p className="text-foreground font-display font-600 text-base mb-1">
              Our focus is singular:
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Building predictable, margin-aligned consultation systems for established clinics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
