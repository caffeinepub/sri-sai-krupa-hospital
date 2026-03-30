import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CARDS = [
  { label: "Acne Treatment", gradient: "from-rose-100 via-pink-50 to-aqua" },
  {
    label: "Melasma Treatment",
    gradient: "from-amber-100 via-yellow-50 to-aqua",
  },
  { label: "PRP Hair Therapy", gradient: "from-teal-50 via-cyan-50 to-aqua" },
  { label: "Scar Revision", gradient: "from-purple-100 via-pink-50 to-aqua" },
];

export default function BeforeAfterSection() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="gallery" className="py-20 bg-aqua/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-12">
          <Badge className="bg-teal/10 text-teal border-teal/20 mb-3">
            Treatment Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Before &amp; After Gallery
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Results may vary. Consult your dermatologist for a personalized
            treatment plan.
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="before-after-card shadow-card border border-border"
            >
              {/* Before */}
              <div
                className={`h-36 bg-gradient-to-br ${card.gradient} opacity-70 flex items-end justify-start p-3`}
              >
                <span className="bg-white/90 text-xs font-bold text-foreground px-2 py-1 rounded-full">
                  Before
                </span>
              </div>
              {/* Divider */}
              <div className="bg-teal text-white text-center text-xs font-bold py-1.5 tracking-widest uppercase">
                {card.label}
              </div>
              {/* After */}
              <div
                className={`h-36 bg-gradient-to-tl ${card.gradient} flex items-end justify-end p-3`}
              >
                <span className="bg-teal text-white text-xs font-bold px-2 py-1 rounded-full">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          ⚠️ Actual patient photos not shown to protect privacy. Results are
          illustrative.
        </p>
      </div>
    </section>
  );
}
