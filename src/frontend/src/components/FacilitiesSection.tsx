import {
  BedDouble,
  Building2,
  Heart,
  Pill,
  ScanLine,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const facilities = [
  {
    icon: Building2,
    name: "Operation Theatres",
    description:
      "Fully equipped modern OTs with laminar airflow systems and advanced surgical tools.",
    gradient: "from-blue-500/10 to-teal-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    name: "ICU & NICU",
    description:
      "Dedicated Intensive Care Units for adults and newborns with round-the-clock monitoring.",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: ScanLine,
    name: "Digital X-Ray & Lab",
    description:
      "State-of-the-art digital imaging and a fully automated pathology laboratory on-site.",
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: Pill,
    name: "24/7 Pharmacy",
    description:
      "In-house pharmacy stocked with a comprehensive range of medications, open around the clock.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Truck,
    name: "Ambulance Service",
    description:
      "Rapid-response ambulances equipped with life-support systems available for emergencies.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: BedDouble,
    name: "Comfortable Wards",
    description:
      "Well-ventilated private, semi-private, and general wards with attentive nursing care.",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-600",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hospital-gradient opacity-100" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Facilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Equipped with the latest technology and comfortable amenities to
            ensure the highest standards of patient care and safety.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.name}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors group"
              >
                <div
                  className={
                    "w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4"
                  }
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">
                  {facility.name}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
