import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  CheckCircle,
  Eye,
  Heart,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy, dignity, and respect, ensuring a comforting healthcare experience.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Rigorous safety protocols and quality standards protect our patients and staff at all times.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description:
      "We invest in the latest medical technology and research to deliver cutting-edge treatments.",
  },
  {
    icon: Users,
    title: "Patient Empowerment",
    description:
      "We educate and involve patients in their care decisions, building long-term wellness partnerships.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Our team of board-certified specialists maintains the highest standards of medical practice.",
  },
  {
    icon: Target,
    title: "Result-Oriented",
    description:
      "Measurable health outcomes and evidence-based practices drive everything we do.",
  },
];

const team = [
  {
    name: "Dr. Arjun Mehta",
    role: "Chief of Cardiology",
    exp: "22 years experience",
  },
  {
    name: "Dr. Sunita Rao",
    role: "Head of Neurology",
    exp: "18 years experience",
  },
  {
    name: "Dr. Vikram Nair",
    role: "Chief Orthopedic Surgeon",
    exp: "20 years experience",
  },
  {
    name: "Dr. Priya Krishnan",
    role: "Head of Pediatrics",
    exp: "15 years experience",
  },
];

export default function AboutPage() {
  useSEO({
    title: "About MedCarePro — Our Story, Mission & Values",
    description:
      "Learn about MedCarePro's 20-year journey of healthcare excellence in Bangalore. Meet our expert team of 85+ physicians and discover our mission.",
    ogTitle: "About MedCarePro",
    ogDescription:
      "20 years of healthcare excellence. Meet our doctors and learn our mission.",
  });

  const valuesRef = useScrollReveal<HTMLDivElement>();
  const teamRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            About MedCarePro
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Two decades of delivering compassionate, evidence-based healthcare
            to families across Bangalore and beyond.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6">
                20 Years of Healing, Innovation & Trust
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2005 by a team of visionary physicians, MedCarePro
                began as a 30-bed multi-specialty clinic in Sahakara Nagar,
                Bangalore. Our founders believed that world-class healthcare
                should be accessible, affordable, and deeply human.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we've grown into a 250-bed tertiary care hospital with
                85+ specialist doctors, state-of-the-art diagnostic labs,
                advanced surgical suites, and a digital health platform serving
                15,000+ patients annually.
              </p>
              <ul className="space-y-3">
                {[
                  "NABH Accredited – National Quality Standard",
                  "ISO 9001:2015 Certified Processes",
                  "JCI International Accreditation (2019)",
                  "Best Multi-Specialty Hospital Award, Karnataka 2023",
                ].map((a) => (
                  <li key={a} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal shrink-0" />
                    <span className="text-foreground/80 text-sm">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "15,000+", label: "Patients Annually" },
                { number: "85+", label: "Specialist Doctors" },
                { number: "250", label: "Bed Capacity" },
                { number: "20+", label: "Medical Specialties" },
              ].map(({ number, label }) => (
                <div
                  key={label}
                  className="bg-secondary/60 rounded-xl p-6 text-center border border-border"
                >
                  <div className="font-display font-bold text-3xl text-primary mb-1">
                    {number}
                  </div>
                  <p className="text-muted-foreground text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered healthcare that
                improves quality of life through compassionate service, medical
                expertise, and innovative technology — making world-class
                treatment accessible to every individual.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
              <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be South India's most trusted healthcare destination — a
                center of medical excellence where every patient receives
                personalized care, advanced diagnostics, and outcomes that
                consistently exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Our Core Values
            </h2>
          </div>
          <div
            ref={valuesRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger reveal"
          >
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card rounded-xl p-6 card-shadow border border-border service-card"
              >
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
              Meet Our Leaders
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Expert Medical Team
            </h2>
          </div>
          <div
            ref={teamRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger reveal"
          >
            {team.map((member, i) => (
              <div
                key={member.name}
                className="bg-card rounded-xl p-6 card-shadow border border-border text-center service-card"
                data-ocid={`team.item.${i + 1}`}
              >
                <div className="w-20 h-20 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4 text-white font-display font-bold text-2xl">
                  {member.name.split(" ")[1][0]}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-teal text-sm font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs">{member.exp}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button
                className="gradient-teal text-white border-0 hover:opacity-90 font-semibold px-8"
                data-ocid="about.primary_button"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
