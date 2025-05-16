import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code } from "lucide-react";
import profilePic from "../../public/profilePic.jpeg";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-[65%_35%] gap-2 items-center">
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

          <p className="text-sm max-w-xl">
            Hi, I'm Mckenzie Prince.
            I currently serve as the Chief Technology Officer at Connect2Co, a B2B SAS digital workspace for creative teams. I have a Master's Degree in Computer Science and over 3 years of experience in the Software Engineering and Data Analytics fields. Whether it is building a product, constructing software, or making sense of large amounts of data, I am your guy.
          </p>
          <p className="text-sm max-w-xl">
            I pick up new tools and technologies quickly. I might break a few things along the way, but in the end I always deliver a working solution and finished product that gets the job done. I'm consistently driven to improve how things work. I'm always on the lookout for ways to streamline systems and make processes more efficient. When it comes to collaboration, I'm all in. I'll be your rubber duck, if needed!
          </p>
          <p className="text-sm max-w-xl">
            Outside of tech, chess is my hobby of choice. I've represented my country twice at the Commonwealth Chess Championship and coached internationally. Whether it's the board or the codebase, I'm always thinking a few moves ahead.
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

        <div className="hidden md:flex justify-end items-center p-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30">
              <img
                src={profilePic}
                alt="Mckenzie Prince"
                className="w-full h-full object-cover"
              />
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
