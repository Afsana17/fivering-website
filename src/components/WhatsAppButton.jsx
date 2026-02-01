import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function WhatsAppButton() {
 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 animate-pulse-soft hover:scale-110 shadow-lg"
 style={{
 background: 'hsl(var(--whatsapp))',
 boxShadow: '0 4px 20px hsl(var(--whatsapp) / 0.4)',
 }}
 aria-label="Chat on WhatsApp"
 >
 <MessageCircle size={26} className="text-white" />
 </a>
 );
}
