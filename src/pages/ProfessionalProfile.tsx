import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessional, getReviews } from "@/lib/api";
import { Star, CheckCircle, MapPin, Briefcase, Clock, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const demoPro = {
  id: "1", name: "David Chen", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David",
  title: "Master Plumber", rating: 4.9, reviewCount: 127, completedJobs: 342, hourlyRate: 75,
  location: "Brooklyn, NY", skills: ["Pipe Repair", "Drain Cleaning", "Water Heater", "Bathroom Remodel", "Kitchen Plumbing"],
  isVerified: true, yearsExperience: 12,
  bio: "With over 12 years of professional plumbing experience, I specialize in residential repairs, bathroom remodels, and emergency services. Licensed and insured with a commitment to quality workmanship and customer satisfaction.",
  availability: ["Mon 9-5", "Tue 9-5", "Wed 9-5", "Thu 9-5", "Fri 9-3"],
};

const demoReviews = [
  { id: "1", author: "Sarah M.", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sarah", rating: 5, text: "David fixed our kitchen sink in under an hour. Extremely professional and thorough.", date: "2 weeks ago" },
  { id: "2", author: "Tom B.", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Tom", rating: 5, text: "Best plumber I've ever hired. Fair pricing and excellent communication throughout.", date: "1 month ago" },
  { id: "3", author: "Lisa K.", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Lisa", rating: 4, text: "Great work on our bathroom remodel. Would definitely hire again.", date: "2 months ago" },
];

const ProfessionalProfile = () => {
  const { id } = useParams();

  const { data: pro } = useQuery({
    queryKey: ["professional", id],
    queryFn: () => getProfessional(id!),
    placeholderData: demoPro,
    retry: false,
  });

  const { data: reviews } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getReviews(id!),
    placeholderData: demoReviews,
    retry: false,
  });

  const p = pro || demoPro;
  const r = reviews || demoReviews;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Link to="/marketplace" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Marketplace
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border bg-card p-8 shadow-card">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="relative">
              <img src={p.avatar} alt={p.name} className="h-28 w-28 rounded-2xl bg-secondary object-cover ring-4 ring-primary/10" />
              {p.isVerified && <CheckCircle className="absolute -bottom-2 -right-2 h-7 w-7 fill-primary text-primary-foreground" />}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold text-foreground">{p.name}</h1>
                  <p className="text-muted-foreground">{p.title}</p>
                </div>
                <Button size="lg" className="rounded-full px-8">Book Service</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-hearth text-hearth" /> {p.rating} ({p.reviewCount} reviews)</span>
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {p.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {p.completedJobs} jobs completed</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {p.yearsExperience} years experience</span>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground">About</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-foreground">Skills & Services</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.skills.map((s: string) => (
                <span key={s} className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground">{s}</span>
              ))}
            </div>
          </div>

          {/* Pricing & Availability */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground">Pricing</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold tabular-nums text-foreground">${p.hourlyRate}</span>
                <span className="text-muted-foreground">/hour</span>
              </div>
            </div>
            <div className="rounded-xl border border-border p-5">
              <h3 className="font-semibold text-foreground">Availability</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.availability?.map((slot: string) => (
                  <span key={slot} className="flex items-center gap-1 rounded-lg bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <Calendar className="h-3 w-3" /> {slot}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-foreground">Reviews ({r.length})</h2>
          <div className="mt-4 space-y-4">
            {r.map((review: any) => (
              <div key={review.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.author} className="h-10 w-10 rounded-full bg-secondary" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{review.author}</div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-hearth">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
