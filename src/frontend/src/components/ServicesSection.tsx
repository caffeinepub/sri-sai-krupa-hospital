import { Code2, Users } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "HR Services",
    description:
      "Comprehensive human resources solutions tailored for growing businesses in Chennai and beyond.",
    bullets: [
      "Talent Acquisition & Recruitment",
      "Payroll Management",
      "Statutory Compliance",
      "Training & Development",
    ],
    chipColor: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-50",
  },
  {
    icon: Code2,
    title: "IT Solutions",
    description:
      "End-to-end technology services designed to modernize and scale your business operations.",
    bullets: [
      "Custom Software Development",
      "Technology Consulting",
      "Digital Transformation",
      "Ongoing IT Support",
    ],
    chipColor: "bg-indigo-50 text-indigo-700",
    iconBg: "bg-indigo-50",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="py-20 lg:py-28 bg-section-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Two pillars of expertise — HR and IT — working together to drive
            your business forward.
          </p>
          <div className="mt-4 w-12 h-1 rounded-full bg-primary mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((svc) => (
            <div
              key={svc.title}
              data-ocid="services.card"
              className="bg-white rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Icon chip */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${svc.iconBg}`}
              >
                <svc.icon size={26} className="text-primary" />
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {svc.description}
              </p>

              <ul className="space-y-2.5">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
