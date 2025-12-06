import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-primary mb-4 text-sm tracking-wider">
            // HELLO WORLD
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            I'm <span className="text-primary">Your Name</span>,
            <br />
            <span className="text-muted-foreground">Engineer & Researcher</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            A passionate software and electrical engineer dedicated to pushing the boundaries 
            of technology. Currently exploring embedded systems, signal processing, and 
            innovative solutions at the intersection of hardware and software.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="font-medium">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <a href="#publications">Read Publications</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#academic"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};
