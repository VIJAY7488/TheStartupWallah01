
import React, { useState } from "react";
import { Container } from "./ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Filter, Mail,Building, ArrowRight } from "lucide-react";
import { FaLinkedinIn} from "react-icons/fa";
import { Link } from "react-router-dom";


// Sample investor data
const investors = [
  {
    id: 1,
    name: "Darshan Jani",
    company: "6th Sun Ventures",
    email: "darshan.jani@matrubharti.com",
    linkedin: "https://www.linkedin.com/in/janidarshan/",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH_Q_jXpP1ZYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665971738741?e=1745452800&v=beta&t=1ImcVNwqWa7zW11Q3xUUTZFUxrz2E4nkjQ0Mo94xbAs",
    sectors: ["Investor","Board Member"]
  },
  {
    id: 2,
    name: "Dinesh Goel",
    company: "Siana Capital",
    email: "dinesh.goel@sianacapital.com",
    linkedin: "https://www.linkedin.com/in/goeldinesh/",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEKxlcJ_x_TgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696945826785?e=1745452800&v=beta&t=JWbl9-1_aC580yaqKjJ_HA4UxSL79DggM1QQsRjKIAM",
    sectors: ["Visiting Faculty", "Partner", "Strategic Advisor"]
  },
  {
    id: 3,
    name: "Avishek Das",
    company: "KredX",
    email: "avishek@kredx.com",
    linkedin: "https://www.linkedin.com/in/avishek-das-6bb16512/",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFsDvZ2oUDauQ/profile-displayphoto-shrink_800_800/B4DZT5CyF0HIAg-/0/1739345044564?e=1745452800&v=beta&t=SdG6Y8VABHI_ICwJhqcmbPbk7J3UTw01vEYMH4u-4xY",
    sectors: ["Sales", "Head - Investments", "D2C"]
  },
  {
    id: 4,
    name: "Pramod D'souza",
    company: "Eagle10 Ventures",
    email: "pramod@eagle10ventures.com",
    linkedin: "https://www.linkedin.com/in/pramoddsouza/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGsO4zPlF8Fgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713535879133?e=1745452800&v=beta&t=qW99s-cbRKhQtJUIHgOudWs_xWPtPcD8Ey0US8AL1zU",
    sectors: ["Advisor-Strategy & Growth", "Management Consultant"]
  },
  {
    id: 5,
    name: "Shronit Ladhani",
    company: "CareerNinja",
    email: "shronit@careerninja.in",
    linkedin: "https://www.linkedin.com/in/shronit-ladhani-b12b8227/",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQE6N1azpn3GHw/profile-framedphoto-shrink_800_800/B4DZUdUipPGcAk-/0/1739953679218?e=1741888800&v=beta&t=l6ERZ3p_0x2-o26e-S960dUzGw4YGPep39KJvfPh6VE",
    sectors: ["Angel Investor", "Product, Design", "Sales & Innovation"]
  },
  {
    id: 6,
    name: "Nikhil Rathi",
    company: "Web Werks India Pvt. Ltd.",
    email: "nikhil@neosofttech.com",
    linkedin: "https://www.linkedin.com/in/nikhil-rathi-7532562/",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQFgcUFXdA9EDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615639399370?e=1745452800&v=beta&t=gD-t-XscO2hTNxTDQsC5dXgYy5WoXdwSRC_1rZWGi0k",
    sectors: ["Director", "General Partner"]
  }
];

// Available sector filters
const sectors = ["All", "Tech", "Fintech", "E-commerce", "Consumer", "D2C", "EdTech", "AI/ML", "Web3", "Marketplace", "Early Stage"];

const InvestorData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSector, setActiveSector] = useState("All");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Filter investors based on search term and active sector
  const filteredInvestors = investors.filter(
    (investor) => {
      const matchesSearch = 
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investor.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSector = 
        activeSector === "All" || 
        investor.sectors.includes(activeSector);
      
      return matchesSearch && matchesSector;
    }
  );

  return (
    <section id="investor-data" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Funding Matchmakers
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Meet Your <span className="text-gradient">Dream Investors</span>
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our VIP rolodex of active investors hunting for the next big thing. Find your perfect funding match.
          </p>
        </div>

        {/* Search and filter bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 animate-fade-in z-10" style={{ animationDelay: "0.3s" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Find by name or company..." 
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Button 
              variant="outline" 
              className="bg-white w-full md:w-auto flex items-center gap-2"
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              <Filter className="h-4 w-4" />
              <span>Filter by Sector</span>
            </Button>
            
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-lg p-4 w-64 border animate-in fade-in">
                <div className="font-medium mb-2">Sectors</div>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => {
                        setActiveSector(sector);
                        setShowFilterMenu(false);
                      }}
                      className={`px-3 py-1 text-xs rounded-full ${
                        activeSector === sector
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Investors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {filteredInvestors.map((investor) => (
            <Card key={investor.id} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={investor.image} 
                      alt={investor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{investor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Building className="h-4 w-4" />
                      <span>{investor.company}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{investor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLinkedinIn className="h-4 w-4 text-gray-600" />
                    <a href={investor.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {investor.sectors.map((sector) => (
                      <span key={sector} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-2">
                <Button variant="outline" className="w-full group">
                  <span>View Profile</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold mb-4">Want Our Full Investor Black Book?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get VIP access to 500+ active investors, their sweet spots, check sizes, and direct contacts. Your fundraising secret weapon.
          </p>
          <div className="flex justify-center">
            <Link
              to="/investorslist"
              className="inline-flex items-center justify-center px-6 py-3 h-12 border border-primary bg-primary text-white font-medium rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
            >
              Unlock Investor Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InvestorData;
