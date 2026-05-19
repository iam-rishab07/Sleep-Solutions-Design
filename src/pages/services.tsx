import { MotionReveal } from "@/components/ui/motion-reveal";
import { Activity, Wind, Zap, Waves, Home, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "level2-sleep-test",
      title: "Level 2 Sleep Test (Home)",
      icon: Activity,
      description: "A comprehensive, unattended polysomnography device for home use. Level 2 tests record brain waves (EEG), eye movements, muscle activity, heart rate, oxygen saturation, and respiratory effort — giving a complete overnight diagnostic picture without a hospital stay.",
      idealFor: ["Diagnosing complex sleep disorders at home", "Patients unable to visit a hospital", "Detailed overnight monitoring", "Neurological sleep assessment"],
    },
    {
      id: "level3-sleep-test",
      title: "Level 3 Sleep Apnea Test",
      icon: Activity,
      description: "A portable, easy-to-use home sleep testing device focused on diagnosing obstructive sleep apnea. Records airflow, oxygen levels, respiratory effort, and heart rate. Ideal for initial screening and confirmed apnea diagnosis without clinical overnight stays.",
      idealFor: ["Suspected obstructive sleep apnea", "Snoring evaluation", "Pre-CPAP therapy assessment", "Routine sleep apnea screening"],
    },
    {
      id: "cpap",
      title: "CPAP Machines",
      icon: Wind,
      description: "Continuous Positive Airway Pressure (CPAP) machines are the gold-standard treatment for obstructive sleep apnea. We supply a full range of CPAP devices with mask fitting support, pressure setup guidance, and ongoing service — delivered to your home or hospital.",
      idealFor: ["Diagnosed obstructive sleep apnea", "Snoring treatment without surgery", "Patients needing home-based therapy", "Hospital respiratory units"],
    },
    {
      id: "bipap",
      title: "BIPAP Machines",
      icon: Wind,
      description: "Bi-level Positive Airway Pressure (BIPAP) devices deliver two pressure levels — higher for inhalation and lower for exhalation. Recommended for patients with complex sleep apnea, COPD, or those who find CPAP uncomfortable. We supply and configure BIPAP devices for home and hospital use.",
      idealFor: ["Complex or central sleep apnea", "COPD and respiratory conditions", "Patients intolerant of CPAP", "Clinical and home respiratory care"],
    },
    {
      id: "bipap-ventilator",
      title: "BIPAP Ventilator Machines",
      icon: Zap,
      description: "Advanced BIPAP ventilators for patients requiring mechanical respiratory support. These devices provide life-sustaining ventilation for patients with neuromuscular disorders, respiratory failure, or severe COPD. We supply, deliver, and provide setup support across Maharashtra.",
      idealFor: ["Neuromuscular disease (ALS, muscular dystrophy)", "Acute or chronic respiratory failure", "ICU and home ventilation support", "Post-surgery respiratory care"],
    },
    {
      id: "oxygen-concentrator",
      title: "Oxygen Concentrators",
      icon: Waves,
      description: "Medical-grade oxygen concentrators for home and hospital use. Our concentrators deliver a continuous supply of purified oxygen for patients with COPD, hypoxemia, sleep-related breathing disorders, or recovery needs. Available in stationary and portable models.",
      idealFor: ["Sleep-related hypoxemia", "COPD and chronic lung disease", "Post-COVID oxygen support", "Home and hospital oxygen therapy"],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-muted/30 py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <MotionReveal>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Devices & Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sleep Solutions India is your trusted provider of Level 2 & Level 3 sleep test devices, CPAP, BIPAP, BIPAP Ventilators, and Oxygen Concentrators — supplied to homes and hospitals across Maharashtra.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10">
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

      {/* Supply Scope */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <MotionReveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Home & Hospital Supply Across Maharashtra</h2>
                <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                  We supply all our sleep devices directly to your home or hospital anywhere in Maharashtra. Our team provides setup guidance, technical support, and ongoing service — so you're never on your own.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Free delivery and setup support",
                    "Trained technicians for device configuration",
                    "Ongoing service and troubleshooting",
                    "Serving Pune, Nashik, Nagpur, Kolhapur, Satara, Sangali, Solapur, Ratnagiri, Baramati, Ahmednagar & Goa",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-white rounded-full" asChild>
                  <Link href="/contact">Request a Device</Link>
                </Button>
              </MotionReveal>
            </div>
            <MotionReveal delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Home, label: "Home Delivery", desc: "Devices delivered and set up at your residence" },
                  { icon: Hospital, label: "Hospital Supply", desc: "Direct supply to hospitals and clinical units" },
                  { icon: Activity, label: "Full Testing Kit", desc: "Level 2 & 3 devices with all accessories" },
                  { icon: Wind, label: "Therapy Devices", desc: "CPAP, BIPAP, Ventilators & Oxygen Concentrators" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl p-6 flex flex-col gap-3">
                    <item.icon size={28} className="text-secondary" strokeWidth={1.5} />
                    <h3 className="font-bold">{item.label}</h3>
                    <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
