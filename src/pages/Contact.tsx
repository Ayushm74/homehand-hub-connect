import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "support@domusvesta.com", desc: "We reply within 24 hours" },
  { icon: Phone, label: "Phone", value: "(212) 555-0147", desc: "Mon-Fri, 9am-6pm EST" },
  { icon: MapPin, label: "Office", value: "123 Market St, New York, NY 10001", desc: "Visit by appointment" },
  { icon: Clock, label: "Hours", value: "Monday - Friday", desc: "9:00 AM - 6:00 PM EST" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary/5 via-background to-hearth/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl font-semibold text-foreground">Contact Us</h1>
            <p className="mt-3 text-muted-foreground">We'd love to hear from you. Get in touch with our team.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-xl font-semibold text-foreground">Send us a message</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input placeholder="Email address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                <Textarea placeholder="Your message..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                <Button type="submit" className="gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-xl font-semibold text-foreground">Get in touch</h2>
              <div className="mt-6 space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <c.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{c.label}</div>
                      <div className="text-sm text-foreground">{c.value}</div>
                      <div className="text-xs text-muted-foreground">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-border bg-primary/5 p-6">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Live Chat</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Need immediate help? Our live chat support is available during business hours.
                </p>
                <Button variant="outline" className="mt-4 gap-2" onClick={() => toast({ title: "Live chat", description: "Chat support starting..." })}>
                  <MessageSquare className="h-4 w-4" /> Start Live Chat
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
