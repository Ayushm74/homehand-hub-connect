import { motion } from "framer-motion";
import { CreditCard, Download, DollarSign, Calendar, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const payments = [
  { id: 1, desc: "Kitchen Faucet Repair", pro: "David Chen", date: "Mar 15, 2026", amount: "$120.00", method: "Visa •••• 4242", status: "Completed" },
  { id: 2, desc: "Living Room Painting", pro: "Marcus Johnson", date: "Mar 10, 2026", amount: "$350.00", method: "Visa •••• 4242", status: "Completed" },
  { id: 3, desc: "AC Unit Maintenance", pro: "Emily Watson", date: "Mar 5, 2026", amount: "$200.00", method: "Apple Pay", status: "Completed" },
  { id: 4, desc: "Bathroom Drain Cleaning", pro: "David Chen", date: "Feb 28, 2026", amount: "$95.00", method: "Visa •••• 4242", status: "Completed" },
  { id: 5, desc: "Deck Staining", pro: "Roberto Silva", date: "Feb 20, 2026", amount: "$450.00", method: "Visa •••• 4242", status: "Refunded" },
  { id: 6, desc: "Electrical Panel Upgrade", pro: "Angela Rodriguez", date: "Feb 15, 2026", amount: "$800.00", method: "Bank Transfer", status: "Completed" },
];

const PaymentHistory = () => {
  const total = payments.filter(p => p.status === "Completed").reduce((sum, p) => sum + parseFloat(p.amount.replace("$", "").replace(",", "")), 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground">Payment History</h1>
          <p className="mt-1 text-muted-foreground">Track all your transactions</p>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <DollarSign className="h-5 w-5 text-primary" />
            <div className="mt-2 text-2xl font-bold text-foreground">${total.toFixed(2)}</div>
            <div className="text-sm text-muted-foreground">Total Spent</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <CreditCard className="h-5 w-5 text-primary" />
            <div className="mt-2 text-2xl font-bold text-foreground">{payments.length}</div>
            <div className="text-sm text-muted-foreground">Transactions</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div className="mt-2 text-2xl font-bold text-foreground">$289</div>
            <div className="text-sm text-muted-foreground">Avg. per Job</div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {payments.map((p) => (
            <div key={p.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{p.desc}</h3>
                  <Badge variant={p.status === "Refunded" ? "destructive" : "secondary"}>{p.status}</Badge>
                </div>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>Pro: {p.pro}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span className="flex items-center gap-1"><CreditCard className="h-3 w-3" />{p.method}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-foreground">{p.amount}</span>
                <Button size="sm" variant="ghost"><Download className="h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
