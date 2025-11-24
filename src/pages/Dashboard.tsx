import { Plus, ArrowRight, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const activeConsultations = [
  { id: "BPA-1006RP394", patient: "Nuha Abdulrehan", mrn: "18132671", status: "Under processing" },
  { id: "BPA-0406RP415", patient: "Mohamed Mostafeen", mrn: "31338517", status: "More info requested" },
  { id: "BPA-1006RP465", patient: "Saeed Alzahrani", mrn: "17361457", status: "Under processing" },
  { id: "BPA-0509RP595", patient: "Abdulrahman Alasmari", mrn: "33522811", status: "Under processing" },
  { id: "BPA-1909RP695", patient: "Amany Faka", mrn: "34630544", status: "Report ready" },
  { id: "BPA-0210RP715", patient: "Khaled Alsubaie", mrn: "38321093", status: "Under processing" },
  { id: "BPA-0510RP745", patient: "Nermin Elgewely", mrn: "37459028", status: "Under processing" },
  { id: "BPA-0710RP765", patient: "Ayed Alharthi", mrn: "11436799", status: "Report ready" },
  { id: "BPA-0810RP775", patient: "Mansour Ali Alalyani", mrn: "9267930", status: "Preparing report" },
  { id: "BPA-0910RP785", patient: "Aqelah Al Aali", mrn: "33528086", status: "Report ready" },
];

export default function Dashboard() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Overview of active consultations</p>
        </div>

        <Card className="border-border">
          <CardHeader className="bg-primary pb-4">
            <CardTitle className="text-lg font-semibold text-primary-foreground">
              Active consultations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted-bg border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Patient</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {activeConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">
                        {consultation.id}
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/consultations/${consultation.id}`} className="text-sm text-info hover:underline font-medium">
                          {consultation.patient}
                        </Link>
                        <span className="text-xs text-muted-foreground ml-2">· {consultation.mrn}</span>
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={consultation.status} showDot />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link to={`/consultations/${consultation.id}`}>
                          <Button variant="outline" size="sm" className="text-primary border-primary/20 hover:bg-primary/5">
                            Open
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border p-4 flex items-center justify-between bg-muted-bg/30">
              <Button variant="ghost" size="sm" className="gap-2 text-info">
                <Plus className="h-4 w-4" />
                New Consultation
              </Button>
              <Link to="/consultations">
                <Button variant="ghost" size="sm" className="gap-2 text-info">
                  Go to Consultations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="w-80 space-y-6">
        <Card className="border-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-foreground">Bupa Arabia</CardTitle>
            <p className="text-sm text-muted-foreground">Account summary</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-xs text-muted-foreground mb-2">Consultations this month: 6</p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Total consultations</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">2024</p>
                  <p className="text-xl font-semibold text-foreground">183</p>
                  <p className="text-sm text-muted-foreground">95</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">2025</p>
                  <p className="text-xl font-semibold text-foreground">88</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Total Services</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">2024</p>
                  <p className="text-base font-medium text-foreground">334 / 300</p>
                  <p className="text-sm text-muted-foreground">184</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">2025</p>
                  <p className="text-base font-medium text-foreground">150</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="border-accent/40 bg-accent/5">
          <AlertCircle className="h-4 w-4 text-accent" />
          <AlertDescription className="text-sm text-foreground">
            You don't have any active plans right now.
          </AlertDescription>
        </Alert>
      </aside>
    </div>
  );
}
