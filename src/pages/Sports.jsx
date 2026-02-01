import { MessageCircle } from 'lucide-react';
import footballImg from '@/assets/sports/football.jpg';
import cricketImg from '@/assets/sports/cricket.jpg';
import tennisImg from '@/assets/sports/tennis.jpg';
import kickboxingImg from '@/assets/sports/kickboxing.jpg';
import tabletennisImg from '@/assets/sports/tabletennis.jpg';
import silambamImg from '@/assets/sports/silambam.jpg';
import archeryImg from '@/assets/sports/archery.jpg';

const WHATSAPP_NUMBER = '919876543210';

const sports = [
    { name: 'Football', image: footballImg, description: 'Experience indoor football with professional turf and lighting. Perfect for 5-a-side matches and training sessions.', type: 'Indoor' },
    { name: 'Cricket', image: cricketImg, description: 'World-class cricket facilities including nets, practice pitches, and box cricket for all skill levels.', type: 'Outdoor' },
    { name: 'Tennis', image: tennisImg, description: 'Professional tennis courts with quality surfaces and equipment for singles and doubles play.', type: 'Indoor' },
    { name: 'Kick Boxing', image: kickboxingImg, description: 'Train with certified instructors in our fully-equipped kickboxing studio with premium gear.', type: 'Indoor' },
    { name: 'Table Tennis', image: tabletennisImg, description: 'Competition-grade tables and equipment for recreational and professional table tennis players.', type: 'Indoor' },
    { name: 'Silambam', image: silambamImg, description: 'Learn the ancient Tamil martial art of Silambam from experienced masters.', type: 'Outdoor' },
    { name: 'Archery', image: archeryImg, description: 'Precision archery training with professional equipment and expert guidance.', type: 'Outdoor' },
];

export default function Sports() {
    const getWhatsAppUrl = (sport) => {
        const message = `Hello 5RINGS, I would like to enquire about ${sport} facilities.`;
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    };

    return (
        <main className="pt-24">
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="heading-xl mb-6">
                            Our <span className="gradient-text-gold">Sports</span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Discover our diverse range of world-class sports facilities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sports.map((sport) => (
                            <div key={sport.name} className="glass-card overflow-hidden p-0 group">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={sport.image}
                                        alt={sport.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm">
                                        {sport.type}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{sport.description}</p>
                                    <a
                                        href={getWhatsAppUrl(sport.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-whatsapp text-sm w-full justify-center"
                                    >
                                        <MessageCircle size={16} />
                                        Enquire Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
