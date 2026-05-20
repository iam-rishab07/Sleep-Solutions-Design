import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Wind, Activity, Waves, Zap, CheckCircle2, Star, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="Peaceful sleep"
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
                Serving All of Maharashtra
              </div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-[1.1]">
                Restoring Lives Through <span className="text-secondary italic">Better Sleep</span>
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl leading-relaxed">
                Maharashtra's trusted provider of Level 2 & Level 3 sleep test devices, CPAP, BIPAP, and Oxygen Concentrators — delivered to your home or hospital.
              </p>
            </MotionReveal>

            <MotionReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full h-14 px-8 text-base bg-secondary text-secondary-foreground hover:bg-white transition-colors" asChild data-testid="hero-cta-contact">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm" asChild data-testid="hero-cta-services">
                  <Link href="/services">Our Services</Link>
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
              { value: "Level 2 & 3", label: "Sleep Test Devices" },
              { value: "Pan-MH", label: "Maharashtra Coverage" },
              { value: "Home &", label: "Hospital Supply" },
              { value: "American", label: "Board Certified Specialists" },
            ].map((stat, i) => (
              <MotionReveal key={i} delay={i * 0.1} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionReveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                  About Sleep Solutions India
                </h2>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sleep Solutions is the organization you can trust for Level 2 & Level 3 sleep test devices — available at your home or hospital. We supply all the testing equipment needed to diagnose and treat sleep problems.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We supply CPAP machines, BIPAP devices, BIPAP Ventilators, Oxygen Concentrators, and full Sleep Apnea test kits across Maharashtra and major cities including Pune, Nashik, Nagpur, Solapur, Kolhapur, Satara, Sangali, Ahmednagar, Ratnagiri, Baramati, and Goa.
                </p>
              </MotionReveal>
              <MotionReveal delay={0.2}>
                <ul className="space-y-4 mb-8">
                  {[
                    "Treatment by American Board Certified Sleep Specialist",
                    "Complete treatment process under one roof",
                    "No hospitalization required for diagnosis",
                    "Facility to do consultations from home using technology",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="px-0 text-primary hover:text-primary/80 font-semibold group" asChild>
                  <Link href="/doctors" className="flex items-center gap-2">
                    Meet Our Team <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MotionReveal>
            </div>
            <MotionReveal delay={0.3} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted">
                <img
                  src="/images/sleep-study.png"
                  alt="Sleep Solutions India devices"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif text-xl font-medium mb-1">Ritesh S. Mane</p>
                  <p className="text-white/80 text-sm">Director, Sleep Solutions India</p>
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Products</h2>
              <p className="text-muted-foreground text-lg">Medical-grade sleep testing and respiratory therapy equipment — supplied to homes and hospitals across Maharashtra.</p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: "CPAP", img: "/images/products/cpap.jpg", href: "/services#cpap" },
              { title: "BIPAP", img: "/images/products/bipap.jpg", href: "/services#bipap" },
              { title: "Bacterial Filter", img: "/images/products/bacterial-filter.jpg", href: "/services#bacterial-filter" },
              { title: "High Flow Oxygen Device", img: "/images/products/high-flow-oxygen.jpg", href: "/services#high-flow-oxygen" },
              { title: "HME", img: "/images/products/hme.jpg", href: "/services#hme" },
              { title: "Sleep Diagnostics", img: "/images/products/sleep.jpg", href: "/services#sleep-diagnostics" },
              { title: "Respiratory Systems", img: "/images/products/respiratory-systems.jpg", href: "/services#respiratory-systems" },
              { title: "Breathing Circuits", img: "/images/products/breathing-circuits.jpg", href: "/services#breathing-circuits" },
            ].map((product, i) => (
              <MotionReveal key={i} delay={i * 0.07} direction="up">
                <Link href={product.href} className="group block">
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all bg-white">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <span className="text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1 ml-2 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        Read More
                      </span>
                    </div>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.4} className="text-center mt-12">
            <Button className="rounded-full px-8" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <MotionReveal>
                <div className="sticky top-32">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Why Choose Sleep Solutions?</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We are a specialty center for sleep disorders trusted by doctors and patients across Maharashtra.
                  </p>
                  <Button asChild className="rounded-full">
                    <Link href="/contact">Contact Us Today</Link>
                  </Button>
                </div>
              </MotionReveal>
            </div>

            <div className="lg:col-span-7 grid gap-6">
              {[
                { title: "American Board Certified Specialist", desc: "Treatment supervised by an American Board Certified Sleep Specialist for world-class care." },
                { title: "No Surgery. No Medicines.", desc: "Sleep Apnea and snoring treatment without surgery or medication — using proven device-based therapy." },
                { title: "No Hospitalization Required", desc: "Complete sleep diagnosis and treatment at your home, without the need for hospital admission." },
                { title: "Doctors Trust Us", desc: "Physicians across Maharashtra refer their patients to Sleep Solutions for dependable sleep disorder care." },
                { title: "Consult from Home", desc: "Facility to do consultations from home using technology — convenience you deserve." },
                { title: "Complete Process Under One Roof", desc: "From testing devices to therapy machines, everything is available from a single trusted source." },
              ].map((item, i) => (
                <MotionReveal key={i} delay={i * 0.1}>
                  <div className="group border border-border p-6 rounded-2xl hover:border-primary hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cities */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">We Serve All of Maharashtra</h2>
            <p className="text-muted-foreground text-lg mb-10">Delivering sleep test devices and therapy equipment across the state.</p>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {["Pune", "Baramati", "Solapur", "Nashik", "Ahmednagar", "Nagpur", "Kolhapur", "Satara", "Sangali", "Ratnagiri", "Goa", "& All of Maharashtra"].map((city, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                  <MapPin size={13} className="text-primary" /> {city}
                </span>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">What Our Customers Say</h2>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Sleep Solutions provided the CPAP device at our home in Nashik within days. The setup support was excellent and the device works perfectly.", author: "Ramesh P.", location: "Nashik" },
              { text: "We needed a sleep apnea test kit for my father at home. Sleep Solutions delivered everything we needed with clear instructions. Highly recommended.", author: "Meera S.", location: "Pune" },
              { text: "The oxygen concentrator supplied by Sleep Solutions has been a lifesaver for our patient. Reliable service across Kolhapur.", author: "Dr. Vikram K.", location: "Kolhapur" },
            ].map((review, i) => (
              <MotionReveal key={i} delay={i * 0.1}>
                <div className="bg-muted/30 p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex text-secondary mb-6">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to Sleep Better?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact Sleep Solutions India today for Level 2 & Level 3 sleep test devices, CPAP, BIPAP, and Oxygen Concentrators — delivered to your home or hospital anywhere in Maharashtra.
            </p>
            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-white transition-colors" asChild data-testid="bottom-cta-contact">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
