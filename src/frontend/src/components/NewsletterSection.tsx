import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-primary py-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-4xl block mb-3">📬</span>
        <h2 className="font-display font-bold text-3xl text-primary-foreground mb-2">
          Get Fresh Deals in Your Inbox
        </h2>
        <p className="text-primary-foreground/80 mb-7">
          Subscribe and get 10% off your first order + weekly deals every
          Friday.
        </p>
        {submitted ? (
          <div
            className="bg-white/20 text-primary-foreground rounded-xl px-6 py-4 font-semibold"
            data-ocid="newsletter.success_state"
          >
            🎉 You're subscribed! Check your inbox for your discount code.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white border-0 rounded-full h-12 px-5 text-foreground placeholder:text-muted-foreground"
              data-ocid="newsletter.input"
            />
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90 font-bold rounded-full h-12 px-6 shrink-0"
              data-ocid="newsletter.submit_button"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
