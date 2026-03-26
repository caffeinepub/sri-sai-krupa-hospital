const COLLECTIONS = [
  {
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000&q=80",
    label: "WOMEN'S COLLECTION",
    title: "The Heritage Collection",
    sub: "Timeless pieces rooted in tradition",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=1000&q=80",
    label: "MEN'S COLLECTION",
    title: "Modern Minimalism",
    sub: "Clean lines. Refined silhouettes.",
  },
];

export default function FeaturedCollections() {
  return (
    <section
      className="py-20 px-4 md:px-8 bg-white"
      aria-label="Featured collections"
      data-ocid="collections.section"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] text-luxe-gold uppercase mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-luxe-charcoal-mid uppercase tracking-wider">
            Featured Collections
          </h2>
          <div className="w-12 h-px bg-luxe-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLLECTIONS.map((col, i) => (
            <div
              key={col.title}
              className="relative group overflow-hidden"
              style={{ aspectRatio: "16/9" }}
              data-ocid={`collections.card.${i + 1}`}
            >
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="text-luxe-gold text-[10px] tracking-[0.3em] uppercase mb-3">
                  {col.label}
                </p>
                <h3 className="font-serif text-white text-2xl md:text-3xl font-semibold mb-3">
                  {col.title}
                </h3>
                <p className="text-white/70 text-xs tracking-wider mb-6">
                  {col.sub}
                </p>
                <button
                  type="button"
                  className="px-8 py-2.5 border border-white text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-luxe-charcoal transition-all duration-300"
                  data-ocid={`collections.button.${i + 1}`}
                >
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
