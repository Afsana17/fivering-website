import { MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP_NUMBER = '919876543210';

const ongoingIndoor = ['Football', 'Box Cricket', 'Kickboxing', 'Mini Gym', 'Table Tennis', 'Tennis'];
const ongoingOutdoor = ['Cricket', 'Silambam', 'Archery'];
const upcomingIndoor = ['Kalari', 'Adimurai'];
const upcomingOutdoor = ['Cricket Nets', 'Volleyball', 'Kabaddi', 'Karate'];

export default function ServicesSection() {
 const getWhatsAppUrl = (service) => {
 const message = `Hello 5RINGS, I would like to enquire about ${service} services.`;
 return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
 };

 return (
 <section className="section-padding bg-secondary/50">
 <div className="container-custom">
 <ScrollReveal animation="fade-up">
 <div className="text-center mb-16">
 <h2 className="heading-lg mb-4">Our Services</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Comprehensive sports services tailored for athletes of all levels.
 </p>
 </div>
 </ScrollReveal>

 <div className="grid lg:grid-cols-2 gap-8">
 <ScrollReveal animation="fade-right" delay={0}>
 <div className="glass-card h-full">
 <h3 className="heading-md mb-6 flex items-center gap-3">
 <span className="w-3 h-3 rounded-full bg-accent" />
 Ongoing Services
 </h3>

 <div className="mb-6">
 <h4 className="font-semibold text-sm text-accent mb-3">INDOOR</h4>
 <div className="flex flex-wrap gap-2">
 {ongoingIndoor.map((service) => (
 <a
 key={service}
 href={getWhatsAppUrl(service)}
 target="_blank"
 rel="noopener noreferrer"
 className="px-4 py-2 rounded-lg bg-background/50 border border-border text-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
 >
 {service}
 <MessageCircle size={14} className="opacity-60" />
 </a>
 ))}
 </div>
 </div>

 <div>
 <h4 className="font-semibold text-sm text-accent mb-3">OUTDOOR</h4>
 <div className="flex flex-wrap gap-2">
 {ongoingOutdoor.map((service) => (
 <a
 key={service}
 href={getWhatsAppUrl(service)}
 target="_blank"
 rel="noopener noreferrer"
 className="px-4 py-2 rounded-lg bg-background/50 border border-border text-sm hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
 >
 {service}
 <MessageCircle size={14} className="opacity-60" />
 </a>
 ))}
 </div>
 </div>
 </div>
 </ScrollReveal>

 <ScrollReveal animation="fade-left" delay={100}>
 <div className="glass-card h-full">
 <h3 className="heading-md mb-6 flex items-center gap-3">
 <span className="w-3 h-3 rounded-full bg-muted-foreground" />
 Upcoming Services
 </h3>

 <div className="mb-6">
 <h4 className="font-semibold text-sm text-muted-foreground mb-3">INDOOR</h4>
 <div className="flex flex-wrap gap-2">
 {upcomingIndoor.map((service) => (
 <span
 key={service}
 className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground"
 >
 {service}
 </span>
 ))}
 </div>
 </div>

 <div>
 <h4 className="font-semibold text-sm text-muted-foreground mb-3">OUTDOOR</h4>
 <div className="flex flex-wrap gap-2">
 {upcomingOutdoor.map((service) => (
 <span
 key={service}
 className="px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm text-muted-foreground"
 >
 {service}
 </span>
 ))}
 </div>
 </div>
 </div>
 </ScrollReveal>
 </div>
 </div>
 </section>
 );
}
