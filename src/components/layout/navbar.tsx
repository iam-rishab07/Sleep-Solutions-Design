import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/conditions", label: "Conditions" },
  { href: "/doctors", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-2"
          : "bg-white/10 backdrop-blur-sm py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group" data-testid="nav-logo">
            <div className={cn(
              "rounded-lg px-2 py-1 transition-all duration-300",
              isScrolled ? "bg-white" : "bg-white/90"
            )}>
              <img
                src="/images/logo.png"
                alt="Sleep Solutions India"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isScrolled
                        ? (location === link.href ? "text-primary" : "text-muted-foreground")
                        : (location === link.href ? "text-white" : "text-white/80")
                    )}
                    data-testid={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className={cn(
                "rounded-full font-medium transition-colors",
                isScrolled
                  ? ""
                  : "bg-white text-primary hover:bg-white/90"
              )}
              data-testid="nav-contact-btn"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block text-lg font-medium py-2 transition-colors",
                      location === link.href ? "text-primary" : "text-foreground/70"
                    )}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full rounded-full" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
