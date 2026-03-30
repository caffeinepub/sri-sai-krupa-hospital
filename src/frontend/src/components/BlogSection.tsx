import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock } from "lucide-react";

const POSTS = [
  {
    image: "/assets/generated/blog-summer-skin.dim_600x400.jpg",
    category: "Skincare Tips",
    title: "5 Tips for Glowing Skin This Summer",
    excerpt:
      "Protect your skin from harsh summer conditions with these dermatologist-recommended tips — sunscreen, hydration, and more.",
    date: "Mar 15, 2026",
    readTime: "4 min read",
  },
  {
    image: "/assets/generated/blog-acne-treatment.dim_600x400.jpg",
    category: "Acne Care",
    title: "Understanding Acne: Causes and Treatments",
    excerpt:
      "Acne is one of the most common skin conditions. Learn about its causes, different types, and the most effective medical treatments available.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
  },
  {
    image: "/assets/generated/blog-prp-therapy.dim_600x400.jpg",
    category: "Hair Care",
    title: "Everything You Need to Know About PRP Therapy",
    excerpt:
      "PRP therapy is revolutionizing hair loss treatment. Discover how platelet-rich plasma works, what to expect, and who is an ideal candidate.",
    date: "Jan 20, 2026",
    readTime: "5 min read",
  },
];

export default function BlogSection() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-12">
          <Badge className="bg-teal/10 text-teal border-teal/20 mb-3">
            Skin Tips
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Skincare Blog
          </h2>
          <p className="text-muted-foreground">
            Expert advice from Dr. Archana Lokhande
          </p>
        </div>

        <div
          ref={gridRef}
          className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {POSTS.map((post) => (
            <Card
              key={post.title}
              className="service-card border border-border overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5">
                <Badge className="bg-teal/10 text-teal border-0 text-xs mb-3">
                  {post.category}
                </Badge>
                <h3 className="font-bold text-foreground mb-2 text-base leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
