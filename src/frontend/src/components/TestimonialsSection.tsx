import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: "priya",
    name: "Priya Sharma",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "FreshCart is my go-to for groceries! The vegetables are always super fresh — you can tell they source directly from farms. Delivered in under 30 minutes!",
    initial: "PS",
    color: "bg-green-100 text-green-700",
  },
  {
    id: "rahul",
    name: "Rahul Verma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Switched from the local store to FreshCart and never looked back. The prices are unbeatable and the quality is consistently excellent. Love the 1-hour delivery!",
    initial: "RV",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "anjali",
    name: "Anjali Nair",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "The organic range is fantastic! Everything is certified and you can taste the difference. The packaging is eco-friendly too — great initiative by FreshCart.",
    initial: "AN",
    color: "bg-teal-100 text-teal-700",
  },
];

const STAR_IDS = ["s1", "s2", "s3", "s4", "s5"];

export default function TestimonialsSection() {
  return (
    <section
      className="py-14 bg-fresh-section"
      data-ocid="testimonials.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-fresh-green uppercase tracking-widest">
            Reviews
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-1 font-display">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Trusted by 50,000+ happy customers across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {STAR_IDS.slice(0, review.rating).map((sid) => (
                  <Star
                    key={sid}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${review.color}`}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
