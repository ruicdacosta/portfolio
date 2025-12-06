import { MapPin, Calendar } from "lucide-react";

const conferences = [
  {
    name: "Conference Name 2024",
    role: "Speaker / Attendee",
    location: "City, Country",
    date: "Month 2024",
    description: "Brief description of your participation or presentation topic.",
  },
  {
    name: "Tech Summit 2023",
    role: "Presenter",
    location: "City, Country",
    date: "Month 2023",
    description: "Presented research on embedded systems and signal processing.",
  },
  {
    name: "Academic Conference 2023",
    role: "Paper Presentation",
    location: "City, Country",
    date: "Month 2023",
    description: "Presented peer-reviewed paper on innovative solutions.",
  },
];

export const ConferencesSection = () => {
  return (
    <section id="conferences" className="py-24">
      <div className="container max-w-6xl">
        <h2 className="font-mono text-sm text-primary mb-2 tracking-wider">// CONFERENCES</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-12">Conferences & Events</h3>
        
        <div className="space-y-6">
          {conferences.map((conf, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {conf.name}
                  </h4>
                  <p className="text-muted-foreground">{conf.description}</p>
                  <span className="inline-block font-mono text-sm text-primary bg-primary/10 px-3 py-1 rounded">
                    {conf.role}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right shrink-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{conf.location}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{conf.date}</span>
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
