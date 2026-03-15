import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqs = [
  { category: "General", items: [
    { q: "What is DomusVesta?", a: "DomusVesta is a marketplace connecting homeowners with verified local professionals for home services like plumbing, electrical work, cleaning, painting, and more." },
    { q: "How does the verification process work?", a: "Every professional undergoes background checks, license verification, and skills assessment before being listed. We also verify insurance and check references." },
    { q: "Is DomusVesta available in my area?", a: "We currently serve the New York metro area, including all five boroughs, New Jersey, and Connecticut. We're expanding to more cities soon." },
  ]},
  { category: "For Homeowners", items: [
    { q: "How do I find a professional?", a: "Use our search bar to describe the service you need, or browse by category. Our AI matching algorithm will suggest the best professionals based on your needs, location, and budget." },
    { q: "How much does it cost to use the platform?", a: "Browsing and posting jobs is completely free for homeowners. You only pay for the services you book, at rates set by the professional." },
    { q: "What if I'm not satisfied with the work?", a: "We have a satisfaction guarantee. If you're not happy, contact our support team within 48 hours and we'll help resolve the issue, including arranging a re-service or refund." },
    { q: "Can I save my favorite professionals?", a: "Yes! Click the heart icon on any professional's profile to save them. You can view all saved professionals in your dashboard." },
  ]},
  { category: "For Professionals", items: [
    { q: "How do I join as a professional?", a: "Click 'Join as a Pro' and complete the application form. You'll need to provide your license information, insurance details, and pass a background check." },
    { q: "What fees does DomusVesta charge professionals?", a: "We charge a small service fee of 10-15% on completed jobs. There are no upfront costs or monthly subscriptions." },
    { q: "How do I get more jobs?", a: "Complete your profile, add portfolio photos, respond quickly to requests, and maintain high ratings. Our algorithm favors professionals with complete profiles and good reviews." },
  ]},
  { category: "Payments & Billing", items: [
    { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, Apple Pay, Google Pay, and bank transfers through our secure payment system." },
    { q: "When do professionals get paid?", a: "Professionals receive payment within 3-5 business days after job completion and customer confirmation." },
    { q: "Is my payment information secure?", a: "Yes. We use bank-level encryption and never store your full card details. All transactions are processed through PCI-compliant payment processors." },
  ]},
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/5 via-background to-hearth/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <HelpCircle className="mx-auto h-10 w-10 text-primary" />
            <h1 className="mt-4 text-4xl font-semibold text-foreground">Frequently Asked Questions</h1>
            <p className="mt-3 text-muted-foreground">Find answers to common questions about DomusVesta</p>
            <div className="relative mx-auto mt-8 max-w-md">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search questions..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-11" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          {filtered.map((cat) => (
            <div key={cat.category} className="mb-8">
              <h2 className="mb-4 text-lg font-semibold text-foreground">{cat.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {cat.items.map((item, i) => (
                  <AccordionItem key={i} value={`${cat.category}-${i}`} className="rounded-xl border border-border bg-card px-4">
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-12 rounded-2xl border border-border bg-primary/5 p-8 text-center">
            <h3 className="text-lg font-semibold text-foreground">Still have questions?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Our support team is here to help you.</p>
            <Link to="/contact">
              <Button className="mt-4">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
