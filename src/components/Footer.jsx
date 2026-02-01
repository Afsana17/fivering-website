import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function Footer() {
 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <footer className="bg-card border-t border-border">
 <div className="container-custom section-padding py-16">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
 <div className="lg:col-span-1">
 <div className="flex items-center gap-2 mb-6">
 <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
 <span className="text-navy font-bold text-lg">5R</span>
 </div>
 <span className="font-bold text-xl">
 <span className="gradient-text-gold">5RINGS</span>
 </span>
 </div>
 <p className="text-muted-foreground text-sm mb-6">
 FIVERINGS SPORTS PVT LTD
 </p>
 <p className="text-muted-foreground text-sm leading-relaxed">
 Multi Sports & Sports Technology Organization dedicated to fostering athletic excellence and innovation.
 </p>
 </div>

 <div>
 <h4 className="font-semibold mb-6">Quick Links</h4>
 <div className="flex flex-col gap-3">
 {[
 { name: 'Home', path: '/' },
 { name: 'About Us', path: '/about' },
 { name: 'Sports', path: '/sports' },
 { name: 'Services', path: '/services' },
 { name: 'Gallery', path: '/gallery' },
 { name: 'Contact', path: '/contact' },
 ].map((link) => (
 <Link
 key={link.path}
 to={link.path}
 className="text-muted-foreground text-sm hover:text-accent transition-colors"
 >
 {link.name}
 </Link>
 ))}
 </div>
 </div>

 <div>
 <h4 className="font-semibold mb-6">Contact Info</h4>
 <div className="flex flex-col gap-4">
 <div className="flex gap-3">
 <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
 <p className="text-muted-foreground text-sm">
 Ayanambakkam, Chennai, Tamil Nadu, India
 </p>
 </div>
 <div className="flex gap-3">
 <Phone size={18} className="text-accent flex-shrink-0" />
 <a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-accent transition-colors">
 +91 98765 43210
 </a>
 </div>
 <div className="flex gap-3">
 <Mail size={18} className="text-accent flex-shrink-0" />
 <a href="mailto:info@5rings.in" className="text-muted-foreground text-sm hover:text-accent transition-colors">
 info@5rings.in
 </a>
 </div>
 <div className="flex gap-3">
 <Globe size={18} className="text-accent flex-shrink-0" />
 <span className="text-muted-foreground text-sm">www.5rings.in</span>
 </div>
 </div>
 </div>

 <div>
 <h4 className="font-semibold mb-6">Connect With Us</h4>
 <p className="text-muted-foreground text-sm mb-4">
 Reach out to us instantly on WhatsApp for quick responses and bookings.
 </p>
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp text-sm w-full justify-center"
 >
 <MessageCircle size={18} />
 Chat on WhatsApp
 </a>
 </div>
 </div>

 <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
 <p className="text-muted-foreground text-sm">
 © 2025 FIVERINGS SPORTS PVT LTD. All rights reserved.
 </p>
 <div className="flex gap-6">
 <a href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
 Privacy Policy
 </a>
 <a href="#" className="text-muted-foreground text-sm hover:text-accent transition-colors">
 Terms of Service
 </a>
 </div>
 </div>
 </div>
 </footer>
 );
}
