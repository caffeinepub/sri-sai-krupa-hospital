import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubscribeNewsletter } from "../hooks/useQueries";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { mutate: subscribe, isPending } = useSubscribeNewsletter();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribe(email, {
      onSuccess: () => {
        toast.success("Subscribed! Thank you for joining our newsletter.");
        setEmail("");
      },
      onError: () => toast.error("Subscription failed. Please try again."),
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-teal flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-xl">
                MedCare<span className="text-teal">Pro</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Delivering world-class healthcare and professional services with
              compassion, innovation, and excellence since 2005.
            </p>
            <div className="flex gap-3">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  Icon: Twitter,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-teal mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-white/60 hover:text-teal text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-teal mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-teal shrink-0" />
                <span>
                  123 Healthcare Ave, Medical District, Bangalore 560001
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <span>+91 80 4567 8901</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <span>info@medcarepro.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest text-teal mb-4">
              Newsletter
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Stay updated with our latest health tips and services.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-teal"
                data-ocid="footer.input"
              />
              <Button
                type="submit"
                disabled={isPending}
                className="gradient-teal text-white border-0 hover:opacity-90 font-semibold"
                data-ocid="footer.submit_button"
              >
                {isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-1" />
                ) : null}
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>
            © {year}. Built with{" "}
            <Heart className="w-3 h-3 inline text-red-400 fill-red-400" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            <span className="text-white/40">Privacy Policy</span>
            <span className="text-white/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
