import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { trackLead } from "@/lib/trackLead";

// Validation schema
const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  service: z.string().min(1, "Please select a service"),
  phone: z.string().trim().regex(/^[\d\s()+-]+$/, "Please enter a valid phone number").min(10, "Phone number is too short").max(20, "Phone number is too long"),
  details: z.string().trim().max(1000, "Please keep details under 1000 characters").optional(),
  honeypot: z.string().max(0, "Invalid submission"),
});

// Rate limiting
const RATE_LIMIT_KEY = "quote_submissions";
const MAX_SUBMISSIONS = 5;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hour

const checkRateLimit = (): { allowed: boolean; remainingTime?: number } => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();

  if (!stored) return { allowed: true };

  const submissions = JSON.parse(stored) as number[];
  const recentSubmissions = submissions.filter(time => now - time < TIME_WINDOW);

  if (recentSubmissions.length >= MAX_SUBMISSIONS) {
    const oldestSubmission = Math.min(...recentSubmissions);
    const remainingTime = TIME_WINDOW - (now - oldestSubmission);
    return { allowed: false, remainingTime };
  }

  return { allowed: true };
};

const recordSubmission = () => {
  const stored = localStorage.getItem(RATE_LIMIT_KEY);
  const now = Date.now();
  const submissions = stored ? JSON.parse(stored) : [];
  const recentSubmissions = submissions.filter((time: number) => now - time < TIME_WINDOW);
  recentSubmissions.push(now);
  localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
};

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    phone: "",
    details: "",
    honeypot: "",
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Tree Removal",
    "Pruning & Shaping",
    "Hedge Trimming",
    "Emergency/Storm Cleanup",
    "Health & Risk Assessment",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit
    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      const minutes = Math.ceil(rateLimitCheck.remainingTime! / 60000);
      toast({
        title: "Too Many Submissions",
        description: `Please try again in ${minutes} minute${minutes > 1 ? "s" : ""}. This helps us prevent spam.`,
        variant: "destructive",
      });
      return;
    }

    // Validate form data
    setValidationErrors({});
    const validationResult = quoteSchema.safeParse(formData);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });

      setValidationErrors(errors);
      toast({
        title: "Please Fix Errors",
        description: "Some fields have errors. Please check the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdawpngq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          service: formData.service,
          phone: formData.phone,
          details: formData.details,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      // Fire Google Ads conversion + GA4 lead event ONLY on a real successful submit
      trackLead({ service: formData.service, city: "", source: "contact_page" });

      recordSubmission();
      setIsSubmitted(true);

      toast({
        title: "Quote Request Submitted",
        description: "We'll contact you within the same business day!",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your quote. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle className="h-16 w-16 text-success" />
          </div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Thank you for your request!
            </h3>
            <p className="text-muted-foreground">
              We'll call or text you back within the same business day to discuss your project and schedule a site visit.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm font-medium text-foreground">
              Need us sooner? Call or text: <a href="tel:604-968-9997" className="text-primary font-semibold hover:underline">604-968-9997</a>
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-center">
          Get Your Free Quote
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Takes 30 seconds — we'll call or text you back the same business day.
        </p>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users, catches bots */}
          <input
            type="text"
            name="website"
            value={formData.honeypot}
            onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))}
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              {validationErrors.name && (
                <p className="text-sm text-destructive">{validationErrors.name}</p>
              )}
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, name: e.target.value }));
                  if (validationErrors.name) {
                    setValidationErrors(prev => ({ ...prev, name: "" }));
                  }
                }}
                placeholder="Your name"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              {validationErrors.phone && (
                <p className="text-sm text-destructive">{validationErrors.phone}</p>
              )}
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, phone: e.target.value }));
                  if (validationErrors.phone) {
                    setValidationErrors(prev => ({ ...prev, phone: "" }));
                  }
                }}
                placeholder="(604) 555-1234"
                required
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <Label>Service Needed *</Label>
              {validationErrors.service && (
                <p className="text-sm text-destructive">{validationErrors.service}</p>
              )}
              <Select
                value={formData.service}
                onValueChange={(value) => {
                  setFormData(prev => ({ ...prev, service: value }));
                  if (validationErrors.service) {
                    setValidationErrors(prev => ({ ...prev, service: "" }));
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Details (optional) */}
            <div className="space-y-2">
              <Label htmlFor="details">
                Project Details <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              {validationErrors.details && (
                <p className="text-sm text-destructive">{validationErrors.details}</p>
              )}
              <textarea
                id="details"
                value={formData.details}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, details: e.target.value }));
                  if (validationErrors.details) {
                    setValidationErrors(prev => ({ ...prev, details: "" }));
                  }
                }}
                placeholder="Tell us a bit about the job — e.g. one large maple to remove, leaning over the garage."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 shadow-button text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get My Free Quote"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Prefer to talk? Call or text{" "}
              <a href="tel:604-968-9997" className="text-primary font-medium hover:underline">604-968-9997</a>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteForm;
