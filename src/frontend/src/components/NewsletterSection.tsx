import { Mail } from "lucide-react";
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
    <section
      className="py-14 bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500"
      data-ocid="newsletter.section"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Mail className="w-12 h-12 text-white/80 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white font-display">
          Get Fresh Deals in Your Inbox
        </h2>
        <p className="text-green-100 mt-2 mb-6 text-sm">
          Subscribe and save up to 30% on your weekly groceries. We promise zero
          spam.
        </p>

        {submitted ? (
          <div
            className="bg-white/20 backdrop-blur rounded-2xl px-6 py-4 text-white font-semibold"
            data-ocid="newsletter.success_state"
          >
            🎉 You're subscribed! Welcome to the FreshCart family.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-full text-sm bg-white/15 backdrop-blur border border-white/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/40"
              data-ocid="newsletter.input"
            />
            <button
              type="submit"
              className="bg-white text-green-600 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform flex-shrink-0 text-sm shadow"
              data-ocid="newsletter.submit_button"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-green-100/70 text-xs mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
