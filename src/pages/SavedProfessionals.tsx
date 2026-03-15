import { motion } from "framer-motion";
import { Heart, Star, MapPin, CheckCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const initialSaved = [
  { id: "1", name: "David Chen", title: "Master Plumber", rating: 4.9, reviews: 127, location: "Brooklyn, NY", rate: "$75/hr", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David" },
  { id: "2", name: "Angela Rodriguez", title: "Licensed Electrician", rating: 4.8, reviews: 89, location: "Manhattan, NY", rate: "$85/hr", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Angela" },
  { id: "4", name: "Yuki Tanaka", title: "Professional Cleaner", rating: 5.0, reviews: 203, location: "Brooklyn, NY", rate: "$45/hr", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Yuki" },
  { id: "5", name: "Roberto Silva", title: "Carpenter", rating: 4.9, reviews: 156, location: "Bronx, NY", rate: "$70/hr", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Roberto" },
];

const SavedProfessionals = () => {
  const [saved, setSaved] = useState(initialSaved);
  const { toast } = useToast();

  const remove = (id: string, name: string) => {
    setSaved(saved.filter((p) => p.id !== id));
    toast({ title: "Removed", description: `${name} removed from saved professionals` });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-destructive" />
            <h1 className="text-3xl font-semibold text-foreground">Saved Professionals</h1>
          </div>
          <p className="mt-1 text-muted-foreground">{saved.length} professionals saved</p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {saved.map((pro) => (
            <motion.div key={pro.id} layout className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
              <img src={pro.avatar} alt={pro.name} className="h-14 w-14 rounded-full bg-secondary" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{pro.name}</h3>
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{pro.title}</p>
                <div className="mt-1 flex gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-hearth text-hearth" />{pro.rating}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{pro.location}</span>
                  <span>{pro.rate}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Link to={`/professional/${pro.id}`}><Button size="sm" variant="outline">View</Button></Link>
                <Button size="sm" variant="ghost" className="text-destructive" onClick={() => remove(pro.id, pro.name)}><Trash2 className="h-4 w-4" /></Button>
              </div>
            </motion.div>
          ))}
        </div>

        {saved.length === 0 && (
          <div className="mt-20 text-center">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No saved professionals</h3>
            <p className="mt-1 text-muted-foreground">Browse the marketplace to find and save professionals</p>
            <Link to="/marketplace"><Button className="mt-4">Browse Professionals</Button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedProfessionals;
