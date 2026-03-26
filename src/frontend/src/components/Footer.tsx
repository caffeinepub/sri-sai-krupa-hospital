import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" data-ocid="footer.section">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🛒</span>
              <span className="text-xl font-bold text-white font-display">
                FreshCart
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              India's freshest grocery delivery. From farm to your doorstep in
              30 minutes.
            </p>
            <div className="flex gap-3 mt-4">
              {(["FB", "IG", "TW"] as const).map((s) => (
                <span
                  key={s}
                  className="w-9 h-9 rounded-full bg-gray-700 hover:bg-fresh-green transition-colors flex items-center justify-center text-xs font-bold text-white cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Our Products",
                "Offers & Deals",
                "Blog",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <span
                    className="text-sm text-gray-400 hover:text-fresh-green transition-colors cursor-pointer"
                    data-ocid="footer.link"
                  >
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Categories
            </h4>
            <ul className="space-y-2">
              {[
                "Fresh Fruits",
                "Vegetables",
                "Dairy & Eggs",
                "Bakery",
                "Beverages",
                "Organic",
              ].map((cat) => (
                <li key={cat}>
                  <span
                    className="text-sm text-gray-400 hover:text-fresh-green transition-colors cursor-pointer"
                    data-ocid="footer.link"
                  >
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-fresh-green" />
                +91 1800 123 4567
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-fresh-green" />
                support@freshcart.in
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-fresh-green" />
                Bengaluru, Karnataka, India
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-1.5">
              <p className="text-xs text-gray-500">Download the App</p>
              <div className="flex gap-2">
                <span className="border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-fresh-green hover:text-fresh-green transition-colors cursor-pointer">
                  App Store
                </span>
                <span className="border border-gray-600 rounded-lg px-3 py-1.5 text-xs text-gray-300 hover:border-fresh-green hover:text-fresh-green transition-colors cursor-pointer">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>© {year} FreshCart. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fresh-green hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
