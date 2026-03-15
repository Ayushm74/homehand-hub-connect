import { motion } from "framer-motion";
import { Users, Briefcase, DollarSign, TrendingUp, CheckCircle, XCircle, Eye, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const metrics = [
  { icon: Users, label: "Total Users", value: "24,531", change: "+8.2%", color: "bg-primary/10 text-primary" },
  { icon: Shield, label: "Active Pros", value: "12,847", change: "+5.1%", color: "bg-emerald-100 text-emerald-600" },
  { icon: Briefcase, label: "Jobs This Month", value: "3,492", change: "+12.4%", color: "bg-hearth/10 text-hearth" },
  { icon: DollarSign, label: "Revenue", value: "$142,850", change: "+15.7%", color: "bg-violet-100 text-violet-600" },
];

const pendingVerifications = [
  { id: 1, name: "John Smith", service: "Electrician", submitted: "Mar 12, 2026", docs: "License, Insurance, Background Check", status: "Pending" },
  { id: 2, name: "Anna Lee", service: "Cleaner", submitted: "Mar 13, 2026", docs: "ID, Insurance", status: "Pending" },
  { id: 3, name: "Carlos Mendez", service: "Plumber", submitted: "Mar 14, 2026", docs: "License, Insurance, Background Check", status: "Pending" },
  { id: 4, name: "Grace Kim", service: "Painter", submitted: "Mar 14, 2026", docs: "ID, Portfolio", status: "Under Review" },
];

const recentJobs = [
  { id: 1, title: "Kitchen Renovation", client: "Sarah M.", pro: "David Chen", status: "In Progress", amount: "$1,200" },
  { id: 2, title: "Electrical Wiring", client: "James K.", pro: "Angela Rodriguez", status: "Completed", amount: "$850" },
  { id: 3, title: "Deep Cleaning", client: "Maria L.", pro: "Yuki Tanaka", status: "Completed", amount: "$180" },
  { id: 4, title: "Deck Building", client: "Tom B.", pro: "Roberto Silva", status: "Disputed", amount: "$2,500" },
];

const recentUsers = [
  { id: 1, name: "Emily Johnson", email: "emily@example.com", role: "Household", joined: "Mar 14, 2026", status: "Active" },
  { id: 2, name: "Michael Brown", email: "michael@example.com", role: "Professional", joined: "Mar 13, 2026", status: "Active" },
  { id: 3, name: "Jessica Wilson", email: "jessica@example.com", role: "Household", joined: "Mar 12, 2026", status: "Suspended" },
];

const AdminDashboard = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-semibold text-foreground">Admin Dashboard</h1>
          </div>
          <p className="mt-1 text-muted-foreground">Platform overview and management</p>
        </motion.div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center justify-between">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${m.color}`}>
                  <m.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-emerald-600">{m.change}</span>
              </div>
              <div className="mt-3 text-2xl font-bold text-foreground">{m.value}</div>
              <div className="text-sm text-muted-foreground">{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Platform Health */}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold text-foreground">Platform Health</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              { label: "User Satisfaction", value: 96 },
              { label: "Professional Retention", value: 92 },
              { label: "Job Completion Rate", value: 98 },
            ].map((h) => (
              <div key={h.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{h.label}</span>
                  <span className="font-semibold text-foreground">{h.value}%</span>
                </div>
                <Progress value={h.value} className="mt-2 h-2" />
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="verifications" className="mt-8">
          <TabsList>
            <TabsTrigger value="verifications">Verifications ({pendingVerifications.length})</TabsTrigger>
            <TabsTrigger value="jobs">Recent Jobs</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          <TabsContent value="verifications" className="mt-4 space-y-3">
            {pendingVerifications.map((v) => (
              <div key={v.id} className="rounded-xl border border-border bg-card p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{v.name}</h3>
                      <Badge variant="secondary">{v.service}</Badge>
                      <Badge variant={v.status === "Pending" ? "outline" : "default"}>{v.status}</Badge>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Submitted: {v.submitted} · Docs: {v.docs}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => toast({ title: "Approved!", description: `${v.name} has been approved as a ${v.service}` })} className="gap-1"><CheckCircle className="h-3 w-3" />Approve</Button>
                    <Button size="sm" variant="destructive" onClick={() => toast({ title: "Rejected", description: `${v.name}'s application has been rejected` })} className="gap-1"><XCircle className="h-3 w-3" />Reject</Button>
                    <Button size="sm" variant="ghost"><Eye className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="jobs" className="mt-4 space-y-3">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <Badge variant={job.status === "Disputed" ? "destructive" : job.status === "Completed" ? "secondary" : "default"}>{job.status}</Badge>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Client: {job.client} · Pro: {job.pro} · {job.amount}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  {job.status === "Disputed" && <Button size="sm" variant="destructive" className="gap-1"><AlertTriangle className="h-3 w-3" />Resolve</Button>}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="users" className="mt-4 space-y-3">
            {recentUsers.map((u) => (
              <div key={u.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{u.name}</h3>
                    <Badge variant="secondary">{u.role}</Badge>
                    <Badge variant={u.status === "Suspended" ? "destructive" : "outline"}>{u.status}</Badge>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{u.email} · Joined: {u.joined}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Profile</Button>
                  {u.status === "Active" ? (
                    <Button size="sm" variant="destructive" onClick={() => toast({ title: "User suspended", description: `${u.name} has been suspended` })}>Suspend</Button>
                  ) : (
                    <Button size="sm" onClick={() => toast({ title: "User reactivated", description: `${u.name} has been reactivated` })}>Reactivate</Button>
                  )}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
