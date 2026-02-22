import { useState } from "react";
import { Menu, X } from "lucide-react";

const CTA_URL = "#book";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="/" className="font-display font-800 text-xl tracking-tight text-primary">
          ClinicGrowth
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">The Problem</a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
          <a
            href={CTA_URL}
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2 text-sm font-medium transition-colors hover:bg-navy-light"
          >
            Book a Growth Call
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#problem" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-muted-foreground">The Problem</a>
          <a href="#results" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-muted-foreground">Results</a>
          <a href="#how" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-muted-foreground">How It Works</a>
          <a href="#why" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-muted-foreground">Why Us</a>
          <a
            href={CTA_URL}
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
          >
            Book a Growth Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
