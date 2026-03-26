import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string;
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filtered =
    selectedCategory === "All"
      ? PRODUCTS
      : selectedCategory === "Sale"
        ? PRODUCTS.filter((p) => p.isSale)
        : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div data-ocid="product.section">
      <div className="mb-8">
        <p className="text-xs tracking-widest text-luxe-secondary uppercase mb-2">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-luxe-charcoal-mid uppercase tracking-wider">
          New Arrivals
        </h2>
        <div className="w-12 h-px bg-luxe-gold mt-4" />
      </div>

      {filtered.length === 0 ? (
        <div
          className="text-center py-16 text-luxe-secondary"
          data-ocid="product.empty_state"
        >
          <p className="text-sm tracking-widest uppercase">
            No items in this category
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
