import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const ref = useRef<HTMLDivElement>(null);
  const { mutate, isPending } = useSubmitContact();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => toast.error("Something went wrong. Please try again."),
    });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-indigo uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Let&apos;s Build Something Great
          </h2>
          <div className="mt-3 w-12 h-1 bg-indigo rounded mx-auto" />
        </div>

        <div
          ref={ref}
          className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left: Form */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-card">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  className="border-border focus-visible:ring-indigo"
                  data-ocid="contact.input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="border-border focus-visible:ring-indigo"
                  data-ocid="contact.input"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="border-border focus-visible:ring-indigo resize-none"
                  data-ocid="contact.textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="bg-indigo text-white hover:bg-indigo-dark"
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>

              {isPending && (
                <div
                  className="text-center text-sm text-muted-foreground"
                  data-ocid="contact.loading_state"
                >
                  Submitting...
                </div>
              )}
            </form>
          </div>

          {/* Right: Contact info + map */}
          <div className="flex flex-col gap-6">
            <div className="bg-background rounded-2xl p-8 border border-border shadow-card flex flex-col gap-5">
              <h3 className="font-bold text-foreground text-lg">
                Contact Information
              </h3>

              {[
                {
                  icon: Phone,
                  label: "+91 98765 43210",
                  sub: "Mon–Sat, 9am–7pm",
                },
                {
                  icon: Mail,
                  label: "sam@samdesigns.in",
                  sub: "Email anytime",
                },
                {
                  icon: MapPin,
                  label: "Patna, Bihar, India",
                  sub: "Available remotely worldwide",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-indigo" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {item.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card flex-1 min-h-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7255.547!2d85.1376!3d25.6093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58eeead2b923%3A0xf2d1e2fe67eb2dd3!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711353600000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sam Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
