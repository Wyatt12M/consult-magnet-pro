import heroImage from "@/assets/hero-clinic.jpg";
import { ArrowRight, TrendingUp, Users, Calendar, DollarSign } from "lucide-react";

const metrics = [
  { icon: Calendar, value: "38", label: "Consults Booked This Month", delay: "0.4s" },
  { icon: Users, value: "94%", label: "Show Rate", delay: "0.5s" },
  { icon: DollarSign, value: "$4,200", label: "Avg. Patient LTV", delay: "0.6s" },
  { icon: TrendingUp, value: "3.2×", label: "ROI on Acquisition Spend", delay: "0.7s" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern men's health clinic interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-dark/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Predictable Consultation Volume for Established Men's Health Clinics
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We design and manage structured patient acquisition systems that generate qualified TRT and medical weight loss consultations — without referral dependency or inconsistent marketing cycles.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-8 py-4 text-base font-semibold transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25"
              >
                Apply for a Private Growth Consultation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right — Floating metric cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-5 animate-fade-up"
                style={{ animationDelay: m.delay }}
              >
                <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                  <m.icon className="text-accent" size={18} />
                </div>
                <p className="font-display font-800 text-2xl text-primary-foreground mb-0.5">
                  {m.value}
                </p>
                <p className="text-primary-foreground/60 text-xs font-medium leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
