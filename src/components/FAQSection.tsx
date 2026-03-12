import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long before we see results?",
    answer:
      "Most partners begin receiving qualified consultation requests within the first 14–21 days of launch. Full system optimization typically occurs within 60–90 days as we refine targeting, messaging, and intake flow based on real data.",
  },
  {
    question: "What is the typical commitment or engagement structure?",
    answer:
      "We operate on a month-to-month basis after an initial 90-day onboarding period. This gives the system enough time to calibrate to your market and patient profile. There are no long-term lock-in contracts.",
  },
  {
    question: "Do you manage the advertising or do we?",
    answer:
      "We manage everything — strategy, creative, media buying, and optimization. Your team focuses on clinical operations while we handle the full acquisition pipeline from first impression to booked consultation.",
  },
  {
    question: "How is this different from a general marketing or SEO agency?",
    answer:
      "General agencies spread their attention across dozens of industries and rely on templated strategies. We work exclusively with men's health clinics and build systems around consultation economics, not vanity metrics like impressions or clicks.",
  },
  {
    question: "How many clinics do you work with at a time?",
    answer:
      "We maintain a deliberately limited roster — typically no more than 8–12 active partners at any given time. We also enforce regional exclusivity, so you'll never compete with another client in your market.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
              Common Questions
            </p>
            <h2 className="font-display font-700 text-3xl md:text-4xl text-foreground leading-tight">
              What Prospective Partners Ask
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-foreground font-display font-600 text-sm md:text-base text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
