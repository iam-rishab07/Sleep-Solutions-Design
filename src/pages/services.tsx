import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

const products = [
  {
    id: "cpap",
    title: "CPAP",
    fullName: "Continuous Positive Airway Pressure",
    tagline: "The gold-standard treatment for Obstructive Sleep Apnea",
    img: "/images/services/cpap.jpg",
    description:
      "CPAP therapy delivers a continuous stream of pressurised air through a mask, keeping the airway open throughout the night. It is the most effective and widely prescribed treatment for Obstructive Sleep Apnea (OSA), eliminating snoring, breathing pauses, and the daytime fatigue that comes with untreated apnea.",
    features: [
      "Auto-titrating (APAP) and fixed-pressure models available",
      "Integrated heated humidifiers for comfort",
      "Whisper-quiet motors — under 26 dB",
      "Smart data recording (AHI, leak rate, usage hours)",
      "Wide range of mask types: nasal, full-face, nasal pillow",
      "Home delivery and setup across Maharashtra",
    ],
    idealFor: [
      "Diagnosed Obstructive Sleep Apnea (OSA)",
      "Chronic loud snoring",
      "Daytime fatigue and unrefreshing sleep",
      "Post-sleep study CPAP initiation",
    ],
  },
  {
    id: "bipap",
    title: "BIPAP",
    fullName: "Bi-level Positive Airway Pressure",
    tagline: "Two pressure levels for complex respiratory needs",
    img: "/images/services/bipap.jpg",
    description:
      "BIPAP delivers two distinct pressure levels — a higher pressure on inhalation (IPAP) and a lower pressure on exhalation (EPAP). This makes breathing feel more natural and is especially important for patients with COPD, hypoventilation syndromes, or those who find standard CPAP pressure difficult to exhale against.",
    features: [
      "Independent IPAP and EPAP pressure settings",
      "ST (Spontaneous/Timed) backup rate for safety",
      "Integrated heated humidification",
      "Compatible with full-face and nasal masks",
      "Compact, travel-friendly designs available",
      "Remote monitoring capable models",
    ],
    idealFor: [
      "CPAP-intolerant sleep apnea patients",
      "COPD and chronic respiratory insufficiency",
      "Obesity Hypoventilation Syndrome (OHS)",
      "Central or mixed sleep apnea",
    ],
  },
  {
    id: "bacterial-filter",
    title: "Bacterial Filter",
    fullName: "Respiratory Bacterial & Viral Filters",
    tagline: "Essential protection for every respiratory circuit",
    img: "/images/services/bacterial-filter.jpg",
    description:
      "Respiratory bacterial and viral filters are critical components placed in breathing circuits to prevent cross-contamination between patients and between patient and device. Our filters achieve ≥99.99% filtration efficiency for bacteria and viruses, making them essential for ICU ventilation, home therapy, and clinical use.",
    features: [
      "≥99.99% bacterial and viral filtration efficiency (BFE/VFE)",
      "Low resistance for comfortable breathing",
      "Integrated HME function available (combined models)",
      "Electrostatic and mechanical filtration technology",
      "Available for adult, paediatric, and neonatal circuits",
      "Single-use, sterile packaging",
    ],
    idealFor: [
      "ICU and hospital ventilation circuits",
      "Home CPAP and BIPAP therapy",
      "Anaesthesia breathing systems",
      "Infection control in respiratory care",
    ],
  },
  {
    id: "high-flow-oxygen",
    title: "High Flow Oxygen Device",
    fullName: "High Flow Nasal Cannula (HFNC) Therapy",
    tagline: "Precise, humidified, high-flow oxygen for acute respiratory support",
    img: "/images/services/high-flow-oxygen.jpg",
    description:
      "High Flow Nasal Cannula (HFNC) systems deliver heated, humidified oxygen at flow rates up to 60 L/min via a comfortable nasal cannula — far exceeding what conventional oxygen devices can provide. HFNC reduces the work of breathing, flushes dead space, and provides a precise, controllable FiO₂, making it a powerful tool in managing acute respiratory failure.",
    features: [
      "Flow rates up to 60 L/min",
      "FiO₂ control from 21% to 100%",
      "Active heated humidification (37°C, 44 mg H₂O/L)",
      "Non-invasive — no intubation required",
      "Suitable for adult and paediatric patients",
      "Reduces need for mechanical ventilation",
    ],
    idealFor: [
      "Acute hypoxaemic respiratory failure",
      "Post-extubation support",
      "COVID-19 and pneumonia management",
      "Weaning from mechanical ventilation",
    ],
  },
  {
    id: "hme",
    title: "HME",
    fullName: "Heat & Moisture Exchanger",
    tagline: "Passive airway conditioning for ventilated patients",
    img: "/images/services/hme.jpg",
    description:
      "A Heat and Moisture Exchanger (HME) is a passive device placed between the breathing circuit and the patient's airway. It captures heat and moisture from exhaled air and returns it on the next inhalation, conditioning inspired gases without the need for an active heated humidifier. Combined HME-filter models also provide bacterial and viral filtration.",
    features: [
      "Passive operation — no power required",
      "Preserves heat and humidity from exhaled air",
      "Combined HME+bacterial filter models available",
      "Minimal added deadspace (< 30 mL)",
      "Single-use, individually packaged",
      "Adult and paediatric sizes",
    ],
    idealFor: [
      "Intubated and tracheotomised patients",
      "Short-term mechanical ventilation",
      "Transport ventilation",
      "When active humidification is unavailable",
    ],
  },
  {
    id: "sleep-diagnostics",
    title: "Sleep Diagnostics",
    fullName: "Level 2 & Level 3 Home Sleep Testing",
    tagline: "Accurate sleep disorder diagnosis at home or hospital",
    img: "/images/services/sleep-diagnostics.jpg",
    description:
      "Sleep Solutions India provides both Level 2 and Level 3 diagnostic devices — the medically recognised standards for sleep study testing. Level 2 devices record full polysomnography (PSG) data including EEG, EOG, EMG, ECG, airflow, effort belts, and SpO₂. Level 3 devices focus on respiratory monitoring for sleep apnea screening and are ideal for home use.",
    features: [
      "Level 2: Full unattended PSG — EEG, EOG, EMG, ECG, SpO₂, airflow, effort",
      "Level 3: Portable apnea testing — airflow, SpO₂, respiratory effort, HR",
      "Home delivery with setup instruction support",
      "Data reviewed by qualified sleep specialists",
      "Results used for CPAP/BIPAP titration",
      "No hospital admission required",
    ],
    idealFor: [
      "Suspected obstructive sleep apnea",
      "Snoring evaluation",
      "Pre-CPAP therapy baseline assessment",
      "Periodic sleep disorder monitoring",
    ],
  },
  {
    id: "respiratory-systems",
    title: "Respiratory Systems",
    fullName: "Complete Respiratory Ventilation Systems",
    tagline: "ICU-grade ventilation for hospital and home",
    img: "/images/services/respiratory-systems.jpg",
    description:
      "We supply complete respiratory ventilation systems for ICU, step-down, and home care settings. From invasive mechanical ventilators for critical care to non-invasive home ventilators for patients with neuromuscular disease or chronic respiratory failure, our range covers the full spectrum of ventilatory support requirements.",
    features: [
      "Invasive and non-invasive ventilation modes",
      "Volume-controlled, pressure-controlled, and hybrid modes",
      "Alarm systems for safe unattended use",
      "Compact home ventilators with battery backup",
      "Compatible with standard breathing circuits",
      "Full technical setup and training provided",
    ],
    idealFor: [
      "ICU and step-down unit ventilation",
      "Neuromuscular disease (ALS, muscular dystrophy)",
      "Chronic respiratory failure",
      "Post-operative respiratory support",
    ],
  },
  {
    id: "breathing-circuits",
    title: "Breathing Circuits",
    fullName: "Ventilator & Anaesthesia Breathing Circuits",
    tagline: "Sterile, single-use circuits for every clinical application",
    img: "/images/services/breathing-circuits.jpg",
    description:
      "Breathing circuits are the interface between a patient and a ventilator or anaesthesia machine. We supply a wide range of single-use, sterile breathing circuits including corrugated adult and paediatric circuits, coaxial circuits, T-pieces, and Y-pieces — designed to minimise resistance, prevent rebreathing, and maintain sterility throughout use.",
    features: [
      "Single-use, sterile, individually packaged",
      "Corrugated and smooth-bore variants",
      "Adult, paediatric, and neonatal sizes",
      "Suitable for anaesthesia and ICU ventilators",
      "Latex-free materials",
      "Available with integrated water traps and filters",
    ],
    idealFor: [
      "Surgical anaesthesia procedures",
      "ICU mechanical ventilation",
      "Transport and emergency ventilation",
      "Home ventilator circuits",
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <MotionReveal>
              <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-4">Medical Device Supplier · Maharashtra</p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Products & Services</h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Sleep Solutions India supplies medical-grade respiratory and sleep therapy devices to homes and hospitals across Maharashtra. Each product is sourced from certified manufacturers and comes with full setup support.
              </p>
              <div className="flex flex-wrap gap-3">
                {products.map(p => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="text-sm font-medium bg-primary-foreground/10 hover:bg-secondary hover:text-primary border border-primary-foreground/20 rounded-full px-4 py-1.5 transition-colors"
                  >
                    {p.title}
                  </a>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="divide-y divide-border">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={product.id}
              id={product.id}
              className="py-20 md:py-28 scroll-mt-24"
            >
              <div className="container mx-auto px-4 md:px-6">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:flex lg:flex-row-reverse" : ""}`}>

                  {/* Image */}
                  <MotionReveal delay={0.1} direction={isEven ? "right" : "left"}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-muted group">
                      <img
                        src={product.img}
                        alt={product.fullName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-6">
                        <span className="text-white/80 text-xs uppercase tracking-widest font-medium">Sleep Solutions India</span>
                        <p className="text-white font-serif font-bold text-xl mt-0.5">{product.title}</p>
                      </div>
                    </div>
                  </MotionReveal>

                  {/* Content */}
                  <MotionReveal delay={0.2} direction={isEven ? "left" : "right"}>
                    <div>
                      <p className="text-secondary font-semibold uppercase tracking-wider text-xs mb-3">{product.fullName}</p>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">{product.title}</h2>
                      <p className="text-muted-foreground font-medium text-lg mb-5 italic">{product.tagline}</p>
                      <p className="text-foreground/80 leading-relaxed mb-8">
                        {product.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-8 mb-10">
                        {/* Features */}
                        <div>
                          <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-4 h-0.5 bg-primary inline-block" /> Key Features
                          </h3>
                          <ul className="space-y-2.5">
                            {product.features.map((f, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Ideal For */}
                        <div>
                          <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span className="w-4 h-0.5 bg-secondary inline-block" /> Ideal For
                          </h3>
                          <ul className="space-y-2.5">
                            {product.idealFor.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <ArrowRight size={15} className="text-secondary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button size="lg" className="rounded-full" asChild>
                        <Link href="/contact">
                          <Phone size={16} className="mr-2" /> Enquire About {product.title}
                        </Link>
                      </Button>
                    </div>
                  </MotionReveal>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-64 h-64 bg-secondary rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-white rounded-full mix-blend-screen filter blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-3xl">
          <MotionReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Need a Device for Home or Hospital?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              We supply and set up all our devices at your location, anywhere in Maharashtra. Contact us and our team will recommend the right equipment for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-white transition-colors" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <a href="https://wa.me/917276850801" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
