
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CompetitiveProgrammingSection from "@/components/CompetitiveProgrammingSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <ProjectsSection />
        <EducationSection />
        <CompetitiveProgrammingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
