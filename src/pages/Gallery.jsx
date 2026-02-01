import footballImg from '@/assets/sports/football.jpg';
import cricketImg from '@/assets/sports/cricket.jpg';
import tennisImg from '@/assets/sports/tennis.jpg';
import kickboxingImg from '@/assets/sports/kickboxing.jpg';
import tabletennisImg from '@/assets/sports/tabletennis.jpg';
import silambamImg from '@/assets/sports/silambam.jpg';
import archeryImg from '@/assets/sports/archery.jpg';
import heroImg from '@/assets/hero-stadium.jpg';

const images = [
 { src: heroImg, alt: 'Stadium', category: 'Facility' },
 { src: footballImg, alt: 'Football', category: 'Sports' },
 { src: cricketImg, alt: 'Cricket', category: 'Sports' },
 { src: tennisImg, alt: 'Tennis', category: 'Sports' },
 { src: kickboxingImg, alt: 'Kickboxing', category: 'Sports' },
 { src: tabletennisImg, alt: 'Table Tennis', category: 'Sports' },
 { src: silambamImg, alt: 'Silambam', category: 'Sports' },
 { src: archeryImg, alt: 'Archery', category: 'Sports' },
];

export default function Gallery() {
 return (
 <main className="pt-24">
 <section className="section-padding">
 <div className="container-custom">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="heading-xl mb-6">
 Photo <span className="gradient-text-gold">Gallery</span>
 </h1>
 <p className="text-xl text-muted-foreground">
 Explore our world-class facilities and athletic moments.
 </p>
 </div>

 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
 {images.map((image, index) => (
 <div
 key={index}
 className={`sport-card group ${
 index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
 }`}
 >
 <img src={image.src} alt={image.alt} loading="lazy" />
 <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
 <span className="text-xs text-white/70">{image.category}</span>
 <h3 className="text-white font-semibold">{image.alt}</h3>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 </main>
 );
}
