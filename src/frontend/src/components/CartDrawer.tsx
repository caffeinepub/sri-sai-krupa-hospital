import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
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
    alert("Thank you for shopping with LuxeWear. Your order has been placed.");
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h2 className="font-serif text-lg font-semibold text-luxe-charcoal-mid tracking-widest uppercase">
            Your Bag
            <span className="ml-2 text-xs font-normal font-sans text-luxe-secondary">
              ({cartCount})
            </span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
            data-ocid="cart.close_button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {cartItems.length === 0 ? (
          <div
            className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6"
            data-ocid="cart.empty_state"
          >
            <ShoppingBag className="w-14 h-14 text-gray-200" />
            <div>
              <p className="font-serif text-lg text-luxe-charcoal-mid">
                Your bag is empty
              </p>
              <p className="text-xs text-luxe-secondary mt-1 tracking-wider">
                Discover our latest arrivals
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="gold-btn px-8 py-2.5 text-xs font-bold tracking-widest uppercase"
              data-ocid="cart.primary_button"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {cartItems.map((item, i) => (
                <div
                  key={item.id}
                  className="flex gap-4 px-6 py-4 border-b border-gray-50"
                  data-ocid={`cart.item.${i + 1}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-luxe-charcoal-mid uppercase tracking-wider line-clamp-2">
                      {item.name}
                    </p>
                    {item.selectedColor && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <div
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{ backgroundColor: item.selectedColor }}
                        />
                        <span className="text-[10px] text-luxe-secondary">
                          Color selected
                        </span>
                      </div>
                    )}
                    <p className="text-sm font-semibold text-luxe-charcoal-mid mt-2">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-luxe-charcoal hover:text-white transition-colors text-luxe-secondary"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:bg-luxe-charcoal hover:text-white transition-colors text-luxe-secondary"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-luxe-secondary hover:text-red-500 transition-colors"
                        data-ocid={`cart.delete_button.${i + 1}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 px-6 py-5">
              <div className="flex justify-between text-xs text-luxe-secondary mb-2 tracking-wider uppercase">
                <span>Subtotal</span>
                <span className="font-semibold text-luxe-charcoal-mid">
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-xs text-luxe-secondary mb-5 tracking-wider uppercase">
                <span>Shipping</span>
                <span className="text-luxe-gold font-semibold">
                  Complimentary
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t border-gray-100 pt-4 mb-5">
                <span className="text-xs tracking-widest uppercase text-luxe-charcoal-mid">
                  Total
                </span>
                <span className="font-serif text-lg text-luxe-charcoal-mid">
                  ₹{cartTotal.toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full gold-btn py-3.5 text-xs font-bold tracking-[0.25em] uppercase"
                data-ocid="cart.confirm_button"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
