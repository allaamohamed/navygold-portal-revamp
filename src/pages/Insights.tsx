import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface InsightData {
  id: string;
  month: string;
  caseNo: string;
  bupaId: string;
  dateOpened: string;
  dateClosed: string;
  turnAroundTime: string;
  noExperts: string;
  specialty: string;
  newDiagnosis: string;
  changeInDiagnosis: string;
  changeInTreatment: string;
  costsRemoved: string;
  costsAdded: string;
  caseManager: string;
}

const insightsData: InsightData[] = [
  {
    id: "1",
    month: "November",
    caseNo: "BPA-0711RP855",
    bupaId: "35391664",
    dateOpened: "TBD",
    dateClosed: "TBD",
    turnAroundTime: "TBD",
    noExperts: "TBD",
    specialty: "Pediatric Neurology",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Marwa Ibrahim",
  },
  {
    id: "2",
    month: "November",
    caseNo: "BPA-0611RP845",
    bupaId: "9217783",
    dateOpened: "2025-11-19",
    dateClosed: "TBD",
    turnAroundTime: "4",
    noExperts: "2",
    specialty: "Vascular Surgery",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Reem Mohamed",
  },
  {
    id: "3",
    month: "November",
    caseNo: "BPA-0511RP835",
    bupaId: "31837066",
    dateOpened: "2025-11-19",
    dateClosed: "TBD",
    turnAroundTime: "TBD",
    noExperts: "1",
    specialty: "Orthopedics",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Reem Mohamed",
  },
  {
    id: "4",
    month: "November",
    caseNo: "BPA-0411RP825",
    bupaId: "35324893",
    dateOpened: "2025-11-17",
    dateClosed: "TBD",
    turnAroundTime: "2",
    noExperts: "2",
    specialty: "Ophthalmology",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Marwa Ibrahim",
  },
  {
    id: "5",
    month: "November",
    caseNo: "BPA-0311RP815",
    bupaId: "30722439",
    dateOpened: "2025-11-17",
    dateClosed: "2025-11-21",
    turnAroundTime: "1",
    noExperts: "2",
    specialty: "Pediatrics",
    newDiagnosis: "Yes",
    changeInDiagnosis: "No",
    changeInTreatment: "Yes",
    costsRemoved: "None",
    costsAdded: "1",
    caseManager: "Marwa Ibrahim",
  },
  {
    id: "6",
    month: "November",
    caseNo: "BPA-0111RP805",
    bupaId: "18409166",
    dateOpened: "2025-11-21",
    dateClosed: "TBD",
    turnAroundTime: "2",
    noExperts: "3",
    specialty: "Hematology/Oncology",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Marwa Ibrahim",
  },
  {
    id: "7",
    month: "October",
    caseNo: "BPA-1110RP795",
    bupaId: "35393657",
    dateOpened: "2025-10-27",
    dateClosed: "TBD",
    turnAroundTime: "2",
    noExperts: "2",
    specialty: "Plastic Surgery",
    newDiagnosis: "Yes",
    changeInDiagnosis: "No",
    changeInTreatment: "No",
    costsRemoved: "None",
    costsAdded: "0",
    caseManager: "Marwa Ibrahim",
  },
  {
    id: "8",
    month: "October",
    caseNo: "BPA-0910RP785",
    bupaId: "33528086",
    dateOpened: "2025-11-09",
    dateClosed: "TBD",
    turnAroundTime: "TBD",
    noExperts: "2",
    specialty: "Neurology",
    newDiagnosis: "N/A",
    changeInDiagnosis: "N/A",
    changeInTreatment: "N/A",
    costsRemoved: "0",
    costsAdded: "0",
    caseManager: "Marwa Ibrahim",
  },
];

export default function Insights() {
  const [monthFilter, setMonthFilter] = useState<string>("all");
  const [patientFilter, setPatientFilter] = useState<string>("all");

  const handleExportCSV = () => {
    // CSV export functionality would go here
    console.log("Exporting CSV...");
  };

  return (
    <div className="space-y-6">
      {/* Info Notes */}
      <Card className="border-info/20 bg-info/5">
        <CardContent className="p-4">
          <div className="space-y-1 text-sm text-foreground">
            <p>
              <span className="font-semibold">•N/A*:</span> Not Applicable. The case may be on hold or does not include the necessary information so far
            </p>
            <p>
              <span className="font-semibold">•TBD**:</span> To Be Decided. The case hasn't been closed yet, so the outcome is still pending.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Select value={monthFilter} onValueChange={setMonthFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All months" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All months</SelectItem>
              <SelectItem value="november">November</SelectItem>
              <SelectItem value="october">October</SelectItem>
              <SelectItem value="september">September</SelectItem>
            </SelectContent>
          </Select>

          <Select value={patientFilter} onValueChange={setPatientFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All patients" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All patients</SelectItem>
              <SelectItem value="pediatric">Pediatric</SelectItem>
              <SelectItem value="adult">Adult</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-info hover:bg-info/90 text-info-foreground">
            Filter
          </Button>
        </div>

        <Button variant="outline" onClick={handleExportCSV}>
          Export CSV
        </Button>
      </div>

      {/* Data Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-semibold">Month</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Case No.</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Bupa ID</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Date Opened</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Date Closed</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Turn Around Time</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">No. Experts</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Specialty</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Recommended New Diagnosis</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Recommended Change in Diagnosis?</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Recommended Change in Treatment Plan?</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Costs Removed ($)</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Costs Added</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Bupa Case Manager</TableHead>
                  <TableHead className="text-primary-foreground font-semibold"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {insightsData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.month}</TableCell>
                    <TableCell>{row.caseNo}</TableCell>
                    <TableCell>{row.bupaId}</TableCell>
                    <TableCell>{row.dateOpened}</TableCell>
                    <TableCell>{row.dateClosed}</TableCell>
                    <TableCell>{row.turnAroundTime}</TableCell>
                    <TableCell>{row.noExperts}</TableCell>
                    <TableCell>{row.specialty}</TableCell>
                    <TableCell>{row.newDiagnosis}</TableCell>
                    <TableCell>{row.changeInDiagnosis}</TableCell>
                    <TableCell>{row.changeInTreatment}</TableCell>
                    <TableCell>{row.costsRemoved}</TableCell>
                    <TableCell>{row.costsAdded}</TableCell>
                    <TableCell>{row.caseManager}</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="bg-info hover:bg-info/90 text-info-foreground"
                      >
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
