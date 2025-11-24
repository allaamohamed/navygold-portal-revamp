import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const patients = [
  { id: "10675752", name: "Abdallah Abuzeyad", phone: "+966538536697", email: "abd_200@hotmail.com", createdAt: "Thu 23 May 2024 07:11" },
  { id: "17487160", name: "Abdul Rahman Salami", phone: "+966569267834", email: "a.al.salami@gmail.com", createdAt: "Thu 12 Sep 2024 10:45" },
  { id: "35735865", name: "Abdulaziz Al Shamare", phone: "+966561562222", email: "hessaabdulazizalshammar@email.com", createdAt: "Thu 23 Jan 2025 12:04" },
  { id: "18855244", name: "Abdullah Alghamdi", phone: "+966557337573", email: "m.alghamdi@scfhs.org.sa", createdAt: "Tue 15 Oct 2024 10:43" },
  { id: "31597610", name: "Abdullah Al Asmari", phone: "+966554145600", email: "abdasmis@hotmail.com", createdAt: "Tue 24 Sep 2024 12:40" },
  { id: "36153602", name: "Abdullah Mohamed", phone: "+966546437352", email: "mohamed.t.ahmed@sa.ey.com", createdAt: "Tue 03 Sep 2024 13:27" },
  { id: "9291273", name: "Abdullah Alabdulrahman", phone: "+966506953517", email: "abdulmohsenaaa@gmail.com", createdAt: "Thu 19 Dec 2024 12:23" },
  { id: "9262475", name: "Abdullah Alharbi", phone: "+966505205848", email: "awaid@sabic.com", createdAt: "Mon 01 Jul 2024 09:31" },
  { id: "34434006", name: "Abdullah Alnasser", phone: "+966599244606", email: "mujtaba3806@gmail.com", createdAt: "Mon 24 Feb 2025 12:54" },
  { id: "33536189", name: "Abdulmohsen Alibrahim", phone: "+966567552522", email: "abdulmhsmx20017@gmail.com", createdAt: "Mon 04 Aug 2025 08:30" },
  { id: "9279179", name: "Abdulmohsin Alqahtani", phone: "+966569380061", email: "qahtaniaa@saudikayan.sabic.com", createdAt: "Wed 03 Apr 2024 12:17" },
  { id: "32413173", name: "Abdulrahman Wael", phone: "+966558100588", email: "attar05@yahoo.com", createdAt: "Sun 26 May 2024 14:14" },
  { id: "32951819", name: "Abdulrahman Samih", phone: "+966567548048", email: "samehseleem2@icloud.com", createdAt: "Wed 05 Mar 2025 11:10" },
];

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter(patient => 
    patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Patients</h1>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <Plus className="h-4 w-4" />
          New Patient
        </Button>
      </div>

      <Card className="border-border">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filter: ID, Name, Phone"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 border-border"
              />
            </div>
            <span className="text-sm text-muted-foreground">
              Total: <span className="font-medium text-foreground">{filteredPatients.length}</span>
            </span>
          </div>

          <div className="border border-border rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground border-b border-primary">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium">Patient ID</th>
                    <th className="px-4 py-3 text-left text-xs font-medium">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-medium">Phone</th>
                    <th className="px-4 py-3 text-left text-xs font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-medium">Created at</th>
                    <th className="px-4 py-3 text-right text-xs font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-muted-bg/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-foreground">
                        {patient.id}
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground font-medium">
                        {patient.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground">
                        {patient.phone}
                      </td>
                      <td className="px-4 py-3 text-sm text-foreground">
                        {patient.email}
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {patient.createdAt}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link to={`/patients/${patient.id}`}>
                          <Button variant="outline" size="sm" className="text-info border-info/20 hover:bg-info/5">
                            Open
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
