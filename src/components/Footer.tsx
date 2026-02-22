const Footer = () => {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-700 text-primary-foreground text-sm">
          ClinicGrowth
        </p>
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} ClinicGrowth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
