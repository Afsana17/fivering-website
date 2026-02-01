import { User, Briefcase } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function TeamSection() {
 return (
 <section className="section-padding bg-secondary/50">
 <div className="container-custom">
 <div className="grid lg:grid-cols-2 gap-12">
 <ScrollReveal animation="fade-right" delay={0}>
 <div>
 <h2 className="heading-lg mb-8">Founder & Leadership</h2>
 <div className="glass-card">
 <div className="flex items-start gap-6">
 <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center flex-shrink-0">
 <User size={36} className="text-navy" />
 </div>
 <div>
 <h3 className="text-xl font-semibold mb-1">Leadership Team</h3>
 <p className="text-accent text-sm mb-4">Visionary Founders</p>
 <p className="text-muted-foreground text-sm leading-relaxed">
 Our leadership team brings decades of combined experience in sports management, technology, and business development, driving 5RINGS towards becoming India's premier multi-sports organization.
 </p>
 </div>
 </div>
 </div>
 </div>
 </ScrollReveal>

 <ScrollReveal animation="fade-left" delay={100}>
 <div>
 <h2 className="heading-lg mb-8">Strategic Partners</h2>
 <div className="glass-card">
 <div className="flex items-start gap-6">
 <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center flex-shrink-0">
 <Briefcase size={36} className="text-navy" />
 </div>
 <div>
 <h3 className="text-xl font-semibold mb-1">Partner Network</h3>
 <p className="text-accent text-sm mb-4">Collaborative Excellence</p>
 <p className="text-muted-foreground text-sm leading-relaxed">
 We collaborate with leading sports federations, technology partners, and industry experts to deliver world-class facilities and cutting-edge solutions for our athletes and community.
 </p>
 </div>
 </div>
 </div>
 </div>
 </ScrollReveal>
 </div>
 </div>
 </section>
 );
}
