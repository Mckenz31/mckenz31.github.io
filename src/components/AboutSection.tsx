
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card transition-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 font-mono">Professional Summary</h3>
              <p className="text-muted-foreground">
                I'm Mckenzie Prince, Chief Technology Officer at Connect2Co, with a Master's degree in Computer Science and over three years of experience in software engineering and data analytics. I pick up new tools and technologies quickly and might break a few things along the way, but I'll always deliver a working solution or a finished product that gets the job done.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-card transition-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 font-mono">Personal Touch</h3>
              <p className="text-muted-foreground">
                I'm driven to improve how things work, so I'm always on the lookout for ways to streamline systems and make processes more efficient. And when it comes to collaboration, I'm all in, I'll be your rubber duck if you'll be mine. Outside of tech, chess is my hobby of choice. I've represented my country twice at the Commonwealth Chess Championship and coached internationally. Whether it's the board or the codebase, I'm always thinking a few moves ahead.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
