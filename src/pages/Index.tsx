import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Search, MapPin, Wrench, Zap, Paintbrush, TreePine,
  ShieldCheck, Clock, Star, ArrowRight, CheckCircle, Users,
  Sparkles, ThumbsUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { icon: Wrench, label: "Plumbing", desc: "Pipes, drains & fixtures", color: "bg-primary/10 text-primary" },
  { icon: Zap, label: "Electrical", desc: "Wiring, panels & lighting", color: "bg-hearth/10 text-hearth" },
  { icon: Paintbrush, label: "Painting", desc: "Interior & exterior", color: "bg-destructive/10 text-destructive" },
  { icon: TreePine, label: "Landscaping", desc: "Lawns, gardens & trees", color: "bg-emerald-100 text-emerald-600" },
  { icon: Sparkles, label: "Cleaning", desc: "Deep clean & maintenance", color: "bg-violet-100 text-violet-600" },
  { icon: Wrench, label: "Carpentry", desc: "Furniture & woodwork", color: "bg-orange-100 text-orange-600" },
];

const steps = [
  { icon: Search, title: "Describe Your Need", desc: "Tell us what you need help with and your location." },
  { icon: Users, title: "Get Matched", desc: "Our AI matches you with the top verified professionals." },
  { icon: ThumbsUp, title: "Book & Relax", desc: "Choose your pro, book a time, and we handle the rest." },
];

const testimonials = [
  { name: "Sarah M.", role: "Homeowner", text: "Found an incredible electrician in under 5 minutes. The verification system gave me total peace of mind.", rating: 5, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah" },
  { name: "James K.", role: "Homeowner", text: "The AI matching was spot-on. My plumber arrived on time and fixed everything perfectly.", rating: 5, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=James" },
  { name: "Maria L.", role: "Property Manager", text: "I manage 12 properties and DomusVesta has made finding reliable help incredibly easy.", rating: 5, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Maria" },
];

const stats = [
  { value: "12,000+", label: "Verified Professionals" },
  { value: "50,000+", label: "Jobs Completed" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
];

const Index = () => {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (service) params.set("search", service);
    if (location) params.set("location", location);
    navigate(`/marketplace?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-hearth/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" />
              Every professional is verified & background-checked
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
              Expert help for your home, verified for your{" "}
              <span className="text-primary">peace of mind</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Connect with 12,000+ local professionals for everything from emergency repairs to home renovations.
            </p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-card md:flex-row md:items-center"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="What do you need help with?"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="border-0 bg-transparent pl-11 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <div className="hidden h-8 w-px bg-border md:block" />
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="border-0 bg-transparent pl-11 text-base shadow-none focus-visible:ring-0"
                />
              </div>
              <Button
                onClick={handleSearch}
                size="lg"
                className="rounded-xl px-8"
              >
                Find a Professional
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-hearth/5 blur-3xl" />
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-card">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold tabular-nums text-foreground md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">Popular Services</h2>
            <p className="mt-2 text-muted-foreground">Browse by category to find the right professional</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={`/marketplace?category=${cat.label}`}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cat.color}`}>
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{cat.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">How DomusVesta Works</h2>
            <p className="mt-2 text-muted-foreground">Get help in three simple steps</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 rounded-full bg-hearth px-2.5 py-0.5 text-xs font-bold text-hearth-foreground">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground">What Our Users Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <div className="flex gap-0.5 text-hearth">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full bg-secondary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-card py-12">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 text-muted-foreground">
          {[
            { icon: ShieldCheck, label: "Background Checked" },
            { icon: CheckCircle, label: "Licensed & Insured" },
            { icon: Clock, label: "On-Time Guarantee" },
            { icon: Star, label: "Quality Assured" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-sm font-medium">
              <badge.icon className="h-5 w-5 text-primary" />
              {badge.label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-center text-primary-foreground md:p-16">
            <h2 className="text-3xl font-semibold">Ready to get started?</h2>
            <p className="mt-3 text-primary-foreground/80">
              Join thousands of households and professionals on DomusVesta.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="rounded-full px-8">
                  Find a Professional
                </Button>
              </Link>
              <Link to="/pro-signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/30 px-8 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Join as a Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
