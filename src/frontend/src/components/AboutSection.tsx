import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Figma",
  "Adobe Illustrator",
  "Photoshop",
  "TypeScript",
  "Tailwind CSS",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            <div className="text-sm font-semibold text-indigo uppercase tracking-widest">
              About Me
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-snug">
              Passionate about crafting{" "}
              <span className="text-indigo">digital experiences</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Sam, a freelance web developer and designer with 3+ years
              of experience building modern, responsive websites and brand
              identities. I combine clean code with pixel-perfect design to
              deliver products that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From landing pages for startups to full-scale business websites, I
              help clients establish a strong online presence that drives real
              results.
            </p>

            {/* Skills */}
            <div>
              <div className="text-sm font-semibold text-foreground mb-3">
                Skills &amp; Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground border border-indigo/20 font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-indigo/5 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80"
              alt="Sam working at desk"
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-card"
            />
            {/* Decorative accent */}
            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-indigo/15" />
            <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-indigo/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
