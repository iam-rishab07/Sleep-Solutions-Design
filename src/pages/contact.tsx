To implement the WhatsApp redirect perfectly without changing your UI or layout structure, we need to extract the information directly from your components.

The standard inputs are easy to read using names, but shadcn's custom `<Select>` component doesn't use a standard hidden `<input>` under the hood. To capture the selected device value seamlessly, we will add a local state variable `const [selectedService, setSelectedService] = useState("");` and hook it up to the `<Select value={selectedService} onValueChange={setSelectedService}>` wrapper.

Here is your updated `Contact` component file with the logic added directly into your `handleSubmit`:

```tsx
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
  // Track the custom Select component value safely
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    // Extracting standard input values using their name attributes
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const email = formData.get("email") || "Not Provided";
    const phone = formData.get("phone") || "";
    const city = formData.get("city") || "";
    const message = formData.get("message") || "None Provided";

    // Mapping keys to readable text strings for the client's business clarity
    const serviceLabels: Record<string, string> = {
      level2: "Level 2 Sleep Test Device",
      level3: "Level 3 Sleep Apnea Test",
      cpap: "CPAP Machine",
      bipap: "BIPAP Machine",
      "bipap-ventilator": "BIPAP Ventilator",
      oxygen: "Oxygen Concentrator",
      other: "Other / General Enquiry",
    };
    const readableService = serviceLabels[selectedService] || "Not Specified";

    // Format the text using WhatsApp bold tags (*) and URI linebreaks (%0A)
    const businessNumber = "917276850801";
    const textMessage = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Device/Service:* ${readableService}%0A` +
      `*City:* ${city}%0A%0A` +
      `*Message:* ${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessNumber}&text=${textMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);

      // Open WhatsApp setup
      window.open(whatsappUrl, "_blank");

      toast({
        title: "Redirecting to WhatsApp...",
        description: "Please send the pre-filled text to submit your inquiry.",
      });

      // Clear the inputs and reset state
      target.reset();
      setSelectedService("");
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <MotionReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Reach out to Sleep Solutions India for sleep test devices, CPAP, BIPAP, Ventilators, or Oxygen Concentrators — delivered to your home or hospital anywhere in Maharashtra.
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
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Details</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We supply sleep devices and provide support across all of Maharashtra. Contact us any time.
                  </p>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Shop No. 17, Legend Prestige,<br />
                        Bhagwan Tatyasaheb Kawade Rd,<br />
                        Behind Croma Center, Behind Bus Stop,<br />
                        Bhaskar Colony, Swami Vivekanand Nagar,<br />
                        Lakshmi Nagar, Wanowrie,<br />
                        Pune, Maharashtra 411040, India.
                      </p>
                      <a
                        href="https://maps.google.com/?q=Shop+No.17,+Legend+Prestige,+Bhagwan+Tatyasaheb+Kawade+Rd,+Wanowrie,+Pune,+Maharashtra+411040"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-secondary hover:underline mt-2 inline-block"
                        data-testid="link-get-directions"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Call Us</h3>
                      <a href="tel:+917276850801" className="block text-muted-foreground hover:text-primary transition-colors mb-1" data-testid="link-phone-1">+91 7276850801</a>
                      <a href="tel:+919503842008" className="block text-muted-foreground hover:text-primary transition-colors" data-testid="link-phone-2">+91 9503842008</a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <a href="mailto:info@sleepsolutionsindia.com" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-email">
                        info@sleepsolutionsindia.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/5 p-3 rounded-full h-fit shrink-0 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Working Hours</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li className="flex justify-between w-56"><span>Mon - Sat:</span> <span>9:00 AM - 7:00 PM</span></li>
                        <li className="flex justify-between w-56 text-muted-foreground/60"><span>Sunday:</span> <span>By Appointment</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2">
              <MotionReveal delay={0.2} className="bg-white border border-border shadow-lg rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required placeholder="Ramesh" className="bg-muted/50" data-testid="input-first-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required placeholder="Patil" className="bg-muted/50" data-testid="input-last-name" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="ramesh@example.com" className="bg-muted/50" data-testid="input-email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210" className="bg-muted/50" data-testid="input-phone" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Device / Service Required</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="service" className="bg-muted/50" data-testid="select-service">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="level2">Level 2 Sleep Test Device</SelectItem>
                        <SelectItem value="level3">Level 3 Sleep Apnea Test</SelectItem>
                        <SelectItem value="cpap">CPAP Machine</SelectItem>
                        <SelectItem value="bipap">BIPAP Machine</SelectItem>
                        <SelectItem value="bipap-ventilator">BIPAP Ventilator</SelectItem>
                        <SelectItem value="oxygen">Oxygen Concentrator</SelectItem>
                        <SelectItem value="other">Other / General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Your City</Label>
                    <Input id="city" name="city" placeholder="e.g. Pune, Nashik, Nagpur..." className="bg-muted/50" data-testid="input-city" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you need or any questions you have..."
                      className="min-h-[100px] bg-muted/50"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 text-base rounded-full"
                    disabled={isSubmitting}
                    data-testid="button-contact-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <><Send className="mr-2" size={18} /> Send Message</>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is kept strictly confidential.
                  </p>
                </form>
              </MotionReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative border-y border-border">
        <iframe
          title="Sleep Solutions India Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.7635!2d73.8939!3d18.4985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzU0LjYiTiA3M8KwNTMnMzguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

```
