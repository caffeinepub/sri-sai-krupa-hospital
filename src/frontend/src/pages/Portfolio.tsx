import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function IconWeb() {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      role="img"
      aria-label="Web Development"
    >
      <title>Web Development</title>
      <rect width="32" height="32" rx="8" fill="oklch(0.51 0.24 264 / 0.12)" />
      <path
        d="M7 10h18M7 16h18M7 22h18"
        stroke="oklch(0.51 0.24 264)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="11" cy="10" r="1.5" fill="oklch(0.51 0.24 264)" />
      <circle cx="15" cy="10" r="1.5" fill="oklch(0.51 0.24 264 / 0.5)" />
    </svg>
  );
}
function IconDesign() {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      role="img"
      aria-label="UI/UX Design"
    >
      <title>UI/UX Design</title>
      <rect width="32" height="32" rx="8" fill="oklch(0.62 0.18 300 / 0.12)" />
      <circle
        cx="16"
        cy="16"
        r="7"
        stroke="oklch(0.55 0.2 300)"
        strokeWidth="2"
      />
      <circle cx="16" cy="16" r="3" fill="oklch(0.55 0.2 300)" />
      <line
        x1="16"
        y1="7"
        x2="16"
        y2="5"
        stroke="oklch(0.55 0.2 300)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="27"
        x2="16"
        y2="25"
        stroke="oklch(0.55 0.2 300)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="7"
        y1="16"
        x2="5"
        y2="16"
        stroke="oklch(0.55 0.2 300)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="27"
        y1="16"
        x2="25"
        y2="16"
        stroke="oklch(0.55 0.2 300)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconData() {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      role="img"
      aria-label="Data Analytics"
    >
      <title>Data Analytics</title>
      <rect width="32" height="32" rx="8" fill="oklch(0.65 0.18 160 / 0.12)" />
      <rect
        x="8"
        y="18"
        width="4"
        height="8"
        rx="1"
        fill="oklch(0.55 0.18 160)"
      />
      <rect
        x="14"
        y="13"
        width="4"
        height="13"
        rx="1"
        fill="oklch(0.55 0.18 160 / 0.7)"
      />
      <rect
        x="20"
        y="8"
        width="4"
        height="18"
        rx="1"
        fill="oklch(0.55 0.18 160 / 0.5)"
      />
      <path
        d="M8 8l6 5 5-3 5-4"
        stroke="oklch(0.55 0.18 160)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconTranslate() {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      role="img"
      aria-label="Translation Services"
    >
      <title>Translation Services</title>
      <rect width="32" height="32" rx="8" fill="oklch(0.72 0.18 50 / 0.12)" />
      <text
        x="7"
        y="19"
        fontFamily="sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="oklch(0.55 0.18 50)"
      >
        A
      </text>
      <text
        x="17"
        y="22"
        fontFamily="sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="oklch(0.55 0.18 50)"
      >
        अ
      </text>
      <path
        d="M14 12h10"
        stroke="oklch(0.55 0.18 50)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      aria-label="LinkedIn"
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Instagram"
    >
      <title>Instagram</title>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
function IconMenu() {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      role="img"
      aria-label="Open menu"
    >
      <title>Open menu</title>
      <path
        d="M3 6h16M3 11h16M3 16h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconClose() {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      role="img"
      aria-label="Close menu"
    >
      <title>Close menu</title>
      <path
        d="M5 5l12 12M17 5L5 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[340px] flex items-center justify-center">
      <div
        className="absolute w-72 h-72 rounded-full"
        style={{ background: "oklch(0.51 0.24 264 / 0.10)" }}
      />
      <div
        className="absolute w-52 h-52 rounded-full animate-float"
        style={{ background: "oklch(0.51 0.24 264 / 0.15)" }}
      />
      <div
        className="absolute top-8 right-8 rounded-2xl px-4 py-3 shadow-card text-sm font-semibold"
        style={{
          background: "white",
          color: "oklch(0.51 0.24 264)",
          border: "1px solid oklch(0.92 0.008 264)",
        }}
      >
        💻 Web Dev
      </div>
      <div
        className="absolute bottom-12 left-4 rounded-2xl px-4 py-3 shadow-card text-sm font-semibold animate-float"
        style={{
          background: "white",
          color: "oklch(0.55 0.2 300)",
          border: "1px solid oklch(0.92 0.008 264)",
          animationDelay: "1s",
        }}
      >
        🎨 UI/UX Design
      </div>
      <div
        className="absolute top-20 left-0 rounded-2xl px-4 py-3 shadow-card text-sm font-semibold animate-float"
        style={{
          background: "white",
          color: "oklch(0.55 0.18 160)",
          border: "1px solid oklch(0.92 0.008 264)",
          animationDelay: "1.5s",
        }}
      >
        📊 Analytics
      </div>
      <div
        className="absolute bottom-6 right-10 rounded-2xl px-4 py-3 shadow-card text-sm font-semibold animate-float"
        style={{
          background: "white",
          color: "oklch(0.55 0.18 50)",
          border: "1px solid oklch(0.92 0.008 264)",
          animationDelay: "0.8s",
        }}
      >
        🌐 Translation
      </div>
      <div
        className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold shadow-card-hover"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.51 0.24 264), oklch(0.62 0.18 300))",
          color: "white",
        }}
      >
        YN
      </div>
    </div>
  );
}

