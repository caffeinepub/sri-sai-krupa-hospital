import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full hospital-gradient flex items-center justify-center shadow-sm">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <div className="text-left">
            <span
              className={`font-display font-bold text-base lg:text-lg leading-tight block transition-colors ${
                isScrolled ? "text-hospital-primary" : "text-white"
              }`}
            >
              Sri Sai Krupa
            </span>
            <span
              className={`text-xs font-medium tracking-wide block transition-colors ${
                isScrolled ? "text-hospital-teal" : "text-white/80"
              }`}
            >
              HOSPITAL
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => scrollTo(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-hospital-teal ${
                  isScrolled
                    ? "text-foreground/80 hover:bg-hospital-teal/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            data-ocid="nav.primary_button"
            onClick={() => scrollTo("#appointment")}
            className="hospital-gradient text-white font-semibold px-5 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity border-0"
          >
            Book Appointment
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`lg:hidden p-2 rounded-md transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid="nav.link"
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-foreground/80 hover:text-hospital-primary hover:bg-hospital-teal/10 rounded-md transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                data-ocid="nav.primary_button"
                onClick={() => scrollTo("#appointment")}
                className="mt-2 hospital-gradient text-white font-semibold rounded-full border-0"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
