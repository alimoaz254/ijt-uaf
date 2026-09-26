import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <ResourcesSection />
      <CTASection />
    </main>
  );
}
