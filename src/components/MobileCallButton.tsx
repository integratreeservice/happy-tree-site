import { Phone } from "lucide-react";
import { Button } from "./ui/button";

export const MobileCallButton = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background to-transparent pointer-events-none">
      <Button
        asChild
        size="lg"
        className="w-full pointer-events-auto shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6"
      >
        <a href="tel:+16049689997" className="flex items-center justify-center gap-3">
          <Phone className="h-6 w-6" />
          <span>Call Now: 604-968-9997</span>
        </a>
      </Button>
    </div>
  );
};
