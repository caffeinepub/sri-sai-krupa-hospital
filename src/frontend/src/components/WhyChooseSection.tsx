import { Heart, ShieldCheck, TrendingUp } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Expert Team",
    desc: "Our consultants bring years of specialized experience in both IT and HR domains, ensuring you receive advice that's practical and industry-tested.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "With hundreds of successful placements and technology projects delivered, Logskim has built a reputation for reliability and results.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    desc: "We listen before we act. Every engagement starts with understanding your unique needs — and ends only when you're satisfied with the outcome.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      data-ocid="whychoose.section"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            Our Edge
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Why Choose Logskim?
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-primary mx-auto" />
        </div>

        {/* Feature blocks */}
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              data-ocid="whychoose.card"
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-chip-bg flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <f.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
