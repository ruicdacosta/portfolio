import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Title",
    description: "Brief description of your project and its impact. Explain the problem it solves and the technologies used.",
    tags: ["React", "TypeScript", "Embedded Systems"],
    github: "#",
    demo: "#",
  },
  {
    title: "Another Project",
    description: "Description of another significant project showcasing your skills in software and electrical engineering.",
    tags: ["Python", "Arduino", "IoT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Research Project",
    description: "Academic or research project that demonstrates your expertise in a specific domain.",
    tags: ["FPGA", "Verilog", "Signal Processing"],
    github: "#",
  },
  {
    title: "Open Source Contribution",
    description: "Contributions to open source projects or tools you've developed for the community.",
    tags: ["C++", "Linux", "Drivers"],
    github: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">// PROJECTS</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Personal Projects</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="font-mono text-xs bg-secondary/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
