import { HeroSectionEN } from '@/components/sections/en/HeroSectionEN';
import { OfferSectionEN } from '@/components/sections/en/OfferSectionEN';
import { ProcessSectionEN } from '@/components/sections/en/ProcessSectionEN';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { AboutSectionEN } from '@/components/sections/en/AboutSectionEN';
import { FAQSectionEN } from '@/components/sections/en/FAQSectionEN';
import { ContactSectionEN } from '@/components/sections/en/ContactSectionEN';
import { StatusWidget } from '@/components/StatusWidget';

export const metadata = {
  title: 'KobeCloud - DevOps Engineer B2B | Tri-City & Remote | Jakub Pospieszny',
  description: 'DevOps Engineer B2B - Tri-City and remote. Infrastructure automation (Azure, AWS, Terraform, Kubernetes), CI/CD, websites for small businesses. Deployments and maintenance. ~2 years commercial experience.',
};

export default function HomeEN() {
  return (
    <>
      <HeroSectionEN />
      <OfferSectionEN />
      <ProcessSectionEN />
      <TechStackSection />
      <AboutSectionEN />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <StatusWidget />
          </div>
        </div>
      </section>

      <FAQSectionEN />
      <ContactSectionEN />
    </>
  );
}
