import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import ParallaxSection from "@/components/ParallaxSection";
import InteractiveMap from "@/components/InteractiveMap";
import HomeQuoteForm from "@/components/HomeQuoteForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ReviewCard from "@/components/ReviewCard";
import { Phone, Shield, Award, Users, Scissors, TreePine, Zap, Search, AlertTriangle, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tree-service.jpg";
const Index = () => {
  const services = [{
    title: "Safe Tree Removal",
    description: "Professional tree removal by certified arborists. We safely remove dangerous or unwanted trees with complete cleanup, protecting your property every step of the way.",
    icon: <img src="/lovable-uploads/9cf6a4b9-25b1-4f9e-aed2-38b9da683a65.png" alt="Tree removal icon" className="h-10 w-10" />
  }, {
    title: "Tree Trimming & Pruning",
    description: "Expert tree trimming and pruning services to improve tree health, prevent storm damage, and maintain beautiful views around your property.",
    icon: <Scissors className="h-10 w-10" />
  }, {
    title: "Tree Health Assessments",
    description: "Professional arborist evaluation of tree health and safety risks. Certified tree risk assessors identify potential hazards before they become problems.",
    icon: <img src="/lovable-uploads/7bfbad7f-26f8-4ddd-8b39-934116e5f5c6.png" alt="Tree health assessment icon" className="h-10 w-10" />
  }, {
    title: "Emergency Storm Cleanup",
    description: "24/7 emergency tree removal for storm-damaged trees. Fast response from our certified team to prevent property damage and restore safety.",
    icon: <img src="/lovable-uploads/7b0ea919-918d-4b7d-8ebb-24c10ab9611d.png" alt="Emergency service icon" className="h-10 w-10" />
  }];
  const faqs = [{
    question: "Do you provide free estimates for tree removal?",
    answer: "Yes! We offer free estimates for all tree services including tree removal, trimming, and health assessments. Quick phone consultations and detailed written quotes at no charge."
  }, {
    question: "Are your arborists certified and insured?",
    answer: "Absolutely. Our team includes certified arborists, and we're fully licensed and insured. We're happy to provide documentation for your peace of mind."
  }, {
    question: "Do I need a permit for tree removal?",
    answer: "It depends on your municipality and tree size. We'll guide you through the permit process and help with any required documentation."
  }, {
    question: "How quickly can you schedule tree service?",
    answer: "Most jobs are scheduled within 1-2 weeks. Emergency tree removal and storm cleanup are prioritized for same-day or next-day service."
  }, {
    question: "Do you handle cleanup and debris removal?",
    answer: "Yes—complete cleanup is included. We remove all brush, logs, and wood chips, or can chip materials on-site for your garden if preferred."
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-12">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url("/lovable-uploads/hero-aerial-trees.jpg")`
      }} />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 container">
          {/* Mobile & Tablet: Logo and Header Above Form */}
          <div className="lg:hidden mb-8">
            <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex justify-center md:justify-start">
                <img src="/lovable-uploads/07200f5d-757d-4f85-8683-68ba4c9727e2.png" alt="Integra Tree Services Logo" className="h-16 md:h-20 w-auto object-contain" />
              </div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground text-center md:text-left leading-tight">All Your Tree Service Needs Under One Canpoy







                                                                </h1>
              <div className="md:hidden">
                <p className="text-sm text-primary-foreground/90 leading-relaxed text-center">
                  Dangerous Tree Removals • Pruning & Vista Pruning • Hedge Trimming • Tree Planting • Risk Assessments
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Desktop: Left Column - Text Content with Green Overlay */}
            <div className="hidden lg:block bg-primary/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 space-y-8 lg:col-span-1">
              <div className="space-y-6">
                <div className="flex justify-start">
                  <img src="/lovable-uploads/07200f5d-757d-4f85-8683-68ba4c9727e2.png" alt="Integra Tree Services Logo" className="h-20 w-auto object-contain" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-primary-foreground leading-tight md:text-4xl">​Fill Out The Form For a Free Estimate                    </h1>
                <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed">
                  Dangerous Tree Removals • Pruning & Vista Pruning • Hedge Trimming • Tree Planting • Risk Assessments
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" className="flex items-center justify-center space-x-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10" asChild>
                  <a href="tel:604-968-9997">
                    <Phone className="h-4 w-4" />
                    <span>604-968-9997</span>
                  </a>
                </Button>
              </div>

              {/* Certification Badges */}
              <div className="pt-6 border-t border-primary-foreground/20">
                <div className="flex flex-wrap items-center gap-6 justify-start">
                  <img src="/lovable-uploads/2247e1be-8c23-4b9b-b511-93e4c0be15fc.png" alt="ISA Certified Arborist" className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/c30af79e-b91d-4aea-9d97-54d047d8df24.png" alt="Pacific Northwest ISA" className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/e4e1ce49-14d4-4426-99bf-43aa0f8cd427.png" alt="ISA Member" className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Tablet: Service List Card (Left of Form) */}
            <div className="hidden md:block lg:hidden md:col-span-1 space-y-6">
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 space-y-3">
                <h3 className="font-serif text-lg font-semibold text-primary-foreground mb-4">Our Services</h3>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  • Dangerous Tree Removals<br />
                  • Pruning & Vista Pruning<br />
                  • Hedge Trimming<br />
                  • Tree Planting<br />
                  • Risk Assessments
                </p>
                <div className="pt-4">
                  <Button variant="outline" size="default" className="w-full flex items-center justify-center space-x-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10" asChild>
                    <a href="tel:604-968-9997">
                      <Phone className="h-4 w-4" />
                      <span>604-968-9997</span>
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Certification Badges - Below Services on Tablet */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-4 justify-center">
                  <img src="/lovable-uploads/2247e1be-8c23-4b9b-b511-93e4c0be15fc.png" alt="ISA Certified Arborist" className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/c30af79e-b91d-4aea-9d97-54d047d8df24.png" alt="Pacific Northwest ISA" className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/e4e1ce49-14d4-4426-99bf-43aa0f8cd427.png" alt="ISA Member" className="h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-2xl md:col-span-2 lg:col-span-1 md:order-2">
              <div className="mb-6">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Get Your Free Estimate
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Fill Out The Form For Your Free Estimate
                </p>
              </div>
              <HomeQuoteForm />
            </div>
          </div>


        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Complete Tree Care Services You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground">
              From tree trimming to emergency removal—our certified arborists treat every property with the care and respect it deserves.
            </p>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                {services.map((service, index) => <CarouselItem key={index} className="basis-4/5">
                    <ServiceCard title={service.title} description={service.description} icon={service.icon} showLearnMore={false} />
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} showLearnMore={false} />)}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              What Our Clients Say About Us
            </h2>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ReviewCard name="Tomas Hanson" location="" rating={5} review="Doug Shortt and [Integra Tree] is the best tree service company I have ever worked with, and there is no one else I would want to care for my greenery!" />
            <ReviewCard name="Scott Herespink" location="" rating={5} review="Awesome work and great staff!" />
            <ReviewCard name="Terry Bruckheimer" location="" rating={5} review="Owner did an amazing job on my property. He was very respectful and understanding to my requests as I know I am very picky and demanding. His crew was efficient and my hedges are the height and width I want. Clean work. I will definitely call Doug next year to maintain my yard. I would highly recommend their services to anyone." />
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent>
                <CarouselItem className="basis-4/5">
                  <ReviewCard name="Tomas Hanson" location="" rating={5} review="Doug Shortt and [Integra Tree] is the best tree service company I have ever worked with, and there is no one else I would want to care for my greenery!" />
                </CarouselItem>
                <CarouselItem className="basis-4/5">
                  <ReviewCard name="Scott Herespink" location="" rating={5} review="Awesome work and great staff!" />
                </CarouselItem>
                <CarouselItem className="basis-4/5">
                  <ReviewCard name="Terry Bruckheimer" location="" rating={5} review="Owner did an amazing job on my property. He was very respectful and understanding to my requests as I know I am very picky and demanding. His crew was efficient and my hedges are the height and width I want. Clean work. I will definitely call Doug next year to maintain my yard. I would highly recommend their services to anyone." />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 md:py-24 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url("/lovable-uploads/pacific-northwest-mountains.jpg")`
        }} />
        
        {/* Overlay for better form readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-2xl md:text-4xl font-semibold text-primary-foreground mb-3 md:mb-4">
                Get Your Free Tree Service Estimate
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Tell us about your tree care needs and get a professional quote within 24 hours.
              </p>
            </div>
            <HomeQuoteForm />
          </div>
        </div>
      </section>

      {/* Interactive Service Area Map */}
      <section className="py-16 bg-section-bg">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">Trusted Tree Service in Surrey, Delta, Richmond & Langley</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your local tree care company proudly serving Lower Mainland communities with reliable, affordable tree removal and arborist services.
            </p>
            <div className="mb-6">
              <InteractiveMap />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              As a family-owned local tree care company, we focus on communities within a 45-minute drive to ensure fast emergency response 
              and dependable service. Whether you need tree removal in Surrey, an arborist in Richmond, or tree trimming in Langley, 
              our certified team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Section with Logo */}
      <ParallaxSection />

      {/* About Us Gallery */}
      <section className="py-16 md:py-24 bg-section-bg overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Family-Owned Tree Service Since Day One
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From Jack's first day helping his dad Doug to becoming certified arborists—quality workmanship and honest service run in our family.
            </p>
          </div>
          
          {/* Scattered Polaroids - 4 on mobile, 6 on desktop */}
          <div className="relative h-96 md:h-[500px] mb-12">
            {/* Polaroid 1 - Tree Climber - Top Left */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 transform rotate-12 hover:rotate-6 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/ccbcc0cd-6161-49eb-a11e-d40b50ffdc11.png" alt="Professional arborist climbing tree" className="w-full h-24 md:h-32 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Expert climbing</p>
              </div>
            </div>

            {/* Polaroid 2 - Chainsaw Scene - Top Right */}
            <div className="absolute top-4 right-4 md:top-16 md:right-12 transform -rotate-6 hover:rotate-0 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/c1edb2c9-6bc1-4a66-aa3f-e88528b4b1c0.png" alt="Chainsaw and cut tree logs" className="w-full h-28 md:h-36 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Precision work</p>
              </div>
            </div>

            {/* Polaroid 3 - Team with Truck - Bottom Left */}
            <div className="absolute bottom-4 left-4 md:bottom-20 md:left-16 transform rotate-3 hover:-rotate-3 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/7b53dd6c-81c4-41a5-9655-a419ada92841.png" alt="Jack and Doug with loaded truck" className="w-full h-32 md:h-40 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Our Crew</p>
              </div>
            </div>

            {/* Polaroid 4 - Atmospheric Scene - Bottom Right */}
            <div className="absolute bottom-4 right-4 md:bottom-32 md:right-8 transform rotate-9 hover:rotate-3 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/d44048bd-90cf-4db8-bc7f-662d0a52aaa2.png" alt="Tree climber in misty morning" className="w-full h-28 md:h-36 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Early mornings</p>
              </div>
            </div>

            {/* Polaroid 5 - Tree Trunk Scene - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute bottom-8 right-20 transform -rotate-12 hover:-rotate-6 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '0.9s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/3571f412-1815-42b4-85ee-32db22defd00.png" alt="Arborist on large tree trunk" className="w-full h-20 md:h-28 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Big removals</p>
              </div>
            </div>

            {/* Polaroid 6 - Team Assessment - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 rotate-6 hover:rotate-12 transition-transform duration-300 animate-fade-in" style={{
            animationDelay: '1.1s'
          }}>
              <div className="bg-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-36 md:w-44">
                <img src="/lovable-uploads/f0bc9614-e096-4815-ac6a-82ab654d7a6a.png" alt="Team assessing tree work" className="w-full h-24 md:h-32 object-cover rounded-lg" />
                <p className="text-xs text-muted-foreground text-center mt-2">Assessment</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Want to know more about the certified arborists you can trust with your trees?
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover-scale">
                Meet Our Family Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;