import { CheckCircle2, MapPin } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Patients Monthly", sub: "Trusted by families" },
  { value: "15+", label: "Expert Doctors", sub: "Certified specialists" },
  { value: "24/7", label: "Emergency Care", sub: "Always ready" },
  { value: "20+", label: "Years Experience", sub: "Serving Bangalore" },
];

const values = [
  "Compassionate patient-centered care",
  "Advanced diagnostic technology",
  "Transparent and affordable treatment",
  "Holistic approach to wellness",
  "Experienced and dedicated medical team",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-hospital-teal-light text-hospital-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              About Us
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-5">
              Dedicated to Your Health &{" "}
              <span className="text-gradient-teal">Well-being</span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Established over two decades ago, Sri Sai Krupa Hospital has been
              a cornerstone of healthcare in Sahakara Nagar, Bangalore. We are
              committed to providing exceptional medical care with compassion
              and integrity, blending modern medicine with a personal touch.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Located conveniently behind Semilar Research Center, our
              state-of-the-art facility is equipped to handle everything from
              routine check-ups to complex surgical procedures, ensuring your
              family receives the best care close to home.
            </p>

            {/* Values */}
            <ul className="space-y-2.5 mb-6">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-hospital-green mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/75 text-sm">{val}</span>
                </li>
              ))}
            </ul>

            {/* Location badge */}
            <div className="flex items-start gap-3 bg-secondary/60 rounded-xl p-4 border border-border">
              <MapPin className="w-5 h-5 text-hospital-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Behind Semilar Research Center
                </p>
                <p className="text-sm text-muted-foreground">
                  Sahakara Nagar, Bangalore – 560092
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="stat-card-bg rounded-2xl p-6 lg:p-8 text-center teal-glow"
              >
                <div className="font-display text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/90 font-semibold text-sm mb-0.5">
                  {stat.label}
                </div>
                <div className="text-white/55 text-xs">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
