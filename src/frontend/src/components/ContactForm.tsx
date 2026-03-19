import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitContact, isPending } = useSubmitContact();

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    submitContact(form, {
      onSuccess: () => {
        toast.success("Message sent! We'll get back to you shortly.");
        setSubmitted(true);
        setForm(initialForm);
      },
      onError: () => toast.error("Failed to send. Please try again."),
    });
  };

  const update =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  if (submitted) {
    return (
      <div className="text-center py-16 px-6" data-ocid="contact.success_state">
        <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal" />
        </div>
        <h3 className="font-display font-semibold text-2xl text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-teal text-teal hover:bg-teal hover:text-white"
          data-ocid="contact.secondary_button"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      data-ocid="contact.modal"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
            Full Name *
          </Label>
          <Input
            id="name"
            placeholder="Dr. John Smith"
            value={form.name}
            onChange={update("name")}
            className={errors.name ? "border-destructive" : ""}
            data-ocid="contact.input"
          />
          {errors.name && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.error_state"
            >
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={update("email")}
            className={errors.email ? "border-destructive" : ""}
            data-ocid="contact.input"
          />
          {errors.email && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.error_state"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={update("phone")}
            data-ocid="contact.input"
          />
        </div>
        <div>
          <Label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
            Subject *
          </Label>
          <Input
            id="subject"
            placeholder="Appointment inquiry"
            value={form.subject}
            onChange={update("subject")}
            className={errors.subject ? "border-destructive" : ""}
            data-ocid="contact.input"
          />
          {errors.subject && (
            <p
              className="text-destructive text-xs mt-1"
              data-ocid="contact.error_state"
            >
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
          Message *
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you..."
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={errors.message ? "border-destructive" : ""}
          data-ocid="contact.textarea"
        />
        {errors.message && (
          <p
            className="text-destructive text-xs mt-1"
            data-ocid="contact.error_state"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full gradient-teal text-white border-0 hover:opacity-90 font-semibold py-6"
        data-ocid="contact.submit_button"
      >
        {isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
        {isPending ? "Sending..." : "Send Message"}
      </Button>

      {isPending && (
        <p
          className="text-center text-sm text-muted-foreground"
          data-ocid="contact.loading_state"
        >
          Processing your message...
        </p>
      )}
    </form>
  );
}
