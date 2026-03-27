import {
  Clock,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Business Hours", href: "#hours" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function LogskimFooter() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.section"
      className="text-white"
      style={{ backgroundColor: "oklch(0.15 0.05 243)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-display font-bold tracking-tight">
                LOGSKIM
              </div>
              <div className="text-xs text-white/50 tracking-widest uppercase mt-0.5">
                Solution Pvt Ltd
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              Chennai&#39;s trusted partner for IT solutions and HR services.
              Empowering careers and businesses since our founding.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  url: "https://linkedin.com",
                },
                { Icon: Twitter, label: "Twitter", url: "https://twitter.com" },
                {
                  Icon: Facebook,
                  label: "Facebook",
                  url: "https://facebook.com",
                },
              ].map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    data-ocid="footer.link"
                    onClick={() => handleNav(l.href)}
                    className="text-sm text-white/55 hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="text-white/40 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-white/55 leading-relaxed">
                  5th Floor, Murugesan Naicker Complex, No.84, Greams Rd,
                  B-Block, Thousand Lights, Chennai 600006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-white/40 flex-shrink-0" />
                <a
                  href="tel:07305213385"
                  className="text-sm text-white/55 hover:text-white transition-colors"
                >
                  073052 13385
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">
              Business Hours
            </h4>
            <ul className="space-y-2">
              {[
                { d: "Mon – Sat", t: "10 am – 7 pm" },
                { d: "Sunday", t: "Closed" },
              ].map((row) => (
                <li key={row.d} className="flex items-center gap-2">
                  <Clock size={12} className="text-white/30 flex-shrink-0" />
                  <span className="text-sm text-white/55">
                    <span className="text-white/75">{row.d}:</span> {row.t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© {year} Logskim Solution Pvt Ltd. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
