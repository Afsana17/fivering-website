import ScrollReveal from '@/components/ScrollReveal';

export default function JourneySection() {
 const milestones = [
 { year: '2018', title: 'Sports Industry Entry', description: 'Started our journey in the sports industry with a vision to transform athletic training.' },
 { year: 'Dec 2021', title: 'Philosophy Established', description: 'Formulated our core philosophy centered on inclusive sports access for everyone.' },
 { year: '2024', title: 'Multi Sports Facility', description: 'Inaugurated our state-of-the-art multi-sports facility in Chennai.' },
 { year: '2025', title: 'Sports Tech Initiative', description: 'Launched cutting-edge sports technology solutions for training and management.' },
 { year: '2026', title: 'Food Tech Initiative', description: 'Expanding into sports nutrition and food technology for athletes.' },
 { year: 'Future', title: 'Expansion', description: 'Growing presence in Ayanambakkam, Chennai with new facilities.' },
 ];

 return (
 <section className="section-padding bg-secondary/50">
 <div className="container-custom">
 <ScrollReveal animation="fade-up">
 <div className="text-center mb-16">
 <h2 className="heading-lg mb-4">Our Journey</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 From a vision to a multi-sports empire, discover the milestones that shaped 5RINGS.
 </p>
 </div>
 </ScrollReveal>

 <div className="relative">
 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

 <div className="flex flex-col gap-12">
 {milestones.map((milestone, index) => (
 <ScrollReveal
 key={milestone.year}
 animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
 delay={index * 100}
 >
 <div
 className={`relative flex flex-col md:flex-row items-center gap-8 ${
 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
 }`}
 >
 <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
 <div className="glass-card">
 <div className="text-accent font-bold text-lg mb-2">{milestone.year}</div>
 <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
 <p className="text-muted-foreground text-sm">{milestone.description}</p>
 </div>
 </div>

 <div className="hidden md:flex items-center justify-center z-10">
 <div className="timeline-dot" />
 </div>

 <div className="flex-1 hidden md:block" />
 </div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
