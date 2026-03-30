import CartDrawer from "@/components/CartDrawer";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import { Heart, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import "./index.css";

type Page = "home" | "checkout";

function AppContent() {
  const [page, setPage] = useState<Page>("home");
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.includes("checkout")) setPage("checkout");
      else setPage("home");
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onNavigate={navigate}
        currentPage={page}
      />

      <div className="flex-1">
        {page === "home" && <Home onCheckout={() => navigate("checkout")} />}
        {page === "checkout" && <Checkout onBack={() => navigate("home")} />}
      </div>

      {/* Footer */}
      <footer className="bg-[#1a2e1c] text-white mt-auto">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" strokeWidth={2.2} />
                </div>
                <span className="text-xl font-bold text-white">
                  FreshBasket
                </span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed max-w-[220px]">
                Fresh groceries delivered fast. Farm to doorstep in under 2
                hours.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  "Shop All",
                  "Deals & Offers",
                  "New Arrivals",
                  "Best Sellers",
                ].map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-white/55 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2.5">
                {[
                  "Help Center",
                  "Track Order",
                  "Return Policy",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-white/55 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li className="text-white/55 text-sm">📞 +91 99999 00000</li>
                <li className="text-white/55 text-sm">
                  ✉️ hello@freshbasket.in
                </li>
                <li className="text-white/55 text-sm">
                  📍 Chennai, Tamil Nadu
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
            <span>
              © {new Date().getFullYear()} FreshBasket. All rights reserved.
            </span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-400 fill-red-400" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </span>
          </div>
        </div>
      </footer>

      <CartDrawer onCheckout={() => navigate("checkout")} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
