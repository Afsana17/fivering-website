import { Dumbbell, Users, Shield, Clock, Wifi, Car } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
 { icon: Dumbbell, title: 'World-Class Equipment', description: 'Professional-grade sports equipment and training facilities.' },
 { icon: Users, title: 'Expert Coaching', description: 'Certified coaches and trainers for personalized guidance.' },
 { icon: Shield, title: 'Safety First', description: 'Comprehensive safety measures and first-aid facilities.' },
 { icon: Clock, title: 'Flexible Hours', description: 'Extended operating hours to fit your schedule.' },
 { icon: Wifi, title: 'Smart Facilities', description: 'Tech-enabled booking and training tracking systems.' },
 { icon: Car, title: 'Ample Parking', description: 'Convenient parking space for all visitors.' },
];

export default function FacilitiesSection() {
 return (
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal animation="fade-up">
 <div className="text-center mb-16">
 <h2 className="heading-lg mb-4">Facility Features</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Experience premium amenities designed for optimal athletic performance.
 </p>
 </div>
 </ScrollReveal>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {features.map((feature, index) => (
 <ScrollReveal key={feature.title} animation="fade-up" delay={index * 100}>
 <div className="glass-card group hover:border-accent/30 transition-all duration-300 h-full">
 <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
 <feature.icon size={24} />
 </div>
 <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
 <p className="text-muted-foreground text-sm">{feature.description}</p>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>
 );
}
