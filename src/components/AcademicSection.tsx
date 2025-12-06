import { GraduationCap, Calendar } from "lucide-react";

const academicPath = [
  {
    degree: "Ph.D. in Electrical Engineering",
    institution: "University Name",
    period: "2022 - Present",
    description: "Research focus on advanced signal processing and embedded systems.",
  },
  {
    degree: "M.Sc. in Computer Engineering",
    institution: "University Name",
    period: "2020 - 2022",
    description: "Specialized in software architecture and hardware-software co-design.",
  },
  {
    degree: "B.Sc. in Electrical Engineering",
    institution: "University Name",
    period: "2016 - 2020",
    description: "Foundation in electronics, circuits, and programming.",
  },
];

export const AcademicSection = () => {
  return (
    <section id="academic" className="py-24 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">// EDUCATION</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Academic Journey</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {academicPath.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="p-6 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">{item.degree}</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
