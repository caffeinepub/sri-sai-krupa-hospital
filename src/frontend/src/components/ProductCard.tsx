import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import type { GroceryProduct } from "../context/CartContext";

interface ProductCardProps {
  product: GroceryProduct;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, updateQuantity, isInCart, getQuantity } = useCart();
  const inCart = isInCart(product.id);
  const qty = getQuantity(product.id);

  return (
    <div
      className="product-card bg-card rounded-xl border border-border overflow-hidden group"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 bg-fresh-green-light text-primary text-xs font-bold px-2 py-0.5 rounded-full">
          {product.category}
        </span>
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-foreground text-sm mb-1 leading-snug">
          {product.name}
        </h3>
        <p className="text-primary font-bold text-base mb-3">
          ₹{product.price}
        </p>

        {inCart ? (
          <div className="flex items-center justify-between bg-muted rounded-lg px-2 py-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-primary hover:bg-fresh-green-light"
              onClick={() => updateQuantity(product.id, qty - 1)}
              data-ocid={`products.secondary_button.${index + 1}`}
            >
              <Minus className="w-3.5 h-3.5" />
            </Button>
            <span className="font-bold text-foreground text-sm w-5 text-center">
              {qty}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-primary hover:bg-fresh-green-light"
              onClick={() => addToCart(product)}
              data-ocid={`products.primary_button.${index + 1}`}
            >
              <Plus className="w-3.5 h-3.5" />
            </Button>
          </div>
        ) : (
          <Button
            className="w-full h-9 bg-primary text-primary-foreground hover:bg-fresh-green-dark rounded-lg text-sm font-semibold"
            onClick={() => addToCart(product)}
            data-ocid={`products.primary_button.${index + 1}`}
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Add
          </Button>
        )}
      </div>
    </div>
  );
}
