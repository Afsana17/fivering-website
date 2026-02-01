import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-stadium.jpg';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function HeroSection() {
 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
 <div
 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
 style={{ backgroundImage: `url(${heroImage})` }}
 />
 <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
 <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent" />

 <div className="relative z-10 container-custom px-4 md:px-8 pt-24">
 <div className="max-w-3xl">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in-up">
 <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
 <span className="text-sm font-medium text-accent">Multi Sports & Sports Technology</span>
 </div>

 <h1 className="heading-xl mb-6 animate-fade-in-up stagger-1 opacity-0">
 Welcome to{' '}
 <span className="gradient-text-gold">5RINGS</span>
 </h1>

 <p className="text-2xl md:text-3xl font-light text-muted-foreground mb-4 animate-fade-in-up stagger-2 opacity-0">
 Everyone is our customer
 </p>

 <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-fade-in-up stagger-3 opacity-0">
 A comprehensive multi-sports ecosystem combining world-class facilities with cutting-edge sports technology to nurture athletic excellence and community wellness.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-4 opacity-0">
 <Link to="/sports" className="btn-secondary">
 Explore Sports
 <ArrowRight size={18} />
 </Link>
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp"
 >
 <MessageCircle size={18} />
 Chat on WhatsApp
 </a>
 </div>

 <div className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up stagger-5 opacity-0">
 {[
 { value: '7+', label: 'Sports' },
 { value: '2018', label: 'Since' },
 { value: '1000+', label: 'Athletes' },
 ].map((stat) => (
 <div key={stat.label}>
 <div className="text-3xl md:text-4xl font-bold gradient-text-gold">{stat.value}</div>
 <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
 <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
 <div className="w-1 h-2 rounded-full bg-accent animate-pulse" />
 </div>
 </div>
 </section>
 );
}
