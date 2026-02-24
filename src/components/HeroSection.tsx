import heroImage from "@/assets/hero-clinic.jpg";
import { ArrowRight } from "lucide-react";

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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Predictable Consultation Volume for Independent Men's Health Clinics
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We design and manage patient acquisition systems that generate qualified TRT and medical weight loss consultations — without referral dependency or inconsistent marketing.
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
      </div>
    </section>
  );
};

export default HeroSection;
