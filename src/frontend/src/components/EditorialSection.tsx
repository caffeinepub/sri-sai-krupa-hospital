const CARDS = [
  {
    id: "winter-edit-1",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    title: "Curated Looks",
    text: "Discover our expertly styled winter ensembles — from après-ski chic to urban evening wear, every piece tells a story.",
    index: 1,
  },
  {
    id: "winter-edit-2",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    title: "Curated Looks",
    text: "Layering made effortless. Our stylists have combined textures, tones, and silhouettes to inspire your most confident season yet.",
    index: 2,
  },
];

export default function EditorialSection() {
  return (
    <section
      className="py-20 px-4 md:px-8 bg-luxe-cream"
      aria-label="Editorial section"
      data-ocid="editorial.section"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] text-luxe-gold uppercase mb-3">
            Editorial:
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-luxe-charcoal-mid uppercase tracking-wider">
            The Winter Edit
          </h2>
          <div className="w-12 h-px bg-luxe-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col"
              data-ocid={`editorial.card.${card.index}`}
            >
              <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-8 flex-1 flex flex-col">
                <p className="text-xs tracking-[0.25em] text-luxe-secondary uppercase mb-2">
                  The Winter Edit
                </p>
                <h3 className="font-serif text-2xl font-semibold text-luxe-charcoal-mid mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-luxe-secondary leading-relaxed mb-6 flex-1">
                  {card.text}
                </p>
                <button
                  type="button"
                  className="self-start px-8 py-2.5 border border-luxe-gold text-luxe-gold text-xs font-semibold tracking-widest uppercase hover:bg-luxe-gold hover:text-luxe-charcoal transition-all duration-300"
                  data-ocid={`editorial.button.${card.index}`}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
