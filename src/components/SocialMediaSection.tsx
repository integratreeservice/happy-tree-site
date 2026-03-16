import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialMediaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialPlatforms = [
    {
      name: "Instagram",
      iconImage: "/lovable-uploads/9b4f296b-1781-4c06-9e5e-5884795b1a7b.png",
      image: "/lovable-uploads/45100167-6036-4daa-ad38-e7003f0e5932.png",
      handle: "@integratreeservices",
      description: "Behind-the-scenes moments and stunning before/after shots",
      link: "https://www.instagram.com/integratree/",
      delay: "0ms"
    },
    {
      name: "Facebook",
      iconImage: "/lovable-uploads/3a2a9b36-96f1-42f9-8158-845c5e97d921.png",
      image: "/lovable-uploads/7eed26ba-b7ff-4e4f-8135-7793450bc323.png",
      handle: "Integra Tree Services",
      description: "Customer stories, tips, and community updates",
      link: "https://www.facebook.com/p/Integra-Tree-Service-61579387899613/",
      delay: "150ms"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-section-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Follow Our Tree Care Journey
          </h2>
          <p className="text-lg text-muted-foreground">
            See our work in action and get expert tips for your property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => {
            return (
              <div
                key={platform.name}
                className={`transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isVisible ? platform.delay : '0ms' 
                }}
              >
                <Card className="group hover:shadow-card transition-all duration-300 bg-background border-border overflow-hidden">
                  <div className="relative">
                    {/* Social Media Icon Overlay */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img 
                          src={platform.iconImage} 
                          alt={`${platform.name} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={platform.image}
                        alt={`${platform.name} content from Integra Tree Services`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="text-center space-y-2">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {platform.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {platform.handle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      onClick={() => window.open(platform.link, '_blank')}
                    >
                      Follow Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Tag us in your tree transformations!
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">#IntegraTrees</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">#TreeCareExperts</span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">#LowerMainlandTrees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;