import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, CheckCircle, Briefcase, Star, DollarSign, MessageSquare, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const initialNotifications = [
  { id: 1, icon: Briefcase, title: "New job request received", desc: "Sarah M. wants a plumber for kitchen faucet repair", time: "5 min ago", read: false, type: "job" },
  { id: 2, icon: CheckCircle, title: "Job completed successfully", desc: "Your AC maintenance job has been marked as complete", time: "1 hour ago", read: false, type: "success" },
  { id: 3, icon: Star, title: "New review received", desc: "Tom B. left a 5-star review for pipe replacement", time: "3 hours ago", read: false, type: "review" },
  { id: 4, icon: DollarSign, title: "Payment received", desc: "$120 has been deposited for kitchen faucet repair", time: "5 hours ago", read: true, type: "payment" },
  { id: 5, icon: MessageSquare, title: "New message from John D.", desc: "Hi, just wanted to confirm the time for tomorrow...", time: "1 day ago", read: true, type: "message" },
  { id: 6, icon: Briefcase, title: "Job request accepted", desc: "David Chen accepted your plumbing job request", time: "1 day ago", read: true, type: "job" },
  { id: 7, icon: Clock, title: "Appointment reminder", desc: "Your painting job with Marcus Johnson is tomorrow at 10 AM", time: "2 days ago", read: true, type: "reminder" },
  { id: 8, icon: Star, title: "New review received", desc: "Amy T. left a 5-star review for drain cleaning", time: "3 days ago", read: true, type: "review" },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const { toast } = useToast();

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast({ title: "All notifications marked as read" });
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              <h1 className="text-3xl font-semibold text-foreground">Notifications</h1>
              {unreadCount > 0 && <Badge>{unreadCount} new</Badge>}
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllRead} className="gap-2"><Check className="h-4 w-4" />Mark all read</Button>
          )}
        </motion.div>

        <div className="mt-8 space-y-2">
          {notifications.map((n) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                n.read ? "border-border bg-card" : "border-primary/20 bg-primary/5"
              }`}
              onClick={() => setNotifications(notifications.map((notif) => notif.id === n.id ? { ...notif, read: true } : notif))}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                n.type === "success" ? "bg-emerald-100 text-emerald-600" :
                n.type === "payment" ? "bg-hearth/10 text-hearth" :
                "bg-primary/10 text-primary"
              }`}>
                <n.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className={`text-sm ${n.read ? "text-foreground" : "font-semibold text-foreground"}`}>{n.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{n.desc}</p>
                <span className="mt-1 text-xs text-muted-foreground">{n.time}</span>
              </div>
              {!n.read && <div className="mt-2 h-2 w-2 rounded-full bg-primary" />}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
