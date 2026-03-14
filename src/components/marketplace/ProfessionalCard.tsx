import { motion } from "framer-motion";
import { Star, CheckCircle, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface Professional {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  hourlyRate: number;
  location: string;
  skills: string[];
  isVerified: boolean;
  matchScore?: number;
}

interface Props {
  pro: Professional;
  index?: number;
}

const ProfessionalCard = ({ pro, index = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    className="group relative rounded-[20px] border border-border bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
  >
    {pro.matchScore && pro.matchScore > 90 && (
      <span className="absolute -top-2 right-4 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-primary-foreground">
        Best Match
      </span>
    )}

    <div className="flex gap-4">
      <div className="relative h-16 w-16 shrink-0">
        <img
          src={pro.avatar}
          alt={pro.name}
          className="h-full w-full rounded-full object-cover ring-2 ring-primary/10 ring-offset-2 ring-offset-card"
        />
        {pro.isVerified && (
          <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 fill-primary text-primary-foreground" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="truncate text-lg font-semibold leading-tight text-foreground">
            {pro.name}
          </h3>
          <div className="flex items-center gap-1 text-hearth">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-semibold">{pro.rating}</span>
            <span className="text-xs text-muted-foreground">({pro.reviewCount})</span>
          </div>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{pro.title}</p>
        <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {pro.location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="h-3 w-3" /> {pro.completedJobs} jobs
          </span>
        </div>
      </div>
    </div>

    <div className="mt-4 flex flex-wrap gap-1.5">
      {pro.skills.slice(0, 3).map((skill) => (
        <span
          key={skill}
          className="rounded-md bg-secondary px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary-foreground"
        >
          {skill}
        </span>
      ))}
    </div>

    {pro.matchScore !== undefined && (
      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${pro.matchScore}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-primary">{pro.matchScore}% match</span>
      </div>
    )}

    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
      <div>
        <span className="block text-xs text-muted-foreground">Starting at</span>
        <span className="text-lg font-bold tabular-nums text-foreground">
          ${pro.hourlyRate}<span className="text-sm font-normal text-muted-foreground">/hr</span>
        </span>
      </div>
      <Link to={`/professional/${pro.id}`}>
        <Button className="rounded-full px-6" size="sm">
          View Profile
        </Button>
      </Link>
    </div>
  </motion.div>
);

export default ProfessionalCard;
