import { useState } from "react";
import { Plus, Download, Search, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredConsultations = consultations.filter((consultation) => {
    const matchesSearch = 
      consultation.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.caseManager.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultation.docspertCM.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || consultation.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const statusOptions = [
    "All",
    "Under processing",
    "Report ready",
    "More info requested",
    "Closed",
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Consultations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredConsultations.length} active consultation{filteredConsultations.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Consultation
        </Button>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-3">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by ID, patient, specialty, or case manager..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Status Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Status:</span>
          {statusOptions.map((status) => (
            <Button
              key={status}
              variant={statusFilter === status ? "default" : "light"}
              size="sm"
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted-bg border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      ID
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      Patient
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      Specialty
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Case Manager</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Docspert CM</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                      Status
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredConsultations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-12 text-center text-sm text-muted-foreground">
                      No consultations found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">
                        {consultation.id}
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/consultations/${consultation.id}`} className="text-sm text-primary hover:underline font-medium">
                          {consultation.patient}
                        </Link>
                        <span className="text-xs text-muted-foreground block">
                          MRN: {consultation.mrn}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground">{consultation.specialty}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{consultation.caseManager}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">{consultation.docspertCM}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={consultation.status} />
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex flex-col gap-1.5 items-end">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/consultations/${consultation.id}`}>
                              Open
                            </Link>
                          </Button>
                          {consultation.status.toLowerCase().includes("ready") && (
                            <Button variant="success" size="sm" className="gap-1">
                              <Download className="h-3 w-3" />
                              Download
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
