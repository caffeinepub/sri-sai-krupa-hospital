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

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <HeroBanner />
        <CategoryStrip
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <ProductGrid selectedCategory={selectedCategory} />
        <DealsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
