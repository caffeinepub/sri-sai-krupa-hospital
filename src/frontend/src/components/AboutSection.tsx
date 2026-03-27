import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Specialized IT and HR talent solutions",
  "Serving companies across Chennai and Tamil Nadu",
  "Expert consultants with deep industry knowledge",
  "End-to-end recruitment and technology services",
];

export default function AboutSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Logskim team at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-navy">
              <div className="text-2xl font-display font-bold">10+</div>
              <div className="text-xs opacity-80 mt-0.5">
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
                Who We Are
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
                Chennai's Trusted IT &amp; HR Solutions Partner
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Logskim Solution Pvt Ltd is a Chennai-based firm specializing in
              IT solutions and HR services. Located in the heart of Thousand
              Lights, we help businesses find the right talent and implement the
              right technology to grow and succeed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From software development consulting to talent acquisition and
              payroll management, our team brings together deep expertise and a
              client-first mindset to every engagement.
            </p>

            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <Button
              data-ocid="about.primary_button"
              onClick={() => handleScroll("contact")}
              className="bg-primary text-primary-foreground hover:bg-navy-dark rounded-xl px-7 font-semibold"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
