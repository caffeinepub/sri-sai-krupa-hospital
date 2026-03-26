import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { type FashionProduct, useCart } from "../context/CartContext";

interface ProductCardProps {
  product: FashionProduct;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, isInCart } = useCart();
  const [wished, setWished] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const inCart = isInCart(product.id);

  const discount = product.isSale
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div
      className="product-card bg-card flex flex-col group"
      data-ocid={`product.item.${index + 1}`}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-gray-100"
        style={{ aspectRatio: "3/4" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-luxe-charcoal text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
              New
            </span>
          )}
          {product.isSale && (
            <span className="bg-luxe-gold text-luxe-charcoal text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
              -{discount}%
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setWished((v) => !v)}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white flex items-center justify-center transition-colors duration-200 opacity-0 group-hover:opacity-100"
          data-ocid={`product.toggle.${index + 1}`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wished ? "fill-red-500 text-red-500" : "text-luxe-charcoal"
            }`}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[10px] tracking-widest text-luxe-secondary uppercase mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-luxe-charcoal-mid mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-luxe-charcoal-mid text-sm">
            ₹{product.price.toLocaleString()}
          </span>
          {product.isSale && (
            <span className="text-luxe-secondary text-xs line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 mb-4">
          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setSelectedColor(color)}
              aria-label={`Color ${color}`}
              style={{ backgroundColor: color }}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                selectedColor === color
                  ? "border-luxe-charcoal scale-125"
                  : "border-transparent hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => addToCart(product, selectedColor)}
          className={`mt-auto w-full py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
            inCart
              ? "bg-luxe-gold text-luxe-charcoal"
              : "bg-luxe-charcoal text-white hover:bg-luxe-gold hover:text-luxe-charcoal"
          }`}
          data-ocid={`product.button.${index + 1}`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
