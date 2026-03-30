import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import type { ProductItem } from "@/data/products";
import { Check, Clock, Plus, Star, Truck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    title: "Fresh Groceries,\nDelivered to Your Doorstep.",
    subtitle: "Shop 500+ fresh products. Same-day delivery in Chennai.",
    bg: "/assets/generated/grocery-hero-banner.dim_1400x600.jpg",
    cta: "Shop Now",
  },
  {
    title: "Farm Fresh Fruits &\nVegetables Every Day.",
    subtitle: "Direct from farmers to your table. 100% fresh guarantee.",
    bg: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&q=80",
    cta: "Shop Produce",
  },
  {
    title: "Dairy, Snacks, Pantry\nEssentials & More.",
    subtitle: "Everything your kitchen needs — delivered in under 2 hours.",
    bg: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=1400&q=80",
    cta: "Explore All",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i <= rating ? "oklch(0.78 0.17 86)" : "transparent"}
          stroke={i <= rating ? "oklch(0.78 0.17 86)" : "oklch(0.52 0.01 264)"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ProductCard({
  product,
  index,
}: { product: ProductItem; index: number }) {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const inCart = items.find((i) => i.product.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div
      className="product-card bg-card rounded-2xl border border-border overflow-hidden flex flex-col"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="relative h-44 sm:h-48 overflow-hidden bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {inCart && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {inCart.quantity} in cart
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-3 sm:p-4 gap-2">
        <div>
          <p className="text-xs text-primary font-medium mb-0.5">
            {product.category}
          </p>
          <h3 className="text-sm sm:text-[15px] font-semibold text-foreground leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-muted-foreground">
            ({product.rating}.0)
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{product.unit}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg sm:text-xl font-bold text-foreground">
            ₹{product.price}
          </span>
          <Button
            size="sm"
            type="button"
            onClick={handleAdd}
            className={`text-xs font-semibold rounded-full transition-all ${
              justAdded
                ? "bg-green-600 text-white"
                : "bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white"
            }`}
            data-ocid={`products.button.${index + 1}`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1" />
                Added
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Home({ onCheckout }: { onCheckout: () => void }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    document.title = "FreshBasket — Fresh Groceries Delivered";
    const timer = setInterval(
      () => setHeroSlide((s) => (s + 1) % HERO_SLIDES.length),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const slide = HERO_SLIDES[heroSlide];

  return (
    <main data-ocid="home.page">
      {/* HERO */}
      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[460px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />
        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-[560px]">
            <p className="text-green-300 text-sm font-semibold mb-3 tracking-wide uppercase">
              🌿 Fresh &amp; Organic
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 whitespace-pre-line"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
            >
              {slide.title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base mb-6 max-w-[400px]">
              {slide.subtitle}
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 450, behavior: "smooth" })
                }
                className="bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                data-ocid="hero.primary_button"
              >
                {slide.cta}
              </button>
              <button
                type="button"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-2.5 rounded-full text-sm backdrop-blur-sm transition-colors border border-white/30"
                data-ocid="hero.secondary_button"
              >
                View Deals
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.cta}
              type="button"
              onClick={() => setHeroSlide(i)}
              className={`rounded-full transition-all ${
                i === heroSlide
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
            {[
              { icon: Truck, text: "Free Delivery on ₹299+" },
              { icon: Clock, text: "Delivery in 2 Hours" },
              { icon: Zap, text: "100% Fresh Guarantee" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY PILLS */}
      <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-4">
        <div
          className="flex gap-2.5 overflow-x-auto category-pills-scroll pb-1"
          data-ocid="categories.section"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === cat.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
              }`}
              data-ocid="categories.tab"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section
        className="max-w-[1200px] mx-auto px-6 pb-12"
        data-ocid="products.section"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            {activeCategory === "all" ? "All Products" : activeCategory}
          </h2>
          <p className="text-sm text-muted-foreground">
            {filteredProducts.length} items
          </p>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16" data-ocid="products.empty_state">
            <p className="text-muted-foreground">
              No products in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* PROMO BANNER */}
      <section className="bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-white/80 text-sm font-medium mb-1">
                Limited Time Offer
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Get 20% off on your first order!
              </h2>
              <p className="text-white/75 text-sm">
                Use code <span className="font-bold text-white">FRESH20</span>{" "}
                at checkout
              </p>
            </div>
            <button
              type="button"
              onClick={onCheckout}
              className="bg-white text-primary font-bold px-8 py-3 rounded-full text-sm hover:bg-white/90 transition-colors shrink-0"
              data-ocid="promo.primary_button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
