import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "About Us",
    href: "/about"
  }, {
    name: "Get a Quote",
    href: "/quote"
  }];
  const isActive = (href: string) => location.pathname === href;
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/92ba23b6-a289-4264-ae60-f2985fa8e08c.png" alt="Integra Tree Services Logo" className="h-8 w-auto" />
          
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`}>
              {item.name}
            </Link>)}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center space-x-2" asChild>
            <a href="tel:604-968-9997">
              <Phone className="h-4 w-4" />
              <span>604-968-9997</span>
            </a>
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-button" asChild>
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <nav className="space-y-3">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block text-sm font-medium transition-colors hover:text-primary ${isActive(item.href) ? "text-primary" : "text-muted-foreground"}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>)}
            </nav>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm" className="flex items-center justify-center space-x-2" asChild>
                <a href="tel:604-968-9997">
                  <Phone className="h-4 w-4" />
                  <span>604-968-9997</span>
                </a>
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90 shadow-button" asChild>
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;