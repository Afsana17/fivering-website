import HeroSection from '@/components/home/HeroSection';
import JourneySection from '@/components/home/JourneySection';
import VisionMissionSection from '@/components/home/VisionMissionSection';
import SportsSection from '@/components/home/SportsSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import ServicesSection from '@/components/home/ServicesSection';
import RoadmapSection from '@/components/home/RoadmapSection';
import TeamSection from '@/components/home/TeamSection';
import CTASection from '@/components/home/CTASection';

export default function Index() {
 return (
 <main>
 <HeroSection />
 <JourneySection />
 <VisionMissionSection />
 <SportsSection />
 <FacilitiesSection />
 <ServicesSection />
 <RoadmapSection />
 <TeamSection />
 <CTASection />
 </main>
 );
}
