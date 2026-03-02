import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logoIcon} alt="Northarion Partners" className="h-7 w-7 object-contain brightness-0 invert" />
          <span className="font-display font-700 text-primary-foreground text-sm">Northarion Partners</span>
        </div>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Northarion Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
