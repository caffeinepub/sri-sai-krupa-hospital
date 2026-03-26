import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { Product } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeFromCart, updateQuantity, isInCart, getQuantity } =
    useCart();
  const inCart = isInCart(product.id);
  const qty = getQuantity(product.id);

  const handleAdd = () => addToCart(product);
  const handleInc = () => updateQuantity(product.id, qty + 1);
  const handleDec = () => {
    if (qty === 1) removeFromCart(product.id);
    else updateQuantity(product.id, qty - 1);
  };

  return (
    <div
      className="product-card bg-white rounded-2xl border border-border overflow-hidden shadow-card group"
      data-ocid="product.card"
    >
      <div className="relative overflow-hidden bg-fresh-section aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-fresh-orange text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <div className="p-3">
        <p className="text-xs text-muted-foreground mb-0.5">{product.unit}</p>
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-base font-bold text-foreground">
              ₹{product.price}
            </span>
            {product.discount > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {!inCart ? (
            <button
              type="button"
              onClick={handleAdd}
              className="flex items-center gap-1 bg-fresh-green hover:bg-fresh-green-dark text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95"
              data-ocid="product.primary_button"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Add
            </button>
          ) : (
            <div className="flex items-center gap-1 border-2 border-fresh-green rounded-full overflow-hidden">
              <button
                type="button"
                onClick={handleDec}
                className="w-7 h-7 flex items-center justify-center text-fresh-green hover:bg-fresh-green hover:text-white transition-colors"
                data-ocid="product.secondary_button"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-sm font-bold text-fresh-green-dark">
                {qty}
              </span>
              <button
                type="button"
                onClick={handleInc}
                className="w-7 h-7 flex items-center justify-center text-fresh-green hover:bg-fresh-green hover:text-white transition-colors"
                data-ocid="product.primary_button"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
