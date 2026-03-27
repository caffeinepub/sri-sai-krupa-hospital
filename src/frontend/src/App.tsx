import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HoursSection from "./components/HoursSection";
import LogskimFooter from "./components/LogskimFooter";
import LogskimHero from "./components/LogskimHero";
import LogskimNavbar from "./components/LogskimNavbar";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <LogskimNavbar />
      <main>
        <LogskimHero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <HoursSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <LogskimFooter />
      <Toaster richColors />
    </div>
  );
}
