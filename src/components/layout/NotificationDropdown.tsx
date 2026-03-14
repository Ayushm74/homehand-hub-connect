import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "@/lib/api";
import { Bell, CheckCircle, Clock, Star } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  job_request: Bell,
  job_accepted: CheckCircle,
  job_completed: CheckCircle,
  review: Star,
};

const fallbackNotifications = [
  { id: "1", type: "job_request", message: "New plumbing request in Brooklyn", time: "2m ago", read: false },
  { id: "2", type: "job_accepted", message: "Your booking has been confirmed", time: "1h ago", read: false },
  { id: "3", type: "review", message: "You received a 5-star review", time: "3h ago", read: true },
];

interface Props {
  onClose: () => void;
}

const NotificationDropdown = ({ onClose }: Props) => {
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
    placeholderData: fallbackNotifications,
    retry: false,
  });

  const items = notifications || fallbackNotifications;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-border bg-card/95 p-2 shadow-card-hover backdrop-blur-xl"
    >
      <div className="flex items-center justify-between px-3 py-2">
        <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
        <button onClick={onClose} className="text-xs text-primary hover:underline">
          Mark all read
        </button>
      </div>
      <div className="max-h-72 space-y-0.5 overflow-y-auto">
        {items.map((notif: any) => {
          const Icon = iconMap[notif.type] || Clock;
          return (
            <div
              key={notif.id}
              className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-secondary ${
                !notif.read ? "bg-primary/5" : ""
              }`}
            >
              {!notif.read && (
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              )}
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground leading-snug">{notif.message}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{notif.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NotificationDropdown;
