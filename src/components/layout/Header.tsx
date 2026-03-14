import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, Menu, X, Home, Briefcase, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotificationDropdown from "@/components/layout/NotificationDropdown";

const navLinks = [
  { label: "Find Pros", href: "/marketplace", icon: Search },
  { label: "How It Works", href: "/#how-it-works", icon: Home },
  { label: "For Professionals", href: "/pro-signup", icon: Briefcase },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Domus<span className="text-primary">Vesta</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === link.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setNotifOpen(!notifOpen)}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
            </Button>
            <AnimatePresence>
              {notifOpen && <NotificationDropdown onClose={() => setNotifOpen(false)} />}
            </AnimatePresence>
          </div>

          <Link to="/login" className="hidden md:block">
            <Button variant="ghost" size="sm">Log In</Button>
          </Link>
          <Link to="/signup" className="hidden md:block">
            <Button size="sm" className="rounded-full">Sign Up</Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-card md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary"
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex gap-2">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link to="/signup" className="flex-1">
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
