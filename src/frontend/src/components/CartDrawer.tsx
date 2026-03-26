import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    cartItems,
    cartCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    alert("🎉 Order placed! Thank you for shopping with FreshCart.");
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        onKeyUp={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={-1}
        aria-label="Close cart"
        data-ocid="cart.modal"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl cart-drawer flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-ocid="cart.sheet"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-lg font-bold text-foreground font-display">
            Your Cart
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              ({cartCount} items)
            </span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-fresh-section transition-colors"
            data-ocid="cart.close_button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div
            className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6"
            data-ocid="cart.empty_state"
          >
            <ShoppingCart className="w-16 h-16 text-muted-foreground" />
            <div>
              <p className="font-semibold text-lg text-foreground">
                Your cart is empty
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Add items to get started!
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="bg-fresh-green text-white font-semibold px-6 py-2.5 rounded-full hover:bg-fresh-green-dark transition-colors"
              data-ocid="cart.primary_button"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-2">
              {cartItems.map((item, i) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-5 py-3 border-b border-border last:border-0 hover:bg-fresh-section/50 transition-colors"
                  data-ocid={`cart.item.${i + 1}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-xl flex-shrink-0 bg-fresh-section"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.unit}</p>
                    <p className="text-sm font-bold text-fresh-green mt-0.5">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                      data-ocid={`cart.delete_button.${i + 1}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-1 border border-border rounded-full overflow-hidden">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-6 h-6 flex items-center justify-center hover:bg-fresh-green hover:text-white transition-colors text-fresh-green"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-6 h-6 flex items-center justify-center hover:bg-fresh-green hover:text-white transition-colors text-fresh-green"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Subtotal ({cartCount} items)</span>
                <span className="font-semibold text-foreground">
                  ₹{cartTotal}
                </span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <span>Delivery charge</span>
                <span className="font-semibold text-fresh-green">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-base border-t border-border pt-3 mb-4">
                <span>Total</span>
                <span className="text-fresh-green">₹{cartTotal}</span>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-fresh-green hover:bg-fresh-green-dark text-white font-bold py-3 rounded-full transition-colors text-sm"
                data-ocid="cart.confirm_button"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
