import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section
      className="py-20 px-4 md:px-8 bg-luxe-charcoal"
      aria-label="Newsletter signup"
      data-ocid="newsletter.section"
    >
      <div className="max-w-xl mx-auto text-center">
        <p className="text-luxe-gold text-xs tracking-[0.35em] uppercase mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-4">
          Join the LuxeWear Circle
        </h2>
        <p className="text-white/50 text-sm tracking-wide mb-10">
          Be the first to discover new collections, exclusive offers, and
          insider style guides.
        </p>

        {submitted ? (
          <p
            className="text-luxe-gold font-semibold tracking-widest uppercase text-sm"
            data-ocid="newsletter.success_state"
          >
            Welcome to the circle ✦
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-0"
            data-ocid="newsletter.panel"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-3 text-xs tracking-wider focus:outline-none focus:border-luxe-gold transition-colors"
              data-ocid="newsletter.input"
            />
            <button
              type="submit"
              className="gold-btn px-8 py-3 text-xs font-bold tracking-[0.25em] uppercase shrink-0"
              data-ocid="newsletter.submit_button"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
