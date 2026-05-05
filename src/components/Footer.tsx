import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Tree Resources", href: "/resources" },
    { name: "Get a Quote", href: "/quote" },
  ];

  const serviceAreas = [
    "Vancouver", "Burnaby", "Richmond", "Surrey", "Delta", "Langley",
    "Coquitlam", "Port Coquitlam", "North Vancouver", "West Vancouver"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/07200f5d-757d-4f85-8683-68ba4c9727e2.png" 
              alt="Integra Tree Services" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-primary-foreground/80 text-sm">
              Integrity in every cut. Professional tree care services that feel like home.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:604-968-9997" className="hover:text-primary-foreground/60 transition-colors">604-968-9997</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:integratreeservice@gmail.com" className="hover:text-primary-foreground/60 transition-colors">integratreeservice@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lower Mainland, BC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>7 days/week: 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Service Areas</h3>
            <div className="grid grid-cols-2 gap-1 text-sm text-primary-foreground/80">
              {serviceAreas.map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Integra Tree Services. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="mt-4 text-xs text-primary-foreground/60 text-center space-y-1">
          <div>Licensed & Insured • ISA-Certified Arborists • WCB Coverage</div>
          <div className="space-x-4">
            <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons" className="hover:text-primary-foreground/80 transition-colors">Instagram icons created by Freepik - Flaticon</a>
            <span>•</span>
            <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons" className="hover:text-primary-foreground/80 transition-colors">Facebook icons created by Pixel perfect - Flaticon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;