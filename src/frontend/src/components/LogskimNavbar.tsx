import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function LogskimNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 90) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-navbar" : "border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => handleNav("#home")}
            className="flex flex-col items-start leading-tight focus-visible:outline-none"
          >
            <span className="text-xl font-display font-800 tracking-tight text-primary">
              LOGSKIM
            </span>
            <span className="text-[10px] font-sans text-muted-foreground tracking-widest uppercase">
              Solution Pvt Ltd
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid="nav.link"
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              type="button"
              data-ocid="nav.primary_button"
              onClick={() => handleNav("#contact")}
              className="bg-primary text-primary-foreground hover:bg-navy-dark rounded-lg px-5 text-sm font-semibold"
            >
              Get in Touch
            </Button>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-ocid="nav.modal"
          className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid="nav.link"
              onClick={() => handleNav(link.href)}
              className={`text-left px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                active === link.href
                  ? "text-primary font-semibold bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            type="button"
            data-ocid="nav.primary_button"
            onClick={() => handleNav("#contact")}
            className="mt-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold w-full"
          >
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
