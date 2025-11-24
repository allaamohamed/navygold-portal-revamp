import { Plus, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";

const consultations = [
  {
    id: "BPA-0711RP855",
    patient: "Mahmoud Moustafa",
    mrn: "35391664",
    specialty: "Pediatric Neurology",
    caseManager: "Marwa Ibrahim",
    docspertCM: "Noura Adel",
    status: "Under processing",
  },
  {
    id: "BPA-0611RP845",
    patient: "Mahdi Alyami",
    mrn: "9217783",
    specialty: "Vascular Surgery",
    caseManager: "Reem Mohamed",
    docspertCM: "Abdelwahab Magdy",
    status: "Report ready",
  },
  {
    id: "BPA-0511RP835",
    patient: "Fuad Hamdi",
    mrn: "31837066",
    specialty: "Orthopedics",
    caseManager: "Reem Mohamed",
    docspertCM: "Noura Adel",
    status: "More info requested",
  },
  {
    id: "BPA-0411RP825",
    patient: "Adel Al Mutairi",
    mrn: "35324893",
    specialty: "Ophthalmology",
    caseManager: "Marwa Ibrahim",
    docspertCM: "Abdelwahab Magdy",
    status: "Report ready",
  },
  {
    id: "BPA-0311RP815",
    patient: "Farida Niazy",
    mrn: "30722439",
    specialty: "Pediatrics",
    caseManager: "Marwa Ibrahim",
    docspertCM: "Abdulrahman Sharaf",
    status: "Closed",
  },
  {
    id: "BPA-0111RP805",
    patient: "Chelsa D'lima",
    mrn: "18409166",
    specialty: "Hematology/Oncology",
    caseManager: "Marwa Ibrahim",
    docspertCM: "Noura Adel",
    status: "Report ready",
  },
];

export default function Consultations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Consultations</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage all consultation cases</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          New Consultation
        </Button>
      </div>

      <Card className="border-border">
        <CardHeader className="bg-primary pb-4">
          <CardTitle className="text-lg font-semibold text-primary-foreground">
            All Consultations
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-primary-foreground border-b border-primary">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Patient</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Specialty</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Case Manager</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Docspert CM</th>
                  <th className="px-4 py-3 text-left text-xs font-medium">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {consultations.map((consultation) => (
                  <tr key={consultation.id} className="hover:bg-muted-bg/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {consultation.id}
                    </td>
                    <td className="px-4 py-3">
                      <Link to={`/consultations/${consultation.id}`} className="text-sm text-info hover:underline font-medium">
                        {consultation.patient}
                      </Link>
                      <span className="text-xs text-muted-foreground block">
                        {consultation.mrn}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{consultation.specialty}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{consultation.caseManager}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{consultation.docspertCM}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={consultation.status} showDot />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link to={`/consultations/${consultation.id}`}>
                          <Button variant="outline" size="sm" className="text-info border-info/20 hover:bg-info/5">
                            Open
                          </Button>
                        </Link>
                        {consultation.status.toLowerCase().includes("ready") && (
                          <Button variant="outline" size="sm" className="gap-1 text-accent border-accent/20 hover:bg-accent/5">
                            <Download className="h-3 w-3" />
                            Download Report
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
