import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Conditions() {
  const conditions = [
    {
      id: "insomnia",
      name: "Insomnia",
      prevalence: "Very Common",
      symptoms: ["Difficulty falling asleep", "Waking up frequently", "Waking up too early", "Daytime fatigue and irritability", "Anxiety about sleep"],
      description: "Insomnia is characterized by an ongoing inability to get enough quality sleep, despite having the opportunity to do so. It can be acute (short-term) or chronic (lasting months or years) and severely impacts quality of life.",
      treatment: "Cognitive Behavioral Therapy for Insomnia (CBT-I), sleep hygiene optimization, and in some cases, carefully managed temporary medication."
    },
    {
      id: "osa",
      name: "Obstructive Sleep Apnea (OSA)",
      prevalence: "Common",
      symptoms: ["Loud, chronic snoring", "Gasping or choking during sleep", "Witnessed breathing pauses", "Morning headaches", "Severe daytime sleepiness"],
      description: "A potentially serious disorder where breathing repeatedly stops and starts during sleep because throat muscles intermittently relax and block the airway, causing blood oxygen levels to drop.",
      treatment: "CPAP therapy, oral appliances, positional therapy, or in specific cases, surgical intervention."
    },
    {
      id: "rls",
      name: "Restless Legs Syndrome (RLS)",
      prevalence: "Common",
      symptoms: ["Overwhelming urge to move legs", "Crawling, tingling, or pulling sensations", "Symptoms worsen in evening/night", "Relief upon movement"],
      description: "A neurological disorder characterized by a throbbing, pulling, creeping, or other unpleasant sensation in the legs and an uncontrollable, and sometimes overwhelming, urge to move them.",
      treatment: "Iron supplementation (if deficient), specialized medications, lifestyle adjustments, and identifying trigger factors."
    },
    {
      id: "narcolepsy",
      name: "Narcolepsy",
      prevalence: "Rare",
      symptoms: ["Excessive daytime sleepiness", "Sudden loss of muscle tone (cataplexy)", "Sleep paralysis", "Hallucinations when falling asleep"],
      description: "A chronic neurological disorder that affects the brain's ability to control sleep-wake cycles. People with narcolepsy may feel rested after waking, but then feel very sleepy throughout much of the day.",
      treatment: "Wake-promoting medications, strategically scheduled short naps, and specialized therapies for cataplexy."
    },
    {
      id: "rem-behavior",
      name: "REM Sleep Behavior Disorder",
      prevalence: "Uncommon",
      symptoms: ["Physically acting out dreams", "Vocalizing, shouting, or swearing during sleep", "Kicking, punching, or thrashing"],
      description: "A parasomnia where the normal muscle paralysis that occurs during REM (dreaming) sleep is absent, causing patients to physically act out vivid, often unpleasant dreams.",
      treatment: "Environmental safety modifications, specific medications to suppress symptoms, and ongoing neurological monitoring."
    },
    {
      id: "shift-work",
      name: "Shift Work Sleep Disorder",
      prevalence: "Common (in shift workers)",
      symptoms: ["Insomnia when trying to sleep", "Excessive sleepiness during waking hours", "Difficulty concentrating", "Lack of energy"],
      description: "A circadian rhythm disorder occurring in people who work non-traditional hours. The body's internal clock remains misaligned with the required work schedule.",
      treatment: "Strategic light exposure therapy, optimized sleep scheduling, melatonin supplements, and wake-promoting agents."
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <MotionReveal>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Conditions We Treat</h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Sleep disorders are complex medical conditions that require specialized attention. We diagnose and treat the complete spectrum of sleep-related issues.
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
              <MotionReveal key={condition.id} delay={index * 0.1}>
                <div className="bg-white border border-border rounded-3xl p-8 md:p-10 h-full flex flex-col hover:border-primary/30 transition-colors shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{condition.name}</h2>
                    <span className="text-xs font-medium uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 rounded-full whitespace-nowrap">
                      {condition.prevalence}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {condition.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8 mb-8 flex-1">
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
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary/10 pb-2">Our Approach</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {condition.treatment}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 mt-auto border-t border-border">
                    <Button variant="ghost" className="w-full justify-between hover:bg-primary hover:text-primary-foreground" asChild>
                      <Link href="/contact">
                        Consult about this condition <span className="text-lg">→</span>
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
            <h2 className="text-3xl font-serif font-bold mb-4">Don't see your symptoms listed?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              There are over 80 classified sleep disorders. If you're experiencing unrestful sleep, chronic fatigue, or unusual nighttime behaviors, our specialists can help pinpoint the cause.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Schedule an Evaluation</Link>
            </Button>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
