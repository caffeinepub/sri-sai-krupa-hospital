import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { useActor } from "@/hooks/useActor";
import { CheckCircle, ChevronLeft, Clock, MapPin, Package } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  deliverySlot: string;
}

const SLOTS = [
  { value: "morning", label: "Morning (7am – 10am)" },
  { value: "afternoon", label: "Afternoon (12pm – 3pm)" },
  { value: "evening", label: "Evening (5pm – 8pm)" },
];

export default function Checkout({ onBack }: { onBack: () => void }) {
  const { items, totalPrice, clearCart } = useCart();
  const { actor } = useActor();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    deliverySlot: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  useEffect(() => {
    document.title = "Checkout — FreshBasket";
  }, []);

  const set =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone))
      e.phone = "Valid 10-digit phone required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state.trim()) e.state = "State is required";
    if (!form.pincode.trim() || !/^[0-9]{6}$/.test(form.pincode))
      e.pincode = "Valid 6-digit pincode required";
    if (!form.deliverySlot) e.deliverySlot = "Please select a delivery slot";
    return e;
  };

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    setIsPlacing(true);
    try {
      const fullAddress = `${form.fullName}, ${form.address}, ${form.city}, ${form.state} - ${form.pincode} | Phone: ${form.phone}`;
      const slotLabel =
        SLOTS.find((s) => s.value === form.deliverySlot)?.label ??
        form.deliverySlot;
      if (actor) {
        await actor.placeOrder(fullAddress, slotLabel);
      }
      clearCart();
      setOrderSuccess(true);
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsPlacing(false);
    }
  };

  if (orderSuccess) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div
          className="bg-white rounded-3xl border border-border shadow-modal max-w-md w-full p-10 text-center"
          data-ocid="checkout.success_state"
        >
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-extrabold text-foreground mb-2">
            Order Placed! 🎉
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Your order has been confirmed. We’ll deliver fresh groceries to your
            doorstep.
          </p>
          <div className="bg-muted/60 rounded-xl p-4 text-left mb-6 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">
                {form.address}, {form.city}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">
                {SLOTS.find((s) => s.value === form.deliverySlot)?.label}
              </span>
            </div>
          </div>
          <Button
            onClick={onBack}
            className="w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-semibold rounded-xl"
            data-ocid="checkout.primary_button"
          >
            Continue Shopping
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background" data-ocid="checkout.page">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-8">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground mb-6 transition-colors"
          data-ocid="checkout.link"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Shop
        </button>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* ADDRESS FORM */}
          <section>
            <form onSubmit={handlePlaceOrder} noValidate>
              <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 mb-5">
                <h2 className="text-base font-bold text-foreground mb-5 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Delivery Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={set("fullName")}
                      className={errors.fullName ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.fullName && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      className={errors.email ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.email && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={set("phone")}
                      className={errors.phone ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.phone && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      autoComplete="street-address"
                      placeholder="House/Flat no., Street, Locality"
                      value={form.address}
                      onChange={set("address")}
                      className={errors.address ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.address && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      autoComplete="address-level2"
                      placeholder="City"
                      value={form.city}
                      onChange={set("city")}
                      className={errors.city ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.city && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.city}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      autoComplete="address-level1"
                      placeholder="State"
                      value={form.state}
                      onChange={set("state")}
                      className={errors.state ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.state && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.state}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      autoComplete="postal-code"
                      placeholder="6-digit pincode"
                      value={form.pincode}
                      onChange={set("pincode")}
                      className={errors.pincode ? "border-red-400" : ""}
                      data-ocid="checkout.input"
                    />
                    {errors.pincode && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.pincode}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label>Delivery Slot *</Label>
                    <Select
                      value={form.deliverySlot}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, deliverySlot: v }))
                      }
                    >
                      <SelectTrigger
                        className={errors.deliverySlot ? "border-red-400" : ""}
                        data-ocid="checkout.select"
                      >
                        <Clock className="w-4 h-4 text-muted-foreground mr-2" />
                        <SelectValue placeholder="Choose your preferred delivery time" />
                      </SelectTrigger>
                      <SelectContent>
                        {SLOTS.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.deliverySlot && (
                      <p
                        className="text-xs text-red-500"
                        data-ocid="checkout.error_state"
                      >
                        {errors.deliverySlot}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:hidden">
                <Button
                  type="submit"
                  disabled={isPlacing}
                  className="w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-bold py-4 text-base rounded-xl"
                  data-ocid="checkout.submit_button"
                >
                  {isPlacing
                    ? "Placing Order..."
                    : `Place Order · ₹${totalPrice.toLocaleString()}`}
                </Button>
              </div>
            </form>
          </section>

          {/* ORDER SUMMARY */}
          <aside>
            <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 sticky top-24">
              <h2 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                Order Summary
              </h2>
              {items.length === 0 ? (
                <p
                  className="text-sm text-muted-foreground py-4 text-center"
                  data-ocid="checkout.empty_state"
                >
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-3 mb-5">
                  {items.map((item, i) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3"
                      data-ocid={`checkout.item.${i + 1}`}
                    >
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          x{item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-foreground shrink-0">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-green-600 font-medium">-₹0</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary text-lg">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <Button
                type="button"
                disabled={isPlacing}
                onClick={handlePlaceOrder}
                className="hidden lg:flex w-full bg-primary hover:bg-[oklch(var(--brand-green-hover))] text-white font-bold py-3.5 text-sm rounded-xl mt-5 items-center justify-center"
                data-ocid="checkout.submit_button"
              >
                {isPlacing ? "Placing Order..." : "Place Order"}
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
