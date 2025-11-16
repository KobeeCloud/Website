import { HeroSection } from '@/components/sections/HeroSection';
import { OfferSection } from '@/components/sections/OfferSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { StatusWidget } from '@/components/StatusWidget';

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <ProcessSection />
      <TechStackSection />
      <AboutSection />

      
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <StatusWidget />
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactSection />
    </>
  );
}
