import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Briefcase, Star, Clock, CheckCircle, XCircle, TrendingUp, Calendar, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { icon: DollarSign, label: "This Month", value: "$3,450", sub: "+12% vs last month", color: "bg-emerald-100 text-emerald-600" },
  { icon: Briefcase, label: "Active Jobs", value: "5", sub: "2 pending review", color: "bg-primary/10 text-primary" },
  { icon: Star, label: "Rating", value: "4.9", sub: "127 reviews", color: "bg-hearth/10 text-hearth" },
  { icon: TrendingUp, label: "Completion Rate", value: "98%", sub: "342 total jobs", color: "bg-violet-100 text-violet-600" },
];

const incomingRequests = [
  { id: 1, title: "Fix Leaking Pipe", client: "Sarah M.", location: "Brooklyn, NY", budget: "$80-120", date: "Mar 16, 2026", urgency: "Urgent" },
  { id: 2, title: "Bathroom Renovation Consultation", client: "James K.", location: "Manhattan, NY", budget: "$150-200", date: "Mar 18, 2026", urgency: "Normal" },
  { id: 3, title: "Water Heater Installation", client: "Maria L.", location: "Queens, NY", budget: "$300-500", date: "Mar 20, 2026", urgency: "Normal" },
];

const activeJobs = [
  { id: 4, title: "Kitchen Faucet Repair", client: "John D.", status: "In Progress", date: "Mar 15, 2026", amount: "$120" },
  { id: 5, title: "Drain Cleaning Service", client: "Amy T.", status: "Scheduled", date: "Mar 17, 2026", amount: "$95" },
];

const completedJobs = [
  { id: 6, title: "Pipe Replacement", client: "Tom B.", date: "Mar 10, 2026", amount: "$250", rating: 5 },
  { id: 7, title: "Fixture Installation", client: "Lisa W.", date: "Mar 8, 2026", amount: "$180", rating: 5 },
  { id: 8, title: "Emergency Drain Repair", client: "Mark S.", date: "Mar 5, 2026", amount: "$150", rating: 4 },
];

const ProfessionalDashboard = () => {
  const { toast } = useToast();

  const handleAccept = (title: string) => toast({ title: "Job accepted!", description: `You accepted "${title}". The client has been notified.` });
  const handleDecline = (title: string) => toast({ title: "Job declined", description: `You declined "${title}".` });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground">Professional Dashboard</h1>
          <p className="mt-1 text-muted-foreground">Welcome back, David! Here's your overview.</p>
        </motion.div>

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
              <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Earnings Chart Placeholder */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold text-foreground">Earnings Overview</h2>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
              const heights = [60, 80, 45, 90, 70, 30, 50];
              return (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div className="w-full rounded-lg bg-primary/10" style={{ height: `${heights[i]}px` }}>
                    <div className="w-full rounded-lg bg-primary transition-all" style={{ height: `${heights[i] * 0.7}px`, marginTop: `${heights[i] * 0.3}px` }} />
                  </div>
                  <span className="text-xs text-muted-foreground">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Tabs defaultValue="incoming" className="mt-8">
          <TabsList>
            <TabsTrigger value="incoming">Incoming Requests ({incomingRequests.length})</TabsTrigger>
            <TabsTrigger value="active">Active Jobs ({activeJobs.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedJobs.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="incoming" className="mt-4 space-y-3">
            {incomingRequests.map((req) => (
              <div key={req.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{req.title}</h3>
                      {req.urgency === "Urgent" && <Badge variant="destructive">Urgent</Badge>}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>Client: {req.client}</span>
                      <span>{req.location}</span>
                      <span>{req.budget}</span>
                      <span>{req.date}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleAccept(req.title)} className="gap-1"><CheckCircle className="h-3 w-3" />Accept</Button>
                    <Button size="sm" variant="outline" onClick={() => handleDecline(req.title)} className="gap-1"><XCircle className="h-3 w-3" />Decline</Button>
                    <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="active" className="mt-4 space-y-3">
            {activeJobs.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <Badge variant={job.status === "In Progress" ? "default" : "secondary"}>{job.status}</Badge>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Client: {job.client} · {job.date} · {job.amount}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => toast({ title: "Status updated", description: "Job marked as completed" })}>Mark Complete</Button>
                  <Button size="sm" variant="outline">Update Status</Button>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="mt-4 space-y-3">
            {completedJobs.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                    <span>Client: {job.client}</span><span>{job.date}</span><span>{job.amount}</span>
                    <span className="flex items-center gap-0.5 text-hearth">{Array.from({ length: job.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">View Details</Button>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
