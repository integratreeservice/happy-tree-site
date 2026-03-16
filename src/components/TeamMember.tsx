import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  certifications: string[];
  experience: string;
}

const TeamMember = ({ name, role, image, certifications, experience }: TeamMemberProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300">
      <CardContent className="p-6 text-center space-y-4">
        <div className="relative">
          <img
            src={image}
            alt={`${name} - ${role}`}
            className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/10 group-hover:border-primary/30 transition-colors"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium">{role}</p>
          <p className="text-xs text-muted-foreground mt-1">{experience}</p>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-foreground">Certifications</h4>
          <div className="flex flex-wrap gap-1 justify-center">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;