import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="bg-white rounded-xl px-3 py-2 inline-block group-hover:shadow-md transition-shadow">
                <img
                  src="/images/logo.png"
                  alt="Sleep Solutions India"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm mt-4 leading-relaxed">
              Trusted provider of Level 2 & Level 3 sleep test devices, CPAP, BIPAP, BIPAP Ventilators, and Oxygen Concentrators — serving homes and hospitals across Maharashtra.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Devices & Services</Link></li>
              <li><Link href="/conditions" className="hover:text-secondary transition-colors">Conditions We Help</Link></li>
              <li><Link href="/doctors" className="hover:text-secondary transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-secondary mt-0.5" />
                <span>
                  Prime Arcade,<br />
                  1154, Saifee St,<br />
                  Camp, Pune 411001,<br />
                  Maharashtra, India 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-secondary" />
                <div>
                  <a href="tel:+917276850801" className="block hover:text-secondary transition-colors">+91 7276850801</a>
                  <a href="tel:+919503842008" className="block hover:text-secondary transition-colors">+91 9503842008</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-secondary" />
                <a href="mailto:info@sleepsolutionsindia.com" className="hover:text-secondary transition-colors">info@sleepsolutionsindia.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Working Hours</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2"><Clock size={16} /> Mon - Sat</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex items-center justify-between text-secondary">
                <span className="flex items-center gap-2"><Clock size={16} /> Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60 mb-2">We supply all over Maharashtra including:</p>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">Pune · Nashik · Nagpur · Kolhapur · Satara · Sangali · Solapur · Ratnagiri · Baramati · Ahmednagar · Goa</p>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Sleep Solutions India. All rights reserved.</p>
          <p>Director: Ritesh S. Mane</p>
        </div>
      </div>
    </footer>
  );
}
