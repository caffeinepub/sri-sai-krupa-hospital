import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
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
            Contact Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient-teal">Touch</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            We're here whenever you need us. Reach out for appointments,
            emergencies, or general inquiries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            {/* Address */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-11 h-11 bg-hospital-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-hospital-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Behind Semilar Research Center,
                  <br />
                  Sahakara Nagar, Bangalore – 560092
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-11 h-11 bg-hospital-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-hospital-green" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Phone
                </h3>
                <p className="text-muted-foreground text-sm">
                  Main: 080-XXXX-XXXX
                </p>
                <p className="text-muted-foreground text-sm">
                  Emergency: 080-YYYY-YYYY (24/7)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-11 h-11 bg-hospital-teal-light rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-hospital-teal" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Email
                </h3>
                <p className="text-muted-foreground text-sm">
                  info@srisaikrupahospital.com
                </p>
                <p className="text-muted-foreground text-sm">
                  appointments@srisaikrupahospital.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-secondary/50 rounded-2xl p-6 border border-border flex items-start gap-4">
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  Working Hours
                </h3>
                <div className="space-y-0.5 text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground/80">
                      Mon – Sat:
                    </span>{" "}
                    8:00 AM – 8:00 PM
                  </p>
                  <p>
                    <span className="font-medium text-foreground/80">
                      Sunday:
                    </span>{" "}
                    9:00 AM – 2:00 PM
                  </p>
                  <p className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium text-green-700">
                      Emergency: 24/7
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-3xl overflow-hidden border border-border shadow-xs min-h-[400px] lg:min-h-0 relative"
          >
            {/* Styled map placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
              {/* Grid lines simulating map */}
              <svg
                aria-hidden="true"
                role="presentation"
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    x="0"
                    y="0"
                    width="50"
                    height="50"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="oklch(0.35 0.12 220)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                {/* Road lines */}
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="oklch(0.52 0.10 220)"
                  strokeWidth="4"
                  opacity="0.3"
                />
                <line
                  x1="35%"
                  y1="0"
                  x2="35%"
                  y2="100%"
                  stroke="oklch(0.52 0.10 220)"
                  strokeWidth="3"
                  opacity="0.25"
                />
                <line
                  x1="70%"
                  y1="0"
                  x2="70%"
                  y2="100%"
                  stroke="oklch(0.52 0.10 220)"
                  strokeWidth="2"
                  opacity="0.2"
                />
                <line
                  x1="0"
                  y1="25%"
                  x2="100%"
                  y2="25%"
                  stroke="oklch(0.52 0.10 220)"
                  strokeWidth="2"
                  opacity="0.2"
                />
                <line
                  x1="0"
                  y1="75%"
                  x2="100%"
                  y2="75%"
                  stroke="oklch(0.52 0.10 220)"
                  strokeWidth="2"
                  opacity="0.2"
                />
              </svg>
            </div>

            {/* Pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-14 h-14 hospital-gradient rounded-full flex items-center justify-center shadow-xl">
                    <Navigation className="w-7 h-7 text-white fill-white/30" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 hospital-gradient rotate-45 shadow-sm" />
                  {/* Ripple */}
                  <div className="absolute inset-0 rounded-full bg-hospital-primary/20 animate-ping" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-border shadow-md px-6 py-4 max-w-xs">
                  <p className="font-display font-bold text-hospital-primary text-sm">
                    Sri Sai Krupa Hospital
                  </p>
                  <p className="text-muted-foreground text-xs mt-1 leading-snug">
                    Behind Semilar Research Center,
                    <br />
                    Sahakara Nagar, Bangalore – 560092
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Sri+Sai+Krupa+Hospital+Sahakara+Nagar+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.link"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-hospital-primary hover:underline"
                  >
                    <MapPin className="w-3 h-3" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
