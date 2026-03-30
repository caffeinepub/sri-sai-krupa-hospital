import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Business Website",
    tag: "Web Development",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    id: 2,
    title: "Logo Design",
    tag: "Brand Identity",
    img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&q=80",
  },
  {
    id: 3,
    title: "Dashboard UI",
    tag: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    id: 4,
    title: "Mobile App Design",
    tag: "UI/UX · Figma",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
  },
];

export default function PortfolioSection() {
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
    <section id="portfolio" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-indigo uppercase tracking-widest mb-2">
            My Work
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Portfolio
          </h2>
          <p className="text-muted-foreground mt-2">
            Check Out My Recent Projects
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo rounded mx-auto" />
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="portfolio-card bg-background rounded-2xl overflow-hidden border border-border shadow-card cursor-pointer"
              data-ocid={`portfolio.item.${i + 1}`}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="overlay absolute inset-0 bg-indigo/80 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    View Project →
                  </span>
                </div>
              </div>
              {/* Card info */}
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.tag}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
