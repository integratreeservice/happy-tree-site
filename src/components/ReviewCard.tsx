import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ name, location, rating, review }: ReviewCardProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <blockquote className="text-sm leading-relaxed text-foreground">
          "{review}"
        </blockquote>
        <div className="text-sm">
          <div className="font-medium text-foreground">{name}</div>
          <div className="text-muted-foreground">{location}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;