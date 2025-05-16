import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  issuer?: string;
  link?: string;
}

export default function CertificationsSection() {
  const certifications = {
    "Mobile & Web Development": [
      { title: "Foundations of User Experience (UX) Design", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/verify/6R53DKRRTMLT" },
      { title: "Angular – The Complete Guide (2021 Edition)", issuer: "Maximilian Schwarzmuller", link: "https://www.udemy.com/certificate/UC-6338468f-facf-456b-8a25-ed53e4720233/" },
      { title: "The Complete 2021 Flutter Development Bootcamp with Dart", issuer: "Dr. Angela Yu", link: "https://www.udemy.com/certificate/UC-63f15688-0843-445d-a80b-4aab9d0dc38f/" },
      { title: "Introduction to Structured Query Language (SQL)", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/certificate/GENXSU6WQA39" },
      { title: "Advanced Styling and Responsive Design", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/certificate/V7WMZCTDSLJE" },
      { title: "Interactivity with JavaScript", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/certificate/XXXXX" },
      { title: "Introduction to CSS3", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/certificate/SYS9UMBBQU8B" },
      { title: "Introduction to HTML5", issuer: "University of Michigan", link: "https://www.coursera.org/account/accomplishments/certificate/TRNYV5MW8TN7" },
    ],
    "Data Analytics [Specialization] and AI": [
      { title: "Google Data Analytics Specialization", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/professional-cert/35FZHDHKQWFU" },
      { title: "Neural Networks and Deep Learning", issuer: "DeepLearning.Ai", link: "https://www.coursera.org/account/accomplishments/verify/WRBT8XNACL7J" },
    ],
    "AWS Certifications": [
      // { title: "Cloud Solutions Architect – Associate (AWS)", issuer: "Assessment administered by ICT Academy", link: "https://www.credly.com/badges/XXXXX" },
      { title: "AWS Academy Graduate – AWS Academy Cloud Architecting", issuer: "AWS", link: "https://www.credly.com/badges/01b1eb4c-0c73-4ce0-9649-f891bf0cf314/public_url" },
      { title: "AWS Academy Graduate – AWS Academy Cloud Foundations", issuer: "AWS", link: "https://www.credly.com/badges/d390f3da-7fb4-4d6a-9a5f-4039333b49d8/public_url" },
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
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-primary flex items-center gap-1 hover:underline"
                        >
                          {cert.title}
                          <ExternalLink size={14} className="inline-block" />
                        </a>
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
