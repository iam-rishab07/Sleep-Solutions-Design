import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Bed, Brain, HeartPulse, Activity, CheckCircle2, Star, Clock } from "lucide-react";
import heroImg from "@assets/images/hero-bg.png";
import doc1Img from "@assets/images/doctor-1.png";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Calming night sky" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl text-white">
            <MotionReveal>
              <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary backdrop-blur-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                India's Premium Sleep Clinic
              </div>
            </MotionReveal>
            
            <MotionReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1]">
                Restoring Lives Through <span className="text-secondary italic">Better Sleep</span>
              </h1>
            </MotionReveal>
            
            <MotionReveal delay={0.2}>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl leading-relaxed">
                Expert diagnosis and compassionate treatment for chronic sleep disorders. Wake up feeling truly rested, every single day.
              </p>
            </MotionReveal>
            
            <MotionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-white transition-colors" asChild data-testid="hero-cta-book">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm" asChild data-testid="hero-cta-services">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10,000+", label: "Patients Treated" },
              { value: "Board", label: "Certified Specialists" },
              { value: "98%", label: "Success Rate" },
            ].map((stat, i) => (
              <MotionReveal key={i} delay={i * 0.1} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionReveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  Expertise Meets Compassion
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sleep is not a luxury; it is the foundation of your health. At Sleep Solutions India, we combine advanced sleep medicine with a deeply human approach.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you're struggling with insomnia, snoring, or daytime fatigue, our board-certified specialists work with you to uncover the root cause and develop a personalized treatment plan.
                </p>
              </MotionReveal>
              <MotionReveal delay={0.2}>
                <ul className="space-y-4 mb-8">
                  {[
                    "State-of-the-art diagnostic technology",
                    "Personalized, evidence-based treatment plans",
                    "Ongoing support and lifestyle guidance",
                    "Comfortable, premium clinic environment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="px-0 text-primary hover:text-primary/80 font-semibold group" asChild>
                  <Link href="/doctors" className="flex items-center gap-2">
                    Meet Our Doctors <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MotionReveal>
            </div>
            <MotionReveal delay={0.3} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted">
                <img 
                  src="/images/doctor-1.png" 
                  alt="Dr. Ananya Sharma" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-xl font-medium mb-1">Dr. Ananya Sharma</p>
                  <p className="text-white/80 text-sm">Lead Sleep Specialist</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
              <p className="text-primary-foreground/80 text-lg">Comprehensive diagnostics and tailored therapies for every sleep challenge.</p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: "Polysomnography", desc: "Overnight in-clinic sleep studies in our premium, hotel-like rooms for comprehensive diagnosis." },
              { icon: Bed, title: "Home Sleep Testing", desc: "Convenient diagnostic devices sent to your home for comfortable overnight monitoring." },
              { icon: Brain, title: "CBT-I", desc: "Cognitive Behavioral Therapy for Insomnia, the gold-standard non-medication approach." },
            ].map((service, i) => (
              <MotionReveal key={i} delay={i * 0.1} direction="up">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-colors h-full flex flex-col">
                  <div className="bg-secondary text-primary rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-primary-foreground/70 leading-relaxed flex-1">{service.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.4} className="text-center mt-12">
            <Button variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <MotionReveal>
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">What Are You Experiencing?</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Sleep disorders manifest in many ways. If you recognize these symptoms, we can help.
                  </p>
                  <Button asChild className="rounded-full">
                    <Link href="/conditions">Learn About Conditions</Link>
                  </Button>
                </div>
              </MotionReveal>
            </div>
            
            <div className="lg:col-span-7 grid gap-6">
              {[
                { title: "Insomnia", desc: "Difficulty falling asleep, staying asleep, or waking up too early." },
                { title: "Sleep Apnea", desc: "Loud snoring, gasping for air, or pausing breathing during sleep." },
                { title: "Restless Legs Syndrome", desc: "An irresistible urge to move the legs, especially in the evening." },
                { title: "Narcolepsy", desc: "Overwhelming daytime drowsiness and sudden attacks of sleep." }
              ].map((condition, i) => (
                <MotionReveal key={i} delay={i * 0.1}>
                  <div className="group border border-border p-6 rounded-2xl hover:border-primary hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{condition.title}</h3>
                    <p className="text-muted-foreground">{condition.desc}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your Path to Better Sleep</h2>
              <p className="text-muted-foreground text-lg">A simple, structured approach to resolving your sleep issues.</p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10" />
            
            {[
              { step: "01", title: "Consultation", desc: "Initial clinical evaluation with our specialists." },
              { step: "02", title: "Diagnosis", desc: "In-clinic or at-home sleep study if required." },
              { step: "03", title: "Treatment", desc: "Personalized therapy plan implemented." },
              { step: "04", title: "Follow-up", desc: "Ongoing monitoring to ensure lasting results." }
            ].map((step, i) => (
              <MotionReveal key={i} delay={i * 0.1} className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-muted flex items-center justify-center text-2xl font-serif font-bold text-primary mb-6 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Stories of Restoration</h2>
          </MotionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "After 5 years of chronic insomnia, Dr. Sharma's CBT-I program completely changed my life. I finally sleep through the night without medication.", author: "Rajiv M.", location: "New Delhi" },
              { text: "The sleep study was so comfortable, unlike what I imagined. Getting my CPAP machine properly calibrated here resolved my terrible snoring.", author: "Priya S.", location: "Gurugram" },
              { text: "Professional, deeply knowledgeable, and compassionate. They truly listen to you here. Highly recommend for any sleep issues.", author: "Vikram K.", location: "Mumbai" }
            ].map((review, i) => (
              <MotionReveal key={i} delay={i * 0.1}>
                <div className="bg-muted/30 p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex text-secondary mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-foreground italic mb-8 flex-1">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-primary">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-64 h-64 bg-secondary rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-screen filter blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <MotionReveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready for a Good Night's Sleep?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Don't let another sleepless night affect your health. Schedule a consultation with our experts today.
            </p>
            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-white transition-colors" asChild data-testid="bottom-cta-book">
              <Link href="/contact">Book Your Appointment</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
