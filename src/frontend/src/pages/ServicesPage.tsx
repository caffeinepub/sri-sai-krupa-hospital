import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  Dna,
  Droplets,
  Eye,
  Heart,
  Microscope,
  Pill,
  Scan,
  Scissors,
  Shield,
  Stethoscope,
  Wind,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Comprehensive cardiac care including echocardiography, angioplasty, pacemaker implants, and open-heart surgery. Our heart specialists use minimally invasive techniques for faster recovery.",
    tag: "Specialty",
  },
  {
    icon: Brain,
    title: "Neurology & Neurosurgery",
    description:
      "Expert diagnosis and treatment of brain, spine, and nervous system disorders. Services include stroke management, epilepsy care, deep brain stimulation, and spinal fusion.",
    tag: "Specialty",
  },
  {
    icon: Bone,
    title: "Orthopedics & Spine",
    description:
      "Complete bone and joint care — from sports injuries to complex reconstructive surgery. We offer robotic-assisted joint replacement and minimally invasive spine procedures.",
    tag: "Surgery",
  },
  {
    icon: Baby,
    title: "Pediatrics & Neonatology",
    description:
      "Specialized care for children from newborn to adolescence. Our NICU handles premature births and complex neonatal conditions with round-the-clock specialist coverage.",
    tag: "Specialty",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description:
      "Full-spectrum eye care including cataract surgery, LASIK, glaucoma management, retinal procedures, and pediatric ophthalmology services.",
    tag: "Specialty",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Comprehensive primary and preventive healthcare, chronic disease management, health checkup packages, vaccination programs, and lifestyle medicine.",
    tag: "Primary Care",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Pathology",
    description:
      "State-of-the-art lab testing, advanced imaging (MRI, CT, PET scans), molecular diagnostics, genetic testing, and point-of-care testing for rapid results.",
    tag: "Diagnostics",
  },
  {
    icon: Ambulance,
    title: "Emergency & Trauma",
    description:
      "24/7 emergency department with trauma bay, rapid response teams, mass casualty protocols, and direct ICU admission capabilities.",
    tag: "Emergency",
  },
  {
    icon: Dna,
    title: "Oncology",
    description:
      "Comprehensive cancer care including surgical oncology, medical oncology, radiation therapy, immunotherapy, and palliative care programs.",
    tag: "Specialty",
  },
  {
    icon: Wind,
    title: "Pulmonology",
    description:
      "Diagnosis and treatment of respiratory conditions including asthma, COPD, sleep apnea, interstitial lung disease, and pulmonary rehabilitation.",
    tag: "Specialty",
  },
  {
    icon: Pill,
    title: "Endocrinology",
    description:
      "Expert management of diabetes, thyroid disorders, hormonal imbalances, metabolic syndromes, and osteoporosis through evidence-based protocols.",
    tag: "Specialty",
  },
  {
    icon: Activity,
    title: "Rehabilitation & Physiotherapy",
    description:
      "Holistic recovery programs for post-surgical rehabilitation, neurological recovery, sports injuries, and chronic pain management by certified therapists.",
    tag: "Therapy",
  },
  {
    icon: Scissors,
    title: "General Surgery",
    description:
      "Minimally invasive laparoscopic and robotic surgeries for appendix, gallbladder, hernia, colorectal conditions, and bariatric weight loss procedures.",
    tag: "Surgery",
  },
  {
    icon: Scan,
    title: "Radiology & Imaging",
    description:
      "Advanced imaging services including 3T MRI, 128-slice CT, digital X-ray, ultrasound, mammography, and interventional radiology procedures.",
    tag: "Diagnostics",
  },
  {
    icon: Droplets,
    title: "Nephrology & Dialysis",
    description:
      "Comprehensive kidney care with hemodialysis, peritoneal dialysis, kidney transplant evaluation, and chronic kidney disease management.",
    tag: "Specialty",
  },
  {
    icon: Shield,
    title: "Preventive Health",
    description:
      "Executive health checkup packages, corporate wellness programs, vaccination services, lifestyle counseling, and digital health monitoring.",
    tag: "Primary Care",
  },
];

const tagColors: Record<string, string> = {
  Specialty: "bg-blue-50 text-blue-700",
  Surgery: "bg-orange-50 text-orange-700",
  "Primary Care": "bg-green-50 text-green-700",
  Diagnostics: "bg-purple-50 text-purple-700",
  Emergency: "bg-red-50 text-red-700",
  Therapy: "bg-teal-50 text-teal-700",
};

export default function ServicesPage() {
  useSEO({
    title: "Medical Services — MedCarePro Hospital Bangalore",
    description:
      "Explore 16+ medical specialties at MedCarePro: Cardiology, Neurology, Orthopedics, Pediatrics, Oncology, Emergency Care and more.",
    ogTitle: "Medical Services — MedCarePro",
    ogDescription:
      "16+ specialties. Expert doctors. Advanced technology. Book your appointment.",
  });

  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-20 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4">
            Our Medical Services
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            16+ specialized departments staffed by 85+ board-certified
            physicians using advanced technology for superior outcomes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger reveal"
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="bg-card rounded-xl p-6 card-shadow border border-border service-card group"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-teal/10 transition-colors">
                      <Icon className="w-5 h-5 text-primary group-hover:text-teal transition-colors" />
                    </div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${tagColors[service.tag] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-muted-foreground mb-8">
            Our team of patient coordinators will guide you to the right
            specialist for your condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-teal text-white border-0 hover:opacity-90 font-semibold px-10"
                data-ocid="services.primary_button"
              >
                Contact Us
              </Button>
            </Link>
            <a href="tel:+918045678901">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-10"
                data-ocid="services.secondary_button"
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
