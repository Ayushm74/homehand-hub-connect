import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Home className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Domus<span className="text-primary">Vesta</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Connecting households with verified local professionals for every home service need.
          </p>
        </div>
        {[
          {
            title: "For Households",
            links: [
              { label: "Find Professionals", href: "/marketplace" },
              { label: "Post a Job", href: "/dashboard/household" },
              { label: "How It Works", href: "/#how-it-works" },
            ],
          },
          {
            title: "For Professionals",
            links: [
              { label: "Join as a Pro", href: "/pro-signup" },
              { label: "Pro Dashboard", href: "/dashboard/professional" },
              { label: "Pricing", href: "/pricing" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About Us", href: "/about" },
              { label: "Trust & Safety", href: "/trust" },
              { label: "Support", href: "/support" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
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
