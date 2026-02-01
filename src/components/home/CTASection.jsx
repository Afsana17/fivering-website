import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function CTASection() {
 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <section className="section-padding relative overflow-hidden">
 <div className="absolute inset-0 gradient-gold opacity-10" />
 <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

 <div className="container-custom relative z-10">
 <ScrollReveal animation="scale">
 <div className="max-w-3xl mx-auto text-center">
 <h2 className="heading-lg mb-6">
 Ready to Start Your{' '}
 <span className="gradient-text-gold">Journey?</span>
 </h2>
 <p className="text-xl text-muted-foreground mb-10">
 Connect with us today and discover world-class sports facilities designed for champions.
 </p>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp text-lg px-8 py-4"
 >
 <MessageCircle size={22} />
 Chat on WhatsApp
 <ArrowRight size={18} />
 </a>
 <a
 href="mailto:info@5rings.in"
 className="btn-secondary text-lg px-8 py-4"
 >
 <Mail size={22} />
 Email Us
 </a>
 </div>

 <p className="mt-8 text-sm text-muted-foreground">
 Quick response guaranteed • Available 7 days a week
 </p>
 </div>
 </ScrollReveal>
 </div>
 </section>
 );
}
