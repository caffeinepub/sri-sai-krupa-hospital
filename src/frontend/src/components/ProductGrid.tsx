import { useMemo } from "react";
import { PRODUCTS } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  selectedCategory: string;
  searchQuery?: string;
}

export default function ProductGrid({
  selectedCategory,
  searchQuery,
}: ProductGridProps) {
  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catMatch =
        selectedCategory === "All" || p.category === selectedCategory;
      const searchMatch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && searchMatch;
    });
  }, [selectedCategory, searchQuery]);

  if (filtered.length === 0) {
    return (
      <div
        className="text-center py-16 text-muted-foreground"
        data-ocid="products.empty_state"
      >
        <p className="text-4xl mb-3">🥦</p>
        <p className="font-semibold text-lg">No products found</p>
        <p className="text-sm mt-1">Try a different category or search term</p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      data-ocid="products.list"
    >
      {filtered.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
