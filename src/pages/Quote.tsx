import QuoteForm from "@/components/QuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, CheckCircle, Shield, Award } from "lucide-react";
const Quote = () => {
  const benefits = [{
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Fast, Reliable Response",
    description: "Same-day callback during business hours. We respect your time and schedule."
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: "Honest, Fair Pricing",
    description: "Clear written quotes with no hidden fees. Affordable tree removal rates you can trust."
  }, {
    icon: <Award className="h-6 w-6" />,
    title: "Certified Arborist Evaluation",
    description: "Professional tree health assessment and safety recommendations from experienced experts."
  }];
  return <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request Your Free Tree Service Estimate
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get a free estimate from certified arborists with affordable, transparent pricing. 
            Tell us about your tree removal, trimming, or health assessment needs and we'll provide a detailed quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Alternatives */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">Talk to a Certified Arborist</h3>
                <p className="text-sm text-muted-foreground">
                  Prefer to speak with us directly? We're here to help.
                </p>
                
                  <div className="space-y-3">
                    <a href="tel:604-968-9997" className="flex items-center space-x-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-foreground">604-968-9997</div>
                        <div className="text-xs text-muted-foreground">Click to call</div>
                      </div>
                    </a>
                  
                  <a href="mailto:integratreeservice@gmail.com" className="flex items-center space-x-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">integratreeservice@gmail.com</div>
                      <div className="text-xs text-muted-foreground">Click to email</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">7 days/week: 24/7</div>
                      <div className="text-xs text-muted-foreground">Always available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Why Choose Us?
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-start space-x-3">
                      <div className="text-primary flex-shrink-0 mt-0.5">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {benefit.title}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Notice */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-orange-800 mb-2">
                  Need Emergency Tree Removal?
                </h3>
                <p className="text-sm text-orange-700 leading-relaxed mb-3">
                  Storm-damaged or hazardous tree threatening your property? 
                  Call us now for immediate emergency storm cleanup.
                </p>
                <div className="text-center">
                  <a href="tel:604-968-9997" className="inline-flex items-center justify-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
                    <Phone className="h-4 w-4 mr-2" />
                    604-968-9997
                  </a>
                  <div className="text-xs text-orange-600 mt-2">
                    24/7 Emergency Service Available
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Note */}
            
          </div>
        </div>
      </div>
    </div>;
};
export default Quote;