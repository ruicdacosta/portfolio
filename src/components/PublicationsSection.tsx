import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Paper Title: Research on Advanced Topic",
    authors: "Your Name, Co-Author Name",
    journal: "Journal of Engineering",
    year: "2024",
    doi: "#",
    type: "Journal Article",
  },
  {
    title: "Conference Paper: Innovative Approach to Problem",
    authors: "Your Name, Co-Author Name",
    journal: "IEEE Conference Proceedings",
    year: "2023",
    doi: "#",
    type: "Conference Paper",
  },
  {
    title: "Technical Report: System Design and Implementation",
    authors: "Your Name",
    journal: "University Technical Reports",
    year: "2023",
    doi: "#",
    type: "Technical Report",
  },
];

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">// PUBLICATIONS</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Papers & Publications</h3>
        
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                    <a 
                      href={pub.doi}
                      className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View publication"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-muted-foreground">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-foreground/80">{pub.journal}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{pub.year}</span>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {pub.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
