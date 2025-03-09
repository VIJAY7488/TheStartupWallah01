
import React from "react";
import { Container } from "./ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Download, ExternalLink, TrendingUp, Zap, BarChart2, Globe, Lock } from "lucide-react";

const trends = [
  {
    id: 1,
    title: "AI Integration in Early-Stage Startups",
    description: "How startups are leveraging artificial intelligence to gain competitive advantages with limited resources.",
    category: "Technology",
    icon: <Zap className="h-5 w-5 text-primary" />,
    isPremium: false,
    readTime: "8 min read",
    publishDate: "June 12, 2023",
  },
  {
    id: 2,
    title: "The Rise of Alternative Funding Models",
    description: "Beyond venture capital: Exploring revenue-based financing, crowdfunding, and other emerging funding options.",
    category: "Finance",
    icon: <BarChart2 className="h-5 w-5 text-primary" />,
    isPremium: true,
    readTime: "12 min read",
    publishDate: "July 3, 2023",
  },
  {
    id: 3,
    title: "Make.Com",
    description: "Helping startups automate workflows and streamline operations using Make.com.",
    category: "Automation",
    icon: <Globe className="h-5 w-5 text-primary" />,
    isPremium: false,
    readTime: "10 min read",
    publishDate: "August 17, 2023",
  },
  {
    id: 4,
    title: "2023 Fundraising Environment Report",
    description: "Comprehensive analysis of current investment trends, valuation metrics, and investor expectations.",
    category: "Finance",
    icon: <TrendingUp className="h-5 w-5 text-primary" />,
    isPremium: true,
    readTime: "15 min read",
    publishDate: "September 5, 2023",
  }
];

const categories = ["All", "Technology", "Finance", "Automation", "Marketing"];

const IndustryTrends = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredTrends = trends.filter(
    (trend) => activeCategory === "All" || trend.category === activeCategory
  );

  return (
    <section id="industry-trends" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4 animate-fade-in">
            Industry Insights
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Startup Trends</span> & Market Analysis
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Stay ahead of the curve with our expert analysis of emerging trends, market shifts, and strategic opportunities in the startup ecosystem.
          </p>
        </div>

        <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/80">
            <div className="absolute inset-0 mix-blend-overlay opacity-30">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Industry trends report" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm mb-4">
                    2024 Comprehensive Report
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">The State of Startup Funding</h3>
                  <p className="text-white/80 max-w-2xl mb-6">
                    Our annual in-depth analysis of investment trends, valuation metrics, and fundraising strategies across industries and stages.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                      #VentureCapital
                    </div>
                    <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                      #ValuationTrends
                    </div>
                    <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                      #MarketAnalysis
                    </div>
                  </div>
                </div>
                <a href="https://drive.google.com/file/d/10Eh15pJEeP_XdQwpexm0VUMDRORZSmCW/view?usp=sharing" className="bg-white text-primary flex items-center py-3 px-6 rounded ">
                  <Download className="mr-2 h-5 w-5" />
                  Get The Report
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {filteredTrends.map((trend) => (
            <Card key={trend.id} className="overflow-hidden hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {trend.icon}
                    <span className="text-sm font-medium text-text-muted">{trend.category}</span>
                  </div>
                  {trend.isPremium && (
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Lock className="h-4 w-4" />
                      Premium
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl">{trend.title}</CardTitle>
                <CardDescription>{trend.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span>{trend.publishDate}</span>
                    <span>•</span>
                    <span>{trend.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button className="px-6" size="lg">
            Browse All Industry Reports
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default IndustryTrends;
