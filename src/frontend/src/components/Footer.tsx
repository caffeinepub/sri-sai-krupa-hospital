import { Heart, Mail, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();
const hostname = encodeURIComponent(
  typeof window !== "undefined" ? window.location.hostname : "localhost",
);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Book Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "General Medicine",
  "Pediatrics & Child Care",
  "Gynecology & Obstetrics",
  "General Surgery",
  "Orthopedics",
  "Emergency & Trauma",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Main footer */}
      <div className="hospital-gradient">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white/50" />
                </div>
                <div>
                  <span className="font-display font-bold text-white text-base block leading-tight">
                    Sri Sai Krupa
                  </span>
                  <span className="text-white/70 text-xs tracking-widest">
                    HOSPITAL
                  </span>
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-4">
                Compassionate Care, Trusted Healing. Serving Sahakara Nagar and
                surrounding areas of Bangalore for over 20 years.
              </p>
              <div className="flex items-center gap-1.5 text-white/70 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sahakara Nagar, Bangalore – 560092</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      data-ocid="nav.link"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/65 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => scrollTo("#services")}
                      className="text-white/65 hover:text-white text-sm transition-colors text-left"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                  <span className="text-white/65 text-sm">080-XXXX-XXXX</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                  <span className="text-white/65 text-sm">
                    info@srisaikrupahospital.com
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                  <span className="text-white/65 text-sm leading-relaxed">
                    Behind Semilar Research Center,
                    <br />
                    Sahakara Nagar, Bangalore – 560092
                  </span>
                </div>
              </div>

              {/* Emergency tag */}
              <div className="mt-5 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white text-xs font-semibold">
                  Emergency: 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-hospital-primary-dark/95 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/55 text-xs text-center sm:text-left">
            © {currentYear} Sri Sai Krupa Hospital. All rights reserved.
          </p>
          <p className="text-white/45 text-xs text-center">
            Built with{" "}
            <Heart className="inline w-3 h-3 text-rose-400 fill-rose-400 mx-0.5" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
