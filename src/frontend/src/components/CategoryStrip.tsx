import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { CATEGORIES } from "../data/products";

interface CategoryStripProps {
  selectedCategory: string;
  onSelect: (cat: string) => void;
}

export default function CategoryStrip({
  selectedCategory,
  onSelect,
}: CategoryStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (stripRef.current) {
      stripRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative flex items-center py-3 gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden md:flex flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-border hover:border-fresh-green hover:text-fresh-green transition-colors bg-white shadow-sm"
            data-ocid="category.pagination_prev"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div
            ref={stripRef}
            className="category-strip flex items-center gap-2 overflow-x-auto flex-1"
          >
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.name}
                onClick={() => onSelect(cat.name)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.name
                    ? "bg-fresh-green text-white shadow-sm"
                    : "bg-fresh-section text-foreground hover:bg-fresh-green-light hover:text-fresh-green-dark"
                }`}
                data-ocid="category.tab"
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden md:flex flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-border hover:border-fresh-green hover:text-fresh-green transition-colors bg-white shadow-sm"
            data-ocid="category.pagination_next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
