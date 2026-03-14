import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfessionals } from "@/lib/api";
import ProfessionalCard, { type Professional } from "@/components/marketplace/ProfessionalCard";
import SkeletonCard from "@/components/marketplace/SkeletonCard";
import SearchFilters from "@/components/marketplace/SearchFilters";
import { useState } from "react";
import { Users } from "lucide-react";

// Fallback demo data for when API is not connected
const demoProfessionals: Professional[] = [
  { id: "1", name: "David Chen", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=David", title: "Master Plumber", rating: 4.9, reviewCount: 127, completedJobs: 342, hourlyRate: 75, location: "Brooklyn, NY", skills: ["Pipe Repair", "Drain Cleaning", "Water Heater"], isVerified: true },
  { id: "2", name: "Angela Rodriguez", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Angela", title: "Licensed Electrician", rating: 4.8, reviewCount: 89, completedJobs: 256, hourlyRate: 85, location: "Manhattan, NY", skills: ["Wiring", "Panel Upgrades", "EV Chargers"], isVerified: true },
  { id: "3", name: "Marcus Johnson", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Marcus", title: "Interior Painter", rating: 4.7, reviewCount: 64, completedJobs: 198, hourlyRate: 55, location: "Queens, NY", skills: ["Interior", "Exterior", "Cabinet Refinish"], isVerified: true },
  { id: "4", name: "Yuki Tanaka", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Yuki", title: "Professional Cleaner", rating: 5.0, reviewCount: 203, completedJobs: 510, hourlyRate: 45, location: "Brooklyn, NY", skills: ["Deep Clean", "Move-out", "Eco-Friendly"], isVerified: true },
  { id: "5", name: "Roberto Silva", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Roberto", title: "Carpenter & Woodworker", rating: 4.9, reviewCount: 156, completedJobs: 287, hourlyRate: 70, location: "Bronx, NY", skills: ["Custom Furniture", "Cabinets", "Decks"], isVerified: true },
  { id: "6", name: "Emily Watson", avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Emily", title: "HVAC Technician", rating: 4.6, reviewCount: 78, completedJobs: 165, hourlyRate: 90, location: "Staten Island, NY", skills: ["AC Repair", "Heating", "Ductwork"], isVerified: true },
];

const Marketplace = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    searchParams.forEach((v, k) => { initial[k] = v; });
    return initial;
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["professionals", filters],
    queryFn: () => getProfessionals(filters),
    placeholderData: demoProfessionals,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const professionals: Professional[] = data || demoProfessionals;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-foreground">Find a Professional</h1>
          <p className="mt-1 text-muted-foreground">
            Browse verified professionals near you
          </p>
        </div>

        <div className="mt-6">
          <SearchFilters onFilter={setFilters} />
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{professionals.length} professionals found</span>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : professionals.map((pro, i) => (
                <ProfessionalCard key={pro.id} pro={pro} index={i} />
              ))}
        </div>

        {!isLoading && professionals.length === 0 && (
          <div className="mt-20 text-center">
            <Users className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No professionals found</h3>
            <p className="mt-1 text-muted-foreground">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
