
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Certification {
  title: string;
  issuer?: string;
}

export default function CertificationsSection() {
  const certifications = {
    "Mobile & Web Development": [
      { title: "Foundations of User Experience (UX) Design", issuer: "Google" },
      { title: "Angular – The Complete Guide (2021 Edition)", issuer: "Maximilian Schwarzmuller" },
      { title: "The Complete 2021 Flutter Development Bootcamp with Dart", issuer: "Dr. Angela Yu" },
      { title: "Introduction to Structured Query Language (SQL)", issuer: "University of Michigan" },
      { title: "Advanced Styling and Responsive Design", issuer: "University of Michigan" },
      { title: "Interactivity with JavaScript", issuer: "University of Michigan" },
      { title: "Introduction to CSS3", issuer: "University of Michigan" },
      { title: "Introduction to HTML5", issuer: "University of Michigan" },
    ],
    "Data Analytics": [
      { title: "Google Data Analytics specialization", issuer: "Google" },
      { title: "LlamaIndex – Develop LLM powered applications with LlamaIndex", issuer: "Eden Marco" },
    ],
    "AWS Certifications": [
      { title: "Cloud Solutions Architect – Associate (AWS)", issuer: "Assessment administered by ICT Academy" },
      { title: "AWS Academy Graduate – AWS Academy Cloud Architecting", issuer: "AWS" },
      { title: "AWS Academy Graduate – AWS Academy Cloud Foundations", issuer: "AWS" },
    ],
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Certifications</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {Object.entries(certifications).map(([category, certs], index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass-card border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Badge>{certs.length}</Badge>
                  <span className="font-semibold">{category}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6">
                <div className="py-4">
                  <ul className="space-y-4">
                    {certs.map((cert, certIndex) => (
                      <li key={certIndex} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                        <span className="font-medium">{cert.title}</span>
                        {cert.issuer && (
                          <span className="text-sm text-muted-foreground">
                            by {cert.issuer}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
