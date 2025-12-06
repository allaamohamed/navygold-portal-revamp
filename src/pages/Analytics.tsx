import { ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const planData = {
  name: "Plan",
  price: "100.00",
  startDate: "30-09-2025",
  endDate: "04-10-2025",
  status: "Active",
};

const unitBreakdown = [
  { unit: "Services (Report)", used: 0, limit: 300, remaining: 300, utilization: "0%" },
];

const servicesData = {
  report: { used: 0, remaining: 300, total: 300 },
  video: { used: 0, remaining: 0, total: 0 },
};

export default function Analytics() {
  const totalConsumed = servicesData.report.used + servicesData.video.used;
  const totalRemaining = servicesData.report.remaining + servicesData.video.remaining;
  const totalServices = servicesData.report.total + servicesData.video.total;
  const utilizationPercent = totalServices > 0 ? ((totalConsumed / totalServices) * 100).toFixed(1) : 0;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Plan Analytics</h1>
          <p className="text-muted-foreground mt-1">Detailed analysis of your current plan's performance.</p>
        </div>
        <Link to="/">
          <Button variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          {/* Plan Summary */}
          <Card className="border-border shadow-sm overflow-hidden">
            <CardHeader className="bg-primary py-3">
              <CardTitle className="text-base font-semibold text-primary-foreground">
                Plan Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">Plan name</td>
                    <td className="px-5 py-3 text-sm text-foreground">{planData.name}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">Price</td>
                    <td className="px-5 py-3 text-sm text-foreground">{planData.price}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">Start date</td>
                    <td className="px-5 py-3 text-sm text-foreground">{planData.startDate}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">End date</td>
                    <td className="px-5 py-3 text-sm text-foreground">{planData.endDate}</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">Status</td>
                    <td className="px-5 py-3">
                      <Badge className="bg-success text-success-foreground hover:bg-success/90">
                        {planData.status}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Unit Breakdown */}
          <Card className="border-border shadow-sm overflow-hidden">
            <CardHeader className="bg-info py-3">
              <CardTitle className="text-base font-semibold text-info-foreground">
                Unit Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-5 py-3 text-left text-sm font-semibold text-foreground">Unit</th>
                      <th className="px-5 py-3 text-center text-sm font-semibold text-foreground">Used</th>
                      <th className="px-5 py-3 text-center text-sm font-semibold text-foreground">Limit</th>
                      <th className="px-5 py-3 text-center text-sm font-semibold text-foreground">Remaining</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-foreground">Utilization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {unitBreakdown.map((item) => (
                      <tr key={item.unit}>
                        <td className="px-5 py-4 text-sm text-foreground">{item.unit}</td>
                        <td className="px-5 py-4 text-sm text-foreground text-center">{item.used}</td>
                        <td className="px-5 py-4 text-sm text-foreground text-center">{item.limit}</td>
                        <td className="px-5 py-4 text-sm text-foreground text-center">{item.remaining}</td>
                        <td className="px-5 py-4 text-sm text-foreground text-right">{item.utilization}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* Overall Usage */}
          <Card className="border-border shadow-sm overflow-hidden">
            <CardHeader className="bg-success py-3">
              <CardTitle className="text-base font-semibold text-success-foreground">
                Overall Usage
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-info mb-1">Total Services Consumed</p>
                  <p className="text-4xl font-bold text-foreground">{totalConsumed}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-info mb-1">Total Services Remaining</p>
                  <p className="text-4xl font-bold text-foreground">{totalRemaining}</p>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground mb-2">Overall utilization</p>
                <Progress value={Number(utilizationPercent)} className="h-2 mb-2" />
                <p className="text-xs text-muted-foreground">
                  {totalConsumed} used of {totalServices} ({utilizationPercent}%). {totalRemaining} remaining.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Expert Units Notice */}
          <Card className="border-border shadow-sm bg-muted/50">
            <CardContent className="py-8 flex items-center justify-center gap-2 text-muted-foreground">
              <Info className="h-5 w-5" />
              <p className="text-sm">This plan does not include Expert units.</p>
            </CardContent>
          </Card>

          {/* Services Breakdown */}
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-2 border-b border-border">
              <CardTitle className="text-base font-semibold text-foreground">
                Services Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Donut Chart */}
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Report", value: servicesData.report.total || 1 },
                        { name: "Video", value: servicesData.video.total || 1 },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="hsl(var(--muted))" />
                      <Cell fill="hsl(var(--muted))" />
                    </Pie>
                    <Legend
                      verticalAlign="bottom"
                      height={24}
                      formatter={(value) => (
                        <span className="text-xs text-muted-foreground">Services ({value})</span>
                      )}
                      payload={[
                        { value: "Report", type: "square", color: "hsl(var(--accent))" },
                        { value: "Video", type: "square", color: "hsl(var(--info))" },
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Service Details */}
              <div className="space-y-4 pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Services (Report)</p>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>{servicesData.report.used} used</span>
                    <span>{servicesData.report.remaining} remaining</span>
                  </div>
                  <Progress value={0} className="h-1.5 mb-1" />
                  <p className="text-xs text-muted-foreground">0.0% of total consumption</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Services (Video)</p>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>{servicesData.video.used} used</span>
                    <span>{servicesData.video.remaining} remaining</span>
                  </div>
                  <Progress value={0} className="h-1.5 mb-1" />
                  <p className="text-xs text-muted-foreground">0% of total consumption</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
