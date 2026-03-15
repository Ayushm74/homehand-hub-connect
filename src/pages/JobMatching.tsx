import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle, Zap, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const matches = [
  { id: "1", name: "David Chen", title: "Master Plumber", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David", matchScore: 97, skillMatch: 95, distance: "1.2 mi", rating: 4.9, reviews: 127, jobs: 342, rate: "$75/hr", available: "Today" },
  { id: "2", name: "Roberto Silva", title: "Licensed Plumber", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Roberto", matchScore: 93, skillMatch: 90, distance: "2.5 mi", rating: 4.9, reviews: 156, jobs: 287, rate: "$70/hr", available: "Tomorrow" },
  { id: "3", name: "Angela Rodriguez", title: "General Plumber", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Angela", matchScore: 88, skillMatch: 85, distance: "3.1 mi", rating: 4.8, reviews: 89, jobs: 256, rate: "$65/hr", available: "Today" },
  { id: "4", name: "Marcus Johnson", title: "Plumbing Specialist", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Marcus", matchScore: 82, skillMatch: 80, distance: "4.8 mi", rating: 4.7, reviews: 64, jobs: 198, rate: "$60/hr", available: "In 2 days" },
  { id: "5", name: "Emily Watson", title: "Certified Plumber", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Emily", matchScore: 78, skillMatch: 75, distance: "5.3 mi", rating: 4.6, reviews: 78, jobs: 165, rate: "$55/hr", available: "Tomorrow" },
];

const JobMatching = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" /> AI-Powered Matching
          </div>
          <h1 className="text-3xl font-semibold text-foreground">Your Top Matches</h1>
          <p className="mt-1 text-muted-foreground">Based on your job: "Fix leaking kitchen faucet" in Brooklyn, NY</p>
        </motion.div>

        <div className="mt-8 space-y-4">
          {matches.map((pro, i) => (
            <motion.div
              key={pro.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img src={pro.avatar} alt={pro.name} className="h-16 w-16 rounded-full bg-secondary" />
                    <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      #{i + 1}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{pro.name}</h3>
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{pro.title}</p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-hearth text-hearth" />{pro.rating} ({pro.reviews})</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{pro.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{pro.available}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 items-center gap-6 md:justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{pro.matchScore}%</div>
                    <div className="text-xs text-muted-foreground">Match Score</div>
                    <Progress value={pro.matchScore} className="mt-1 h-1.5 w-20" />
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{pro.skillMatch}%</div>
                    <div className="text-xs text-muted-foreground">Skill Match</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{pro.jobs}</div>
                    <div className="text-xs text-muted-foreground">Jobs Done</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:flex-col">
                  <div className="text-lg font-bold text-foreground">{pro.rate}</div>
                  <Button onClick={() => toast({ title: "Booking sent!", description: `Request sent to ${pro.name}` })} className="gap-2">
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link to={`/professional/${pro.id}`}>
                    <Button variant="outline" size="sm">View Profile</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobMatching;
