import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Star, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All", "Plumbing", "Electrical", "Cleaning", "Carpentry", "Painting", "HVAC", "Landscaping",
];

interface Props {
  onFilter: (filters: Record<string, string>) => void;
}

const SearchFilters = ({ onFilter }: Props) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [minRating, setMinRating] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const filters: Record<string, string> = {};
    if (search) filters.search = search;
    if (location) filters.location = location;
    if (category !== "All") filters.category = category;
    if (minRating) filters.minRating = minRating;
    if (maxPrice) filters.maxPrice = maxPrice;
    onFilter(filters);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search services or professionals..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="pl-10"
          />
        </div>
        <div className="relative w-full md:w-56">
          <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={handleSearch} className="rounded-full px-8">
          Search
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="shrink-0"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { setCategory(cat); handleSearch(); }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              category === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Advanced filters */}
      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap gap-3 rounded-xl border border-border bg-card p-4">
              <div className="relative w-40">
                <Star className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Min rating"
                  type="number"
                  min="1"
                  max="5"
                  step="0.5"
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="relative w-40">
                <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Max $/hr"
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={handleSearch} variant="secondary">
                Apply Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFilters;
