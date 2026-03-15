import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HelpCircle, MessageSquare, Phone, Mail, FileText, ShieldCheck, CreditCard, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const supportCategories = [
  { icon: Users, title: "Account Issues", desc: "Login problems, profile updates, password reset", link: "/faq" },
  { icon: CreditCard, title: "Payments & Billing", desc: "Payment issues, refunds, invoices", link: "/faq" },
  { icon: ShieldCheck, title: "Trust & Safety", desc: "Report a concern, verification issues", link: "/faq" },
  { icon: FileText, title: "Job Management", desc: "Booking issues, job disputes, cancellations", link: "/faq" },
  { icon: HelpCircle, title: "Getting Started", desc: "How to use the platform, first steps", link: "/faq" },
  { icon: MessageSquare, title: "Feedback", desc: "Share your suggestions and feedback", link: "/contact" },
];

const Support = () => (
  <div className="min-h-screen bg-background">
    <section className="bg-gradient-to-br from-primary/5 via-background to-hearth/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-semibold text-foreground">Help & Support</h1>
          <p className="mt-3 text-muted-foreground">How can we help you today?</p>
        </motion.div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {supportCategories.map((cat, i) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={cat.link} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <cat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { icon: MessageSquare, title: "Live Chat", desc: "Chat with our support team", action: "Start Chat" },
            { icon: Phone, title: "Call Us", desc: "(212) 555-0147", action: "Call Now" },
            { icon: Mail, title: "Email", desc: "support@domusvesta.com", action: "Send Email" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
              <item.icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              <Button variant="outline" className="mt-4" size="sm">{item.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Support;
