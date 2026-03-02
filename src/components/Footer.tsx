import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Northarion Partners" className="h-8 w-auto" />
        <p className="text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Northarion Partners. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
