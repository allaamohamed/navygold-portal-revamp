import { Download, FileText, CheckCircle2, Clock, User } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function ConsultationDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/consultations" className="text-sm text-info hover:underline mb-2 inline-block">
            ← Back to Consultations
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">Consultation {id}</h1>
          <p className="text-sm text-muted-foreground mt-1">Patient: Mahdi Alyami · 9217783</p>
        </div>
        <Badge className="bg-success/10 text-success border-success/20">Report ready</Badge>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Context */}
        <div className="col-span-3 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-foreground">Patient Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-muted-foreground">Patient</p>
                <p className="font-medium text-foreground">Mahdi Alyami</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Date of birth</p>
                <p className="text-foreground">1975-06-29</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Specialty</p>
                <p className="text-foreground">Vascular Surgery</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Expert</p>
                <p className="text-foreground">Mark Morasch</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Created</p>
                <p className="text-foreground">Tue 18 Nov 2025 11:16</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-foreground">Consultation Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-8 bg-success" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Case Review</p>
                    <p className="text-xs text-muted-foreground">Done</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-8 bg-success" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Opinion submitted</p>
                    <p className="text-xs text-muted-foreground">Done</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-8 bg-muted" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Query questions</p>
                    <p className="text-xs text-muted-foreground">Done</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-muted bg-card flex items-center justify-center">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground">Closed consultation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <FileText className="h-4 w-4" />
              Medical report
            </Button>
            <Button variant="outline" className="w-full gap-2 border-border">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-foreground">Docspert Case Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">AM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">Dr. Abdelwahab Magdy</p>
                  <p className="text-xs text-muted-foreground">abdelwahab.magdy@docspert.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center Column - Clinical Data */}
        <div className="col-span-6 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Patient's complaint</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-sm text-foreground leading-relaxed">
                Left lower limb lymphoedema (swelling) associated with bilateral knee pain, lower back pain, and neck pain.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">History of present illness</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-sm text-foreground leading-relaxed">
                The patient first noticed <strong>progressive swelling</strong> of his <strong>left lower limb</strong> in approximately <strong>2018</strong>, 2 weeks after a nephrectomy tube insertion for a ureteric tube extraction.
              </p>
              <p className="text-sm text-foreground leading-relaxed mt-3">
                Lymphoscintigraphy confirmed <strong>primary lymphoedema</strong> with <strong>absent inguinal lymph nodes</strong>. Since diagnosis, he has been managed conservatively with <strong>CCL3 compression stockings</strong>, <strong>manual lymphatic drainage</strong>, <strong>Compression Pump Machine</strong>, and <strong>physiotherapy</strong>. These measures provided partial control but <strong>no meaningful improvement</strong>, and the condition has continued to <strong>progress</strong>. The patient was unsuccessful, as it did not reduce the swelling despite causing a generalized feeling of dizziness or lightheadedness throughout his body.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Matched Experts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 border border-accent/20 rounded-lg hover:border-accent/40 transition-colors bg-card">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Prof. Mark Daniel Morasch</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Professor of vascular surgery, Feinberg School of Medicine, Northwestern University Chicago, Illinois
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 border border-border rounded-lg hover:border-accent/20 transition-colors bg-card">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Dr. Xiaoti Xu</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Plastic Surgeon at Mia Aesthetics, Miami FL, USA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">Activity Log</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-info/5 rounded-lg border border-info/10">
                <p className="text-xs text-muted-foreground mb-1">Abdelwahab Magdy on Wed 19 Nov 2025 17:23</p>
                <p className="text-sm text-foreground">The case has been matched to an expert.</p>
              </div>
              
              <div className="p-3 bg-info/5 rounded-lg border border-info/10">
                <p className="text-xs text-muted-foreground mb-1">Abdelwahab Magdy on Wed 19 Nov 2025 17:24</p>
                <p className="text-sm text-foreground">The case has been matched to an expert.</p>
              </div>

              <div className="p-3 bg-success/5 rounded-lg border border-success/10">
                <p className="text-xs text-muted-foreground mb-1">Abdelwahab Magdy on Mon 24 Nov 2025 10:29</p>
                <p className="text-sm text-foreground">The Final report has been uploaded and is now ready for review.</p>
              </div>

              <div className="p-3 bg-muted-bg rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">Abdelwahab Magdy on Mon 24 Nov 2025 10:30</p>
                <p className="text-sm text-foreground">Dear team, Kindly note that the final report has been uploaded to the consultation for your review. Please grant approval so that we can proceed with contacting the patient. Best.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Trackers */}
        <div className="col-span-3 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-foreground">Investigations Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-success" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Awaiting collection</p>
                    <p className="text-xs text-muted-foreground">Updated on: Nov 18, 2025</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-success" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Awaiting Expert Review</p>
                    <p className="text-xs text-muted-foreground">Updated on: Nov 19, 2025</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                    <div className="w-0.5 h-12 bg-success" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-sm font-medium text-foreground">Awaiting Expert Review</p>
                    <p className="text-xs text-muted-foreground">Updated on: Nov 19, 2025</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-success-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Done</p>
                    <p className="text-xs text-muted-foreground">Updated on: Nov 22, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
