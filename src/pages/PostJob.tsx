import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, Calendar, DollarSign, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";

const categories = ["Plumbing", "Electrical", "Painting", "Cleaning", "Carpentry", "HVAC", "Landscaping", "General Repair"];

const PostJob = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", category: "", description: "", location: "", date: "", budgetMin: "", budgetMax: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Job posted!", description: "We're matching you with the best professionals." });
    navigate("/job-matching");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Link to="/dashboard/household" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <h1 className="text-3xl font-semibold text-foreground">Post a Job</h1>
          <p className="mt-1 text-muted-foreground">Describe what you need and we'll match you with the best professionals.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2"><Wrench className="h-5 w-5 text-primary" />Service Details</h2>
              <div>
                <label className="text-sm font-medium text-foreground">Job Title</label>
                <Input className="mt-1" placeholder="e.g., Fix leaking kitchen faucet" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Category</label>
                <Select onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger className="mt-1"><SelectValue placeholder="Select a category" /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Description</label>
                <Textarea className="mt-1" rows={4} placeholder="Describe the issue in detail..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Location & Schedule</h2>
              <div>
                <label className="text-sm font-medium text-foreground">Location</label>
                <Input className="mt-1" placeholder="Address or neighborhood" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Preferred Date</label>
                <Input className="mt-1" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2"><DollarSign className="h-5 w-5 text-primary" />Budget</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">Minimum ($)</label>
                  <Input className="mt-1" type="number" placeholder="50" value={form.budgetMin} onChange={(e) => setForm({ ...form, budgetMin: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Maximum ($)</label>
                  <Input className="mt-1" type="number" placeholder="200" value={form.budgetMax} onChange={(e) => setForm({ ...form, budgetMax: e.target.value })} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">Drag & drop images or click to upload</p>
              <Button variant="outline" className="mt-3" size="sm" type="button">Choose Files</Button>
            </div>

            <div className="flex gap-3">
              <Button type="submit" size="lg" className="flex-1">Post Job & Find Professionals</Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate(-1)}>Cancel</Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default PostJob;
