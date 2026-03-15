import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X, Home, Briefcase, User, LayoutDashboard, Heart, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "@/components/layout/NotificationDropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Find Pros", href: "/marketplace", icon: Search },
  { label: "Post a Job", href: "/post-job", icon: Briefcase },
  { label: "How It Works", href: "/#how-it-works", icon: Home },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Domus<span className="text-primary">Vesta</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === link.href ? "bg-secondary text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary">
                More
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild><Link to="/about">About Us</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/faq">FAQ</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/support">Support</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/contact">Contact</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/dashboard/household">Household Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/dashboard/professional">Pro Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/dashboard/admin">Admin Panel</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/notifications" className="hidden md:block">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </Button>
          </Link>

          <Link to="/saved-professionals" className="hidden md:block">
            <Button variant="ghost" size="icon"><Heart className="h-5 w-5" /></Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild><Link to="/profile">My Profile</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/dashboard/household">Dashboard</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/job-history">Job History</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/payment-history">Payments</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link to="/settings">Settings</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild><Link to="/login">Log Out</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link to="/signup" className="hidden md:block">
            <Button size="sm" className="rounded-full">Sign Up</Button>
          </Link>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {[
                { label: "Find Professionals", href: "/marketplace" },
                { label: "Post a Job", href: "/post-job" },
                { label: "Dashboard", href: "/dashboard/household" },
                { label: "Pro Dashboard", href: "/dashboard/professional" },
                { label: "Admin Panel", href: "/dashboard/admin" },
                { label: "Notifications", href: "/notifications" },
                { label: "Saved Pros", href: "/saved-professionals" },
                { label: "Job History", href: "/job-history" },
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Support", href: "/support" },
                { label: "Settings", href: "/settings" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link to="/login" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link to="/signup" className="flex-1" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full rounded-full">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
