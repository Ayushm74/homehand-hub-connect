import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import ProfessionalProfile from "./pages/ProfessionalProfile";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import PostJob from "./pages/PostJob";
import JobMatching from "./pages/JobMatching";
import HouseholdDashboard from "./pages/HouseholdDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SavedProfessionals from "./pages/SavedProfessionals";
import JobHistory from "./pages/JobHistory";
import PaymentHistory from "./pages/PaymentHistory";
import Earnings from "./pages/Earnings";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/professional/:id" element={<ProfessionalProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/job-matching" element={<JobMatching />} />
              <Route path="/dashboard/household" element={<HouseholdDashboard />} />
              <Route path="/dashboard/professional" element={<ProfessionalDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/saved-professionals" element={<SavedProfessionals />} />
              <Route path="/job-history" element={<JobHistory />} />
              <Route path="/payment-history" element={<PaymentHistory />} />
              <Route path="/earnings" element={<Earnings />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
