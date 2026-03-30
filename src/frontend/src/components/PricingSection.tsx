import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Basic",
    price: "₹2,999",
    desc: "Perfect for individuals & small businesses",
    features: [
      "1-Page Website",
      "Logo Design",
      "3 Revisions",
      "Mobile Responsive",
      "Basic SEO Setup",
    ],
    featured: false,
  },
  {
    name: "Standard",
    price: "₹7,999",
    desc: "Most popular for growing businesses",
    features: [
      "5-Page Website",
      "Logo + Brand Identity",
      "5 Revisions",
      "Mobile Responsive",
      "Advanced SEO",
      "Contact Form Integration",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹14,999",
    desc: "Complete solution for serious businesses",
    features: [
      "Full Website (10+ pages)",
      "UI/UX Design in Figma",
      "Unlimited Revisions",
      "Mobile Responsive",
      "Full SEO Optimization",
      "E-commerce Ready",
      "1 Month Support",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-indigo uppercase tracking-widest mb-2">
            Investment
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Pricing
          </h2>
          <p className="text-muted-foreground mt-2">
            Transparent pricing, no hidden fees
          </p>
          <div className="mt-3 w-12 h-1 bg-indigo rounded mx-auto" />
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card rounded-2xl border flex flex-col gap-6 p-8 ${
                plan.featured
                  ? "bg-indigo text-white border-indigo shadow-card-hover scale-105"
                  : "bg-card text-foreground border-border shadow-card"
              }`}
              data-ocid="pricing.card"
            >
              {plan.featured && (
                <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 w-fit text-xs font-semibold text-white">
                  <Star className="w-3 h-3 fill-white" />
                  Most Popular
                </div>
              )}
              <div>
                <h3
                  className={`text-lg font-bold ${plan.featured ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {plan.desc}
                </p>
              </div>

              <div>
                <div
                  className={`text-xs font-medium ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}
                >
                  Starting from
                </div>
                <div
                  className={`text-4xl font-bold mt-0.5 ${plan.featured ? "text-white" : "text-foreground"}`}
                >
                  {plan.price}
                </div>
              </div>

              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.featured ? "bg-white/20" : "bg-secondary"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${plan.featured ? "text-white" : "text-indigo"}`}
                      />
                    </div>
                    <span
                      className={
                        plan.featured ? "text-white/90" : "text-foreground"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`mt-auto ${
                  plan.featured
                    ? "bg-white text-indigo hover:bg-white/90"
                    : "bg-indigo text-white hover:bg-indigo-dark"
                }`}
                data-ocid="pricing.primary_button"
              >
                Request Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
