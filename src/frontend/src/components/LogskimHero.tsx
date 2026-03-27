import { Button } from "@/components/ui/button";

export default function LogskimHero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
        alt="Modern office"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.06_243/0.88)] via-[oklch(0.18_0.06_243/0.78)] to-[oklch(0.25_0.05_243/0.65)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
            IT Solutions &amp; HR Services · Chennai
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 fade-in-up">
          Empowering Careers &amp; Businesses
          <span className="block text-sky-300 mt-1">with Smart Solutions</span>
        </h1>

        <p className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up">
          IT solutions, HR services, and career development — all under one roof
          in Chennai. We bridge talent with opportunity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            data-ocid="hero.primary_button"
            onClick={() => handleScroll("services")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold rounded-xl px-8 py-6 text-base shadow-navy"
          >
            Explore Our Services
          </Button>
          <Button
            data-ocid="hero.secondary_button"
            onClick={() => handleScroll("contact")}
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white/10 rounded-xl px-8 py-6 text-base"
          >
            Contact Us
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { val: "500+", label: "Placements" },
            { val: "10+", label: "Years Active" },
            { val: "100+", label: "Clients Served" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                {s.val}
              </div>
              <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
