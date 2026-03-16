import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
  timeline: string;
}

const ProcessStep = ({ step, title, description, icon, timeline }: ProcessStepProps) => {
  return (
    <Card className="relative group hover:shadow-card transition-all duration-300">
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
        {step}
      </div>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-primary group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-primary font-medium">{timeline}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProcessStep;