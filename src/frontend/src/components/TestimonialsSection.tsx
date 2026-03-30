import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Ravi K.",
    initials: "RK",
    rating: 5,
    text: "Better service and treatment. Good doctors and staff behaviour. Dr. Archana is very knowledgeable and explains everything clearly. Highly recommended!",
  },
  {
    id: "t2",
    name: "Priya S.",
    initials: "PS",
    rating: 5,
    text: "Patiently listens to your queries and gives precise diagnosis. My skin improved drastically after just 3 sessions. The clinic is clean and well-maintained.",
  },
  {
    id: "t3",
    name: "Amit M.",
    initials: "AM",
    rating: 5,
    text: "Good place for treatment of skin and acne. Dr. Archana is very experienced. The staff is friendly and the appointment process is smooth.",
  },
  {
    id: "t4",
    name: "Sunita D.",
    initials: "SD",
    rating: 5,
    text: "I had severe melasma for years. After following Dr. Archana's treatment plan, I can see a huge difference. She is thorough and compassionate.",
  },
  {
    id: "t5",
    name: "Rohit V.",
    initials: "RV",
    rating: 5,
    text: "Got PRP therapy done here. Amazing results for hair loss. Dr. Archana is very professional and the procedure was comfortable throughout.",
  },
];

const STARS = ["s1", "s2", "s3", "s4", "s5"];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const headRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>();

  const visible = 3;
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const displayed = Array.from(
    { length: visible },
    (_, i) => TESTIMONIALS[(current + i) % total],
  );

  return (
    <section className="py-20 bg-aqua/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-12">
          <Badge className="bg-teal/10 text-teal border-teal/20 mb-3">
            Patient Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground">
            Real experiences from real patients
          </p>
        </div>

        <div ref={cardsRef} className="reveal">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((t) => (
              <Card
                key={t.id}
                className="bg-white border border-border shadow-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {t.name}
                      </div>
                      <div className="flex">
                        {STARS.slice(0, t.rating).map((sk) => (
                          <Star
                            key={sk}
                            className="h-3.5 w-3.5 fill-star text-star"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              className="p-2 rounded-full border border-border hover:bg-aqua hover:border-teal transition-colors"
              onClick={prev}
              aria-label="Previous testimonial"
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft className="h-5 w-5 text-teal" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "bg-teal w-6" : "bg-border w-2"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  data-ocid="testimonials.tab"
                />
              ))}
            </div>
            <button
              type="button"
              className="p-2 rounded-full border border-border hover:bg-aqua hover:border-teal transition-colors"
              onClick={next}
              aria-label="Next testimonial"
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight className="h-5 w-5 text-teal" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
