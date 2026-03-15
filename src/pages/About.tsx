import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, Heart, MapPin, Clock, Star, CheckCircle } from "lucide-react";

const team = [
  { name: "Alexandra Chen", role: "CEO & Co-Founder", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Alexandra", bio: "Former Airbnb product lead with 10+ years in marketplace platforms." },
  { name: "Marcus Williams", role: "CTO & Co-Founder", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=MarcusW", bio: "Ex-Google engineer passionate about building trust in local services." },
  { name: "Priya Patel", role: "Head of Operations", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Priya", bio: "Scaled operations at Urban Company across 3 countries." },
  { name: "James O'Brien", role: "Head of Trust & Safety", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=JamesO", bio: "Background in compliance and safety at major tech companies." },
];

const values = [
  { icon: ShieldCheck, title: "Trust First", desc: "Every professional is verified, background-checked, and insured before joining our platform." },
  { icon: Users, title: "Community Driven", desc: "We empower local professionals and connect them with households who value quality work." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards through continuous review and quality assurance." },
  { icon: Heart, title: "Care", desc: "We treat every home service request with the care and attention it deserves." },
];

const milestones = [
  { year: "2023", event: "DomusVesta founded in New York City" },
  { year: "2023", event: "First 500 professionals onboarded" },
  { year: "2024", event: "Expanded to 5 boroughs of NYC" },
  { year: "2024", event: "10,000 jobs completed milestone" },
  { year: "2025", event: "AI-powered matching algorithm launched" },
  { year: "2025", event: "Expanded to New Jersey and Connecticut" },
  { year: "2026", event: "50,000+ jobs completed, 12,000+ professionals" },
];

const About = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-hearth/5 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-semibold text-foreground md:text-5xl">
            About <span className="text-primary">DomusVesta</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We're on a mission to make finding trusted home service professionals as easy and reliable as possible.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            DomusVesta was born from a simple frustration: finding a reliable plumber, electrician, or cleaner shouldn't feel like a gamble.
            We built a platform where every professional is vetted, every review is real, and every homeowner can book with confidence.
            Our AI-powered matching ensures you get the right professional for your specific needs, every time.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-y border-border bg-card py-12">
      <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
        {[
          { icon: Users, value: "12,000+", label: "Verified Professionals" },
          { icon: CheckCircle, value: "50,000+", label: "Jobs Completed" },
          { icon: Star, value: "4.9/5", label: "Average Rating" },
          { icon: MapPin, value: "3 States", label: "Coverage Area" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <s.icon className="mx-auto h-6 w-6 text-primary" />
            <div className="mt-2 text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-foreground">Our Values</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-foreground">Our Journey</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">{m.year}</div>
                <div className="text-sm text-foreground">{m.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-foreground">Leadership Team</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
            >
              <img src={t.avatar} alt={t.name} className="mx-auto h-20 w-20 rounded-full bg-secondary" />
              <h3 className="mt-4 font-semibold text-foreground">{t.name}</h3>
              <div className="text-sm text-primary">{t.role}</div>
              <p className="mt-2 text-xs text-muted-foreground">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
