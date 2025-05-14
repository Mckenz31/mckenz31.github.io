
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div>
            <p className="font-mono text-primary mb-2">Hi there, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Mckenzie Prince
            </h1>
            <h2 className="text-2xl md:text-3xl mt-2 text-muted-foreground">
              Chief Technology Officer
            </h2>
            <p className="text-lg text-muted-foreground mt-1">Connect2Co</p>
          </div>
          
          <p className="text-lg max-w-md">
            "If you've got something to build or some interesting data to make sense of, I'm your guy."
          </p>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                Get in touch
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a href="#experience">
                View Experience
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/Mckenz31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://devpost.com/mckenz318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="DevPost"
            >
              <Code size={20} />
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center p-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/80 to-primary/20 flex items-center justify-center text-6xl font-bold text-white">
                MP
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
