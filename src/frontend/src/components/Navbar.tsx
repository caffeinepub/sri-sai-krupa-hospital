import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Leaf, MapPin, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onLoginClick: () => void;
  onNavigate: (page: "home" | "checkout") => void;
  currentPage: string;
}

export default function Navbar({
  onLoginClick,
  onNavigate,
  currentPage,
}: NavbarProps) {
  const { totalItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header
      className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm"
      data-ocid="navbar.section"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center h-16 gap-3">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2 shrink-0 mr-2"
            onClick={() => onNavigate("home")}
            data-ocid="navbar.link"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" strokeWidth={2.2} />
            </div>
            <span className="text-lg font-bold text-primary hidden sm:inline">
              FreshBasket
            </span>
          </button>

          {/* Delivery location pill */}
          <div className="hidden md:flex items-center gap-1 text-muted-foreground text-sm bg-muted rounded-full px-3 py-1.5 shrink-0">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Deliver to: Chennai</span>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-md hidden sm:block"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for groceries..."
                className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-full bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary focus:bg-white transition-all"
                data-ocid="navbar.search_input"
              />
            </div>
          </form>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            <button
              type="button"
              onClick={() => onNavigate("home")}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                currentPage === "home"
                  ? "text-primary bg-accent"
                  : "text-foreground hover:text-primary hover:bg-accent"
              }`}
              data-ocid="navbar.link"
            >
              Shop
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              data-ocid="navbar.link"
            >
              Deals
            </button>
            <button
              type="button"
              onClick={onLoginClick}
              className="px-3 py-1.5 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
              data-ocid="navbar.link"
            >
              My Account
            </button>
          </nav>

          {/* Cart button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-primary text-white px-3 sm:px-4 py-2 rounded-full text-sm font-semibold hover:bg-[oklch(var(--brand-green-hover))] transition-colors ml-2 shrink-0"
            data-ocid="navbar.button"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen((v) => !v)}
            data-ocid="navbar.toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search groceries..."
              className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-full bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              data-ocid="navbar.search_input"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-3 flex flex-col gap-1">
            <button
              type="button"
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
            >
              Shop Categories
            </button>
            <button
              type="button"
              className="text-left px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
            >
              Deals
            </button>
            <button
              type="button"
              onClick={() => {
                onLoginClick();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
            >
              My Account
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

// Unused import suppressor
export type { NavbarProps };
