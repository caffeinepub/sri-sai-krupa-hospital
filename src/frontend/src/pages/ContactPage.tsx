import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useSEO } from "../hooks/useSEO";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: [
      "123 Healthcare Avenue",
      "Medical District, Sahakara Nagar",
      "Bangalore — 560092",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [
      "+91 80 4567 8901 (OPD)",
      "+91 80 4567 8902 (Emergency)",
      "Toll Free: 1800-XXX-XXXX",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      "info@medcarepro.in",
      "appointments@medcarepro.in",
      "emergency@medcarepro.in",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      "OPD: Mon–Sat, 8AM – 8PM",
      "Emergency: 24/7",
      "Sunday: Emergency only",
    ],
  },
];

export default function ContactPage() {
  useSEO({
    title: "Contact MedCarePro — Book an Appointment",
    description:
      "Contact MedCarePro Hospital in Bangalore. Book an appointment, reach our emergency line, or send us a message. Available 24/7 for emergencies.",
    ogTitle: "Contact MedCarePro",
    ogDescription:
      "Book your appointment or get in touch with our patient care team.",
  });

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Book an appointment, inquire about services, or reach our 24/7
            emergency team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <h2 className="font-display font-semibold text-2xl text-foreground mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              {contactInfo.map(({ icon: Icon, title, lines }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-5 card-shadow border border-border flex gap-4"
                  data-ocid="contact.card"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {title}
                    </h3>
                    {lines.map((l) => (
                      <p key={l} className="text-muted-foreground text-sm">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Emergency banner */}
              <div className="gradient-teal rounded-xl p-5 text-white">
                <p className="font-semibold mb-1">🚨 Medical Emergency?</p>
                <p className="text-white/80 text-sm mb-3">
                  Call our emergency line immediately — available 24/7.
                </p>
                <a
                  href="tel:+918045678902"
                  className="inline-block bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
                  data-ocid="contact.primary_button"
                >
                  +91 80 4567 8902
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">
              123 Healthcare Avenue, Sahakara Nagar, Bangalore 560092
            </p>
            <a
              href="https://maps.google.com/?q=Sahakara+Nagar+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-teal hover:underline text-sm font-medium"
              data-ocid="contact.link"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
