
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  date: string;
  location?: string;
}

export default function EducationSection() {
  const educationList: Education[] = [
    {
      degree: "MS in Computer Science",
      institution: "The University of Texas at Tyler",
      date: "May 2024",
      location: "Tyler, TX"
    },
    {
      degree: "BE in Electrical and Electronics Engineering",
      institution: "Loyola-ICAM College of Engineering & Technology",
      date: "Jun 2022",
      location: "India"
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Education</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div className="grid gap-6">
          {educationList.map((edu, index) => (
            <Card key={index} className="glass-card transition-card">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-primary/10 rounded-full p-4 flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-sm text-muted-foreground">{edu.date}</span>
                    {edu.location && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{edu.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
