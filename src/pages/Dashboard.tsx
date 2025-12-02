import { Plus, ArrowRight, Clock, AlertCircle, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const activeConsultations = [
  { id: "BPA-1006RP394", patient: "Nuha Abdulrehan", mrn: "18132671", status: "Under processing" },
  { id: "BPA-0406RP415", patient: "Mohamed Mostafeen", mrn: "31338517", status: "More info requested" },
  { id: "BPA-1006RP465", patient: "Saeed Alzahrani", mrn: "17361457", status: "Under processing" },
  { id: "BPA-0509RP595", patient: "Abdulrahman Alasmari", mrn: "33522811", status: "Under processing" },
  { id: "BPA-1909RP695", patient: "Amany Faka", mrn: "34630544", status: "Report ready" },
  { id: "BPA-0210RP715", patient: "Khaled Alsubaie", mrn: "38321093", status: "Under processing" },
  { id: "BPA-0510RP745", patient: "Nermin Elgewely", mrn: "37459028", status: "Under processing" },
  { id: "BPA-0710RP765", parent: "Ayed Alharthi", mrn: "11436799", status: "Report ready" },
  { id: "BPA-0810RP775", patient: "Mansour Ali Alalyani", mrn: "9267930", status: "Preparing report" },
  { id: "BPA-0910RP785", patient: "Aqelah Al Aali", mrn: "33528086", status: "Report ready" },
];

const casesPendingAction = [
  { id: "BPA-0406RP415", patient: "Mohamed Mostafeen", daysWaiting: 3 },
  { id: "BPA-1006RP465", patient: "Saeed Alzahrani", daysWaiting: 2 },
  { id: "BPA-0509RP595", patient: "Abdulrahman Alasmari", daysWaiting: 1 },
];

const statusesOfOpenCases = [
  { status: "Under processing", count: 5 },
  { status: "More info requested", count: 1 },
  { status: "Report ready", count: 3 },
  { status: "Preparing report", count: 1 },
];

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredConsultations =
    statusFilter === "All"
      ? activeConsultations
      : activeConsultations.filter((c) => c.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of active consultations and account performance</p>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN - Consultations Data */}
        <div className="lg:col-span-8 space-y-6">
          {/* Active Consultations Table */}
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-card border-b border-border pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-foreground">
                  Active Consultations
                </CardTitle>
                <Button variant="default" size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Plus className="h-4 w-4" />
                  New Consultation
                </Button>
              </div>
              
              {/* Filter Bar */}
              <div className="flex gap-2 mt-4">
                {["All", "Under processing", "Report ready", "More info requested"].map((filter) => (
                  <Button
                    key={filter}
                    variant={statusFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setStatusFilter(filter)}
                    className={statusFilter === filter ? "bg-accent text-accent-foreground" : ""}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">ID</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Patient</th>
                      <th className="px-5 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-5 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {filteredConsultations.map((consultation) => (
                      <tr key={consultation.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4 text-[15px] font-medium text-foreground">
                          {consultation.id}
                        </td>
                        <td className="px-5 py-4">
                          <Link to={`/consultations/${consultation.id}`} className="text-[15px] text-info hover:underline font-medium">
                            {consultation.patient}
                          </Link>
                          <span className="text-sm text-muted-foreground ml-2">· MRN {consultation.mrn}</span>
                        </td>
                        <td className="px-5 py-4">
                          <StatusBadge status={consultation.status} showDot />
                        </td>
                        <td className="px-5 py-4 text-right">
                          <Link to={`/consultations/${consultation.id}`}>
                            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">
                              Open
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-border p-4 flex items-center justify-end bg-muted/20">
                <Link to="/consultations">
                  <Button variant="ghost" size="sm" className="gap-2 text-info hover:text-info/80">
                    View All Consultations
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Cases Pending Action */}
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-card border-b border-border pb-3">
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                Cases Pending Action
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-5 py-3 text-left text-sm font-semibold text-foreground">Case ID</th>
                      <th className="px-5 py-3 text-left text-sm font-semibold text-foreground">Patient</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-foreground">Days Waiting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {casesPendingAction.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4 text-[15px] font-medium text-foreground">{item.id}</td>
                        <td className="px-5 py-4 text-[15px] text-foreground">{item.patient}</td>
                        <td className="px-5 py-4 text-right">
                          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                            {item.daysWaiting} days
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Statuses of Open Cases */}
          <Card className="border-border shadow-sm">
            <CardHeader className="bg-card border-b border-border pb-3">
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-info" />
                Statuses of Open Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-5 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-5 py-3 text-right text-sm font-semibold text-foreground">Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-card">
                    {statusesOfOpenCases.map((item) => (
                      <tr key={item.status} className="hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4">
                          <StatusBadge status={item.status} showDot />
                        </td>
                        <td className="px-5 py-4 text-right">
                          <span className="text-xl font-bold text-foreground">{item.count}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - KPIs & Account Summary */}
        <div className="lg:col-span-4 space-y-6">
          {/* KPI Panel - Total Consultations */}
          <Card className="border-border shadow-sm bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Total Consultations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-5xl font-bold text-foreground">271</p>
                <p className="text-sm text-muted-foreground mt-1">All time consultations</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2024</p>
                  <p className="text-2xl font-bold text-foreground">183</p>
                  <p className="text-sm text-muted-foreground">Completed: 95</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2025</p>
                  <p className="text-2xl font-bold text-foreground">88</p>
                  <p className="text-sm text-success">+48% YoY</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground mb-1">This month</p>
                <p className="text-xl font-semibold text-foreground">6</p>
              </div>
            </CardContent>
          </Card>

          {/* KPI Panel - Total Services */}
          <Card className="border-border shadow-sm bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-muted-foreground">
                Total Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-foreground">337</p>
                  <p className="text-xl text-muted-foreground">/ 300</p>
                </div>
                <Progress value={112.3} className="mt-3 h-2" />
                <p className="text-xs text-warning mt-2">112% of target capacity</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2024</p>
                  <p className="text-lg font-semibold text-foreground">334 / 300</p>
                  <p className="text-sm text-muted-foreground">Used: 184</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2025</p>
                  <p className="text-lg font-semibold text-foreground">150</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Summary */}
          <Card className="border-border shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">Bupa Arabia</CardTitle>
              <p className="text-sm text-muted-foreground">Account summary</p>
            </CardHeader>
            <CardContent>
              <Alert className="border-accent/40 bg-accent/5">
                <AlertCircle className="h-4 w-4 text-accent" />
                <AlertDescription className="text-sm text-foreground">
                  You don't have any active plans right now.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
