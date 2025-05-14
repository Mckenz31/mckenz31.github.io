
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-bold text-lg font-mono">MP</span>
            <span className="text-sm text-muted-foreground">© {currentYear} Mckenzie Prince</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-4 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#tech-stack" className="text-muted-foreground hover:text-foreground transition-colors">
                Tech
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
