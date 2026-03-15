import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Domus<span className="text-primary">Vesta</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Connecting households with verified local professionals for every home service need. Trusted by 50,000+ homeowners.
          </p>
        </div>
        {[
          {
            title: "For Households",
            links: [
              { label: "Find Professionals", href: "/marketplace" },
              { label: "Post a Job", href: "/post-job" },
              { label: "My Dashboard", href: "/dashboard/household" },
              { label: "Saved Professionals", href: "/saved-professionals" },
              { label: "Job History", href: "/job-history" },
            ],
          },
          {
            title: "For Professionals",
            links: [
              { label: "Join as a Pro", href: "/signup" },
              { label: "Pro Dashboard", href: "/dashboard/professional" },
              { label: "Earnings", href: "/earnings" },
              { label: "How It Works", href: "/#how-it-works" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "FAQ", href: "/faq" },
              { label: "Support", href: "/support" },
              { label: "Contact", href: "/contact" },
              { label: "Settings", href: "/settings" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 DomusVesta. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
