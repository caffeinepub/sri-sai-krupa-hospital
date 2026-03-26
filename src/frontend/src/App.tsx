import { useState } from "react";
import CartDrawer from "./components/CartDrawer";
import CategoryStrip from "./components/CategoryStrip";
import EditorialSection from "./components/EditorialSection";
import FeaturedCollections from "./components/FeaturedCollections";
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
      <div className="min-h-screen bg-white">
        <Navbar onCartClick={() => setCartOpen(true)} />
        <HeroBanner />
        <CategoryStrip
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <section
          id="new-arrivals"
          className="py-16 px-4 md:px-8 max-w-screen-xl mx-auto"
        >
          <ProductGrid selectedCategory={selectedCategory} />
        </section>
        <EditorialSection />
        <FeaturedCollections />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
