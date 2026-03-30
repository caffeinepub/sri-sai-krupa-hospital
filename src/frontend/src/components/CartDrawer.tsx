import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

interface CartDrawerProps {
  onCheckout: () => void;
}

export default function CartDrawer({ onCheckout }: CartDrawerProps) {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 overlay-backdrop"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close cart"
        data-ocid="cart.modal"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-50 flex flex-col shadow-modal cart-slide-in"
        data-ocid="cart.panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-base font-bold text-foreground">My Cart</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-md hover:bg-muted text-muted-foreground transition-colors"
            data-ocid="cart.close_button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-full gap-4 text-center"
              data-ocid="cart.empty_state"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Your cart is empty
                </p>
                <p className="text-sm text-muted-foreground">
                  Add items to get started
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item, index) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl"
                  data-ocid={`cart.item.${index + 1}`}
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.product.unit}
                    </p>
                    <p className="text-sm font-bold text-primary mt-0.5">
                      ₹{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                      data-ocid={`cart.delete_button.${index + 1}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        data-ocid={`cart.secondary_button.${index + 1}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[oklch(var(--brand-green-hover))] transition-colors"
                        data-ocid={`cart.button.${index + 1}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">Subtotal</span>
              <span className="text-xl font-bold text-primary">
                ₹{totalPrice.toLocaleString()}
              </span>
            </div>
            <Button
              className="w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-semibold py-3 rounded-xl"
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              data-ocid="cart.primary_button"
            >
              Proceed to Checkout →
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
