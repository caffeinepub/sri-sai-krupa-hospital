import { Button } from "@/components/ui/button";
import { Calendar, ChevronDown, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hospital-hero.dim_1200x600.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-hospital-green rounded-full animate-pulse" />
            Sahakara Nagar, Bangalore
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
          >
            Sri Sai Krupa
            <span className="block text-hospital-teal-light mt-1">
              Hospital
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/85 text-lg sm:text-xl font-medium mb-2 leading-relaxed"
          >
            Compassionate Care, Trusted Healing
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-white/65 text-base mb-10 max-w-lg"
          >
            Your health is our highest priority. Serving Bangalore with expert
            medical care, modern facilities, and a compassionate team for over
            20 years.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#appointment")}
              size="lg"
              className="hospital-gradient text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition-opacity border-0 text-base"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
            <Button
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#contact")}
              size="lg"
              variant="outline"
              className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:text-white font-semibold px-8 py-3 rounded-full text-base"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { value: "500+", label: "Patients Monthly" },
              { value: "15+", label: "Specialists" },
              { value: "24/7", label: "Emergency Care" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          delay: 1.2,
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
