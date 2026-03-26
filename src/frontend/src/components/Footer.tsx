import { Instagram, Twitter, Youtube } from "lucide-react";

const PORTFOLIO_URL =
  "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2";

const PROJECT_LINKS = [
  {
    label: "FreshCart – Grocery E-Commerce",
    href: "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=1dd7de9da5f1700ee5c877085f04a2438f0fdc0f0c016f80d080a89584da48c4",
  },
  {
    label: "LuxeWear – Fashion Store",
    href: "https://broad-gold-ot9-draft.caffeine.xyz/#caffeineAdminToken=a58495c1b7d0a25ab215f901824198fac8b65ffb45c36ed2ce83cab5141dc9f2",
  },
];

const QUICK_LINKS = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Women", href: "#new-arrivals" },
  { label: "Men", href: "#new-arrivals" },
  { label: "Accessories", href: "#new-arrivals" },
  { label: "Sale", href: "#new-arrivals" },
];

const CARE_LINKS = [
  { label: "Contact Us", href: "mailto:hello@luxewear.com" },
  { label: "Size Guide", href: "#new-arrivals" },
  { label: "Shipping & Returns", href: "#new-arrivals" },
  { label: "FAQs", href: "#new-arrivals" },
  { label: "Privacy Policy", href: "#new-arrivals" },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-luxe-charcoal" data-ocid="footer.section">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-luxe-gold text-2xl font-bold tracking-widest uppercase mb-4">
              LuxeWear
            </h2>
            <p className="text-white/50 text-xs leading-relaxed tracking-wider max-w-[200px] mb-4">
              The art of modern luxury. Timeless fashion crafted with intention
              for the discerning individual.
            </p>
            {/* Business Website projects */}
            <div className="mb-4">
              <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase mb-3">
                Business Website
              </p>
              <ul className="flex flex-col gap-3">
                {PROJECT_LINKS.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2"
                      data-ocid="footer.link"
                    >
                      <span className="text-white/60 text-xs tracking-wide group-hover:text-luxe-gold transition-colors truncate">
                        {p.label}
                      </span>
                      <span className="shrink-0 text-[9px] font-semibold tracking-widest uppercase border border-luxe-gold/50 text-luxe-gold/70 group-hover:bg-luxe-gold group-hover:text-luxe-charcoal group-hover:border-luxe-gold px-2 py-0.5 transition-all duration-200">
                        View Project
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-luxe-gold text-luxe-gold text-xs font-semibold tracking-widest uppercase hover:bg-luxe-gold hover:text-luxe-charcoal transition-all duration-300"
              data-ocid="footer.link"
            >
              View My Portfolio
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.25em] uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs tracking-wider hover:text-luxe-gold transition-colors uppercase"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.25em] uppercase mb-5">
              Customer Care
            </h3>
            <ul className="flex flex-col gap-3">
              {CARE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-xs tracking-wider hover:text-luxe-gold transition-colors uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-[10px] font-semibold tracking-[0.25em] uppercase mb-5">
              Follow Us
            </h3>
            <p className="text-white/50 text-xs tracking-wider mb-5">
              Join our community for daily style inspiration.
            </p>
            <div className="flex gap-3 mb-8">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-luxe-gold hover:border-luxe-gold hover:bg-luxe-gold/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-[10px] tracking-widest uppercase">
            © {year} LuxeWear. All rights reserved.
          </p>
          <p className="text-white/30 text-[10px] tracking-widest">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxe-gold/60 hover:text-luxe-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
