import { Star } from "lucide-react";

const STAR_LABELS = ["one", "two", "three", "four", "five"] as const;

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {STAR_LABELS.slice(0, max).map((label, i) => (
        <Star
          key={label}
          size={14}
          className={
            i < Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }
        />
      ))}
    </div>
  );
}

const googleReviews = [
  {
    name: "Evanjalin Mary",
    initials: "EM",
    rating: 5,
    text: "Excellent HR services and a friendly atmosphere.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Priya Bairav",
    initials: "PB",
    rating: 1,
    text: "Very bad experience.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Suba Lakshmi",
    initials: "SL",
    rating: 4,
    text: "Very good organisation to develop your career from scratch \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      data-ocid="reviews.section"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            What People Say
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Reviews
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-primary mx-auto" />
        </div>

        {/* AmbitionBox rating */}
        <div className="max-w-sm mx-auto mb-12">
          <div className="bg-section-alt rounded-2xl border border-border p-6 text-center shadow-card">
            <div className="text-4xl font-display font-bold text-foreground mb-1">
              2.1
              <span className="text-lg text-muted-foreground">/5</span>
            </div>
            <StarRating rating={2.1} />
            <p className="text-xs text-muted-foreground mt-2">
              Based on 17 votes
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
              <span>AmbitionBox</span>
            </div>
          </div>
        </div>

        {/* Google reviews */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {googleReviews.map((r, i) => (
            <div
              key={r.name}
              data-ocid={`reviews.item.${i + 1}`}
              className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${r.color}`}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {r.name}
                  </div>
                  <StarRating rating={r.rating} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5"
                  fill="none"
                  role="img"
                  aria-label="Google"
                >
                  <title>Google</title>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs text-muted-foreground">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
