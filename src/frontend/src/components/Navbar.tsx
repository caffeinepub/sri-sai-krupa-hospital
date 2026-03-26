import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const PORTFOLIO_URL =
  "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2";

const PROJECT_LINKS = [
  {
    label: "FreshCart – Grocery E-Commerce",
    href: "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=1dd7de9da5f1700ee5c877085f04a2438f0fdc0f0c016f80d080a89584da48c4",
  },
  {
    label: "LuxeWear – Fashion Store",
    href: "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2",
  },
];

const NAV_LINKS = [
  { label: "NEW ARRIVALS", href: "#new-arrivals" },
  { label: "WOMEN", href: "#new-arrivals" },
  { label: "MEN", href: "#new-arrivals" },
  { label: "ACCESSORIES", href: "#new-arrivals" },
  { label: "SALE", href: "#new-arrivals" },
];

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-luxe-charcoal shadow-navbar"
      data-ocid="nav.section"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          className="font-serif text-luxe-gold text-2xl font-bold tracking-widest uppercase shrink-0"
          data-ocid="nav.link"
        >
          LuxeWear
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-luxe-gold text-xs font-medium tracking-widest px-3 py-2 transition-colors duration-200 uppercase"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="text-white/70 hover:text-luxe-gold transition-colors duration-200 p-1"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="hidden sm:block text-white/70 hover:text-luxe-gold transition-colors duration-200 p-1"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label={`Cart (${cartCount} items)`}
            onClick={onCartClick}
            className="relative text-white/70 hover:text-luxe-gold transition-colors duration-200 p-1"
            data-ocid="nav.button"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-luxe-gold text-luxe-charcoal text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center badge-pop">
                {cartCount}
              </span>
            )}
          </button>

          {/* Projects dropdown */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setProjectsOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-luxe-charcoal transition-all duration-300"
              data-ocid="nav.primary_button"
            >
              View My Portfolio
              <span className="ml-1 text-[10px]">
                {projectsOpen ? "▲" : "▼"}
              </span>
            </button>
            {projectsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-luxe-charcoal border border-luxe-gold/40 shadow-xl z-50">
                <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase px-4 pt-3 pb-1">
                  My Projects
                </p>
                <ul>
                  {PROJECT_LINKS.map((p) => (
                    <li key={p.label}>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setProjectsOpen(false)}
                        className="block px-4 py-3 text-xs text-white/70 hover:text-luxe-gold hover:bg-white/5 tracking-wide transition-colors border-t border-white/10"
                      >
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-4 py-3 text-[10px] text-luxe-gold/60 hover:text-luxe-gold tracking-widest uppercase border-t border-white/10 transition-colors"
                >
                  → Open Full Portfolio
                </a>
              </div>
            )}
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden text-white/70 hover:text-luxe-gold transition-colors p-1"
            onClick={() => setMenuOpen((v) => !v)}
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden bg-luxe-charcoal border-t border-white/10 px-4 pb-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-luxe-gold text-xs tracking-widest py-3 border-b border-white/10 uppercase"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase pt-4 pb-1">
            My Projects
          </p>
          {PROJECT_LINKS.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block text-white/70 hover:text-luxe-gold text-xs tracking-wide py-3 border-b border-white/10"
            >
              {p.label}
            </a>
          ))}
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center px-4 py-3 text-xs font-semibold tracking-widest uppercase border border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-luxe-charcoal transition-all duration-300"
            data-ocid="nav.primary_button"
          >
            Open Full Portfolio
          </a>
        </nav>
      )}
    </header>
  );
}
