import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted Successfully",
        description: "Our team will contact you shortly to confirm your appointment.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MotionReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Take the first step toward restorative sleep. Reach out to schedule a consultation or ask any questions about our services.
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <MotionReveal>
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Clinic Information</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We operate two state-of-the-art facilities designed specifically for sleep medicine.
                  </p>
                </div>

                <div className="space-y-10">
                  {/* Delhi Clinic */}
                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">New Delhi (Flagship)</h3>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        124 Wellness Avenue, Safdarjung Enclave<br />
                        New Delhi, 110029, India
                      </p>
                      <a href="#" className="text-sm font-medium text-secondary hover:underline">Get Directions</a>
                    </div>
                  </div>

                  {/* Contact Methods */}
                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-1">Appointments: +91-11-4567-8900</p>
                      <p className="text-muted-foreground">Sleep Lab Direct: +91-11-4567-8901</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground mb-1">General Inquiries: info@sleepsolutionsindia.com</p>
                      <p className="text-muted-foreground">Patient Records: records@sleepsolutionsindia.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
                        <li className="flex justify-between w-48"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                        <li className="flex justify-between w-48 text-muted-foreground/60"><span>Sunday:</span> <span>Closed</span></li>
                      </ul>
                      <p className="text-xs text-muted-foreground/80 mt-2 italic">*Sleep studies are conducted overnight, 7 days a week.</p>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <MotionReveal delay={0.2} className="bg-white border border-border shadow-lg rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold mb-6">Request an Appointment</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required placeholder="John" className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required placeholder="Doe" className="bg-muted/50" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required placeholder="+91 98765 43210" className="bg-muted/50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Primary Concern / Service Required</Label>
                    <Select required>
                      <SelectTrigger id="service" className="bg-muted/50">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="insomnia">Chronic Insomnia</SelectItem>
                        <SelectItem value="snoring">Snoring / Sleep Apnea</SelectItem>
                        <SelectItem value="fatigue">Excessive Daytime Fatigue</SelectItem>
                        <SelectItem value="study">Requesting a Sleep Study</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Briefly describe what you're experiencing..." 
                      className="min-h-[120px] bg-muted/50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base rounded-full" 
                    disabled={isSubmitting}
                    data-testid="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      "Sending Request..."
                    ) : (
                      <>
                        <Send className="mr-2" size={18} /> Send Request
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is securely encrypted and kept strictly confidential.
                  </p>
                </form>
              </MotionReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative border-y border-border">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground/60">
          <MapPin size={48} className="mb-4 text-muted-foreground/40" />
          <p className="font-medium text-lg">Interactive Map View</p>
          <p className="text-sm">Safdarjung Enclave, New Delhi</p>
        </div>
      </section>
    </div>
  );
}
