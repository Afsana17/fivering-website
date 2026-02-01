import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import logo from '../assets/sports/logo.png';

const navLinks = [
 { name: 'Home', path: '/' },
 { name: 'About', path: '/about' },
 { name: 'Sports', path: '/sports' },
 { name: 'Services', path: '/services' },
 { name: 'Gallery', path: '/gallery' },
 { name: 'Contact', path: '/contact' },
];

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = 'Hello 5RINGS, I would like to know more about your sports facilities and services.';

export default function Navbar({ isDark, toggleTheme }) {
 const [isOpen, setIsOpen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);
 const location = useLocation();

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };
 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
 setIsOpen(false);
 }, [location]);

 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

 return (
 <nav
 className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
 isScrolled ? 'glass py-3' : 'py-5 bg-transparent'
 }`}
 >
 <div className="container-custom px-4 md:px-8">
 <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="5RINGS Logo"
                        className="w-24 h-24 md:w-28 md:h-28 object-contain -translate-y-1 md:-translate-y-2 transform"
                    />
                </Link>

 <div className="hidden lg:flex items-center gap-8">
 {navLinks.map((link) => (
 <Link
 key={link.path}
 to={link.path}
 className={`text-base font-medium transition-colors duration-200 hover:text-accent ${
 location.pathname === link.path ? 'text-accent' : 'text-foreground/80'
 }`}
 >
 {link.name}
 </Link>
 ))}
 </div>

 <div className="hidden lg:flex items-center gap-3">
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp text-base"
 >
 <MessageCircle size={20} />
 WhatsApp
 </a>
 <a
 href="tel:+919876543210"
 className="btn-secondary text-base py-2.5 px-4"
 >
 <Phone size={18} />
 Call Now
 </a>
 <button
 onClick={toggleTheme}
 className="p-2.5 rounded-xl border border-border hover:border-accent transition-colors"
 aria-label="Toggle theme"
 >
 {isDark ? <Sun size={18} /> : <Moon size={18} />}
 </button>
 </div>

 <div className="flex lg:hidden items-center gap-3">
 <button
 onClick={toggleTheme}
 className="p-2 rounded-lg border border-border"
 aria-label="Toggle theme"
 >
 {isDark ? <Sun size={18} /> : <Moon size={18} />}
 </button>
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="p-2 rounded-lg border border-border"
 aria-label="Toggle menu"
 >
 {isOpen ? <X size={20} /> : <Menu size={20} />}
 </button>
 </div>
 </div>

 {isOpen && (
 <div className="lg:hidden mt-4 pb-4 animate-fade-in">
 <div className="flex flex-col gap-2">
 {navLinks.map((link) => (
 <Link
 key={link.path}
 to={link.path}
 className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
 location.pathname === link.path
 ? 'bg-accent/10 text-accent'
 : 'hover:bg-muted'
 }`}
 >
 {link.name}
 </Link>
 ))}
 <div className="flex gap-2 mt-4">
 <a
 href={whatsappUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-whatsapp text-sm flex-1 justify-center"
 >
 <MessageCircle size={18} />
 WhatsApp
 </a>
 <a
 href="tel:+919876543210"
 className="btn-secondary text-sm flex-1 justify-center py-2.5"
 >
 <Phone size={16} />
 Call
 </a>
 </div>
 </div>
 </div>
 )}
 </div>
 </nav>
 );
}
