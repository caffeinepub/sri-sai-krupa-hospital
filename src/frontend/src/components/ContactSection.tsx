import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! We'll get back to you soon.");
    }, 1000);
  };

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "oklch(0.97 0.005 243)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Contact Us
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Visit our office in Chennai or send us a message — we're happy to
            help.
          </p>
          <div className="mt-4 w-12 h-1 rounded-full bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div
              className="rounded-2xl border p-6 space-y-5"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "oklch(0.92 0.005 243)",
                boxShadow: "0 2px 16px oklch(0.22 0.06 243 / 0.07)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.95 0.01 243)" }}
                >
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Address
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                    5th Floor, Murugesan Naicker Complex,
                    <br />
                    No.84, Greams Rd, B-Block,
                    <br />
                    Thousand Lights West, Thousand Lights,
                    <br />
                    Chennai, Tamil Nadu 600006
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.95 0.01 243)" }}
                >
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Phone
                  </div>
                  <a
                    href="tel:07305213385"
                    className="text-sm text-primary hover:underline mt-0.5 block"
                  >
                    073052 13385
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "oklch(0.95 0.01 243)" }}
                >
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    Hours
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Mon – Sat: 10 am – 7 pm
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid oklch(0.92 0.005 243)",
                boxShadow: "0 2px 16px oklch(0.22 0.06 243 / 0.07)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5358456611!2d80.25417061482!3d13.06187699079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f0123456%3A0xabcdef!2sGreams+Road%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1711353600000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Logskim Office — Greams Road, Chennai"
              />
            </div>
          </div>

          {/* Contact form */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid oklch(0.92 0.005 243)",
              boxShadow: "0 2px 16px oklch(0.22 0.06 243 / 0.07)",
            }}
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form
              data-ocid="contact.modal"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground"
                >
                  Name
                </Label>
                <Input
                  data-ocid="contact.input"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  Email
                </Label>
                <Input
                  data-ocid="contact.input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  Message
                </Label>
                <Textarea
                  data-ocid="contact.textarea"
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                data-ocid="contact.submit_button"
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl font-semibold py-6"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
