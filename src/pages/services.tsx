import { MotionReveal } from "@/components/ui/motion-reveal";
import { Activity, Bed, Brain, Baby, Laptop, Stethoscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "polysomnography",
      title: "In-Clinic Sleep Study (Polysomnography)",
      icon: Activity,
      description: "The gold standard for diagnosing sleep disorders. Conducted in our premium, hotel-like private rooms, this overnight study monitors brain waves, oxygen levels, heart rate, breathing, and movements.",
      idealFor: ["Severe snoring", "Suspected sleep apnea", "Unexplained nighttime awakenings", "Complex sleep behaviors"]
    },
    {
      id: "home-test",
      title: "Home Sleep Testing",
      icon: Bed,
      description: "A convenient, comfortable alternative for diagnosing sleep apnea from your own bed. We provide easy-to-use, medical-grade diagnostic equipment with clear instructions and remote support.",
      idealFor: ["Uncomplicated suspected sleep apnea", "Patients who cannot travel to the clinic", "Initial screening"]
    },
    {
      id: "cpap",
      title: "CPAP Therapy & Optimization",
      icon: Stethoscope,
      description: "Comprehensive management of Continuous Positive Airway Pressure therapy for sleep apnea. We assist with machine selection, mask fitting, pressure calibration, and ongoing compliance monitoring to ensure comfort.",
      idealFor: ["Diagnosed Obstructive Sleep Apnea (OSA)", "Patients struggling with existing CPAP therapy"]
    },
    {
      id: "cbt-i",
      title: "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
      icon: Brain,
      description: "The recommended first-line treatment for chronic insomnia. A structured, medication-free program that helps you identify and replace thoughts and behaviors that cause or worsen sleep problems.",
      idealFor: ["Chronic difficulty falling asleep", "Frequent nighttime awakenings", "Dependence on sleep medications"]
    },
    {
      id: "pediatric",
      title: "Pediatric Sleep Medicine",
      icon: Baby,
      description: "Specialized care for infants, children, and adolescents. Our pediatric specialists understand that children's sleep issues are distinct from adults and require a gentle, family-centered approach.",
      idealFor: ["Childhood snoring or sleep apnea", "Night terrors or sleepwalking", "Behavioral sleep problems"]
    },
    {
      id: "telemedicine",
      title: "Tele-Sleep Consultations",
      icon: Laptop,
      description: "Expert sleep care from anywhere in India. Secure video consultations for initial assessments, therapy follow-ups, and ongoing management without the need to travel.",
      idealFor: ["Remote patients", "Routine follow-up appointments", "CBT-I sessions"]
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <MotionReveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a comprehensive suite of diagnostic and therapeutic services to address the full spectrum of sleep disorders. Using state-of-the-art technology and evidence-based protocols, we ensure accurate diagnosis and effective treatment.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <MotionReveal key={service.id} delay={0.1} direction={index % 2 === 0 ? "right" : "left"}>
                <div className="grid md:grid-cols-12 gap-8 items-start border border-border rounded-3xl p-8 lg:p-12 hover:border-primary/20 hover:shadow-lg transition-all bg-white">
                  <div className="md:col-span-1 flex justify-start md:justify-center">
                    <div className="bg-primary/5 text-primary rounded-2xl w-16 h-16 flex items-center justify-center shrink-0">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <div className="md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-4 bg-muted/50 rounded-2xl p-6 border border-border/50">
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4">Ideal For</h3>
                    <ul className="space-y-3">
                      {service.idealFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionReveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our State-of-the-Art Sleep Lab</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  We designed our clinic to feel less like a hospital and more like a premium hotel. Because you can't be expected to sleep normally in an uncomfortable environment.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Sound-proofed, climate-controlled private suites</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Premium orthopaedic mattresses and luxury linens</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>Unobtrusive, wireless monitoring equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>En-suite bathrooms with premium amenities</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white rounded-full" asChild>
                  <Link href="/contact">Book a Sleep Study</Link>
                </Button>
              </MotionReveal>
            </div>
            <MotionReveal delay={0.2} direction="left">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/sleep-study.png" 
                  alt="Modern Sleep Clinic Room" 
                  className="w-full h-full object-cover"
                />
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
