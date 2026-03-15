import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, CreditCard, Globe, Palette, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({ name: "John Doe", email: "john@example.com", phone: "(212) 555-0123", location: "Brooklyn, NY" });

  const save = () => toast({ title: "Settings saved", description: "Your changes have been saved successfully." });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
          <p className="mt-1 text-muted-foreground">Manage your account preferences</p>
        </motion.div>

        <Tabs defaultValue="profile" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-flex">
            <TabsTrigger value="profile" className="gap-2"><User className="h-4 w-4" />Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2"><Bell className="h-4 w-4" />Notifications</TabsTrigger>
            <TabsTrigger value="security" className="gap-2"><Shield className="h-4 w-4" />Security</TabsTrigger>
            <TabsTrigger value="billing" className="gap-2"><CreditCard className="h-4 w-4" />Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input className="mt-1" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input className="mt-1" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input className="mt-1" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Location</label>
                  <Input className="mt-1" value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} />
                </div>
              </div>
              <Button className="mt-6" onClick={save}>Save Changes</Button>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="mt-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Notification Preferences</h2>
              <div className="mt-6 space-y-4">
                {[
                  { label: "Email notifications", desc: "Receive updates via email", default: true },
                  { label: "SMS notifications", desc: "Get text message alerts", default: false },
                  { label: "Job updates", desc: "Notifications about your jobs", default: true },
                  { label: "Marketing emails", desc: "Promotional offers and news", default: false },
                  { label: "Review reminders", desc: "Reminders to leave reviews", default: true },
                ].map((n) => (
                  <div key={n.label} className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <div className="text-sm font-medium text-foreground">{n.label}</div>
                      <div className="text-xs text-muted-foreground">{n.desc}</div>
                    </div>
                    <Switch defaultChecked={n.default} />
                  </div>
                ))}
              </div>
              <Button className="mt-6" onClick={save}>Save Preferences</Button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Security Settings</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Current Password</label>
                  <Input className="mt-1" type="password" placeholder="Enter current password" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">New Password</label>
                  <Input className="mt-1" type="password" placeholder="Enter new password" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Confirm Password</label>
                  <Input className="mt-1" type="password" placeholder="Confirm new password" />
                </div>
                <Button onClick={save}>Update Password</Button>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-foreground">Two-Factor Authentication</h3>
                <p className="mt-1 text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                <Button variant="outline" className="mt-3" size="sm">Enable 2FA</Button>
              </div>
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-destructive">Danger Zone</h3>
                <Button variant="destructive" className="mt-3 gap-2" size="sm"><LogOut className="h-4 w-4" />Delete Account</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="billing" className="mt-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold text-foreground">Payment Methods</h2>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Visa ending in 4242</div>
                      <div className="text-xs text-muted-foreground">Expires 12/2027</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Default</span>
                </div>
                <Button variant="outline" size="sm">Add Payment Method</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
