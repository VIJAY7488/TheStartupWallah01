import React, { useState } from "react";
import { Container } from "./ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Award, TrendingUp, School } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Textarea } from "./ui/textarea";

export const caseStudies = [
  // {
  //   id: 1,
  //   title: "OYO's Rapid Expansion Strategy",
  //   founder: "Ritesh Agarwal",
  //   category: "Hospitality",
  //   description:
  //     "How Ritesh Agarwal built OYO from a single hotel to a global hospitality chain valued at $9 billion by focusing on standardization and technology integration.",
  //   learnings: [
  //     "Importance of standardization in fragmented markets",
  //     "Technology as a competitive advantage",
  //     "Rapid scaling through strategic partnerships",
  //     "Adaptation to local market conditions while expanding globally",
  //   ],
  //   icon: <Award className="h-6 w-6 text-primary" />,
  //   image:
  //     "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   downloadLink: "https://example.com/oyo-case-study.pdf",
  // },
  // {
  //   id: 2,
  //   title: "Zomato's Market Dominance",
  //   founder: "Deepinder Goyal",
  //   category: "FoodTech",
  //   description:
  //     "Deepinder Goyal's journey of transforming a menu scanning website into India's leading food delivery platform through strategic acquisitions and innovative business models.",
  //   learnings: [
  //     "Strategic pivoting from content to transactions",
  //     "Leveraging network effects in two-sided marketplaces",
  //     "Data-driven decision making for expansion",
  //     "Building sustainable unit economics in high-frequency businesses",
  //   ],
  //   icon: <TrendingUp className="h-6 w-6 text-primary" />,
  //   image:
  //     "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   downloadLink: "https://example.com/zomato-case-study.pdf",
  // },
  // {
  //   id: 3,
  //   title: "Paytm's Digital Payments Revolution",
  //   founder: "Vijay Shekhar Sharma",
  //   category: "Fintech",
  //   description:
  //     "How Vijay Shekhar Sharma capitalized on India's demonetization to transform Paytm from a mobile recharge platform to India's leading digital payments ecosystem.",
  //   learnings: [
  //     "Identifying and capitalizing on regulatory changes",
  //     "Building an ecosystem around core payment functionality",
  //     "Creating a super-app strategy for retention",
  //     "Strategic fundraising to fuel rapid growth",
  //   ],
  //   icon: <BookOpen className="h-6 w-6 text-primary" />,
  //   image:
  //     "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  //   downloadLink: "https://example.com/paytm-case-study.pdf",
  // },
  {
    id: 4,
    title: "Zerodha's Bootstrapped Success",
    founder: "Nithin Kamath",
    category: "Fintech",
    description:
      "Nithin Kamath's story of building India's largest stock broker without external funding by focusing on technology, transparent pricing, and financial education.",
    learnings: [
      "Building sustainable profitability from day one",
      "Disrupting established players through technology",
      "Transparent pricing as a competitive strategy",
      "Content marketing and education to drive adoption",
    ],
    icon: <School className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    downloadLink: "/",
  },
  {
    id: 5,
    title: "Zepto: Revolutionizing Quick Commerce",
    founder: "Aadit Palicha & Kaivalya Vohra",
    category: "Quick-commerce",
    description:
      "Aadit Palicha and Kaivalya Vohra, Stanford dropouts, built Zepto, India's largest quick commerce company,",
    learnings: [
      "Ultra-fast delivery as a key differentiator",
      "Optimizing supply chain for efficiency and cost-effectiveness",
      "Leveraging data-driven inventory management",
      "Prioritizing customer convenience to drive retention",
    ],
    icon: <Award className="h-6 w-6 text-primary" />,
    image:
      "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    downloadLink: "https://drive.google.com/file/d/1I1p14cG7R0E0W4rCUCX5b3S15EftRBAe/view?usp=drivesdk",
  },
  {
    id: 6,
    title: "Flipkart: India’s Online Shopping Giant",
    founder: "Sachin & Binny Bansal",
    category: "E-commerce",
    description:  
      "Sachin and Binny Bansal from IIT dream to building India's largest e-commerce platform",
    learnings: [
      "Pioneering India's e-commerce revolution",
      "Customer-centric approach driving growth",
      "Robust logistics and supply chain innovation",
      "Customer Trust – COD, easy returns, and fast delivery.",
    ],
    icon: <Award className="h-6 w-6 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsaXBrYXJ0JTIwZWNvbW1lcmNlfGVufDB8fDB8fHww",
    downloadLink: "https://drive.google.com/file/d/1I5TONoWuQsmL-YehLopVb5PTN4OLuAzN/view",
  },
];

const categories = [
  "All",
  "Fintech",
  "FoodTech",
  "Hospitality",
  "E-commerce",
  "Quick-commerce",
];

const CaseStudies = () => {
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [requestStudy, setRequestStudy] = useState("");
  const [showRequestForm, setShowRequestForm] = useState(false);

  const filteredCaseStudies = caseStudies.filter(
    (study) => activeCategory === "All" || study.category === activeCategory
  );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send to backend
    alert(
      `Thank you for your request: "${requestStudy}". We'll get back to you soon!`
    );
    setRequestStudy("");
    setShowRequestForm(false);
  };

  return (
    <section
      id="case-studies"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>

      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Startup Success Stories
          </div>
          <h2
            className="section-title animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Learn from India's{" "}
            <span className="text-gradient">Top Founders</span> & Their Journeys
          </h2>
          <p
            className="section-subtitle animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Deep dive into the strategies, challenges, and key learnings from
            India's most successful startup founders across various industries.
          </p>
        </div>

        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
          <div
            className="mb-10 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <TabsList className="bg-white shadow-md p-1 rounded-lg">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={
                    activeCategory === category ? "bg-primary text-white" : ""
                  }
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory}>
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {filteredCaseStudies.map((study) => (
                <Card
                  key={study.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {study.category}
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {study.icon}
                      <span className="text-sm font-medium text-primary">
                        {study.founder}
                      </span>
                    </div>
                    <CardTitle>{study.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold mb-2">
                      Key Learnings:
                    </h4>
                    <ul className="space-y-1 text-sm text-text-muted">
                      {study.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <Button
                      variant="default"
                      className="w-full"
                      onClick={() => window.open(study.downloadLink)}
                    >
                      View 
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {!showRequestForm ? (
            <Button
              onClick={() => setShowRequestForm(true)}
              className="px-6 mx-2"
              size="lg"
            >
              Request a Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Request a Specific Case Study
              </h3>
              <form onSubmit={handleRequestSubmit}>
                <Textarea
                  placeholder="Tell us which founder or startup you'd like a case study on..."
                  value={requestStudy}
                  onChange={(e) => setRequestStudy(e.target.value)}
                  className="mb-4"
                  rows={4}
                  required
                />
                <div className="flex gap-3 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowRequestForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Submit Request</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;