function SectionHeading({
  label,
  title,
  sub,
}: { label: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <span
        className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
        style={{
          background: "oklch(0.51 0.24 264 / 0.1)",
          color: "oklch(0.51 0.24 264)",
        }}
      >
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {sub && <p className="text-muted-foreground max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

const services = [
  {
    id: "web",
    icon: <IconWeb />,
    title: "Web Development",
    desc: "Responsive websites, landing pages, and web apps built with modern technologies.",
  },
  {
    id: "design",
    icon: <IconDesign />,
    title: "UI/UX Design",
    desc: "User-friendly Figma designs, wireframes, and prototypes that convert.",
  },
  {
    id: "data",
    icon: <IconData />,
    title: "Data Analytics",
    desc: "Interactive dashboards and data visualizations using Excel and Power BI.",
  },
  {
    id: "translate",
    icon: <IconTranslate />,
    title: "Translation Services",
    desc: "Accurate and natural English ↔ Hindi translations for any content.",
  },
];

const projects = [
  {
    id: "biz",
    gradient:
      "linear-gradient(135deg, oklch(0.51 0.24 264 / 0.85), oklch(0.62 0.18 300 / 0.85))",
    title: "Business Website",
    desc: "A fully responsive corporate website for a local business.",
    emoji: "🏢",
  },
  {
    id: "landing",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.18 160 / 0.85), oklch(0.65 0.18 185 / 0.85))",
    title: "Landing Page",
    desc: "High-converting landing page with modern design and clear CTAs.",
    emoji: "🚀",
  },
  {
    id: "dashboard",
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.18 50 / 0.85), oklch(0.65 0.18 30 / 0.85))",
    title: "Dashboard Project",
    desc: "Interactive sales dashboard built with Power BI for a retail client.",
    emoji: "📊",
  },
  {
    id: "ui",
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.18 300 / 0.85), oklch(0.55 0.22 264 / 0.85))",
    title: "UI Design",
    desc: "Complete UI kit and screen designs for a mobile app in Figma.",
    emoji: "🎨",
  },
];

