import { pageMetadata } from '@/lib/seo';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { ContentLibrarySection } from '@/components/home/ContentLibrarySection';
import { AudienceSection } from '@/components/home/AudienceSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export const metadata = pageMetadata({
  title: 'WonderlyAR - Learning That Comes Alive',
  description:
    'Transform books into magical AR experiences. WonderlyAR helps children aged 2-6 learn through immersive augmented reality - no app required. Trusted by 500+ preschools.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ContentLibrarySection />
      <AudienceSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
