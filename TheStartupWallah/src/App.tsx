import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InvestorsList from "./pages/InvestorsList/InvestorsList";
import MarketingEbook from "./pages/EBookSection/MarketingEbook";
import SalesEbook from "./pages/EBookSection/SalesEbook";
import EntrepreneurshipEbook from "./pages/EBookSection/EntrepreneurshipEbook";
import CaseStudiesResearch from "./pages/EBookSection/CaseStudiesResearch";
import QASection from "./pages/EBookSection/QASection";
import RegisterationForm from "./common/RegistrationForm";
import { PasswordVisibilityProvider } from "./context/PasswordVisibilityContext";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./common/LoginForm";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/marketingebook" element={<MarketingEbook />} />
          <Route path="/resources/salesebook" element={<SalesEbook />} />
          <Route path="/resources/entrepreneurshipebook" element={<EntrepreneurshipEbook />} />
          <Route path="/resources/casestudiesresearch" element={<CaseStudiesResearch />} />
          <Route path="/resources/qasectionandgovernmentfunding" element={<QASection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investorslist" element={<InvestorsList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={
            <PasswordVisibilityProvider>
              <RegisterationForm />
            </PasswordVisibilityProvider>
          } />
          <Route path="/login" element={
            <PasswordVisibilityProvider>
              <LoginForm />
            </PasswordVisibilityProvider>
          } />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
