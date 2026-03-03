import {
  Activity,
  Baby,
  Bone,
  FlaskConical,
  HeartPulse,
  Scissors,
  Siren,
  Stethoscope,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Stethoscope,
    name: "General Medicine",
    description:
      "Comprehensive diagnosis and treatment for common illnesses, chronic diseases, and preventive health care.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Baby,
    name: "Pediatrics & Child Care",
    description:
      "Specialized medical care for infants, children, and adolescents with a gentle, child-friendly approach.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: HeartPulse,
    name: "Gynecology & Obstetrics",
    description:
      "Expert care for women's health including prenatal care, delivery, and reproductive health services.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Scissors,
    name: "General Surgery",
    description:
      "Minimally invasive and open surgical procedures performed by experienced surgeons in modern operation theatres.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description:
      "Treatment of bone, joint, and muscle conditions including fractures, arthritis, and sports injuries.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Siren,
    name: "Emergency & Trauma Care",
    description:
      "Round-the-clock emergency services with a trained trauma team ready to respond to critical situations.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: FlaskConical,
    name: "Diagnostics & Lab",
    description:
      "Advanced in-house diagnostic laboratory for accurate blood tests, imaging, and pathology services.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Activity,
    name: "Physiotherapy",
    description:
      "Rehabilitation and physiotherapy programs to restore mobility, reduce pain, and improve quality of life.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 section-alt-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-hospital-teal-light text-hospital-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Comprehensive Medical{" "}
            <span className="text-gradient-teal">Specialties</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            From routine consultations to complex procedures, our
            multi-specialty team delivers expert care across a wide range of
            medical disciplines.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 border border-border card-hover shadow-xs group"
              >
                <div
                  className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2 group-hover:text-hospital-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
