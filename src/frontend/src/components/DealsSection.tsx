import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

const TIMER_LABELS = ["h", "m", "s"];

function getSecondsUntilMidnight() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  return Math.floor((midnight.getTime() - now.getTime()) / 1000);
}

export default function DealsSection() {
  const [seconds, setSeconds] = useState(getSecondsUntilMidnight);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    const timer = setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  const units = [h, m, s];

  const deals = [
    { ...PRODUCTS[1], dealPrice: 89, originalPrice: 120, discount: "26% OFF" },
    { ...PRODUCTS[6], dealPrice: 35, originalPrice: 45, discount: "22% OFF" },
    { ...PRODUCTS[10], dealPrice: 85, originalPrice: 110, discount: "23% OFF" },
  ];

  return (
    <section className="bg-fresh-orange-light py-14 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-foreground mb-1">
              🔥 Today's Deals
            </h2>
            <p className="text-muted-foreground">
              Limited time offers — don't miss out!
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Ends in:
            </span>
            {units.map((unit, i) => (
              <span
                key={TIMER_LABELS[i]}
                className="flex flex-col items-center"
              >
                <span className="bg-fresh-orange text-white font-bold text-xl w-12 h-12 rounded-lg flex items-center justify-center">
                  {unit}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {deals.map((deal, i) => (
            <div
              key={deal.id}
              className="bg-card rounded-xl border border-border overflow-hidden flex gap-4 p-4 items-center"
              data-ocid={`deals.item.${i + 1}`}
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-20 h-20 rounded-lg object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold text-fresh-orange bg-fresh-orange-light px-2 py-0.5 rounded-full">
                  {deal.discount}
                </span>
                <p className="font-semibold text-foreground mt-1 text-sm truncate">
                  {deal.name}
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-primary font-bold">
                    ₹{deal.dealPrice}
                  </span>
                  <span className="text-muted-foreground text-xs line-through">
                    ₹{deal.originalPrice}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="mt-2 h-8 bg-fresh-orange hover:bg-orange-600 text-white rounded-lg text-xs font-bold w-full"
                  onClick={() => !isInCart(deal.id) && addToCart(deal)}
                  data-ocid={`deals.primary_button.${i + 1}`}
                >
                  {isInCart(deal.id) ? "In Cart ✓" : "Add to Cart"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
