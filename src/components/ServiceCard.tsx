import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  showLearnMore?: boolean;
}

const ServiceCard = ({ title, description, icon, href, showLearnMore = true }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 bg-card border-border">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground transition-all duration-300 [&_img]:brightness-0 [&_img]:invert">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-serif font-semibold text-lg text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        {showLearnMore && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary hover:text-primary group-hover:translate-x-1 transition-transform duration-200 p-0 h-auto font-medium"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;