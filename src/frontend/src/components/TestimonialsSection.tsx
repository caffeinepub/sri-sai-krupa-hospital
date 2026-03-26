import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Fashion Editor",
    text: "LuxeWear has completely transformed my wardrobe. The quality of their cashmere pieces is unmatched — every garment feels like a second skin.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Creative Director",
    text: "From the packaging to the fit, LuxeWear is an experience. I've been exclusively wearing their tailored collection for two seasons now.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "Style Consultant",
    text: "My clients always ask where I source such refined pieces. LuxeWear is my best-kept secret — though perhaps not for much longer.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    rating: 5,
  },
];

const STAR_POSITIONS = [1, 2, 3, 4, 5];

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 px-4 md:px-8 bg-luxe-cream"
      aria-label="Customer testimonials"
      data-ocid="testimonials.section"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] text-luxe-gold uppercase mb-3">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-luxe-charcoal-mid uppercase tracking-wider">
            Client Stories
          </h2>
          <div className="w-12 h-px bg-luxe-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="bg-white p-8 flex flex-col"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {STAR_POSITIONS.slice(0, t.rating).map((pos) => (
                  <Star
                    key={`${t.name}-star-${pos}`}
                    className="w-3.5 h-3.5 fill-luxe-gold text-luxe-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-luxe-secondary leading-relaxed italic mb-6 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-luxe-charcoal-mid tracking-wider uppercase">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-luxe-secondary tracking-wider mt-0.5">
                    {t.role}
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
