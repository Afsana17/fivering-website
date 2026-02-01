import { Eye, Target, Award, Heart } from 'lucide-react';

export default function About() {
 return (
 <main className="pt-24">
 <section className="section-padding">
 <div className="container-custom">
 <div className="max-w-3xl mx-auto text-center mb-16">
 <h1 className="heading-xl mb-6">
 About <span className="gradient-text-gold">5RINGS</span>
 </h1>
 <p className="text-xl text-muted-foreground">
 A multi-sports and sports technology organization dedicated to fostering athletic excellence and community wellness.
 </p>
 </div>

 <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
 <div>
 <h2 className="heading-md mb-6">Who We Are</h2>
 <p className="text-muted-foreground mb-4 leading-relaxed">
 FIVERINGS SPORTS PVT LTD is Chennai's premier multi-sports organization, established with a vision to make quality sports facilities accessible to everyone. Our philosophy, "Everyone is our customer," reflects our commitment to inclusive athletic development.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 From traditional Indian martial arts like Silambam to modern sports like Football and Tennis, we offer a comprehensive ecosystem that caters to athletes of all ages and skill levels.
 </p>
 </div>
 <div className="glass-card">
 <div className="grid grid-cols-2 gap-6">
 {[
 { value: '2018', label: 'Founded' },
 { value: '7+', label: 'Sports' },
 { value: '1000+', label: 'Athletes Trained' },
 { value: '1', label: 'Premium Facility' },
 ].map((stat) => (
 <div key={stat.label} className="text-center">
 <div className="text-3xl font-bold gradient-text-gold mb-1">{stat.value}</div>
 <div className="text-sm text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="grid md:grid-cols-2 gap-8 mb-24">
 <div className="glass-card group hover:border-accent/30 transition-all">
 <div className="feature-icon mb-6">
 <Eye size={28} />
 </div>
 <h3 className="heading-md mb-4">Our Vision</h3>
 <p className="text-muted-foreground leading-relaxed">
 To become India's most trusted multi-sports organization, creating a holistic ecosystem that nurtures athletic talent, promotes wellness, and leverages technology to revolutionize the sports industry.
 </p>
 </div>

 <div className="glass-card group hover:border-accent/30 transition-all">
 <div className="feature-icon mb-6">
 <Target size={28} />
 </div>
 <h3 className="heading-md mb-4">Our Mission</h3>
 <p className="text-muted-foreground leading-relaxed">
 To provide world-class sports facilities and technology-driven solutions that make quality athletic training accessible to everyone, fostering a community of champions and promoting a healthy lifestyle.
 </p>
 </div>
 </div>

 <div className="text-center mb-12">
 <h2 className="heading-lg mb-4">Our Core Values</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 The principles that guide everything we do at 5RINGS.
 </p>
 </div>

 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: Award, title: 'Excellence', description: 'Striving for the highest standards in everything we do.' },
 { icon: Heart, title: 'Inclusivity', description: 'Making sports accessible to everyone, regardless of background.' },
 { icon: Target, title: 'Innovation', description: 'Embracing technology to enhance athletic performance.' },
 { icon: Eye, title: 'Integrity', description: 'Operating with transparency and ethical practices.' },
 ].map((value) => (
 <div key={value.title} className="glass-card text-center group hover:border-accent/30 transition-all">
 <div className="feature-icon mx-auto mb-4 group-hover:scale-110 transition-transform">
 <value.icon size={24} />
 </div>
 <h3 className="font-semibold mb-2">{value.title}</h3>
 <p className="text-muted-foreground text-sm">{value.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 </main>
 );
}
