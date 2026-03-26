import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, MapPin, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";

interface NavbarProps {
  onCartClick: () => void;
  onSearch?: (query: string) => void;
}

export default function Navbar({ onCartClick, onSearch }: NavbarProps) {
  const { cartCount } = useCart();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchValue);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-navbar">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-3 h-16">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2 shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-ocid="navbar.button"
          >
            <span className="text-2xl">🛒</span>
            <span className="font-display font-bold text-xl text-primary-foreground tracking-tight">
              FreshCart
            </span>
          </button>

          {/* Delivery location pill */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/10 text-primary-foreground text-sm px-3 py-1.5 rounded-full shrink-0">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-medium">Bengaluru</span>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 hidden sm:flex">
            <div className="relative w-full max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search for groceries..."
                className="pl-9 h-9 bg-white border-0 rounded-full text-sm focus-visible:ring-2 focus-visible:ring-white/50"
                data-ocid="navbar.search_input"
              />
            </div>
          </form>

          <div className="ml-auto flex items-center gap-2">
            {/* Portfolio link */}
            <a
              href="https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-primary-foreground/90 hover:text-primary-foreground text-sm font-semibold transition-colors"
              data-ocid="navbar.link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              VIEW MY PORTFOLIO
            </a>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative text-primary-foreground hover:bg-white/20"
              data-ocid="navbar.button"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-fresh-orange text-white text-xs font-bold rounded-full flex items-center justify-center badge-pop">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
