import { CATEGORIES } from "../data/products";

const ICONS: Record<string, string> = {
  All: "🛒",
  Fruits: "🍎",
  Vegetables: "🥦",
  Dairy: "🥛",
  Snacks: "🍿",
  Beverages: "🧃",
  Bakery: "🍞",
};

interface CategoryStripProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategoryStrip({
  selectedCategory,
  onSelect,
}: CategoryStripProps) {
  return (
    <div className="sticky top-16 z-40 bg-background border-b border-border shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex gap-2 overflow-x-auto py-3 category-strip">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => onSelect(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-green"
                  : "bg-muted text-muted-foreground hover:bg-fresh-green-light hover:text-primary"
              }`}
              data-ocid="category.tab"
            >
              <span>{ICONS[cat]}</span>
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
