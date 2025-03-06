
import React, { useState } from "react";
import { Container } from "../../components/ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Search, Filter, Mail,Building, ArrowRight } from "lucide-react";
import { FaLinkedinIn} from "react-icons/fa";
import  Footer  from "../../components/Footer";
import Navbar from "@/components/Navbar";


// Sample investor data
const investors = [
    { 
      id: 1,
      name: "Darshan Jani",
      company: "6th Sun Ventures",
      bio: "A seasoned entrepreneur turned investor with over 25 years of experience in the tech industry evenly distributed between US and India. Darshan has led teams at various companies in developing award-winning technology products, from enterprise servers and network protocols to web-based applications and databases. A talented management professional in the software industry, Darshan also has a unique expertise in scaling technology ventures.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQH_Q_jXpP1ZYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1665971738741?e=1745452800&v=beta&t=1ImcVNwqWa7zW11Q3xUUTZFUxrz2E4nkjQ0Mo94xbAs",
      email: "darshan.jani@matrubharti.com",
      linkedin: "https://www.linkedin.com/in/janidarshan/",
      sectors: ["Investor","Board Member"]
    },
    { 
      id: 2,
      name: "Dinesh Goel",
      company: "Siana Capital",
      bio: "Early Stage Tech Investor, Board Director/Strategic Advisor, Partner at Siana Capital.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEKxlcJ_x_TgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696945826785?e=1745452800&v=beta&t=JWbl9-1_aC580yaqKjJ_HA4UxSL79DggM1QQsRjKIAM",
      email: "dinesh.goel@sianacapital.com",
      linkedin: "https://www.linkedin.com/in/goeldinesh/",
      sectors: ["Visiting Faculty", "Partner", "Strategic Advisor"]
    },
    { 
      "id": 3,
      "name": "Avishek Das",
      "company": "KredX",
      "bio": "Investment | TReDS | Supply Chain Financing",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQFsDvZ2oUDauQ/profile-displayphoto-shrink_800_800/B4DZT5CyF0HIAg-/0/1739345044564?e=1745452800&v=beta&t=SdG6Y8VABHI_ICwJhqcmbPbk7J3UTw01vEYMH4u-4xY",
      "email": "avishek@kredx.com",
      "linkedin": "https://www.linkedin.com/in/avishek-das-6bb16512/",
      "sectors": ["Sales", "Head - Investments", "D2C"]
    },
    { 
      "id": 4,
      "name": "Pramod D'souza",
      "company": "Eagle10 Ventures",
      "bio": "Board Advisor / Mentor / Angel Investor / Certified Independent Director / Management Consultant",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQGsO4zPlF8Fgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713535879133?e=1745452800&v=beta&t=qW99s-cbRKhQtJUIHgOudWs_xWPtPcD8Ey0US8AL1zU",
      "email": "pramod@eagle10ventures.com",
      "linkedin": "https://www.linkedin.com/in/pramoddsouza/",
      "sectors": ["Board Advisor", "Mentor", "Angel Investor", "Management Consultant"]
    },
    {
      "id": 5,
      "name": "Shronit Ladhani",
      "company": "CareerNinja",
      "bio": "Accelerating Careers with AI | Backed by Google | 30 Under 30 & 40U40 | Angel Investor | Ironman Triathlete | 2x TEDx | Hiring: Product, Design, AI & Growth Roles",
      "image": "https://media.licdn.com/dms/image/v2/D4D35AQE6N1azpn3GHw/profile-framedphoto-shrink_800_800/B4DZUdUipPGcAk-/0/1739953679218?e=1740769200&v=beta&t=Np2AWZR-LNGgk74oJuVo6K3pAVTJIFefeMg-5RK3yqo",
      "email": "shronit@careerninja.in",
      "linkedin": "https://www.linkedin.com/in/shronit-ladhani-b12b8227/",
      "sectors": ["Angel Investor", "Product, Design", "Sales & Innovation"]
    },
    { 
      "id": 6,
      "name": "Nikhil Rathi",
      "company": "Web Werks India Pvt. Ltd.",
      "bio": "Founder at Web Werks Datacenters, Neosoft Technologies, and Mumbai-IX. Investor at Next Star Venture Capital LLP and NeoNXT Fincap.",
      "image": "https://media.licdn.com/dms/image/v2/C4D03AQFgcUFXdA9EDQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1615639399370?e=1745452800&v=beta&t=gD-t-XscO2hTNxTDQsC5dXgYy5WoXdwSRC_1rZWGi0k",
      "email": "nikhil@neosofttech.com",
      "linkedin": "https://www.linkedin.com/in/nikhil-rathi-7532562/",
      "sectors": ["Director", "General Partner"]
    },
    { "id": 7,
      "name": "Maneesh Bhandari",
      "company": "GrowthPal.com",
      "bio": "Invested in Genomics, Retail Analytics, Consumer, Personal Care, Fintech, Life Sciences, Edtech, Agri-tech, Security, Risk & Compliance, and other startups.",
      "image": "https://media.licdn.com/dms/image/v2/D4D03AQGw12DVKsTIrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683105172145?e=1745452800&v=beta&t=2KVSwFclueFW85bcD9Gt4U-GYDcxNTi9P8rlqm7VTIw",
      "email": "maneesh.bhandari@growthpal.com",
      "linkedin": "https://www.linkedin.com/in/mbh91/",
      "sectors": ["Advisor-Strategy & Growth", "Management Consultant"]
    },
    { "id": 8,
      "name": "Sridhar S",
      "company": "Startup Movers Private Limited",
      "bio": "Co-Founder, Startup Movers",
      "image": "https://media.licdn.com/dms/image/v2/C4E03AQHJfg9-mrJ-xA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516293387605?e=1745452800&v=beta&t=rhfRvNy67LuHvWVOxiArX-7Cmpga4cupYeFu6_HPovE",
      "email": "sridhar@startup-movers.com",
      "linkedin": "https://www.linkedin.com/in/nikhil-rathi-7532562/",
      "sectors": ["Advisor-Strategy & Growth", "Management Consultant"]
    },
    { "id": 9,
      "name": "Sridhar S",
      "company": "Easy Eat",
      "bio": "Entrepreneur | Investor | IITD",
      "image": "https://media.licdn.com/dms/image/v2/C5103AQFDlwTwb7sudQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1531220506887?e=1745452800&v=beta&t=PsudHaEJt97PLIu2Up6OVpA2kvzJGCW85rI4H7ETFow",
      "email": "rhythm@easyeat.ai",
      "linkedin": "https://www.linkedin.com/in/rhythmgupta/",
      "sectors": ["Advisor-Strategy & Growth", "Management Consultant"]
    },
    { "id": 10,
      "name": "Ankur Mittal",
      "company": "Inflection Point Ventures",
      "bio": "Partner, Physis Capital | Co-Founder, Inflection Point Ventures",
      "image": "https://media.licdn.com/dms/image/v2/C5103AQHicvGntOUQYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1574923178159?e=1745452800&v=beta&t=LoldAU2RSVtVJ2oyK8jjitDxYtjszSorcd9Sv2IDRxM",
      "email": "ankur@ipventures.in",
      "linkedin": "https://www.linkedin.com/in/ankur-mittal-3ba773/",
      "sectors": ["Advisor-Strategy & Growth", "Management Consultant"]
    },
    { "id": 11,
      "name": "Rahul Chowdhri",
      "company": "Stellaris Venture Partners",
      "bio": "Investment Professional, Stellaris Venture Partners",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQE1jRPDZ91i0g/profile-displayphoto-shrink_400_400/B56ZRz41lXGQAg-/0/1737111067414?e=1745452800&v=beta&t=dI6XAxj4v8dARSRv3Z2eJemXUGxIu2RR8NMXK0aehWg",
      "email": "rahul@stellarisvp.com",
      "linkedin": "https://www.linkedin.com/in/rahulchowdhri/",
      "sectors": ["Advisor-Strategy & Growth", "Management Consultant"]
    },
    // { "id": 12,
    //   "name": "Rahat Kulshreshtha",
    //   "company": "Quidich",
    //   "bio": "Co-Founder - Quidich Innovation Labs | Chairman - Drone Federation Of India | Sports Broadcast | AR | AI/Computer Vision | Metaverse",
    //   "image": "https://media.licdn.com/dms/image/v2/C4D03AQHvWr8tiQjz_g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1604508585933?e=1745452800&v=beta&t=TAi6gDuforiyjQ6jcN0u0cSl1qXWFArDwAv50yA3h9k",
    //   "email": "rahat@quidich.com",
    //   "linkedin": "https://www.linkedin.com/in/rahatkul/"
    // },
    // { "id": 13,
    //   "name": "Dhiraj Shah",
    //   "company": "Venture Catalysts | India's First Integrated Incubator",
    //   "bio": "Chief of Staff at Castler | Venture Capital | Angel Investor",
    //   "image": "https://media.licdn.com/dms/image/v2/C4D03AQG3rEkPXLKSYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1617959048165?e=1745452800&v=beta&t=8HqBk56OHYBJ6_VN_qWYmwfy24-c-jwpKfYd6tcSEeI",
    //   "email": "dhiraj.shah@venturecatalysts.in",
    //   "linkedin": "https://www.linkedin.com/in/dhiraj-shah/"
    // },
    // { "id": 14,
    //   "name": "Kunal Gupta",
    //   "company": "Mount Talent Consulting",
    //   "bio": "Founder: Mount Talent, Rozgar.com | ET 40 under 40 Business Leader",
    //   "image": "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    //   "email": "kunal.gupta@mounttalent.com",
    //   "linkedin": "https://www.linkedin.com/in/kunalgupta/"
    // },
    // { "id": 15,
    //   "name": "Sanjay Ramakrishnan",
    //   "company": "Multiply Ventures",
    //   "bio": "Founder & General Partner @ Multiply Ventures (Ex-Flipkart/Myntra/Google/GE Healthcare)",
    //   "image": "https://media.licdn.com/dms/image/v2/D5603AQF4tXnpaY525A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683692125983?e=1745452800&v=beta&t=wGbNKpRza7dSWsbG9GS63tB31fsohidq2MYLUK3Ksnc",
    //   "email": "sanjay@multiplyventures.com",
    //   "linkedin": "https://www.linkedin.com/in/rsanjay/"
    // },
    // { 
    //   "id": 16,
    //   "name": "Madhav Tandan",
    //   "image": "https://shorturl.at/tYHso",
    //   "linkedin": "https://www.linkedin.com/in/madhav-tandan-71974124/",
    //   "company": "Omidyar Network India",
    //   "position": "Investor",
    //   "email": "madhav@gramfactory.com"
    // },
    // { 
    //   "id": 17,
    //   "name": "Sumeet Kapur",
    //   "image": "https://media.licdn.com/dms/image/v2/C5103AQGURSCjV52BBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1565611819256?e=1746057600&v=beta&t=izsQR4uLeiVtGHfynXmfL2SP1DAVFtN5WSwM3laH6SA",
    //   "linkedin": "https://www.linkedin.com/in/sumeetkapur1/",
    //   "company": "Wellcure.com",
    //   "position": "Founder & CEO",
    //   "email": "sumeet.kapur@wellcure.com"
    // },
    // { 
    //   "id": 18,
    //   "name": "Soniya Kukreja",
    //   "image": "https://shorturl.at/1Latr",
    //   "linkedin": "https://www.linkedin.com/in/soniya-kukreja-92a571123/",
    //   "company": "Venture Catalysts | India's First Integrated Incubator",
    //   "position": "Investor Relations Manager",
    //   "email": "soniya@venturecatalysts.in"
    // },
    // { 
    //   "id": 19,
    //   "name": "Prashanth Aluru",
    //   "company": "Facebook",
    //   "bio": "CEO & Co-Founder, TMRW House of Brands | UNHustler",
    //   "image": "https://media.licdn.com/dms/image/v2/D5603AQHOm9SCLdrHmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692174460453?e=1745452800&v=beta&t=YvvIRqJGW8o9innhcO-H-nOE8UcdA3DCqpEMpMncnlc",
    //   "email": "prashanth@avataar.me",
    //   "linkedin": "https://www.linkedin.com/in/prashanthaluru/"
    // },
    // { 
    //   "id": 20,
    //   "name": "Nickson Sharma",
    //   "company": "Northeast Venture Fund",
    //   "bio": "Venture Capital & Private Equity | NE Venture Fund & NRL Ideation Angel Fund | Manipur Startup Venture Fund | Stanford Seed Spark Program Mentor",
    //   "image": "https://media.licdn.com/dms/image/v2/C5103AQE0ApWWV5MmnA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1580991238476?e=1745452800&v=beta&t=ID-gSjwf8i6ThNJiAs_Sy25m5Xw6o1qFTVVTL6m4wmc",
    //   "email": "nickson@nedfiventure.com",
    //   "linkedin": "https://www.linkedin.com/in/nicksonsharma/"
    // },
    // { 
    //   "id": 21,
    //   "name": "Prem Singh",
    //   "company": "Prem.VC",
    //   "bio": "CEO, ClientCurve, Inc - Looking for Data Scientist, UI/UX Designer, Amazon Seller Account Setup, Shopify Developer, and BD Team members",
    //   "image": "https://media.licdn.com/dms/image/v2/C5603AQHG12nYXxTSlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1617882237803?e=1745452800&v=beta&t=aF9hRXkryLoNXrz2b9AQQsBrElo0jd6PWhCc2eTbaXg",
    //   "email": "prem@clientcurve.com",
    //   "linkedin": "https://www.linkedin.com/in/premsinghtara/"
    // },
    // { 
    //   "id": 22,
    //   "name": "Navin Khabiya",
    //   "company": "NSquareIT",
    //   "bio": "With over 16 years of experience in web and mobile development, I help businesses of all sizes create innovative and user-friendly digital products that meet their needs and goals.",
    //   "image": "https://media.licdn.com/dms/image/v2/C5603AQHvyjJxbyifXg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1631261106369?e=1745452800&v=beta&t=sOG6Bur1OdWXrkqTpZQ82fuOVhFstHmc-PqJd647PDs",
    //   "email": "navin@nsquareit.com",
    //   "linkedin": "https://www.linkedin.com/in/navinkhabiya/"
    // },
  
    // { 
    //   "id": 23,
    //   "name": "Koushik Ramachandra",
    //   "company": "NSquareIT",
    //   "bio": "16+ years of engineering experience building and scaling Internet applications, data, and infrastructure platforms.",
    //   "image": "https://media.licdn.com/dms/image/v2/D5603AQF3OlvRUk9CBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714879009136?e=1745452800&v=beta&t=RFDby3A0bcoGSS_pS_zucVKhinqhKGcmIhddjmy_iIc",
    //   "email": "koushik@phonepe.com",
    //   "linkedin": "https://www.linkedin.com/in/koushikramachandra/"
    // },
    { 
      "id": 24,
      "name": "Partha Sarathi Guha Patra",
      "company": "SafetyKart.com",
      "bio": "Founder at ASADEL Technologies Pvt. Ltd.",
      "image": "https://media.licdn.com/dms/image/v2/C4E03AQHREVRJLZm1dg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517676452537?e=1745452800&v=beta&t=RgZf1VLRE5RBN9ASFwvp6rSenm4Fd3wO7Ej-IUzyHJ0",
      "email": "partha@asadeltech.com",
      "linkedin": "https://www.linkedin.com/in/psgpdel/",
      sectors: ["Investor"]
    },
    { 
      "id": 25,
      "name": "Arun Mn",
      "company": "Casa Grande Private Limited",
      "bio": "Founder and Managing Director of Casa Grande and group companies.",
      "image": "https://media.licdn.com/dms/image/v2/C5103AQEuUQz3BLcEBg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1568855870639?e=1745452800&v=beta&t=E0uNWXtA3k-WsNIcbHNYKV0SB3EzdPM87541AIRSln4",
      "email": "arunmn@casagrand.co.in",
      "linkedin": "https://www.linkedin.com/in/arunkumarmanivannan/",
      sectors: ["Investor"]
    },
    { 
      "id": 26,
      "name": "Sunil Gupta",
      "company": "Innoval Digital Solutions Pvt Ltd (IVL)",
      "bio": "AI leader | FinTech | SAP | Digital Banking | IIM-K | Stanford | TiE CM | B2B SaaS Enterprise Products | Cloud | Tax Technology | Innovation",
      "image": "https://media.licdn.com/dms/image/v2/C5603AQFbVWb2zB3ebg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1634662541735?e=1745452800&v=beta&t=8b2RcErfdrTIOcUY9SUgfmGkU2M4ovp72fpuHIFh6FY",
      "email": "sunil.gupta@ivldsp.com",
      "linkedin": "https://www.linkedin.com/in/guptasunil/",
      sectors: ["Investor"]
    },
    { 
      "id": 27,
      "name": "Ramit Bhatnagar",
      "company": "MJ Global",
      "bio": "COO & Executive Director @ MJ Global | Leading Packaging Innovation | Angel Investor | McKinsey Alum",
      "image": "https://media.licdn.com/dms/image/v2/C5103AQHgdqNF8TMe1w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517591515542?e=1745452800&v=beta&t=m9SjBtvGOHC15u4lmNyQoS2SMy_XUOJWrnPv6NNw-To",
      "email": "ramit.bhatnagar@mjglobal.co.in",
      "linkedin": "https://www.linkedin.com/in/ramitbhatnagar/",
      sectors: ["Investor"]
    },
    { 
      "id": 28,
      "name": "Nandish Chandrashekar",
      "company": "AutoMakeup",
      "bio": "Experienced Proprietor with a demonstrated history of working in the import and export industry. Skilled in Negotiation, Business Planning, Strategic Planning, Business Development, and Marketing Strategy. Strong entrepreneurship professional with a Bachelor of Engineering (B.E.) focused in Mechanical Engineering from Dayananda Sagar College Of Engineering.",
      "image": "https://media.licdn.com/dms/image/v2/C5603AQHRW6oVVDS5XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517445045384?e=1746057600&v=beta&t=DH868YO2K_CEoRXUNqSBMCNB3FZ1mvy5mKtlN6oQIyM",
      "email": "nandish@justwashapp.com",
      "linkedin": "https://www.linkedin.com/in/nandish-chandrashekar-b7167b109/",
      sectors: ["Investor"]
    },
    { 
      "id": 29,
      "name": "Siddharth Gangoli",
      "company": "SG Hiring Solutions",
      "bio": "Director at SG Hiring Solutions",
      "image": "https://media.licdn.com/dms/image/v2/C5603AQHCqHWQkC8Veg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516282280434?e=1746057600&v=beta&t=-DyO4BlUYMDwecY90yUdcpR-LBEVUNm62hJn1Kzsoto",
      "email": "siddharth@sghiringsolutions.com",
      "linkedin": "https://www.linkedin.com/in/siddharthgangoli/",
      sectors: ["Investor"]
    },
    { 
      "id": 30,
      "name": "Rhythm Gupta",
      "company": "Easy Eat",
      "bio": "Entrepreneur | Investor | IITD",
      "image": "https://media.licdn.com/dms/image/v2/C5103AQFDlwTwb7sudQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1531220506887?e=1745452800&v=beta&t=PsudHaEJt97PLIu2Up6OVpA2kvzJGCW85rI4H7ETFow",
      "email": "rhythm@easyeat.ai",
      "linkedin": "https://www.linkedin.com/in/rhythmgupta/",
      sectors: ["Investor"]
    },
  ];     

// Available sector filters
const sectors = ["All", "Tech", "Fintech", "E-commerce", "Consumer", "D2C", "EdTech", "AI/ML", "Web3", "Marketplace", "Early Stage"];

const InvestorsList = () => {
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
    <>
      <Navbar/>
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
        </Container>
      </section>
      <Footer/>
    </>
  );
};

export default InvestorsList;
