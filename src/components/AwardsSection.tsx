
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Award {
  title: string;
  issuer?: string;
  featured?: boolean;
}

export default function AwardsSection() {
  const featuredAwards: Award[] = [
    { 
      title: "Outstanding Student in the MS in Computer Science degree program", 
      issuer: "UT Tyler",
      featured: true 
    },
    { 
      title: "Student Employee Rising Star Award", 
      issuer: "UT Tyler",
      featured: true 
    },
    { 
      title: "2nd place – 2024 Business Model Competition", 
      issuer: "UT Tyler's ETX Launchpad",
      featured: true 
    },
    { 
      title: "Google Cloud – Overall Winner", 
      issuer: "AI ATL hosted by Georgia Institute of Technology",
      featured: true 
    },
    { 
      title: "MLH: Best Use of AI in Education", 
      issuer: "AI ATL hosted by Georgia Institute of Technology",
      featured: true 
    },
    { 
      title: "1st place Winner at HackNC", 
      issuer: "University of North Carolina",
      featured: true 
    },
  ];

  const otherAwards: Award[] = [
    { 
      title: "Semifinalist in AICTE, DST & Texas Instruments India Innovation Challenge Design contest", 
      issuer: "IIM Bangalore, India (May 2021)" 
    },
    { 
      title: "5th place in NCU CODATHON", 
      issuer: "CODE ARTS, a special group of interest under IEEE NCU (Feb 2021)" 
    },
  ];

  return (
    <section id="awards" className="py-20 px-4 bg-secondary/50">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Awards & Recognition</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div className="grid gap-6">
          <div>
            <h3 className="text-xl font-bold mb-6">Featured Awards</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredAwards.map((award, index) => (
                <Card key={index} className="glass-card transition-card h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-3 text-amber-500">
                      <Star className="h-5 w-5 fill-current" />
                    </div>
                    <h4 className="font-semibold mb-2">{award.title}</h4>
                    {award.issuer && (
                      <p className="text-sm text-muted-foreground mt-auto">{award.issuer}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {otherAwards.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">Additional Recognitions</h3>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {otherAwards.map((award, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="text-primary mt-1">
                          <Star className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{award.title}</p>
                          {award.issuer && (
                            <p className="text-sm text-muted-foreground">{award.issuer}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
