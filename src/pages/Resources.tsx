import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ParallaxSection from "@/components/ParallaxSection";

const Resources = () => {
  const articles = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Signs Your Tree Needs Pruning",
      excerpt: "Learn to identify when your trees need professional attention before problems become dangerous.",
      topics: ["Dead or dying branches", "Crossing branches", "Storm damage signs", "Crown density issues"],
      readTime: "5 min read"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "When to Remove vs. Save a Tree",
      excerpt: "A comprehensive guide to help you make informed decisions about problem trees on your property.",
      topics: ["Structural integrity assessment", "Disease identification", "Safety considerations", "Cost comparison"],
      readTime: "8 min read"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Seasonal Tree Care Checklist",
      excerpt: "Month-by-month maintenance tips to keep your trees healthy throughout the Pacific Northwest seasons.",
      topics: ["Spring awakening", "Summer stress management", "Fall preparation", "Winter protection"],
      readTime: "6 min read"
    }
  ];


  return (
    <div className="pt-12">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tree Care Tips & Resources
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert tree care advice from certified arborists. Learn when to prune, how to spot hazardous trees, 
            and what to expect from professional tree service.
          </p>
        </div>

        {/* Featured Article Hero */}
        <div className="relative h-[40vh] min-h-[300px] rounded-2xl overflow-hidden mb-12">
          <img 
            src="/lovable-uploads/ba658cc0-32c6-4650-b891-cff2563aa1c6.png" 
            alt="Tree care education and resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container px-4">
              <div className="max-w-3xl text-white">
                <h2 className="font-serif text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                  Learn From Trusted Local Tree Experts
                </h2>
                <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6 leading-relaxed">
                  Professional advice from certified arborists serving Surrey, Delta, Richmond, and Langley for over 15 years
                </p>
                <Button size="lg" variant="secondary" className="font-medium text-sm md:text-base">
                  Explore Tree Care Guides
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid - Masonry Style */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-8">
            Educational Articles
          </h2>
          
          {/* Primary Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-card transition-all duration-300 h-full border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                        {articles[0].icon}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {articles[0].readTime} • Featured
                      </span>
                    </div>
                  </div>
                  <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors">
                    {articles[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {articles[0].topics.map((topic, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Read Full Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {articles.slice(1, 3).map((article, index) => (
                <Card key={index + 1} className="group hover:shadow-card transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-primary">
                        {article.icon}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto font-medium text-sm">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Additional Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(3).map((article, index) => (
              <Card key={index + 3} className="group hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                      {article.icon}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {article.readTime}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {article.topics.slice(0, 2).map((topic, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                    {article.topics.length > 2 && (
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                        +{article.topics.length - 2} more
                      </span>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Read Article <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>

      {/* Parallax CTA Section - Full Width */}
      <ParallaxSection />
    </div>
  );
};

export default Resources;