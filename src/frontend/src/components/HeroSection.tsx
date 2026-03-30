import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-lavender-card border border-indigo/20 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo animate-pulse" />
              <span className="text-sm text-indigo font-medium">
                Available for hire
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Hi, I&apos;m <span className="text-indigo">Sam</span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium">
              Web Developer · Logo Designer · UI/UX Expert
            </p>

            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              I build beautiful, responsive websites and craft stunning brand
              identities that help businesses grow and stand out online.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-indigo text-white hover:bg-indigo-dark shadow-card-hover"
                onClick={() => scrollTo("#portfolio")}
                data-ocid="hero.primary_button"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo text-indigo hover:bg-secondary"
                onClick={() => scrollTo("#contact")}
                data-ocid="hero.secondary_button"
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { num: "50+", label: "Projects Done" },
                { num: "30+", label: "Happy Clients" },
                { num: "3+", label: "Years Exp." },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-indigo">{s.num}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-indigo/10 -z-10" />
              <div className="absolute -inset-1 rounded-2xl border-2 border-indigo/20" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                alt="Sam — Web Developer & Designer"
                className="w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-2xl shadow-card-hover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-card px-4 py-3 border border-border animate-float">
                <div className="text-xs text-muted-foreground">
                  Latest Project
                </div>
                <div className="text-sm font-semibold text-foreground">
                  E-commerce UI
                </div>
                <div className="text-xs text-indigo">React + Figma</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
