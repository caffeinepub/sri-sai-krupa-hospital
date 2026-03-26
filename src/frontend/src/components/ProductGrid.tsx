import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string;
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filtered =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="bg-white py-8" data-ocid="products.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground font-display">
            {selectedCategory === "All" ? "All Products" : selectedCategory}
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({filtered.length} items)
            </span>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16" data-ocid="products.empty_state">
            <span className="text-6xl block mb-4">🔍</span>
            <p className="text-muted-foreground text-lg">
              No products in this category yet
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Check back soon for new arrivals!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
