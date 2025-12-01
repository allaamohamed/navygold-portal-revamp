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
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of active consultations and account performance</p>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT COLUMN - Consultations Data */}
        <div className="lg:col-span-8 space-y-5">
          {/* Active Consultations Table */}
          <Card>
            <CardHeader className="bg-muted-bg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground">
                  Active Consultations
                </CardTitle>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Consultation
                </Button>
              </div>
              
              {/* Filter Bar */}
              <div className="flex gap-2 mt-3 flex-wrap">
                {["All", "Under processing", "Report ready", "More info requested"].map((filter) => (
                  <Button
                    key={filter}
                    variant={statusFilter === filter ? "default" : "light"}
                    size="sm"
                    onClick={() => setStatusFilter(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted-bg border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">ID</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Patient</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredConsultations.map((consultation) => (
                      <tr key={consultation.id} className="hover:bg-muted-bg/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-foreground">
                          {consultation.id}
                        </td>
                        <td className="px-4 py-3">
                          <Link to={`/consultations/${consultation.id}`} className="text-sm text-primary hover:underline font-medium">
                            {consultation.patient}
                          </Link>
                          <span className="text-xs text-muted-foreground ml-2">MRN {consultation.mrn}</span>
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge status={consultation.status} />
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Link to={`/consultations/${consultation.id}`}>
                            <Button variant="outline" size="sm">
                              Open
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-border p-3 flex items-center justify-end">
                <Link to="/consultations">
                  <Button variant="link" size="sm" className="gap-1">
                    View All Consultations
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Cases Pending Action */}
          <Card>
            <CardHeader className="bg-warning/10">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-4 w-4 text-warning" />
                Cases Pending Action
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-muted-bg border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Case ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Patient</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Days Waiting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {casesPendingAction.map((item) => (
                    <tr key={item.id} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">{item.id}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{item.patient}</td>
                      <td className="px-4 py-3 text-right">
                        <Badge variant="outline" className="bg-warning text-warning-foreground border-0">
                          {item.daysWaiting} days
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Statuses of Open Cases */}
          <Card>
            <CardHeader className="bg-info/10">
              <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-info" />
                Statuses of Open Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-muted-bg border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {statusesOfOpenCases.map((item) => (
                    <tr key={item.status} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-4 py-3">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className="text-lg font-bold text-foreground">{item.count}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN - KPIs & Account Summary */}
        <div className="lg:col-span-4 space-y-5">
          {/* KPI Panel - Total Consultations */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader className="border-b-0 pb-2">
              <CardTitle className="text-sm font-medium text-primary-foreground/80 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Total Consultations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-4xl font-bold">271</p>
                <p className="text-sm text-primary-foreground/70 mt-1">All time consultations</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-primary-foreground/20">
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">2024</p>
                  <p className="text-xl font-bold">183</p>
                  <p className="text-xs text-primary-foreground/70">Completed: 95</p>
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60 mb-1">2025</p>
                  <p className="text-xl font-bold">88</p>
                  <p className="text-xs text-success">+48% YoY</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-primary-foreground/60 mb-1">This month</p>
                <p className="text-lg font-semibold">6</p>
              </div>
            </CardContent>
          </Card>

          {/* KPI Panel - Total Services */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-foreground">337</p>
                  <p className="text-lg text-muted-foreground">/ 300</p>
                </div>
                <Progress value={100} className="mt-2 h-2" />
                <p className="text-xs text-warning mt-2 font-medium">112% of target capacity</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2024</p>
                  <p className="text-base font-semibold text-foreground">334 / 300</p>
                  <p className="text-xs text-muted-foreground">Used: 184</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">2025</p>
                  <p className="text-base font-semibold text-foreground">150</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Bupa Arabia</CardTitle>
              <p className="text-sm text-muted-foreground">Account summary</p>
            </CardHeader>
            <CardContent>
              <Alert className="border-warning bg-warning/10">
                <AlertCircle className="h-4 w-4 text-warning" />
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
