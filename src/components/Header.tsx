import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const services = [
  { name: "Tree Removal", href: "/tree-removal-surrey" },
  { name: "Emergency Tree Service", href: "/emergency-tree-service" },
  { name: "Arborist Services", href: "/arborist-surrey" },
  { name: "Tree Pruning & Trimming", href: "/tree-pruning-surrey" },
  { name: "Hedge Trimming", href: "/hedge-trimming-surrey" },
  { name: "Lot & Brush Clearing", href: "/lot-clearing-surrey" },
];

const areas = [
  { name: "Surrey", href: "/tree-service-surrey" },
  { name: "White Rock", href: "/tree-service-white-rock" },
  { name: "Delta", href: "/tree-service-delta" },
  { name: "Langley", href: "/tree-service-langley" },
  { name: "Coquitlam", href: "/tree-service-coquitlam" },
  { name: "Port Coquitlam", href: "/tree-service-port-coquitlam" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      {/* Always-visible call/text bar */}
      <a
        href="tel:604-968-9997"
        className="flex w-full items-center justify-center gap-2 bg-gradient-primary py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <Phone className="h-4 w-4" />
        <span>
          Call or text for a free quote: <span className="font-semibold">604-968-9997</span>
        </span>
        <span className="hidden sm:inline text-primary-foreground/80">• Licensed &amp; insured</span>
      </a>

      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="/integra-logo.png"
            alt="Integra Tree Service — certified arborists in Surrey, BC"
            className="h-10 md:h-11 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary group-hover:text-primary"
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-[480px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="grid grid-cols-2 gap-6 rounded-2xl border bg-background p-6 shadow-card">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Services
                  </p>
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Areas we serve
                  </p>
                  {areas.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
          >
            About Us
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          <Button size="sm" className="shadow-button" asChild>
            <a href="tel:604-968-9997">
              <Phone className="h-4 w-4" />
              <span>604-968-9997</span>
            </a>
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-button" asChild>
            <Link to="/quote">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            <nav className="space-y-3">
              <Link
                to="/"
                className={`block text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </nav>

            <div className="border-t pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </p>
              <div className="grid grid-cols-2 gap-x-4">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Areas we serve
              </p>
              <div className="grid grid-cols-2 gap-x-4">
                {areas.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2 border-t pt-4">
              <Button size="sm" className="flex items-center justify-center shadow-button" asChild>
                <a href="tel:604-968-9997">
                  <Phone className="h-4 w-4" />
                  <span>604-968-9997</span>
                </a>
              </Button>
              <Button size="sm" className="bg-gradient-primary hover:opacity-90 shadow-button" asChild>
                <Link to="/quote" onClick={closeMenu}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
