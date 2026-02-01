import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function Contact() {
 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <main className="pt-24">
 <section className="section-padding">
 <div className="container-custom">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="heading-xl mb-6">
 Contact <span className="gradient-text-gold">Us</span>
 </h1>
 <p className="text-xl text-muted-foreground">
 Get in touch with us for bookings, enquiries, or partnerships.
 </p>
 </div>

 <div className="grid lg:grid-cols-2 gap-12">
 <div>
 <div className="glass-card mb-8 border-accent/30">
 <div className="flex items-center gap-4 mb-6">
 <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--whatsapp))' }}>
 <MessageCircle size={28} className="text-white" />
 </div>
 <div>
 <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
 <p className="text-muted-foreground text-sm">Get instant responses</p>
 </div>
 </div>
 <p className="text-muted-foreground mb-6">
 WhatsApp is our primary communication channel. Reach out for quick responses, bookings, and enquiries.
 </p>
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp w-full justify-center text-lg py-4"
 >
 <MessageCircle size={22} />
 Start Chat
 </a>
 </div>

 <div className="glass-card">
 <h3 className="text-xl font-semibold mb-6">Other Ways to Reach Us</h3>
 <div className="space-y-6">
 <div className="flex gap-4">
 <div className="feature-icon flex-shrink-0">
 <Phone size={20} />
 </div>
 <div>
 <h4 className="font-semibold mb-1">Phone</h4>
 <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">
 +91 98765 43210
 </a>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="feature-icon flex-shrink-0">
 <Mail size={20} />
 </div>
 <div>
 <h4 className="font-semibold mb-1">Email</h4>
 <a href="mailto:info@5rings.in" className="text-muted-foreground hover:text-accent transition-colors">
 info@5rings.in
 </a>
 </div>
 </div>

 <div className="flex gap-4">
 <div className="feature-icon flex-shrink-0">
 <Clock size={20} />
 </div>
 <div>
 <h4 className="font-semibold mb-1">Operating Hours</h4>
 <p className="text-muted-foreground">Mon - Sun: 6:00 AM - 10:00 PM</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div>
 <div className="glass-card h-full">
 <div className="flex gap-4 mb-6">
 <div className="feature-icon flex-shrink-0">
 <MapPin size={20} />
 </div>
 <div>
 <h3 className="text-xl font-semibold mb-1">Our Location</h3>
 <p className="text-muted-foreground">
 FIVERINGS SPORTS PVT LTD
 </p>
 </div>
 </div>

 <div className="bg-muted/50 rounded-xl p-6 mb-6">
 <h4 className="font-semibold mb-2">Head Office</h4>
 <p className="text-muted-foreground text-sm leading-relaxed">
 Ayanambakkam, Chennai<br />
 Tamil Nadu, India
 </p>
 </div>

 <div className="aspect-video rounded-xl overflow-hidden bg-muted flex items-center justify-center">
 <div className="text-center p-8">
 <MapPin size={48} className="text-accent mx-auto mb-4" />
 <p className="text-muted-foreground text-sm">
 Interactive map coming soon
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </main>
 );
}
