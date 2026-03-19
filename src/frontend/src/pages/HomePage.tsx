import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Ambulance,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  CheckCircle,
  ChevronRight,
  Eye,
  Heart,
  Microscope,
  Star,
  Stethoscope,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import StatsBar from "../components/StatsBar";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const featuredServices = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Expert cardiac care with state-of-the-art diagnostic tools, interventional cardiology, and preventive heart health programs.",
  },
  {
    icon: Brain,
    title: "Neurology",
    description:
      "Comprehensive brain and spine care with advanced neuroimaging, epilepsy management, and stroke intervention services.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Complete musculoskeletal care including joint replacement, sports medicine, and minimally invasive spine procedures.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Cardiac Patient",
    content:
      "The cardiology team at MedCarePro saved my life. Their quick response and expert care during my heart episode was exceptional.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Orthopedic Patient",
    content:
      "After years of knee pain, Dr. Mehta's minimally invasive surgery changed my life. I was walking without pain within 2 weeks!",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Pediatric Parent",
    content:
      "The pediatric team is incredibly patient and caring. My daughter actually looks forward to her checkups now.",
    rating: 5,
  },
];

export default function HomePage() {
  useSEO({
    title: "MedCarePro — World-Class Healthcare in Bangalore",
    description:
      "MedCarePro offers comprehensive medical services with 85+ expert doctors, 15,000+ patients served, and 98% satisfaction rate. Book your appointment today.",
    ogTitle: "MedCarePro — World-Class Healthcare in Bangalore",
    ogDescription:
      "Expert healthcare with compassion. Cardiology, Neurology, Orthopedics and 20+ specialties.",
  });

  const servicesRef = useScrollReveal<HTMLDivElement>();
  const testimonialsRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.section"
      >
        {/* Overlay */}
        <div className="absolute inset-0 gradient-hero" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Trusted Healthcare Since 2005
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Your Health, <span className="text-teal">Our Priority</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            World-class medical care delivered with compassion. From preventive
            health checks to advanced surgical procedures — MedCarePro is your
            partner in wellness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-teal text-white border-0 hover:opacity-90 font-semibold px-8 py-6 text-base"
                data-ocid="home.primary_button"
              >
                Book Appointment <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-semibold px-8 py-6 text-base"
                data-ocid="home.secondary_button"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Preview */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Expert Medical Specialties
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer 20+ medical specialties with cutting-edge technology and
              a team of 85+ experienced physicians.
            </p>
          </div>
          <div
            ref={servicesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger reveal mb-10"
          >
            {featuredServices.map((svc, i) => (
              <ServiceCard key={svc.title} {...svc} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8"
                data-ocid="home.secondary_button"
              >
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
                Why MedCarePro
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
                Excellence in Every Aspect of Care
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From your first appointment to post-treatment follow-ups, we
                ensure an exceptional healthcare experience backed by
                evidence-based medicine and cutting-edge technology.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Emergency Response & Critical Care",
                  "Board-certified specialists across 20+ disciplines",
                  "ISO 9001:2015 certified medical facility",
                  "Advanced minimally invasive surgical techniques",
                  "Insurance-friendly cashless treatment options",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="mt-8 inline-block">
                <Button
                  className="gradient-navy text-white border-0 hover:opacity-90 font-semibold px-8"
                  data-ocid="home.secondary_button"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Stethoscope,
                  label: "General Medicine",
                  bg: "bg-blue-50",
                },
                { icon: Heart, label: "Cardiology", bg: "bg-red-50" },
                { icon: Brain, label: "Neurology", bg: "bg-purple-50" },
                { icon: Baby, label: "Pediatrics", bg: "bg-green-50" },
                { icon: Eye, label: "Ophthalmology", bg: "bg-yellow-50" },
                { icon: Microscope, label: "Diagnostics", bg: "bg-teal-50" },
              ].map(({ icon: Icon, label, bg }) => (
                <div
                  key={label}
                  className={`${bg} rounded-xl p-5 flex flex-col items-center text-center card-shadow hover:card-shadow-hover transition-shadow`}
                >
                  <Icon className="w-7 h-7 text-primary mb-2" />
                  <span className="text-sm font-medium text-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
              Patient Stories
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              What Our Patients Say
            </h2>
          </div>
          <div
            ref={testimonialsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger reveal"
          >
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="bg-card rounded-xl p-6 card-shadow border border-border"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }, (_, j) => (
                    <Star
                      key={`star-${t.name}-${j}`}
                      className="w-4 h-4 text-gold fill-gold"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={ctaRef}
        className="py-20 gradient-navy reveal"
        data-ocid="home.section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Ambulance className="w-6 h-6 text-teal" />
            <span className="text-teal font-semibold text-sm uppercase tracking-widest">
              24/7 Emergency
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Experience Premium Healthcare?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Schedule your consultation today. Our patient coordinators are
            available round the clock to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-teal text-white border-0 hover:opacity-90 font-semibold px-10 py-6"
                data-ocid="home.primary_button"
              >
                Book an Appointment
              </Button>
            </Link>
            <a href="tel:+918045678901">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold px-10 py-6"
                data-ocid="home.secondary_button"
              >
                Call: +91 80 4567 8901
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
