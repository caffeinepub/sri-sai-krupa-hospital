/**
 * ShowcasePage — Product Showcase / E-commerce Landing Page
 * Pure CSS (page.css), no Tailwind utilities.
 * Sticky header: IntersectionObserver + scroll direction tracking.
 * Carousel: auto-advance, arrows, dots, hover-zoom magnifier.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import "../page.css";

/* ── Carousel data ── */
const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    title: "Curated Collections",
    sub: "Shop the latest arrivals",
  },
  {
    url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    title: "Premium Timepieces",
    sub: "Crafted for precision",
  },
  {
    url: "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80",
    title: "Fashion Forward",
    sub: "Trend-setting styles",
  },
  {
    url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    title: "Active Lifestyle",
    sub: "Gear up for your run",
  },
  {
    url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    title: "Creative Tools",
    sub: "Capture every moment",
  },
];

const TESTIMONIALS = [
  {
    initials: "RK",
    name: "Rahul Kumar",
    role: "Verified Buyer",
    rating: 5,
    text: "Absolutely love the quality of products here. Fast shipping, beautiful packaging, and every item exceeded my expectations. Will definitely order again!",
  },
  {
    initials: "PM",
    name: "Priya Mehta",
    role: "Loyal Customer",
    rating: 5,
    text: "The customer service team was incredibly helpful when I had a question about sizing. Got my order within 2 days. The collection is stunning — highly recommend!",
  },
  {
    initials: "AS",
    name: "Arjun Sharma",
    role: "Verified Buyer",
    rating: 5,
    text: "I've been shopping here for over a year. Consistent quality, fair prices, and the new arrivals are always worth checking out. My go-to online store!",
  },
];

const FEATURES = [
  {
    title: "Sustainable Sourcing",
    desc: "Every product in our catalogue is ethically sourced and manufactured with the environment in mind. We partner only with certified suppliers.",
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Lightning Fast Delivery",
    desc: "Order before 2 PM and receive your package the very next day. We ship pan-India with real-time tracking so you always know where your order is.",
    iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Hassle-Free Returns",
    desc: "Not happy with your purchase? Return it within 30 days for a full refund, no questions asked. Our goal is your complete satisfaction.",
    iconPath: "M1 4v6h6M3.51 15a9 9 0 1 0 .49-4.95",
  },
];

const NAV_LINKS = ["Home", "Shop", "Collections", "About", "Contact"];
const AVATAR_COLORS = ["#52B788", "#2D6A4F", "#F4A261"];

/* Helper: SVG that is decorative (inside a labelled button) */
const Icon = ({ d, d2, w = 18 }: { d: string; d2?: string; w?: number }) => (
  <svg
    aria-hidden="true"
    width={w}
    height={w}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={d} />
    {d2 && <path d={d2} />}
  </svg>
);

