import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useBookAppointment } from "../hooks/useQueries";

const departments = [
  "General Medicine",
  "Pediatrics & Child Care",
  "Gynecology & Obstetrics",
  "General Surgery",
  "Orthopedics",
  "Emergency & Trauma Care",
  "Diagnostics & Lab",
  "Physiotherapy",
];

interface FormState {
  name: string;
  phone: string;
  department: string;
  date: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  phone: "",
  department: "",
  date: "",
  message: "",
};

export default function AppointmentSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const mutation = useBookAppointment();

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasError(false);
    setSubmitted(false);

    if (!form.name || !form.phone || !form.department || !form.date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const dateMs = new Date(form.date).getTime();
    if (Number.isNaN(dateMs)) {
      toast.error("Please select a valid date.");
      return;
    }
    const preferredDateNs = BigInt(dateMs) * BigInt(1_000_000);

    try {
      await mutation.mutateAsync({
        name: form.name,
        phoneNumber: form.phone,
        department: form.department,
        preferredDate: preferredDateNs,
        message: form.message || undefined,
      });
      setSubmitted(true);
      setForm(initialForm);
      toast.success("Appointment booked successfully! We'll contact you soon.");
    } catch (err) {
      console.error(err);
      setHasError(true);
      toast.error("Failed to book appointment. Please try again or call us.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="py-20 lg:py-28 section-alt-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 bg-hospital-teal-light text-hospital-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              Book Appointment
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-5">
              Schedule Your{" "}
              <span className="text-gradient-teal">Consultation</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Take the first step toward better health. Fill out the form and
              our team will confirm your appointment within 24 hours. For urgent
              care, please call us directly.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                {
                  icon: "📅",
                  title: "Flexible Scheduling",
                  desc: "Choose a date that works best for you, Mon–Sat",
                },
                {
                  icon: "📞",
                  title: "Quick Confirmation",
                  desc: "We'll call you within 2 hours to confirm",
                },
                {
                  icon: "🏥",
                  title: "All Departments",
                  desc: "Book across all 8 medical specialties",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border shadow-xs"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white rounded-3xl border border-border shadow-md p-7 lg:p-10"
          >
            {/* Success state */}
            {submitted && (
              <div
                data-ocid="appointment.success_state"
                className="mb-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-800 text-sm">
                    Appointment Requested!
                  </p>
                  <p className="text-green-700 text-xs mt-0.5">
                    We've received your request and will call you within 2 hours
                    to confirm the time slot.
                  </p>
                </div>
              </div>
            )}

            {/* Error state */}
            {hasError && (
              <div
                data-ocid="appointment.error_state"
                className="mb-6 bg-red-50 border border-red-200 rounded-xl p-5 flex items-start gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-red-800 text-sm">
                    Booking Failed
                  </p>
                  <p className="text-red-700 text-xs mt-0.5">
                    Something went wrong. Please try again or call us at
                    080-XXXX-XXXX.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-name"
                  className="text-sm font-semibold text-foreground"
                >
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="appt-name"
                  data-ocid="appointment.input"
                  type="text"
                  placeholder="e.g. Ravi Kumar"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="rounded-xl border-border focus:ring-2 focus:ring-hospital-primary/25"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-phone"
                  className="text-sm font-semibold text-foreground"
                >
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="appt-phone"
                  data-ocid="appointment.input"
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="rounded-xl border-border focus:ring-2 focus:ring-hospital-primary/25"
                />
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <Label className="text-sm font-semibold text-foreground">
                  Department <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={form.department}
                  onValueChange={(v) => handleChange("department", v)}
                  required
                >
                  <SelectTrigger
                    data-ocid="appointment.select"
                    className="rounded-xl border-border focus:ring-2 focus:ring-hospital-primary/25"
                  >
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-date"
                  className="text-sm font-semibold text-foreground"
                >
                  Preferred Date <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    id="appt-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                    required
                    className="rounded-xl border-border pl-9 focus:ring-2 focus:ring-hospital-primary/25"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="appt-message"
                  className="text-sm font-semibold text-foreground"
                >
                  Symptoms / Message{" "}
                  <span className="text-muted-foreground font-normal text-xs">
                    (optional)
                  </span>
                </Label>
                <Textarea
                  id="appt-message"
                  data-ocid="appointment.textarea"
                  placeholder="Briefly describe your symptoms or any specific concerns..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={3}
                  className="rounded-xl border-border resize-none focus:ring-2 focus:ring-hospital-primary/25"
                />
              </div>

              {/* Submit */}
              <Button
                data-ocid="appointment.submit_button"
                type="submit"
                disabled={mutation.isPending}
                className="w-full hospital-gradient text-white font-semibold rounded-xl py-3 text-base shadow-md hover:opacity-90 transition-opacity border-0"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Booking...
                  </>
                ) : (
                  "Book Appointment"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree that we may contact you to confirm your
                appointment.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
