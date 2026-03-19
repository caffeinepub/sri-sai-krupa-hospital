import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <div className="w-9 h-9 rounded-lg gradient-teal flex items-center justify-center shadow-md">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">
              MedCare<span className="text-teal">Pro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPath === link.href
                    ? "text-teal bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button
                className="ml-3 gradient-teal text-white border-0 hover:opacity-90 font-semibold px-5"
                data-ocid="nav.primary_button"
              >
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-navy-dark/95 backdrop-blur-sm rounded-xl mx-2 mb-3 p-3 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-ocid="nav.link"
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === link.href
                    ? "text-teal bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <Button
                className="w-full mt-2 gradient-teal text-white border-0 font-semibold"
                data-ocid="nav.primary_button"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
