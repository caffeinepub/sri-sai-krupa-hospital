import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const doctors = [
  {
    name: "Dr. Ramesh Kumar",
    specialty: "General Medicine",
    qualification: "MBBS, MD – Internal Medicine",
    experience: "18 years",
    image: "/assets/generated/doctor-male.dim_300x300.jpg",
    availability: "Mon – Sat",
    ocid: "doctors.item.1",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Gynecology & Obstetrics",
    qualification: "MBBS, MS – Obstetrics & Gynecology",
    experience: "14 years",
    image: "/assets/generated/doctor-female.dim_300x300.jpg",
    availability: "Mon – Fri",
    ocid: "doctors.item.2",
  },
  {
    name: "Dr. Suresh Naik",
    specialty: "Orthopedics",
    qualification: "MBBS, MS – Orthopedic Surgery",
    experience: "16 years",
    image: "/assets/generated/doctor-male.dim_300x300.jpg",
    availability: "Tue – Sat",
    ocid: "doctors.item.3",
  },
  {
    name: "Dr. Anitha Reddy",
    specialty: "Pediatrics",
    qualification: "MBBS, MD – Pediatrics",
    experience: "12 years",
    image: "/assets/generated/doctor-female.dim_300x300.jpg",
    availability: "Mon – Sat",
    ocid: "doctors.item.4",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white">
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
            Our Doctors
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient-teal">Expert Team</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Our team of highly qualified and compassionate doctors are committed
            to providing personalized care with the latest medical expertise.
          </p>
        </motion.div>

        {/* Doctor cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              data-ocid={doctor.ocid}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-border shadow-xs overflow-hidden card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square bg-hospital-teal-light">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospital-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-base mb-1">
                  {doctor.name}
                </h3>
                <Badge className="bg-hospital-teal-light text-hospital-primary border-0 text-xs font-semibold mb-3">
                  {doctor.specialty}
                </Badge>
                <div className="flex items-start gap-2 text-muted-foreground text-xs mb-2">
                  <GraduationCap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-hospital-teal" />
                  <span>{doctor.qualification}</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {doctor.experience} exp.
                  </span>
                  <span className="text-xs font-medium text-hospital-green">
                    {doctor.availability}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
