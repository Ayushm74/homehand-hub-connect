import { motion } from "framer-motion";
import { Briefcase, Star, Calendar, DollarSign, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const allJobs = [
  { id: 1, title: "Kitchen Faucet Repair", pro: "David Chen", category: "Plumbing", date: "Mar 15, 2026", cost: "$120", status: "In Progress", rating: null },
  { id: 2, title: "Living Room Painting", pro: "Marcus Johnson", category: "Painting", date: "Mar 10, 2026", cost: "$350", status: "Completed", rating: 5 },
  { id: 3, title: "AC Unit Maintenance", pro: "Emily Watson", category: "HVAC", date: "Mar 5, 2026", cost: "$200", status: "Completed", rating: 4 },
  { id: 4, title: "Bathroom Drain Cleaning", pro: "David Chen", category: "Plumbing", date: "Feb 28, 2026", cost: "$95", status: "Completed", rating: 5 },
  { id: 5, title: "Deck Staining", pro: "Roberto Silva", category: "Carpentry", date: "Feb 20, 2026", cost: "$450", status: "Completed", rating: 5 },
  { id: 6, title: "Electrical Panel Upgrade", pro: "Angela Rodriguez", category: "Electrical", date: "Feb 15, 2026", cost: "$800", status: "Completed", rating: 4 },
  { id: 7, title: "Deep House Cleaning", pro: "Yuki Tanaka", category: "Cleaning", date: "Feb 10, 2026", cost: "$180", status: "Completed", rating: 5 },
  { id: 8, title: "Garden Landscaping", pro: "Roberto Silva", category: "Landscaping", date: "Jan 25, 2026", cost: "$600", status: "Completed", rating: 5 },
  { id: 9, title: "Window Installation", pro: "Marcus Johnson", category: "Carpentry", date: "Jan 15, 2026", cost: "$1,200", status: "Cancelled", rating: null },
];

const JobHistory = () => {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? allJobs : allJobs.filter((j) => j.status.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground">Job History</h1>
          <p className="mt-1 text-muted-foreground">{allJobs.length} total jobs</p>
        </motion.div>

        <div className="mt-6 flex items-center gap-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select onValueChange={setFilter} defaultValue="all">
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Jobs</SelectItem>
              <SelectItem value="in progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-6 space-y-3">
          {filtered.map((job) => (
            <motion.div key={job.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{job.title}</h3>
                  <Badge variant={job.status === "Completed" ? "secondary" : job.status === "Cancelled" ? "destructive" : "default"}>{job.status}</Badge>
                </div>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{job.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{job.date}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{job.cost}</span>
                  <span>Pro: {job.pro}</span>
                  {job.rating && <span className="flex items-center gap-0.5 text-hearth">{Array.from({ length: job.rating }).map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}</span>}
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">View Details</Button>
                {job.status === "Completed" && !job.rating && <Button size="sm">Leave Review</Button>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobHistory;
