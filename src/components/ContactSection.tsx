import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Linkedin, Github, Code } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </div>
        
        <Card className="glass-card max-w-2xl mx-auto">
          <CardContent className="p-6 pt-6">
            <div className="flex flex-col items-center justify-center space-y-4 py-8">
              <p className="text-center text-muted-foreground">
                Passionate about innovative tech, future-focused thinking, and collaborating with people who challenge the norm. Let's connect and exchange ideas.
              </p>
              <Button asChild className="w-full">
                <a
                  href="https://www.linkedin.com/in/mckenziejoseph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
