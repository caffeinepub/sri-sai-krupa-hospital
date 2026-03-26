import { useState } from "react";
import CartDrawer from "./components/CartDrawer";
import CategoryStrip from "./components/CategoryStrip";
import DealsSection from "./components/DealsSection";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import ProductGrid from "./components/ProductGrid";
import TestimonialsSection from "./components/TestimonialsSection";
import { CartProvider } from "./context/CartContext";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar
          onCartClick={() => setCartOpen(true)}
          onSearch={setSearchQuery}
        />
        <HeroBanner />
        <CategoryStrip
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <main
          id="products"
          className="py-10 px-4 md:px-8 max-w-screen-xl mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl text-foreground">
              {selectedCategory === "All" ? "All Products" : selectedCategory}
            </h2>
          </div>
          <ProductGrid
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </main>
        <DealsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
