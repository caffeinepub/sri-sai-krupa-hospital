import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Fresh Fruits & Veggies",
    subtitle: "Farm-to-table goodness delivered to your door in under 2 hours.",
    cta: "Shop Now",
    badge: "🍎 Freshness Guaranteed",
    gradient: "from-emerald-700 via-green-600 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=900&q=80",
  },
  {
    id: 2,
    title: "Dairy & Bakery Essentials",
    subtitle:
      "Premium milk, artisan bread, and farm eggs — every morning staple you need.",
    cta: "Explore Now",
    badge: "🥛 Farm Fresh Daily",
    gradient: "from-green-800 via-emerald-600 to-green-400",
    image:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=900&q=80",
  },
  {
    id: 3,
    title: "Snacks & Beverages",
    subtitle:
      "Stock up on your favourite drinks, teas, juices, and healthy snacks.",
    cta: "Shop Deals",
    badge: "🧃 Big Savings Today",
    gradient: "from-teal-700 via-green-600 to-emerald-500",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "420px" }}
    >
      <div
        key={slide.id}
        className={`bg-gradient-to-r ${slide.gradient} min-h-[420px] md:min-h-[480px] flex items-center`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 w-full flex items-center justify-between gap-8">
          <div className="max-w-lg slide-in">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {slide.badge}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-4">
              {slide.title}
            </h1>
            <p className="text-white/85 text-lg mb-7 leading-relaxed">
              {slide.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-8"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-ocid="hero.primary_button"
            >
              {slide.cta}
            </Button>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl w-[380px] h-[300px] shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((s) => (
          <button
            type="button"
            key={s.id}
            onClick={() => setCurrent(SLIDES.indexOf(s))}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              s.id === SLIDES[current].id ? "bg-white w-6" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${s.id}`}
          />
        ))}
      </div>
    </section>
  );
}
