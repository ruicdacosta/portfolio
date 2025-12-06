import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AcademicSection } from "@/components/AcademicSection";
import { PassionsSection } from "@/components/PassionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ConferencesSection } from "@/components/ConferencesSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set theme based on system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Set initial theme
    updateTheme(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener("change", updateTheme);
    
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AcademicSection />
        <PassionsSection />
        <ProjectsSection />
        <ConferencesSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;