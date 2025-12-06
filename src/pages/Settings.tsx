import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement actual password change logic
    toast({
      title: "Success",
      description: "Password changed successfully",
    });
    
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Account Settings</h1>
      </div>
      
      <Separator className="bg-border" />

      <Card className="max-w-md shadow-sm">
        <CardContent className="pt-6">
          <h2 className="text-lg font-semibold text-foreground mb-6">Change password</h2>
          
          <form onSubmit={handleChangePassword} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-sm font-medium text-primary">
                Current Password
              </Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="max-w-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-sm font-medium text-primary">
                New Password
              </Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="max-w-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium text-primary">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="max-w-sm"
                required
              />
            </div>

            <Button type="submit" className="mt-2">
              Change password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
