import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Clock, CheckCircle, Star, Heart, Plus, Search, Bell, ArrowRight, Calendar, DollarSign, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { icon: Briefcase, label: "Active Jobs", value: "3", color: "bg-primary/10 text-primary" },
  { icon: Clock, label: "Pending", value: "2", color: "bg-hearth/10 text-hearth" },
  { icon: CheckCircle, label: "Completed", value: "15", color: "bg-emerald-100 text-emerald-600" },
  { icon: Heart, label: "Saved Pros", value: "8", color: "bg-violet-100 text-violet-600" },
];

const activeJobs = [
  { id: 1, title: "Kitchen Faucet Repair", pro: "David Chen", status: "In Progress", date: "Mar 15, 2026", budget: "$120", category: "Plumbing" },
  { id: 2, title: "Living Room Painting", pro: "Marcus Johnson", status: "Scheduled", date: "Mar 18, 2026", budget: "$350", category: "Painting" },
  { id: 3, title: "AC Unit Maintenance", pro: "Emily Watson", status: "In Progress", date: "Mar 14, 2026", budget: "$200", category: "HVAC" },
];

const completedJobs = [
  { id: 4, title: "Bathroom Drain Cleaning", pro: "David Chen", date: "Mar 5, 2026", cost: "$95", rating: 5 },
  { id: 5, title: "Deck Staining", pro: "Roberto Silva", date: "Feb 28, 2026", cost: "$450", rating: 5 },
  { id: 6, title: "Electrical Panel Upgrade", pro: "Angela Rodriguez", date: "Feb 20, 2026", cost: "$800", rating: 4 },
];

const recommended = [
  { id: "1", name: "David Chen", title: "Master Plumber", rating: 4.9, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David" },
  { id: "4", name: "Yuki Tanaka", title: "Professional Cleaner", rating: 5.0, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Yuki" },
  { id: "5", name: "Roberto Silva", title: "Carpenter", rating: 4.9, avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Roberto" },
];

const HouseholdDashboard = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-semibold text-foreground">Welcome back, John!</h1>
            <p className="mt-1 text-muted-foreground">Here's what's happening with your home services</p>
          </motion.div>
          <div className="flex gap-2">
            <Link to="/post-job"><Button className="gap-2"><Plus className="h-4 w-4" />Post New Job</Button></Link>
            <Link to="/marketplace"><Button variant="outline" className="gap-2"><Search className="h-4 w-4" />Find Pros</Button></Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="active" className="mt-8">
          <TabsList>
            <TabsTrigger value="active">Active Jobs</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-4 space-y-3">
            {activeJobs.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <Badge variant={job.status === "In Progress" ? "default" : "secondary"}>{job.status}</Badge>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{job.date}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.budget}</span>
                    <span>Pro: {job.pro}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => toast({ title: "Job details", description: `Viewing ${job.title}` })}>View Details</Button>
                  <Button size="sm" variant="outline" onClick={() => toast({ title: "Message sent", description: `Opening chat with ${job.pro}` })}>Message Pro</Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-4 space-y-3">
            {completedJobs.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{job.date}</span>
                    <span>{job.cost}</span>
                    <span>Pro: {job.pro}</span>
                    <span className="flex items-center gap-0.5 text-hearth">{Array.from({ length: job.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Receipt</Button>
                  <Button size="sm" variant="outline" onClick={() => toast({ title: "Rebook", description: `Rebooking ${job.pro}` })}>Rebook Pro</Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="recommended" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {recommended.map((pro) => (
                <div key={pro.id} className="rounded-xl border border-border bg-card p-4 shadow-card text-center">
                  <img src={pro.avatar} alt={pro.name} className="mx-auto h-16 w-16 rounded-full bg-secondary" />
                  <h3 className="mt-3 font-semibold text-foreground">{pro.name}</h3>
                  <p className="text-sm text-muted-foreground">{pro.title}</p>
                  <div className="mt-1 flex items-center justify-center gap-1 text-sm text-hearth">
                    <Star className="h-3 w-3 fill-current" />{pro.rating}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Link to={`/professional/${pro.id}`} className="flex-1"><Button variant="outline" size="sm" className="w-full">View Profile</Button></Link>
                    <Button size="sm" className="flex-1" onClick={() => toast({ title: "Booking", description: `Sending request to ${pro.name}` })}>Book</Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HouseholdDashboard;
