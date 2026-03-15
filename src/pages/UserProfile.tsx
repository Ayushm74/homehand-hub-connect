import { motion } from "framer-motion";
import { User, MapPin, Calendar, Mail, Phone, Edit, Camera, Star, Briefcase, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const profile = {
  name: "John Doe",
  email: "john@example.com",
  phone: "(212) 555-0123",
  location: "Brooklyn, NY",
  joined: "January 2025",
  avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=JohnDoe",
  jobsPosted: 18,
  reviewsGiven: 12,
  savedPros: 8,
};

const recentActivity = [
  { action: "Posted a job", detail: "Kitchen Faucet Repair", date: "Mar 15, 2026" },
  { action: "Left a review", detail: "5 stars for David Chen", date: "Mar 10, 2026" },
  { action: "Completed a job", detail: "Living Room Painting", date: "Mar 5, 2026" },
  { action: "Saved a professional", detail: "Angela Rodriguez", date: "Mar 3, 2026" },
];

const UserProfile = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        {/* Profile Header */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="relative">
              <img src={profile.avatar} alt={profile.name} className="h-24 w-24 rounded-full bg-secondary" />
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-semibold text-foreground">{profile.name}</h1>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{profile.location}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Joined {profile.joined}</span>
              </div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:justify-start">
                <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{profile.email}</span>
                <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{profile.phone}</span>
              </div>
            </div>
            <Link to="/settings"><Button variant="outline" className="gap-2"><Edit className="h-4 w-4" />Edit Profile</Button></Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { icon: Briefcase, label: "Jobs Posted", value: profile.jobsPosted },
            { icon: Star, label: "Reviews Given", value: profile.reviewsGiven },
            { icon: CheckCircle, label: "Saved Pros", value: profile.savedPros },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
              <s.icon className="mx-auto h-5 w-5 text-primary" />
              <div className="mt-2 text-xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          <div className="mt-4 space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <div className="text-sm font-medium text-foreground">{a.action}</div>
                  <div className="text-xs text-muted-foreground">{a.detail}</div>
                </div>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Link to="/post-job"><Button variant="outline" className="w-full">Post a Job</Button></Link>
          <Link to="/job-history"><Button variant="outline" className="w-full">Job History</Button></Link>
          <Link to="/saved-professionals"><Button variant="outline" className="w-full">Saved Pros</Button></Link>
          <Link to="/settings"><Button variant="outline" className="w-full">Settings</Button></Link>
        </div>
      </motion.div>
    </div>
  </div>
);

export default UserProfile;
