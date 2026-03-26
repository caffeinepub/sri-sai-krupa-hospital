import { ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🛒</span>
              <span className="font-display font-bold text-xl">FreshCart</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Fresh groceries delivered fast. Quality you can taste, prices
              you'll love.
            </p>
            <a
              href="https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-fresh-green-mid transition-colors"
              data-ocid="footer.link"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View My Portfolio
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary-foreground/90">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {[
                "Fruits & Vegetables",
                "Dairy Products",
                "Snacks & Beverages",
                "Bakery",
                "Today's Deals",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary-foreground/90">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Track Order", "Returns", "FAQ", "Contact Support"].map(
                (item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-primary-foreground/90">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>📞 +91 98765 43210</li>
              <li>✉️ support@freshcart.in</li>
              <li>📍 Bengaluru, India</li>
              <li className="pt-1">Mon–Sat 9am–9pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-primary-foreground/40">
          <span>© {year} FreshCart. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
