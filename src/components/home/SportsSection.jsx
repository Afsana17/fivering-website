import footballImg from '@/assets/sports/football.jpg';
import cricketImg from '@/assets/sports/cricket.jpg';
import tennisImg from '@/assets/sports/tennis.jpg';
import kickboxingImg from '@/assets/sports/kickboxing.jpg';
import tabletennisImg from '@/assets/sports/tabletennis.jpg';
import silambamImg from '@/assets/sports/silambam.jpg';
import archeryImg from '@/assets/sports/archery.jpg';
import ScrollReveal from '@/components/ScrollReveal';

const sports = [
 { name: 'Football', image: footballImg },
 { name: 'Cricket', image: cricketImg },
 { name: 'Tennis', image: tennisImg },
 { name: 'Kickboxing', image: kickboxingImg },
 { name: 'Table Tennis', image: tabletennisImg },
 { name: 'Silambam', image: silambamImg },
 { name: 'Archery', image: archeryImg },
];

export default function SportsSection() {
 return (
 <section className="section-padding bg-secondary/50">
 <div className="container-custom">
 <ScrollReveal animation="fade-up">
 <div className="text-center mb-16">
 <h2 className="heading-lg mb-4">Sports Available</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Explore our diverse range of sports facilities, from traditional athletics to martial arts.
 </p>
 </div>
 </ScrollReveal>

 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
 {sports.map((sport, index) => (
 <ScrollReveal key={sport.name} animation="scale" delay={index * 80}>
 <div
 className={`sport-card group aspect-[4/5] ${
 index === 0 ? 'md:col-span-2 md:row-span-2' : ''
 }`}
 >
 <img src={sport.image} alt={sport.name} loading="lazy" />
 <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
 <h3 className="text-white font-semibold text-lg">{sport.name}</h3>
 </div>
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>
 );
}
