import { Globe, Monitor, Palette } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Fully responsive, fast-loading websites built with modern technologies. Landing pages, business sites, and e-commerce solutions tailored to your needs.",
    bullets: ["Responsive Design", "SEO Optimized", "Fast Performance"],
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Memorable brand identities that tell your story. From concept to final vector files, I create logos that make lasting impressions.",
    bullets: ["Brand Identity", "Vector Formats", "Multiple Concepts"],
    color: "text-indigo",
    bg: "bg-secondary",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "User-centered interfaces designed in Figma. Research-driven UX combined with polished UI ensures your product delights every user.",
    bullets: ["Figma Prototypes", "User Research", "Wireframing"],
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-indigo uppercase tracking-widest mb-2">
            What I Offer
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Services
          </h2>
          <div className="mt-3 w-12 h-1 bg-indigo rounded mx-auto" />
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((svc) => (
            <div
              key={svc.title}
              className="service-card bg-card rounded-2xl p-8 border border-border shadow-card flex flex-col gap-5"
              data-ocid="services.card"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${svc.bg} flex items-center justify-center`}
              >
                <svc.icon className={`w-6 h-6 ${svc.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.description}
              </p>
              <ul className="flex flex-col gap-1.5 mt-auto">
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
