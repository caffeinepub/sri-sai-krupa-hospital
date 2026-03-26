import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "slide-arrivals",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    kicker: "NEW SEASON ARRIVALS",
    headline: "LuxeWear\nCollection.",
    sub: "DISCOVER THE ART OF MODERN LUXURY.",
    cta: "SHOP NOW",
  },
  {
    id: "slide-elegance",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80",
    kicker: "ELEVATE YOUR STYLE",
    headline: "Timeless\nElegance.",
    sub: "PREMIUM PIECES CURATED FOR YOU.",
    cta: "EXPLORE",
  },
  {
    id: "slide-winter",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
    kicker: "THE WINTER EDIT",
    headline: "Crafted for\nCold Nights.",
    sub: "LUXURY COATS & KNITWEAR AWAIT.",
    cta: "VIEW COLLECTION",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section
      className="relative w-full h-[85vh] min-h-[560px] overflow-hidden"
      aria-label="Hero banner"
      data-ocid="hero.section"
    >
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.headline}
            className="w-full h-full object-cover object-top"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full max-w-screen-xl mx-auto px-6 md:px-12 flex items-center">
        <div key={current} className="slide-in max-w-xl">
          <p className="text-luxe-gold text-xs font-medium tracking-[0.3em] uppercase mb-4">
            {slide.kicker}
          </p>
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
            {slide.headline}
          </h1>
          <p className="text-white/70 text-xs sm:text-sm tracking-[0.25em] uppercase mb-8">
            {slide.sub}
          </p>
          <a
            href="#new-arrivals"
            className="gold-btn inline-block px-10 py-3 text-xs font-bold tracking-[0.25em] uppercase"
            data-ocid="hero.primary_button"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-luxe-gold/80 text-white flex items-center justify-center transition-colors duration-300"
        data-ocid="hero.secondary_button"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/30 hover:bg-luxe-gold/80 text-white flex items-center justify-center transition-colors duration-300"
        data-ocid="hero.secondary_button"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-1.5 bg-luxe-gold"
                : "w-2 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
