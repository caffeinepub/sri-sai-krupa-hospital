import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQS = [
  {
    id: "faq-1",
    q: "What skin conditions does Dr. Archana treat?",
    a: "Dr. Archana treats a wide range of conditions including acne and pigmentation, melasma, hair and nail disorders, STDs, leprosy, PRP therapy, chemical peels, botox and fillers, anti-aging treatments, scar and keloid revision, mole and skin tag removal, hydrafacial, microneedling, and general cosmetic dermatology.",
  },
  {
    id: "faq-2",
    q: "Do I need an appointment to visit?",
    a: "Walk-ins are welcome, but appointments are strongly preferred to ensure minimal waiting time and dedicated consultation. You can book via the form on this website or call us at 7209092477 / 9582405223.",
  },
  {
    id: "faq-3",
    q: "What are the clinic timings?",
    a: "Monday to Friday: 10:00 AM \u2013 1:30 PM and 4:30 PM \u2013 7:30 PM. Saturday: 4:00 PM \u2013 8:00 PM. The clinic is closed on Sundays and public holidays.",
  },
  {
    id: "faq-4",
    q: "Is the clinic easily accessible by public transport?",
    a: "Yes! The clinic is located on Boring Patliputra Road, near Pani Tanki More, Patna \u2013 800013. It is easily accessible by auto-rickshaws, e-rickshaws, and buses from across the city, serving West Gandhi Maidan and nearby areas.",
  },
  {
    id: "faq-5",
    q: "What is PRP Therapy and is it effective?",
    a: "Platelet-Rich Plasma (PRP) therapy involves extracting a small amount of your own blood, concentrating the platelets, and injecting them into the scalp or skin. It is highly effective for treating hair loss (androgenetic alopecia) and for skin rejuvenation. Multiple sessions are typically required for optimal results.",
  },
  {
    id: "faq-6",
    q: "Are cosmetic dermatology procedures safe?",
    a: "Yes, all cosmetic procedures at DermaZest are performed by Dr. Archana Lokhande, a qualified and experienced dermatologist and cosmetologist. She uses clinically tested, FDA-approved products and follows strict safety protocols to ensure patient safety and optimal outcomes.",
  },
];

export default function FAQSection() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const accordRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-20 bg-aqua/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-12">
          <Badge className="bg-teal/10 text-teal border-teal/20 mb-3">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before your visit
          </p>
        </div>

        <div ref={accordRef} className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-0 rounded-xl overflow-hidden shadow-card"
                data-ocid={`faq.item.${idx + 1}`}
              >
                <AccordionTrigger className="faq-trigger data-[state=open]:rounded-b-none hover:no-underline text-left">
                  <span className="font-semibold text-sm">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-white px-5 pb-4 pt-3 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
