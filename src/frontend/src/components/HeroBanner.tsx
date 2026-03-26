import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Fresh Vegetables",
    subtitle: "& Fruits",
    desc: "Farm-to-door freshness guaranteed. Order before 10 AM for same-day delivery!",
    cta: "Shop Now",
    badge: "New Arrivals 🌱",
    gradient: "from-emerald-500 via-green-400 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
  },
  {
    id: 2,
    title: "Free Delivery",
    subtitle: "on First Order",
    desc: "No minimum order value. Get your groceries delivered in 30 minutes flat.",
    cta: "Order Now",
    badge: "Limited Offer 🚀",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&q=80",
  },
  {
    id: 3,
    title: "Organic Products",
    subtitle: "20% Off Today",
    desc: "Certified organic produce. No pesticides, no chemicals — just pure goodness.",
    cta: "Explore",
    badge: "Organic Certified 🌿",
    gradient: "from-teal-500 via-cyan-400 to-sky-400",
    image:
      "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=600&q=80",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        setAnimKey((k) => k + 1);
        return (prev + 1) % SLIDES.length;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      className="mt-[104px] md:mt-16 relative overflow-hidden"
      data-ocid="hero.section"
    >
      <div
        className={`relative bg-gradient-to-br ${slide.gradient} min-h-[340px] md:min-h-[420px] transition-all duration-500`}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 flex items-center">
          <div key={animKey} className="slide-in flex-1 max-w-lg">
            <span className="inline-block bg-white/25 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              {slide.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-display">
              {slide.title}
              <br />
              <span className="text-white/90">{slide.subtitle}</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/85 max-w-sm">
              {slide.desc}
            </p>
            <button
              type="button"
              className="mt-6 bg-white text-gray-800 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg text-base"
              data-ocid="hero.primary_button"
            >
              {slide.cta} →
            </button>
          </div>

          <div
            key={`img-${animKey}`}
            className="hidden lg:block slide-in ml-auto"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-72 h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 text-white rounded-full p-2 transition-colors backdrop-blur"
          data-ocid="hero.pagination_prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/25 hover:bg-white/50 text-white rounded-full p-2 transition-colors backdrop-blur"
          data-ocid="hero.pagination_next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              type="button"
              key={s.id}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
