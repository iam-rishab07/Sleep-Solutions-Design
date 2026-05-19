import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Doctors() {
  const doctors = [
    {
      id: "dr-sharma",
      name: "Dr. Ananya Sharma",
      titles: "MBBS, MD (Pulmonology), Fellowship in Sleep Medicine",
      role: "Lead Sleep Specialist & Pulmonologist",
      image: "/images/doctor-1.png",
      bio: "Dr. Sharma is a pioneering figure in Indian sleep medicine with over 15 years of experience. She specializes in complex sleep-disordered breathing and has a particular interest in the intersection of sleep apnea and cardiovascular health. Known for her compassionate, patient-first approach, she has helped thousands of patients reclaim their sleep and vitality.",
      credentials: [
        "Fellowship in Sleep Medicine, Stanford University, USA",
        "MD Pulmonology, AIIMS New Delhi",
        "Member, Indian Sleep Disorders Association (ISDA)",
        "Member, American Academy of Sleep Medicine (AASM)"
      ],
      specialties: ["Obstructive Sleep Apnea", "Complex Sleep Apnea", "Sleep-related Hypoventilation"]
    },
    {
      id: "dr-menon",
      name: "Dr. Rajeev Menon",
      titles: "MBBS, MD (Psychiatry), Board Certified in Sleep Medicine",
      role: "Senior Consultant, Behavioral Sleep Medicine",
      image: "/images/doctor-2.png",
      bio: "Dr. Menon brings a dual expertise in psychiatry and sleep medicine, making him uniquely qualified to treat insomnia and circadian rhythm disorders. He leads our CBT-I (Cognitive Behavioral Therapy for Insomnia) program and focuses on evidence-based, medication-free approaches to restoring natural sleep patterns.",
      credentials: [
        "Board Certification in Sleep Medicine, World Sleep Society",
        "MD Psychiatry, NIMHANS New Delhi",
        "Advanced Training in CBT-I, University of Pennsylvania",
        "Over 50 peer-reviewed publications on sleep disorders"
      ],
      specialties: ["Chronic Insomnia", "Circadian Rhythm Disorders", "Parasomnias", "Narcolepsy"]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MotionReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Specialists</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the board-certified experts dedicated to understanding your sleep and restoring your health. We bring together pulmonology, neurology, and psychiatry to offer truly comprehensive care.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {doctors.map((doctor, index) => (
              <div key={doctor.id} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Image Column */}
                <div className={`lg:col-span-4 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <MotionReveal delay={0.1}>
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
                  </MotionReveal>
                </div>
                
                {/* Content Column */}
                <div className={`lg:col-span-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <MotionReveal delay={0.2}>
                    <div className="mb-6">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{doctor.name}</h2>
                      <p className="text-secondary font-medium text-lg mb-1">{doctor.role}</p>
                      <p className="text-sm text-muted-foreground">{doctor.titles}</p>
                    </div>
                    
                    <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                      {doctor.bio}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-8 mb-10">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <GraduationCap className="text-secondary" size={20} />
                          <h3 className="font-bold text-foreground">Credentials</h3>
                        </div>
                        <ul className="space-y-3">
                          {doctor.credentials.map((cred, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {cred}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="text-secondary" size={20} />
                          <h3 className="font-bold text-foreground">Specialties</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties.map((spec, i) => (
                            <span key={i} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button size="lg" className="rounded-full" asChild>
                      <Link href="/contact">Consult with {doctor.name.split(' ')[1]}</Link>
                    </Button>
                  </MotionReveal>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Approach CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <MotionReveal>
            <BookOpen className="mx-auto text-secondary mb-6" size={48} strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">A Multidisciplinary Approach</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Sleep disorders rarely exist in isolation. Our specialists collaborate on complex cases, ensuring that underlying medical, structural, and behavioral factors are all addressed in your personalized treatment plan.
            </p>
            <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/services">Discover Our Methods</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
