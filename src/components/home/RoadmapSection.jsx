import { Calendar, GraduationCap, Trophy, Users, ShoppingBag, Building2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const initiatives = [
 { icon: Calendar, title: 'Slot Booking Systems', description: 'Online booking platform for seamless facility reservations.' },
 { icon: GraduationCap, title: 'Academy Management', description: 'Comprehensive coaching and training management solutions.' },
 { icon: Trophy, title: 'Tournament Platforms', description: 'Digital platforms for fixtures, scoring, and event management.' },
 { icon: Users, title: 'Professional Network', description: 'Connect with sports professionals, coaches, and trainers.' },
 { icon: ShoppingBag, title: 'Sports Commerce', description: 'E-commerce for sports equipment and wellness products.' },
 { icon: Building2, title: 'Franchise Model', description: 'Scalable multi-location sports facility franchise system.' },
];

export default function RoadmapSection() {
 return (
 <section className="section-padding">
 <div className="container-custom">
 <ScrollReveal animation="fade-up">
 <div className="text-center mb-16">
 <h2 className="heading-lg mb-4">Growth Roadmap</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Pioneering digital initiatives transforming the sports industry.
 </p>
 </div>
 </ScrollReveal>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
 {initiatives.map((item, index) => (
 <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
 <div className="glass-card group hover:border-accent/30 transition-all duration-300 h-full">
 <div className="feature-icon mb-4 group-hover:scale-110 transition-transform">
 <item.icon size={24} />
 </div>
 <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
 <p className="text-muted-foreground text-sm">{item.description}</p>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>
 );
}
