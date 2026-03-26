const REVIEWS = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "PS",
    rating: 5,
    comment:
      "FreshCart is my go-to for weekly groceries! The vegetables are always super fresh and delivery is blazing fast. Highly recommend!",
    location: "Bengaluru",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    avatar: "RM",
    rating: 5,
    comment:
      "Love the variety and competitive pricing. Farm Fresh Eggs and Sourdough Bread are my weekly must-haves. Great experience every time.",
    location: "Mumbai",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    avatar: "AI",
    rating: 4,
    comment:
      "Really impressed by the quality. Everything arrives well-packaged and the Green Tea is top-notch. Will keep ordering from FreshCart!",
    location: "Chennai",
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  return (
    <section className="bg-fresh-green-light py-16 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-3xl text-foreground mb-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">
            Trusted by thousands of happy shoppers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 border border-border shadow-card"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-3">
                {STARS.map((star) => (
                  <span
                    key={star}
                    className={
                      star <= review.rating ? "text-fresh-orange" : "text-muted"
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
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
