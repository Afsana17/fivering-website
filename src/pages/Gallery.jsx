import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import footballImg from '@/assets/sports/football.jpg';
import cricketImg from '@/assets/sports/cricket.jpg';
import tennisImg from '@/assets/sports/tennis.jpg';
import kickboxingImg from '@/assets/sports/kickboxing.jpg';
import tabletennisImg from '@/assets/sports/tabletennis.jpg';
import silambamImg from '@/assets/sports/silambam.jpg';
import archeryImg from '@/assets/sports/archery.jpg';
import heroImg from '@/assets/hero-stadium.jpg';

// Client Logo Imports
import euroKidsImg from '@/assets/euro-kids.jpg';
import brakesIndiaImg from '@/assets/brakes-india.jpg';
import flowserveImg from '@/assets/flowserve.png';
import aiemaImg from '@/assets/aiema.png';
import iciciBankImg from '@/assets/icici-bank.png';
import toshniwalImg from '@/assets/toshniwal.jpeg';
import usuiImg from '@/assets/usui.png';
import wikaImg from '@/assets/wika-logo.webp';
import movateImg from '@/assets/movate.png';
import natwestImg from '@/assets/natwest-group.png';
import iopexImg from '@/assets/iopex.png';
import wheelsIndiaImg from '@/assets/wheels-india.png';
import accessHealthcareImg from '@/assets/access-healthcare.png';
import setcoImg from '@/assets/setco.png';

const clients = [
    { name: 'Brakes India Limited', category: 'Corporate', logo: brakesIndiaImg },
    { name: 'Flowserve', category: 'Corporate', logo: flowserveImg },
    { name: 'AIEMA', category: 'Association', logo: aiemaImg },
    { name: 'ICICI Bank', category: 'Banking', logo: iciciBankImg },
    { name: 'Toshniwal', category: 'Corporate', logo: toshniwalImg },
    { name: 'USUI', category: 'Corporate', logo: usuiImg },
    { name: "Euro Kids", category: "Education", logo: euroKidsImg },
    { name: 'WIKA', category: 'Corporate', logo: wikaImg },
    { name: 'Movate', category: 'Corporate', logo: movateImg },
    { name: 'NatWest Group', category: 'Banking', logo: natwestImg },
    { name: 'iOPEX', category: 'Corporate', logo: iopexImg },
    { name: 'Wheels India Limited', category: 'Manufacturing', logo: wheelsIndiaImg },
    { name: 'Access Healthcare', category: 'Healthcare', logo: accessHealthcareImg },
    { name: 'Setco', category: 'Automotive', logo: setcoImg },
];

const testimonials = [
    {
        id: 1,
        name: "Benjamin Robert",
        role: "CEO & Co-Founder",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "It is very satisfying to cooperate with this sports facility, because we are supplied with various types of sports energy for the sustainability of our health in running the business, very satisfying, thank you."
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Professional Athlete",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The infrastructure here is world-class. I've trained in many places, but 5RINGS offers a unique blend of technology and traditional coaching that is hard to find elsewhere."
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Sports Enthusiast",
        image: "https://randomuser.me/api/portraits/men/85.jpg",
        text: "A perfect place for my kids to learn discipline and sportsmanship. The coaches are attentive and the environment is very safe and encouraging."
    }
];

const ClientLogo = ({ client }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="glass-card hover:border-accent/30 transition-all p-4 flex flex-col items-center justify-center gap-3 group h-full">
            <div className={`h-28 w-full rounded-lg p-5 flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-200 relative overflow-hidden ${!imageError ? 'bg-white' : 'bg-transparent'}`}>
                {!imageError && client.logo ? (
                    <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-full object-contain relative z-10"
                        loading="eager"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="text-center w-full animate-fade-in">
                        <div className="text-lg font-bold text-muted-foreground group-hover:text-accent">
                            {client.name}
                        </div>
                    </div>
                )}
            </div>
            <div className="text-xs text-muted-foreground text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {client.category}
            </div>
        </div>
    );
};

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="heading-xl mb-6">
                            Clients <span className="gradient-text-gold">Testimony</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Explore our world-class facilities and athletic moments.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto mb-24 relative px-8">
                        <div className="text-center">
                            <div className="mb-6 relative inline-block">
                                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-accent/20">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h3>
                            <p className="text-accent text-sm font-medium mb-8 uppercase tracking-wider">{testimonials[currentIndex].role}</p>

                            <blockquote className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto italic">
                                "{testimonials[currentIndex].text}"
                            </blockquote>

                            <div className="flex justify-center items-center gap-4 mt-8">
                                <div className="h-1 w-12 bg-accent rounded-full"></div>
                            </div>
                        </div>

                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent text-white hover:bg-accent/80 transition-all shadow-lg hover:shadow-xl"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-accent text-white hover:bg-accent/80 transition-all shadow-lg hover:shadow-xl"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="mb-12">
                        <h2 className="heading-lg mb-8 text-center">Our Clients</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {clients.map((client, index) => (
                                <ClientLogo key={index} client={client} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
