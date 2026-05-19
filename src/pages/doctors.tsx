import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, CheckCircle2, Users } from "lucide-react";

export default function Doctors() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MotionReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Team</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the people behind Sleep Solutions India — dedicated professionals committed to improving sleep health across Maharashtra.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Director */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

            {/* Image */}
            <div className="lg:col-span-4">
              <MotionReveal delay={0.1}>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground/40 p-8">
                    <Users size={80} strokeWidth={1} />
                    <p className="mt-4 text-sm">Ritesh S. Mane</p>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Content */}
            <div className="lg:col-span-8">
              <MotionReveal delay={0.2}>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">Ritesh S. Mane</h2>
                  <p className="text-secondary font-medium text-lg mb-1">Director, Sleep Solutions India</p>
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed mb-10">
                  Ritesh S. Mane is the founder and director of Sleep Solutions India, an organization built on the belief that quality sleep healthcare should be accessible to everyone — at home or in hospital, across Maharashtra. Under his leadership, Sleep Solutions has grown into a trusted name for Level 2 & Level 3 sleep test devices, CPAP, BIPAP, Ventilators, and Oxygen Concentrators, serving patients and hospitals in Pune, Nashik, Nagpur, Kolhapur, Satara, Sangali, Solapur, Ratnagiri, Ahmednagar, Baramati, and Goa.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-secondary" size={20} />
                      <h3 className="font-bold text-foreground">What We Stand For</h3>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "American Board Certified Sleep Specialist backing",
                        "Specialty center for sleep disorders",
                        "Complete treatment under one roof",
                        "No surgery or medicines needed",
                      ].map((cred, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={15} />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="text-secondary" size={20} />
                      <h3 className="font-bold text-foreground">Devices We Supply</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Level 2 Sleep Test", "Level 3 Sleep Test", "CPAP", "BIPAP", "BIPAP Ventilator", "Oxygen Concentrator"].map((spec, i) => (
                        <span key={i} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </MotionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <MotionReveal>
            <Award className="mx-auto text-secondary mb-6" size={48} strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Trusted by Doctors & Patients</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Physicians across Maharashtra refer their patients to Sleep Solutions India because they trust our devices, our expertise, and our commitment to complete, convenient care — from diagnosis to treatment, without hospitalization.
            </p>
            <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/services">Explore Our Devices</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
