import { useState } from "react";
import { Plus, Download, Search, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/StatusBadge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Consultations</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredConsultations.length} active consultation{filteredConsultations.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          New Consultation
        </Button>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by ID, patient, specialty, or case manager..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground font-medium">Filter by status:</span>
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                statusFilter === status
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-foreground border-border hover:bg-muted-bg"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <Card className="border-border shadow-sm rounded-lg">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted-bg border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1">
                      ID
                      <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1">
                      Patient
                      <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1">
                      Specialty
                      <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Case Manager</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Docspert CM</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-1">
                      Status
                      <ArrowUpDown className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {filteredConsultations.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-muted-foreground">
                      No consultations found matching your filters.
                    </td>
                  </tr>
                ) : (
                  filteredConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-6 py-5 text-sm font-medium text-foreground">
                        {consultation.id}
                      </td>
                      <td className="px-6 py-5">
                        <Link to={`/consultations/${consultation.id}`} className="text-sm text-info hover:underline font-semibold">
                          {consultation.patient}
                        </Link>
                        <span className="text-xs text-muted-foreground block mt-0.5">
                          MRN: {consultation.mrn}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-foreground">{consultation.specialty}</td>
                      <td className="px-6 py-5 text-sm text-foreground">{consultation.caseManager}</td>
                      <td className="px-6 py-5 text-sm text-foreground">{consultation.docspertCM}</td>
                      <td className="px-6 py-5">
                        <StatusBadge status={consultation.status} showDot />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48 bg-popover">
                            <DropdownMenuItem asChild>
                              <Link to={`/consultations/${consultation.id}`} className="cursor-pointer">
                                Open Consultation
                              </Link>
                            </DropdownMenuItem>
                            {consultation.status.toLowerCase().includes("ready") && (
                              <DropdownMenuItem className="cursor-pointer">
                                <Download className="h-4 w-4 mr-2" />
                                Download Report
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
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
