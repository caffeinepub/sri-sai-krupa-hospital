import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Download,
  RotateCcw,
  Truck,
} from "lucide-react";
import { useState } from "react";

const THUMBNAIL_URL =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=120&q=70";
const MAIN_IMAGE_URL =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85";

const thumbnails = [
  { id: "t1", src: THUMBNAIL_URL },
  { id: "t2", src: THUMBNAIL_URL },
  { id: "t3", src: THUMBNAIL_URL },
  { id: "t4", src: THUMBNAIL_URL },
  { id: "t5", src: THUMBNAIL_URL },
  { id: "t6", src: THUMBNAIL_URL },
];

const euroflexBrands = ["ef1", "ef2", "ef3", "ef4", "ef5", "ef6"];

const certifications = ["BIS Certified", "ISO Certified", "CE Certified"];

const bullets = [
  "Leak-Proof Fusion Joints",
  "Chemical Resistance",
  "20+ Year Service Life",
  "Flexible Installation",
  "UV & Abrasion Resistant",
];

const specs = [
  { param: "Pipe Diameter Range", spec: '20mm to 1600mm (3/4" to 63")' },
  {
    param: "Pressure Ratings",
    spec: "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16",
  },
  {
    param: "Standard Dimension Ratio",
    spec: "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11",
  },
  { param: "Operating Temperature", spec: "-40°C to +60°C (-40°F to +176°F)" },
  { param: "Service Life", spec: "50+ Years (at 20°C, PN 10)" },
  { param: "Material Density", spec: "0.95 – 0.96 g/cm³" },
  { param: "Certification Standards", spec: "IS 3894, ISO 4427, ASTM D3035" },
  { param: "Joint Type", spec: "Butt Fusion, Electrofusion, Mechanical" },
  { param: "Coil Lengths", spec: "Up to 500m (for smaller diameters)" },
  { param: "Country of Origin", spec: "🇮🇳 India" },
];

export default function ProductPage() {
  const [activeThumb, setActiveThumb] = useState(0);

  const prev = () =>
    setActiveThumb((i) => (i - 1 + thumbnails.length) % thumbnails.length);
  const next = () => setActiveThumb((i) => (i + 1) % thumbnails.length);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* TOP PRODUCT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav
          className="text-xs text-muted-foreground mb-6"
          aria-label="breadcrumb"
        >
          <span>Products</span>
          <span className="mx-1.5">›</span>
          <span>Pipe for Site Header</span>
        </nav>

        {/* Two-column product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14">
          {/* LEFT — Image carousel */}
          <div data-ocid="product.panel">
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] mb-3">
              <img
                src={MAIN_IMAGE_URL}
                alt="HDPE Pipes on construction site"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                data-ocid="product.pagination_prev"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                type="button"
                data-ocid="product.pagination_next"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {thumbnails.map((thumb, i) => (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setActiveThumb(i)}
                  data-ocid={`product.item.${i + 1}`}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
                    activeThumb === i
                      ? "border-teal-500 ring-2 ring-teal-200"
                      : "border-transparent hover:border-gray-300"
                  }`}
                  aria-label={`Thumbnail ${i + 1}`}
                >
                  <img
                    src={thumb.src}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Product info */}
          <div className="flex flex-col gap-5">
            {/* Certification badges */}
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 bg-gray-50 text-gray-600"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-teal-500" />
                  {cert}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Premium HDPE Pipes &amp; Coils for Modern Infrastructure
            </h1>

            {/* Bullet points */}
            <ul className="space-y-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm text-gray-700"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Price */}
            <div>
              <p className="text-xs text-muted-foreground mb-1">Price Range</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹4,80,000 – 7,90,000
              </p>
            </div>

            {/* Shipping & Returns chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                <Truck className="w-3.5 h-3.5" />
                Shipping: 4–12 days
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                <RotateCcw className="w-3.5 h-3.5" />
                Returns: if within 7 days
              </span>
            </div>

            {/* Certifications line */}
            <p className="text-xs text-muted-foreground">
              Certifications:{" "}
              <span className="text-gray-600">
                ISO Certified, BIS Certified
              </span>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                data-ocid="product.primary_button"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 font-semibold text-sm rounded-lg shadow-sm transition"
              >
                Get Custom Quote
              </Button>
              <Button
                data-ocid="product.secondary_button"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2.5 font-semibold text-sm rounded-lg transition"
              >
                View Technical Specs ›
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="border-y border-gray-100 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground mb-6 tracking-wide uppercase">
            Trusted by Hundreds of Companies Globally
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {euroflexBrands.map((id) => (
              <span
                key={id}
                className="text-xl font-black tracking-tight text-gray-900 select-none"
              >
                EUROFLEX
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS SECTION (dark) */}
      <section className="bg-[#1a1f2e] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Technical Specifications at a Glance
          </h2>
          <p className="text-sm text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Comprehensive performance data demonstrating our commitment to
            quality and engineering excellence.
          </p>

          {/* Specs table */}
          <div className="rounded-xl overflow-hidden border border-white/10">
            <table className="w-full text-sm" data-ocid="product.table">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest w-1/2">
                    Parameter
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Specification
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr
                    key={row.param}
                    data-ocid={`product.row.${i + 1}`}
                    className={i % 2 === 0 ? "bg-[#1e2436]" : "bg-[#232840]"}
                  >
                    <td className="px-5 py-3.5 text-gray-300 font-medium">
                      {row.param}
                    </td>
                    <td className="px-5 py-3.5 text-gray-200">{row.spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download button */}
          <div className="flex justify-center mt-8">
            <Button
              data-ocid="product.download_button"
              variant="outline"
              className="border-gray-500 text-gray-200 hover:bg-white/10 hover:text-white gap-2 px-6 py-2.5 rounded-lg transition"
            >
              <Download className="w-4 h-4" />
              Download Full Technical Datasheet
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#151922] py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}. Built with love using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white underline underline-offset-2 transition"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
