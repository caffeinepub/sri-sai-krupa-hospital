import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <article
      className="service-card bg-card rounded-xl p-6 card-shadow border border-border group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-ocid={`services.item.${index + 1}`}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-teal/10 transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-teal transition-colors" />
      </div>
      <h3 className="font-semibold text-foreground text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        to="/services"
        className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:gap-2 transition-all"
        data-ocid="services.link"
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </article>
  );
}
