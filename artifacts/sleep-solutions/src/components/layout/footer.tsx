import { Link } from "wouter";
import { Moon, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-primary-foreground text-primary p-2 rounded-full">
                <Moon size={24} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-primary-foreground">Sleep Solutions</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-foreground/70 font-medium">India</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed">
              Restoring Lives Through Better Sleep. A premium sleep medicine clinic bridging modern science with compassionate, patient-first care.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href="/conditions" className="hover:text-secondary transition-colors">Conditions Treated</Link></li>
              <li><Link href="/doctors" className="hover:text-secondary transition-colors">Our Doctors</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-secondary mt-0.5" />
                <span>
                  124 Wellness Avenue, Safdarjung Enclave<br />
                  New Delhi, 110029<br />
                  (Branch in Mumbai)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-secondary" />
                <span>+91-11-4567-8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-secondary" />
                <span>info@sleepsolutionsindia.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Clinic Hours</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock size={16} /> Mon - Fri</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock size={16} /> Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2"><Clock size={16} /> Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Sleep Solutions India. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
