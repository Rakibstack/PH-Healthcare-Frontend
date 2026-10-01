
import FeaturedDoctors from '@/components/modules/Home/FeaturedDoctors';
import HeroSection from '@/components/modules/Home/HeroSection';
import HomeClosing from '@/components/modules/Home/HomeClosing';
import HowItWorks from '@/components/modules/Home/HowItWorks';
import ServicesSection from '@/components/modules/Home/ServicesSection';
import TrustStats from '@/components/modules/Home/TrustStats';
import WhyChooseUs from '@/components/modules/Home/WhyChooseUs';

export default function HomePage() {
  return (
    <div>
      <HeroSection></HeroSection>
      <TrustStats></TrustStats>
      <ServicesSection></ServicesSection>
      <HowItWorks></HowItWorks>
      <FeaturedDoctors></FeaturedDoctors>
      <WhyChooseUs></WhyChooseUs>
      <HomeClosing></HomeClosing>
      
    </div>
  );
}