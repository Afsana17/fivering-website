import { Eye, Target } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function VisionMissionSection() {
 return (
 <section className="section-padding">
 <div className="container-custom">
 <div className="grid md:grid-cols-2 gap-8">
 <ScrollReveal animation="fade-right" delay={0}>
 <div className="glass-card group hover:border-accent/30 transition-all duration-300 h-full">
 <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
 <Eye size={28} />
 </div>
 <h3 className="heading-md mb-4">Our Vision</h3>
 <p className="text-muted-foreground leading-relaxed">
 To become India's most trusted multi-sports organization, creating a holistic ecosystem that nurtures athletic talent, promotes wellness, and leverages technology to revolutionize the sports industry.
 </p>
 </div>
 </ScrollReveal>

 <ScrollReveal animation="fade-left" delay={100}>
 <div className="glass-card group hover:border-accent/30 transition-all duration-300 h-full">
 <div className="feature-icon mb-6 group-hover:scale-110 transition-transform">
 <Target size={28} />
 </div>
 <h3 className="heading-md mb-4">Our Mission</h3>
 <p className="text-muted-foreground leading-relaxed">
 To provide world-class sports facilities and technology-driven solutions that make quality athletic training accessible to everyone, fostering a community of champions and promoting a healthy lifestyle.
 </p>
 </div>
 </ScrollReveal>
 </div>
 </div>
 </section>
 );
}
