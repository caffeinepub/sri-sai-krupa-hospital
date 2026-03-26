import { MapPin, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [badgeAnim, setBadgeAnim] = useState(false);
  const [prevCount, setPrevCount] = useState(cartCount);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (cartCount > prevCount) {
      setBadgeAnim(true);
      setTimeout(() => setBadgeAnim(false), 350);
    }
    setPrevCount(cartCount);
  }, [cartCount, prevCount]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-navbar" : "border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl">🛒</span>
            <span className="text-xl font-bold text-fresh-green font-display">
              FreshCart
            </span>
          </a>

          {/* Delivery location */}
          <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground border border-border rounded-full px-3 py-1 flex-shrink-0">
            <MapPin className="w-3.5 h-3.5 text-fresh-green" />
            <span className="text-xs">Deliver to:</span>
            <span className="text-xs font-semibold text-foreground">
              Your Location
            </span>
          </div>

          {/* Search bar — desktop */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for vegetables, fruits, dairy…"
                className="w-full pl-10 pr-4 py-2 text-sm bg-fresh-section border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                data-ocid="nav.search_input"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-fresh-section transition-colors"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <button
              type="button"
              className="hidden sm:flex items-center gap-1 px-4 py-1.5 text-sm font-semibold border-2 border-fresh-green text-fresh-green rounded-full hover:bg-fresh-green-light transition-colors"
              data-ocid="nav.login_button"
            >
              Login
            </button>

            <button
              type="button"
              onClick={onCartClick}
              className="relative flex items-center gap-2 bg-fresh-green hover:bg-fresh-green-dark text-white px-4 py-2 rounded-full transition-colors text-sm font-semibold"
              data-ocid="nav.cart_button"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span
                  className={`absolute -top-2 -right-2 bg-fresh-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ${
                    badgeAnim ? "badge-pop" : ""
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="sm:hidden p-2 rounded-lg hover:bg-fresh-section transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search groceries…"
              className="w-full pl-10 pr-4 py-2 text-sm bg-fresh-section border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="sm:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-fresh-green" />
            <span className="text-muted-foreground">Deliver to: </span>
            <span className="font-semibold">Your Location</span>
          </div>
          <button
            type="button"
            className="w-full py-2 border-2 border-fresh-green text-fresh-green font-semibold rounded-full text-sm hover:bg-fresh-green-light transition-colors"
          >
            Login
          </button>
        </div>
      )}
    </header>
  );
}
