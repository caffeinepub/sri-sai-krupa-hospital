import { CATEGORIES } from "../data/products";

interface CategoryStripProps {
  selectedCategory: string;
  onSelect: (cat: string) => void;
}

export default function CategoryStrip({
  selectedCategory,
  onSelect,
}: CategoryStripProps) {
  return (
    <div
      className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm"
      data-ocid="category.section"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-1 overflow-x-auto category-strip py-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelect(cat)}
              className={`shrink-0 px-5 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-luxe-charcoal text-white"
                  : "bg-transparent text-luxe-secondary border border-gray-300 hover:border-luxe-charcoal hover:text-luxe-charcoal"
              }`}
              data-ocid="category.tab"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