export default function ShowcasePage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomBgPos, setZoomBgPos] = useState("50% 50%");
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /* ── Sticky header ── */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStickyVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-64px 0px 0px 0px" },
    );
    observer.observe(hero);
    const handleScroll = () => {
      const cur = window.scrollY;
      if (
        cur < lastScrollY.current &&
        cur < (heroRef.current?.offsetHeight ?? 500)
      ) {
        setStickyVisible(false);
      }
      lastScrollY.current = cur;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ── Carousel ── */
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCurrentSlide((p) => (p + 1) % SLIDES.length),
      4000,
    );
  }, []);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

  const goTo = useCallback(
    (i: number) => {
      setCurrentSlide(i);
      startAuto();
    },
    [startAuto],
  );
  const goPrev = () => goTo((currentSlide - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => goTo((currentSlide + 1) % SLIDES.length);

  /* ── Zoom ── */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrapper = trackWrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const pctX = Math.max(
      0,
      Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
    );
    const pctY = Math.max(
      0,
      Math.min(100, ((e.clientY - rect.top) / rect.height) * 100),
    );
    setZoomBgPos(`${pctX}% ${pctY}%`);
  }, []);

  /* ── Newsletter ── */
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  /* ── Mobile menu keyboard close ── */
  const handleOverlayKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  };

  return (
    <div className="showcase-page">
      {/* Sticky Header */}
      <header
        className={`sticky-header${stickyVisible ? " visible" : ""}`}
        aria-label="Sticky navigation"
        data-ocid="sticky.panel"
      >
        <div className="sticky-header-inner">
          <div className="nav-logo">
            <span className="nav-logo-dot" />
            Verdant
          </div>
          <nav aria-label="Sticky links">
            <ul className="sticky-nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    data-ocid={`sticky.${link.toLowerCase()}.link`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="nav-cta-btn"
            data-ocid="sticky.shop_button"
          >
            Shop Now
          </button>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="announcement-bar" aria-label="Promotions">
        Free shipping on orders over ₹999
        <span className="sep-pipe"> | </span>
        New arrivals every week 🎉
      </div>

      {/* Main Navigation */}
      <header className="main-nav" aria-label="Main navigation">
        <div className="main-nav-inner">
          <a href="#home" className="nav-logo" data-ocid="nav.logo.link">
            <span className="nav-logo-dot" />
            Verdant
          </a>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    data-ocid={`nav.${link.toLowerCase()}.link`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-icons">
            <button
              type="button"
              className="nav-icon-btn"
              aria-label="Search"
              data-ocid="nav.search_button"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <button
              type="button"
              className="nav-icon-btn"
              aria-label="Cart — 3 items"
              data-ocid="nav.cart_button"
              style={{ position: "relative" }}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="cart-badge-count" aria-label="3 items">
                3
              </span>
            </button>
            <button
              type="button"
              className="nav-icon-btn"
              aria-label="Account"
              data-ocid="nav.account_button"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button
              type="button"
              className="nav-cta-btn"
              data-ocid="nav.shop_button"
            >
              Shop Now
            </button>
            <button
              type="button"
              className="nav-hamburger"
              aria-label="Open navigation menu"
              onClick={() => setMobileOpen(true)}
              data-ocid="nav.menu.open_modal_button"
            >
              <svg
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div
        className={`mobile-nav-overlay${mobileOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
        onKeyDown={handleOverlayKey}
        aria-hidden={!mobileOpen}
        data-ocid="nav.menu.dialog"
      >
        <dialog aria-label="Navigation menu">
          <div className="mobile-nav-drawer">
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.menu.close_button"
            >
              <svg
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
                data-ocid={`nav.mobile.${link.toLowerCase()}.link`}
              >
                {link}
              </a>
            ))}
          </div>
        </dialog>
      </div>

      {/* Hero */}
      <section
        id="home"
        className="hero-section"
        ref={heroRef}
        aria-label="Hero"
      >
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              New Season Arrivals
            </div>
            <h1 className="hero-title">
              Discover Your{" "}
              <span className="hero-title-accent">Perfect Style</span>{" "}
              Collection
            </h1>
            <p className="hero-subtitle">
              Shop thousands of hand-curated products — from fashion to gadgets
              — delivered fast, packaged beautifully, and backed by our love-it
              guarantee.
            </p>
            <div className="hero-ctas">
              <button
                type="button"
                className="btn-primary"
                data-ocid="hero.shop.primary_button"
              >
                Shop Now <Icon d="M5 12h14" d2="M12 5l7 7-7 7" w={16} />
              </button>
              <button
                type="button"
                className="btn-secondary"
                data-ocid="hero.explore.secondary_button"
              >
                Explore Lookbook
              </button>
            </div>
            <div className="hero-trust">
              <div className="hero-avatars">
                {AVATAR_COLORS.map((color, i) => (
                  <div
                    key={color}
                    className="hero-avatar"
                    style={{ background: color }}
                    aria-hidden="true"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="hero-trust-text">
                <strong>10,000+</strong> happy customers this month
              </p>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80"
                alt="Colourful shopping bags — curated product collection"
                loading="eager"
              />
              <div className="hero-badge-float">
                <div className="hero-badge-float-icon">
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      color: "var(--text-dark)",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    Certified Quality
                  </div>
                  <div className="hero-badge-float-sub">
                    100% authentic products
                  </div>
                </div>
              </div>
              <div className="hero-badge-float2">4.9 ★ Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar" aria-label="Key statistics">
        <div className="stats-bar-inner">
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Products" },
            { number: "4.9 ★", label: "Average Rating" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="about"
        className="features-section"
        aria-label="Why choose us"
      >
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built Around Your Experience</h2>
          <p className="section-subtitle">
            We obsess over every detail so you can shop with total confidence.
          </p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <article
              className="feature-card"
              key={f.title}
              data-ocid={`features.item.${i + 1}`}
            >
              <div className="feature-icon">
                <svg
                  aria-hidden="true"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={f.iconPath} />
                </svg>
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Carousel */}
      <section
        id="shop"
        className="carousel-section"
        aria-label="Our collection"
      >
        <div className="section-header">
          <span className="section-label">Browse</span>
          <h2 className="section-title">Our Collection</h2>
          <p className="section-subtitle">
            Swipe through our most-loved categories — hover any image to zoom
            in.
          </p>
        </div>
        <div className="carousel-container">
          <div
            className="carousel-track-wrapper"
            ref={trackWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoomActive(true)}
            onMouseLeave={() => setZoomActive(false)}
            aria-roledescription="carousel"
            aria-label="Product image carousel"
            data-ocid="carousel.canvas_target"
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.title}
                  className="carousel-slide"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${SLIDES.length}: ${slide.title}`}
                  aria-hidden={i !== currentSlide}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                  <div className="carousel-slide-overlay" aria-hidden="true" />
                  <div className="carousel-slide-caption">
                    {slide.title}
                    <span>{slide.sub}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Zoom preview */}
            <div
              className={`zoom-preview${zoomActive ? " active" : ""}`}
              style={{
                backgroundImage: `url("${SLIDES[currentSlide].url}")`,
                backgroundSize: "200%",
                backgroundPosition: zoomBgPos,
              }}
              aria-hidden="true"
            />
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={goPrev}
            aria-label="Previous slide"
            data-ocid="carousel.pagination_prev"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={goNext}
            aria-label="Next slide"
            data-ocid="carousel.pagination_next"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="carousel-dots"
            role="tablist"
            aria-label="Slide indicators"
          >
            {SLIDES.map((slide, i) => (
              <button
                type="button"
                key={slide.title}
                className={`carousel-dot${currentSlide === i ? " active" : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={currentSlide === i}
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                data-ocid={`carousel.item.${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="testimonials-section"
        aria-label="Customer testimonials"
      >
        <div className="section-header">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real words from real shoppers — unedited and unfiltered.
          </p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              className="testimonial-card"
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <div
                className="testimonial-stars"
                aria-label={`${t.rating} out of 5 stars`}
              >
                <span aria-hidden="true">{"★".repeat(t.rating)}</span>
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" aria-label="Call to action">
        <div className="cta-banner-inner">
          <h2>Ready to Elevate Your Style?</h2>
          <p>
            Join over 10,000 satisfied customers who shop smarter with Verdant.
            Free shipping. 30-day returns. No compromises.
          </p>
          <button
            type="button"
            className="btn-accent"
            data-ocid="cta.shop.primary_button"
          >
            Shop the Collection <Icon d="M5 12h14" d2="M12 5l7 7-7 7" w={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="showcase-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <span
                style={{
                  width: 8,
                  height: 8,
                  background: "#52B788",
                  borderRadius: "50%",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Verdant
            </div>
            <p className="footer-brand-desc">
              Verdant is your destination for curated, quality-first products
              across fashion, lifestyle, and tech. Every order is backed by our
              satisfaction guarantee.
            </p>
            <div className="footer-social-links">
              {[
                {
                  label: "LinkedIn",
                  short: "in",
                  href: "https://linkedin.com",
                  ocid: "footer.linkedin.link",
                },
                {
                  label: "Instagram",
                  short: "IG",
                  href: "https://instagram.com",
                  ocid: "footer.instagram.link",
                },
                {
                  label: "Twitter",
                  short: "X",
                  href: "https://twitter.com",
                  ocid: "footer.twitter.link",
                },
                {
                  label: "Facebook",
                  short: "fb",
                  href: "https://facebook.com",
                  ocid: "footer.facebook.link",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={s.label}
                  data-ocid={s.ocid}
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {[
                "Home",
                "Shop All",
                "New Arrivals",
                "Sale",
                "About Us",
                "Blog",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    data-ocid={`footer.${link.toLowerCase().replace(/ /g, "-")}.link`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Categories</h3>
            <ul className="footer-links">
              {[
                "Fashion",
                "Electronics",
                "Home & Decor",
                "Sports",
                "Beauty",
                "Books",
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="/"
                    data-ocid={`footer.${cat.toLowerCase().replace(/[ &]/g, "-")}.link`}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Stay in the Loop</h3>
            <p style={{ fontSize: 14, marginBottom: 16, lineHeight: 1.65 }}>
              Get exclusive deals, early access to sales, and style tips —
              straight to your inbox.
            </p>
            {subscribed ? (
              <p
                style={{ color: "#52B788", fontSize: 14, fontWeight: 600 }}
                data-ocid="newsletter.success_state"
              >
                ✓ You&apos;re subscribed! Thanks for joining.
              </p>
            ) : (
              <form
                className="newsletter-form"
                onSubmit={handleNewsletter}
                data-ocid="newsletter.panel"
              >
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address for newsletter"
                  data-ocid="newsletter.input"
                />
                <button
                  type="submit"
                  className="newsletter-btn"
                  data-ocid="newsletter.submit_button"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span style={{ color: "rgba(255,255,255,0.38)", fontSize: 13 }}>
            © {new Date().getFullYear()} Verdant. Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#52B788", textDecoration: "underline" }}
            >
              caffeine.ai
            </a>
          </span>
          <div className="footer-bottom-links">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <a key={link} href="/">
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
