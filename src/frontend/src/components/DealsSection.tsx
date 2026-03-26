import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { PRODUCTS } from "../data/products";

function getEndOfDayMs() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime() - now.getTime();
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const DEALS = [
  { productId: 1, highlight: "Fresh & Crunchy" },
  { productId: 11, highlight: "King of Fruits" },
  { productId: 10, highlight: "High Protein" },
];

const TIME_LABELS = ["HRS", "MIN", "SEC"] as const;

export default function DealsSection() {
  const [remaining, setRemaining] = useState(getEndOfDayMs());
  const { addToCart } = useCart();

  useEffect(() => {
    const t = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1000) return getEndOfDayMs();
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const hours = Math.floor(remaining / 3_600_000);
  const mins = Math.floor((remaining % 3_600_000) / 60_000);
  const secs = Math.floor((remaining % 60_000) / 1000);
  const timeValues = [pad(hours), pad(mins), pad(secs)];

  return (
    <section
      className="py-10 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400"
      data-ocid="deals.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-white fill-white" />
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
                Today's Hot Deals
              </h2>
              <p className="text-orange-100 text-sm">
                Don't miss out — limited stock available
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-orange-100 text-sm font-medium">
              Ends in:
            </span>
            {TIME_LABELS.map((label, i) => (
              <span key={label} className="flex flex-col items-center">
                <span className="bg-white/20 backdrop-blur text-white font-bold text-xl px-3 py-1.5 rounded-lg min-w-[3rem] text-center">
                  {timeValues[i]}
                </span>
                <span className="text-orange-100 text-[10px] mt-0.5">
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {DEALS.map((deal) => {
            const product = PRODUCTS.find((p) => p.id === deal.productId);
            if (!product) return null;
            return (
              <div
                key={deal.productId}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex"
                data-ocid="deals.card"
              >
                <div className="relative w-32 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-fresh-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {product.discount}% OFF
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs text-fresh-green font-semibold uppercase tracking-wide">
                      {deal.highlight}
                    </span>
                    <h3 className="font-bold text-foreground text-sm mt-0.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {product.unit}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-lg font-bold text-foreground">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-muted-foreground line-through ml-1">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="bg-fresh-green text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-fresh-green-dark transition-colors"
                      data-ocid="deals.primary_button"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
          <button
            type="button"
            className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-md"
            data-ocid="deals.secondary_button"
          >
            View All Deals →
          </button>
        </div>
      </div>
    </section>
  );
}
