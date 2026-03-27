import { Clock } from "lucide-react";

const HOURS = [
  { day: "Monday", time: "10 am – 7 pm", note: null },
  {
    day: "Tuesday",
    time: "10 am – 7 pm",
    note: "Hours might differ on Mahavir Janma Kalyanak",
  },
  { day: "Wednesday", time: "10 am – 7 pm", note: null },
  { day: "Thursday", time: "10 am – 7 pm", note: null },
  { day: "Friday", time: "10 am – 7 pm", note: null },
  { day: "Saturday", time: "10 am – 7 pm", note: null },
  { day: "Sunday", time: "Closed", note: null },
];

function isOpenToday() {
  const day = new Date().getDay(); // 0 = Sunday
  return day !== 0;
}

export default function HoursSection() {
  const open = isOpenToday();

  return (
    <section
      id="hours"
      data-ocid="hours.section"
      className="py-20 lg:py-28 bg-section-alt"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            When We're Open
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Business Hours
          </h2>
          <div className="mt-4 w-12 h-1 rounded-full bg-primary mx-auto" />
        </div>

        <div className="max-w-lg mx-auto">
          {/* Status badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold ${
                open
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  open ? "bg-emerald-500 animate-pulse" : "bg-red-500"
                }`}
              />
              {open ? "Open Today" : "Closed Today"}
            </span>
          </div>

          {/* Hours list */}
          <div className="bg-white rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-chip-bg">
              <Clock size={18} className="text-primary" />
              <span className="font-semibold text-foreground text-sm">
                Weekly Schedule
              </span>
            </div>
            <ul data-ocid="hours.list">
              {HOURS.map((row, i) => (
                <li
                  key={row.day}
                  data-ocid={`hours.item.${i + 1}`}
                  className="flex items-start justify-between gap-4 px-6 py-4 border-b last:border-b-0 border-border hover:bg-section-alt transition-colors"
                >
                  <div>
                    <span className="text-sm font-semibold text-foreground">
                      {row.day}
                    </span>
                    {row.note && (
                      <p className="text-xs text-amber-600 mt-0.5">
                        {row.note}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium flex-shrink-0 ${
                      row.time === "Closed"
                        ? "text-red-500"
                        : "text-emerald-600"
                    }`}
                  >
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
