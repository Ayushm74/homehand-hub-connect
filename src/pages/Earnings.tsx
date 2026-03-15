import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Calendar, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const earningsSummary = [
  { label: "This Week", value: "$890", change: "+15%", up: true },
  { label: "This Month", value: "$3,450", change: "+12%", up: true },
  { label: "Last Month", value: "$3,080", change: "-5%", up: false },
  { label: "Total Earned", value: "$42,650", change: "", up: true },
];

const transactions = [
  { id: 1, title: "Kitchen Faucet Repair", client: "John D.", date: "Mar 15, 2026", amount: "$120", fee: "$12", net: "$108", status: "Paid" },
  { id: 2, title: "Drain Cleaning", client: "Amy T.", date: "Mar 12, 2026", amount: "$95", fee: "$9.50", net: "$85.50", status: "Paid" },
  { id: 3, title: "Pipe Replacement", client: "Tom B.", date: "Mar 10, 2026", amount: "$250", fee: "$25", net: "$225", status: "Paid" },
  { id: 4, title: "Fixture Installation", client: "Lisa W.", date: "Mar 8, 2026", amount: "$180", fee: "$18", net: "$162", status: "Pending" },
  { id: 5, title: "Emergency Repair", client: "Mark S.", date: "Mar 5, 2026", amount: "$150", fee: "$15", net: "$135", status: "Paid" },
];

const Earnings = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Earnings</h1>
          <p className="mt-1 text-muted-foreground">Track your income and payouts</p>
        </div>
        <Button variant="outline" className="gap-2"><Download className="h-4 w-4" />Export</Button>
      </motion.div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {earningsSummary.map((e) => (
          <div key={e.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm text-muted-foreground">{e.label}</div>
            <div className="mt-1 text-2xl font-bold text-foreground">{e.value}</div>
            {e.change && (
              <div className={`mt-1 flex items-center gap-1 text-xs font-medium ${e.up ? "text-emerald-600" : "text-destructive"}`}>
                {e.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{e.change}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
        <h2 className="text-lg font-semibold text-foreground">Monthly Earnings</h2>
        <div className="mt-4 flex items-end gap-3" style={{ height: "150px" }}>
          {[2800, 3200, 2900, 3500, 3100, 3450].map((val, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div className="w-full rounded-t-lg bg-primary" style={{ height: `${(val / 3500) * 130}px` }} />
              <span className="text-xs text-muted-foreground">{["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-foreground">Transaction History</h2>
        <div className="mt-4 space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{t.title}</h3>
                  <Badge variant={t.status === "Pending" ? "outline" : "secondary"}>{t.status}</Badge>
                </div>
                <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span>Client: {t.client}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{t.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="text-right">
                  <div className="text-muted-foreground">Gross: {t.amount}</div>
                  <div className="text-xs text-muted-foreground">Fee: {t.fee}</div>
                </div>
                <div className="text-lg font-bold text-foreground">{t.net}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Earnings;
