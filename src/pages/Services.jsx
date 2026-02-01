import { MessageCircle, Clock, Users, Award } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';

const ongoingServices = [
 { name: 'Football', type: 'Indoor', features: ['5-a-side matches', 'Professional turf', 'Night play'] },
 { name: 'Box Cricket', type: 'Indoor', features: ['Net practice', 'Match play', 'All ages'] },
 { name: 'Kickboxing', type: 'Indoor', features: ['Certified trainers', 'All levels', 'Personal training'] },
 { name: 'Mini Gym', type: 'Indoor', features: ['Modern equipment', 'Personal training', 'Cardio zone'] },
 { name: 'Table Tennis', type: 'Indoor', features: ['Competition tables', 'Coaching available', 'Tournaments'] },
 { name: 'Tennis', type: 'Indoor', features: ['Professional court', 'Equipment rental', 'Coaching'] },
 { name: 'Cricket', type: 'Outdoor', features: ['Practice nets', 'Match ground', 'Coaching'] },
 { name: 'Silambam', type: 'Outdoor', features: ['Traditional training', 'Expert masters', 'All levels'] },
 { name: 'Archery', type: 'Outdoor', features: ['Professional range', 'Equipment provided', 'Beginners welcome'] },
];

const upcomingServices = [
 { name: 'Kalari', type: 'Indoor' },
 { name: 'Adimurai', type: 'Indoor' },
 { name: 'Cricket Nets', type: 'Outdoor' },
 { name: 'Volleyball', type: 'Outdoor' },
 { name: 'Kabaddi', type: 'Outdoor' },
 { name: 'Karate', type: 'Outdoor' },
];

export default function Services() {
 const getWhatsAppUrl = (service) => {
 const message = `Hello 5RINGS, I would like to enquire about ${service} services.`;
 return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
 };

 return (
 <main className="pt-24">
 <section className="section-padding">
 <div className="container-custom">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="heading-xl mb-6">
 Our <span className="gradient-text-gold">Services</span>
 </h1>
 <p className="text-xl text-muted-foreground">
 Comprehensive sports services designed for athletes of all levels.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
 {[
 { icon: Clock, title: 'Flexible Timing', description: 'Book slots that fit your schedule' },
 { icon: Users, title: 'Expert Coaching', description: 'Learn from certified professionals' },
 { icon: Award, title: 'Quality Facilities', description: 'World-class equipment & venues' },
 ].map((item) => (
 <div key={item.title} className="glass-card text-center">
 <div className="feature-icon mx-auto mb-4">
 <item.icon size={24} />
 </div>
 <h3 className="font-semibold mb-1">{item.title}</h3>
 <p className="text-muted-foreground text-sm">{item.description}</p>
 </div>
 ))}
 </div>

 <h2 className="heading-lg mb-8 mt-16">Ongoing Services</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
 {ongoingServices.map((service) => (
 <div key={service.name} className="glass-card group hover:border-accent/30 transition-all">
 <div className="flex items-start justify-between mb-4">
 <h3 className="text-xl font-semibold">{service.name}</h3>
 <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent">
 {service.type}
 </span>
 </div>
 <ul className="mb-6 space-y-2">
 {service.features.map((feature) => (
 <li key={feature} className="text-muted-foreground text-sm flex items-center gap-2">
 <span className="w-1.5 h-1.5 rounded-full bg-accent" />
 {feature}
 </li>
 ))}
 </ul>
 <a
 href={getWhatsAppUrl(service.name)}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp text-sm w-full justify-center"
 >
 <MessageCircle size={16} />
 Book Now
 </a>
 </div>
 ))}
 </div>

 <h2 className="heading-lg mb-8">Coming Soon</h2>
 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
 {upcomingServices.map((service) => (
 <div
 key={service.name}
 className="glass-card text-center py-6 opacity-60"
 >
 <h3 className="font-semibold mb-1">{service.name}</h3>
 <span className="text-xs text-muted-foreground">{service.type}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 </main>
 );
}
