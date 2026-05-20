import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Conditions() {
  const conditions = [
    {
      id: "sleep-apnea",
      name: "Obstructive Sleep Apnea (OSA)",
      prevalence: "Very Common",
      symptoms: [
        "Loud, chronic snoring",
        "Gasping or choking during sleep",
        "Witnessed breathing pauses",
        "Morning headaches",
        "Severe daytime sleepiness",
      ],
      description:
        "A serious disorder where the airway repeatedly collapses during sleep, causing breathing to stop and start. Blood oxygen levels drop, straining the heart and leaving patients exhausted despite a full night in bed.",
      device: "CPAP or BIPAP machine",
      deviceNote:
        "A CPAP or BIPAP device keeps the airway open throughout the night — no surgery, no medication. We supply, deliver, and set up the right machine for your home or hospital.",
    },
    {
      id: "snoring",
      name: "Snoring",
      prevalence: "Very Common",
      symptoms: [
        "Loud snoring disturbing partner",
        "Dry mouth or sore throat on waking",
        "Restless sleep",
        "Daytime fatigue",
      ],
      description:
        "Snoring occurs when airflow causes tissues in the throat to vibrate. While often dismissed, chronic snoring can be a sign of underlying sleep apnea and should be properly assessed.",
      device: "Level 3 Sleep Apnea Test + CPAP",
      deviceNote:
        "A Level 3 home sleep test first confirms whether sleep apnea is present. If diagnosed, a CPAP device resolves both snoring and the underlying breathing issue — without surgery.",
    },
    {
      id: "hypoxemia",
      name: "Nocturnal Hypoxemia",
      prevalence: "Common",
      symptoms: [
        "Low blood oxygen during sleep",
        "Frequent nighttime awakenings",
        "Morning headaches",
        "Confusion or poor concentration",
        "Bluish tinge to lips or fingertips",
      ],
      description:
        "Nocturnal hypoxemia is a drop in blood oxygen levels during sleep, often caused by sleep apnea, COPD, or other respiratory conditions. Left untreated it strains the heart and brain.",
      device: "Oxygen Concentrator",
      deviceNote:
        "An oxygen concentrator delivers a continuous supply of purified oxygen through the night. We supply medical-grade stationary and portable concentrators for home and hospital use.",
    },
    {
      id: "copd-breathing",
      name: "COPD & Respiratory Insufficiency",
      prevalence: "Common",
      symptoms: [
        "Chronic shortness of breath",
        "Difficulty breathing when lying flat",
        "Poor sleep quality",
        "Frequent use of rescue inhalers",
        "Fatigue and reduced exercise tolerance",
      ],
      description:
        "Chronic Obstructive Pulmonary Disease (COPD) and related respiratory conditions impair breathing during sleep, causing hypoxia and sleep fragmentation that compounds daytime symptoms.",
      device: "BIPAP or Oxygen Concentrator",
      deviceNote:
        "BIPAP machines support breathing with two pressure levels — easier for COPD patients who find CPAP uncomfortable. Paired with an oxygen concentrator when needed. We supply both for home and clinical use.",
    },
    {
      id: "respiratory-failure",
      name: "Respiratory Failure & Ventilatory Support",
      prevalence: "Serious",
      symptoms: [
        "Severe shortness of breath at rest",
        "Inability to breathe without assistance",
        "Neuromuscular weakness affecting breathing",
        "Chronic hypoventilation",
      ],
      description:
        "Patients with neuromuscular conditions (ALS, muscular dystrophy), severe COPD, or post-surgical respiratory compromise may need mechanical ventilatory support at home or in hospital.",
      device: "BIPAP Ventilator",
      deviceNote:
        "We supply advanced BIPAP ventilator machines for life-sustaining respiratory support. Available for home setup and hospital supply across Maharashtra, with full technical setup assistance.",
    },
    {
      id: "complex-sleep-apnea",
      name: "Complex / Central Sleep Apnea",
      prevalence: "Less Common",
      symptoms: [
        "Breathing pauses not caused by airway blockage",
        "Cheyne-Stokes breathing pattern",
        "Associated with heart failure or stroke",
        "CPAP therapy not providing relief",
      ],
      description:
        "Central sleep apnea occurs when the brain fails to send proper signals to breathing muscles. It often coexists with obstructive apnea (mixed apnea) and requires a different device approach than standard OSA.",
      device: "BIPAP / Adaptive Servo-Ventilation",
      deviceNote:
        "BIPAP and adaptive devices address both the obstructive and central components. Our Level 2 home sleep test can capture the full overnight breathing profile needed for an accurate diagnosis.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <MotionReveal>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Conditions We Help</h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Sleep Solutions India supplies the right device for every sleep-related breathing condition — from diagnosis at home to ongoing therapy, without hospitalization.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <MotionReveal key={condition.id} delay={index * 0.08}>
                <div className="bg-white border border-border rounded-3xl p-8 md:p-10 h-full flex flex-col hover:border-primary/30 transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground pr-4">{condition.name}</h2>
                    <span className="text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                      {condition.prevalence}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {condition.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6 flex-1">
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4 border-b pb-2">Common Symptoms</h3>
                      <ul className="space-y-2">
                        {condition.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-secondary font-bold mt-0.5">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary/10 pb-2">Device Solution</h3>
                      <p className="text-sm font-semibold text-primary mb-2">{condition.device}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {condition.deviceNote}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto border-t border-border">
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary hover:text-primary-foreground" asChild>
                      <Link href="/contact">
                        Enquire about this condition <span className="text-lg">→</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MotionReveal>
            <h2 className="text-3xl font-serif font-bold mb-4">Not sure which device you need?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team will guide you to the right sleep test or therapy device based on your condition. We serve all of Maharashtra — at your home or hospital, with full setup support.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
