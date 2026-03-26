import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    cartItems,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          role="button"
          tabIndex={0}
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          data-ocid="cart.modal"
          aria-label="Close cart"
        />
      )}

      {/* Drawer */}
      <div
        className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-sm bg-background z-50 shadow-2xl flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-ocid="cart.sheet"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display font-bold text-lg">Your Cart</h2>
            {cartCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
            data-ocid="cart.close_button"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cartItems.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-full text-center text-muted-foreground"
              data-ocid="cart.empty_state"
            >
              <span className="text-5xl mb-4">🛒</span>
              <p className="font-semibold text-lg">Your cart is empty</p>
              <p className="text-sm mt-1">Add some fresh groceries!</p>
            </div>
          ) : (
            <ul className="space-y-4" data-ocid="cart.list">
              {cartItems.map((item, i) => (
                <li
                  key={item.id}
                  className="flex gap-3 items-center"
                  data-ocid={`cart.item.${i + 1}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-primary font-bold text-sm">
                      ₹{item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      data-ocid={`cart.secondary_button.${i + 1}`}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="w-6 text-center font-semibold text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-7 w-7"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      data-ocid={`cart.primary_button.${i + 1}`}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                    data-ocid={`cart.delete_button.${i + 1}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border px-5 py-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-foreground">Subtotal</span>
              <span className="font-bold text-xl text-primary">
                ₹{cartTotal}
              </span>
            </div>
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-fresh-green-dark h-12 font-bold text-base rounded-xl"
              data-ocid="cart.submit_button"
            >
              Checkout — ₹{cartTotal}
            </Button>
            <Button
              variant="ghost"
              className="w-full text-muted-foreground text-sm"
              onClick={clearCart}
              data-ocid="cart.delete_button"
            >
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
