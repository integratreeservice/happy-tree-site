import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SocialMediaSection from "@/components/SocialMediaSection";
const About = () => {
  return <div className="py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">About Integra Tree Service</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your trusted local tree care company. Father and son certified arborists with over 15 years of experience 
            providing safe, reliable tree service to families across Surrey, Delta, Richmond, and Langley.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-16">
          <img src="/lovable-uploads/67a3c22a-b8bb-4ba7-bba5-6a16b2469c56.png" alt="Professional arborist climbing large tree with safety equipment for tree service work" className="w-full h-full object-cover" />
          <div className="absolute bottom-8 left-8">
            <div className="bg-white p-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="/lovable-uploads/3ce363d9-39dc-4524-96d8-1befa3e8d8d1.png" 
                alt="2-year-old Jack Shortt helping with tree work, holding sticks" 
                className="w-48 h-48 object-cover rounded-lg"
              />
              <p className="text-sm text-muted-foreground text-center mt-2 font-medium">Jack at age 2</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Integra Tree Service, we're more than just a tree company—we're your neighbors. Jack Shortt started helping his dad Doug, 
              a certified arborist, when he was just two years old. What began as hauling sticks grew into a lifelong passion for safe, 
              professional tree care. Today, Jack works alongside his father as a certified arborist, bringing the same dedication to every job.
            </p>
            <p>
              As a family-owned local tree service, we combine decades of experience with modern safety practices. From tree removal and 
              tree trimming to health assessments and emergency storm cleanup, we treat every property like our own. You'll get honest estimates, 
              dependable service, and the peace of mind that comes from working with fully licensed and insured tree experts who truly care.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-16">
          <SocialMediaSection />
        </div>

        {/* Credentials Grid */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground text-center mb-12">
            Our Credentials & Standards
          </h2>
          <div className="bg-section-bg rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <img src="/lovable-uploads/2247e1be-8c23-4b9b-b511-93e4c0be15fc.png" alt="ISA Certified Arborist" className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/c30af79e-b91d-4aea-9d97-54d047d8df24.png" alt="Pacific Northwest ISA" className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src="/lovable-uploads/e4e1ce49-14d4-4426-99bf-43aa0f8cd427.png" alt="ISA Member" className="h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>


        {/* Safety & Values */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Your Safety Is Our Priority
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 leading-relaxed opacity-90">
            <p>
              Every member of our team is trained in the latest safety protocols. As certified arborists, we follow industry best practices 
              to prevent property damage and ensure safe tree removal every time. We carry comprehensive insurance and maintain all required 
              licenses—because protecting your home and family is what matters most.
            </p>
            <p>
              But safety isn't just about certifications. It's about showing up on time, giving you fair pricing, and being the kind of 
              dependable tree service you'd recommend to your own neighbors. That's the Integra difference.
            </p>
          </div>
          
          <div className="mt-8">
            <Button size="lg" variant="secondary" className="font-medium" asChild>
              <Link to="/quote">Book Your Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default About;