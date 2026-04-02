import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="Northarion Partners" className="h-7 w-7 object-contain brightness-0 invert" />
          <span className="font-display font-700 text-primary-foreground text-sm">Northarion Partners</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="text-primary-foreground/40 text-xs hover:text-primary-foreground/70 transition-colors">
            Privacy Policy
          </a>
          <span className="text-primary-foreground/20">|</span>
          <a href="/terms" className="text-primary-foreground/40 text-xs hover:text-primary-foreground/70 transition-colors">
            Terms &amp; Conditions
          </a>
          <span className="text-primary-foreground/20">|</span>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Northarion Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
