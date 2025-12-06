import { Cpu, Code, Zap, Radio, Database, Terminal } from "lucide-react";

const passions = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Designing and programming microcontrollers and FPGAs for real-world applications.",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Building robust applications with modern programming languages and frameworks.",
  },
  {
    icon: Zap,
    title: "Power Electronics",
    description: "Exploring efficient power conversion and energy management systems.",
  },
  {
    icon: Radio,
    title: "Signal Processing",
    description: "Analyzing and manipulating signals for communication and sensing applications.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Working with large datasets and building data pipelines for analysis.",
  },
  {
    icon: Terminal,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects in the community.",
  },
];

export const PassionsSection = () => {
  return (
    <section id="passions" className="py-24">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">// INTERESTS</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">What Drives Me</h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <passion.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {passion.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {passion.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
