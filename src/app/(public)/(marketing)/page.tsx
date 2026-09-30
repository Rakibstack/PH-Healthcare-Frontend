
import FeaturedDoctors from '@/components/modules/Home/FeaturedDoctors';
import HeroSection from '@/components/modules/Home/HeroSection';
import HowItWorks from '@/components/modules/Home/HowItWorks';
import ServicesSection from '@/components/modules/Home/ServicesSection';
import TrustStats from '@/components/modules/Home/TrustStats';

export default function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <TrustStats></TrustStats>
      <ServicesSection></ServicesSection>
      <HowItWorks></HowItWorks>
      <FeaturedDoctors></FeaturedDoctors>
    </div>
  );
}