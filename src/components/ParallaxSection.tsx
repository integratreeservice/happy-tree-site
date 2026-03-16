import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const parallaxBg = "/lovable-uploads/029f8aac-e91a-44b3-af62-2b6df1edee22.png";
const ParallaxSection = () => {
  return <section className="relative h-[50vh] overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-cover bg-no-repeat" style={{
      backgroundImage: `url("${parallaxBg}")`,
      backgroundPosition: 'center 10%',
      backgroundSize: 'cover'
    }} />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img src="/lovable-uploads/07200f5d-757d-4f85-8683-68ba4c9727e2.png" alt="Integra Tree Services Logo" className="h-20 w-auto object-contain" />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                Professional tree service you can depend on.
              </h2>
              <p className="text-lg md:text-xl text-white/95 drop-shadow-md max-w-2xl mx-auto">
                Certified arborists. Safe tree removal. Quality workmanship. Fair pricing.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-6">
              <Link to="/quote">
                <Button size="lg" className="bg-white/95 text-primary hover:bg-white border-0 shadow-lg text-base font-medium px-8 py-3 rounded-md uppercase tracking-wide">Get Free Estimate</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ParallaxSection;