// UPDATED: pricing array with new prices and bullet points
const pricing = [
  {
    id: "website",
    icon: "💻",
    title: "Website",
    price: "Starting from ₹5,000",
    desc: "Fully responsive website tailored to your needs",
    points: [
      "Fully responsive design",
      "Mobile + desktop optimized",
      "SEO-friendly structure",
      "Fast loading speed",
    ],
  },
  {
    id: "dashboard",
    icon: "📊",
    title: "Dashboard",
    price: "Starting from ₹2,000",
    desc: "Custom data dashboards for your business",
    points: [
      "Interactive charts",
      "Clean UI design",
      "Data visualization",
      "Business insights",
    ],
  },
  {
    id: "translation",
    icon: "🌐",
    title: "Translation",
    price: "Starting from ₹999/page",
    desc: "Accurate Hindi ↔ English translation for documents and business content",
    points: [
      "English to Hindi",
      "Hindi to English",
      "Manual translation (no AI)",
      "High accuracy",
    ],
  },
  {
    id: "uidesign",
    icon: "🎨",
    title: "UI Design",
    price: "Starting from ₹1,999",
    desc: "Professional UI/UX designs and wireframes",
    points: [
      "Figma designs",
      "Wireframes & prototypes",
      "Mobile-first approach",
      "Clean modern style",
    ],
  },
];

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Figma",
  "Power BI",
  "Excel",
  "Hindi-English Translation",
];

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const submitContact = useSubmitContact();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const aboutRef = useReveal();
  const servicesRef = useReveal();
  const portfolioRef = useReveal();
  const pricingRef = useReveal();
  const contactRef = useReveal();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("loading");
    try {
      await submitContact.mutateAsync(form);
      setFormState("success");
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      setFormState("error");
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Sticky Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "white" : "oklch(0.96 0.016 281)",
          boxShadow: scrolled
            ? "0 1px 0 oklch(0.92 0.008 264), 0 4px 16px oklch(0.18 0.02 264 / 0.06)"
            : "none",
        }}
        data-ocid="nav.panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <button
            type="button"
            className="text-xl font-bold flex items-center gap-2"
            style={{ color: "oklch(0.51 0.24 264)" }}
            onClick={() => scrollTo("hero")}
            data-ocid="nav.link"
          >
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "oklch(0.51 0.24 264)" }}
            >
              YN
            </span>
            Your Name
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollTo(l.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10"
                style={{ color: "oklch(0.18 0.02 264)" }}
                data-ocid="nav.link"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden md:block btn-indigo text-sm"
              onClick={() => scrollTo("contact")}
              data-ocid="nav.primary_button"
            >
              Hire Me
            </button>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg"
              style={{ color: "oklch(0.18 0.02 264)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2">
            {navLinks.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                style={{ color: "oklch(0.18 0.02 264)" }}
              >
                {l.label}
              </button>
            ))}
            <button
              type="button"
              className="mt-2 w-full btn-indigo text-sm"
              onClick={() => scrollTo("contact")}
              data-ocid="nav.primary_button"
            >
              Hire Me
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="pt-24 pb-20 md:pt-32 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto"
        style={{ minHeight: "90vh", display: "flex", alignItems: "center" }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{
                background: "oklch(0.51 0.24 264 / 0.1)",
                color: "oklch(0.51 0.24 264)",
              }}
            >
              👋 Available for freelance work
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-5"
              style={{ color: "oklch(0.18 0.02 264)" }}
            >
              Hi, I'm{" "}
              <span style={{ color: "oklch(0.51 0.24 264)" }}>Your Name</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              I help businesses build modern websites, design user-friendly
              interfaces, create data dashboards, and provide accurate
              Hindi-English translations.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="btn-indigo text-base px-7 py-3"
                onClick={() => scrollTo("contact")}
                data-ocid="hero.primary_button"
              >
                Hire Me
              </button>
              <button
                type="button"
                className="px-7 py-3 rounded-lg text-base font-semibold border-2 transition-colors hover:bg-primary/10"
                style={{
                  borderColor: "oklch(0.51 0.24 264)",
                  color: "oklch(0.51 0.24 264)",
                }}
                onClick={() => scrollTo("portfolio")}
                data-ocid="hero.secondary_button"
              >
                View Portfolio
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 section-alt reveal"
        ref={aboutRef as React.RefObject<HTMLElement>}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="About Me" title="A bit about myself" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate freelance professional with expertise spanning
                web development, UI/UX design, data analytics, and translation.
                With a keen eye for detail and a commitment to quality, I
                deliver solutions that truly help businesses grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a stunning website, a beautiful interface,
                insightful dashboards, or precise translations — I bring the
                same dedication and craftsmanship to every project.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Skills &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      background: "oklch(0.51 0.24 264 / 0.09)",
                      color: "oklch(0.44 0.22 264)",
                      border: "1px solid oklch(0.51 0.24 264 / 0.2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 bg-card reveal"
        ref={servicesRef as React.RefObject<HTMLElement>}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Services"
            title="What I offer"
            sub="From pixel-perfect designs to powerful dashboards — here's how I can help."
          />
          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger visible">
            {services.map((s) => (
              <div
                key={s.id}
                className="card-portfolio bg-white rounded-2xl p-6 border border-border shadow-card"
                data-ocid="services.card"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 px-4 sm:px-6 section-alt reveal"
        ref={portfolioRef as React.RefObject<HTMLElement>}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Portfolio"
            title="Recent Projects"
            sub="A selection of work I'm proud of — each built with care and attention to detail."
          />
          <div className="grid sm:grid-cols-2 gap-6 reveal-stagger visible">
            {projects.map((p, idx) => (
              <div
                key={p.id}
                className="card-portfolio bg-white rounded-2xl overflow-hidden border border-border shadow-card"
                data-ocid={`portfolio.item.${idx + 1}`}
              >
                <div
                  className="h-44 flex items-center justify-center text-5xl"
                  style={{ background: p.gradient }}
                >
                  {p.emoji}
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <button
                    type="button"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.51 0.24 264)" }}
                    data-ocid="portfolio.secondary_button"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED: Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 bg-card reveal"
        ref={pricingRef as React.RefObject<HTMLElement>}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Pricing"
            title="Transparent Rates"
            sub="Simple, fair pricing. No hidden fees — just great work."
          />
          {/* ADDED: Subtitle line above cards */}
          <p className="text-muted-foreground text-sm text-center mb-8 italic">
            Flexible pricing based on your project needs
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger visible">
            {pricing.map((p) => (
              // UPDATED: flex column layout for equal card height, hover effects
              <div
                key={p.id}
                className="card-portfolio bg-white rounded-2xl p-6 border border-border shadow-card text-center flex flex-col hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
                data-ocid="pricing.card"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {p.title}
                </h3>
                {/* UPDATED: new price format */}
                <p
                  className="text-xl font-bold mb-2"
                  style={{ color: "oklch(0.51 0.24 264)" }}
                >
                  {p.price}
                </p>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  {p.desc}
                </p>
                {/* ADDED: bullet points with checkmark, flex-grow to push button to bottom */}
                <ul className="text-left mb-5 flex-1 space-y-1.5">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="text-xs flex items-start gap-1.5"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 font-bold"
                        style={{ color: "oklch(0.51 0.24 264)" }}
                      >
                        ✓
                      </span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                {/* UPDATED: button text changed to "Request Quote" */}
                <button
                  type="button"
                  className="w-full btn-indigo text-sm mt-auto"
                  onClick={() => scrollTo("contact")}
                  data-ocid="pricing.primary_button"
                >
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 section-alt reveal"
        ref={contactRef as React.RefObject<HTMLElement>}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Contact"
            title="Let's work together"
            sub="Have a project in mind? Reach out and let's make something great."
          />
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.51 0.24 264 / 0.1)" }}
                  >
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Email
                    </p>
                    <a
                      href="mailto:hello@yourname.com"
                      className="text-sm"
                      style={{ color: "oklch(0.51 0.24 264)" }}
                    >
                      hello@yourname.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.51 0.24 264 / 0.1)" }}
                  >
                    <span className="text-lg">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Phone
                    </p>
                    <a
                      href="tel:+919876543210"
                      className="text-sm"
                      style={{ color: "oklch(0.51 0.24 264)" }}
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mt-10 rounded-2xl p-6 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.51 0.24 264), oklch(0.62 0.18 300))",
                }}
              >
                <h4 className="font-bold text-lg mb-2">
                  Ready to get started?
                </h4>
                <p className="text-sm opacity-90">
                  Whether it's a quick question or a full project brief — I'd
                  love to hear from you.
                </p>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.panel"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 transition-all"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 transition-all"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 transition-all resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="w-full btn-indigo py-3 text-base"
                data-ocid="contact.submit_button"
              >
                {formState === "loading" ? "Sending..." : "Send Message"}
              </button>
              {formState === "success" && (
                <p
                  className="text-sm text-center font-medium"
                  style={{ color: "oklch(0.55 0.18 160)" }}
                  data-ocid="contact.success_state"
                >
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
              {formState === "error" && (
                <p
                  className="text-sm text-center font-medium"
                  style={{ color: "oklch(0.58 0.22 25)" }}
                  data-ocid="contact.error_state"
                >
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "oklch(0.51 0.24 264)" }}
            >
              YN
            </span>
            <span className="font-bold text-foreground">Your Name</span>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.hostname : "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "oklch(0.51 0.24 264)" }}
            >
              Built with caffeine.ai
            </a>
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-muted"
              style={{ color: "oklch(0.52 0.014 264)" }}
              data-ocid="footer.link"
            >
              <IconLinkedIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-muted"
              style={{ color: "oklch(0.52 0.014 264)" }}
              data-ocid="footer.link"
            >
              <IconInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
