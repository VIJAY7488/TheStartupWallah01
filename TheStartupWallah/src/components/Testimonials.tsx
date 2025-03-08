
import { Container } from "./ui/container";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FaLinkedinIn} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content:
      "Traditional Marketing vs Zero Marketing – A deep-dive report by Rutik Mane, analyzing the differences between conventional marketing tactics and the revolutionary zero-marketing approach. His insights are helping startups rethink their branding strategies.",
    author: "Rutik Mane",
    position: "Inspiring Entrepreneur, Student at PWIOI",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHTeND3yXikAw/profile-displayphoto-shrink_800_800/B56ZTHK27PHwAc-/0/1738508303040?e=1746662400&v=beta&t=kFKgbNlbTt0rIPJEvKaU3MNtHLvsTfCgJo_FP9sZU1k",
    linkedIn:"https://www.linkedin.com/in/rutik-mane-83616b2a2/"
  },
  {
    id: 2,
    content:
      " The Complete Guide to Government Funding for Indian Startups (2025) - A complete guide on government funding breaks down key schemes, grants, eligibility criteria, and application steps, along with expert strategies to maximize funding opportunities for startups.",
    author: "Prakash Nimbalkar",
    position: "Co-Founder (Aasabie), Head - School of Management (PWIOI)",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGXHNdY8gWFOg/profile-displayphoto-shrink_800_800/B56ZSRX3FjGQAg-/0/1737605739447?e=1746662400&v=beta&t=nWt5pjSb_lUJI8JeOy4sMM0xD7o02ut9zPlBHlT2Hl0",
    linkedIn:"https://www.linkedin.com/in/prakash-nimbalkar/"
  },
  {
    id: 3,
    content:
      "The pitch deck service transformed our presentation. We went from getting rejected to securing three investment offers after working with The Startup Wallah team.",
    author: "Alex Johnson",
    position: "Co-founder, GreenTech",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    linkedIn:"https://www.linkedin.com/in/alex-johnson-2db7b222/"
  },
];  

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Contributors
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
          A <span className="text-gradient">Heartfelt Thank You</span> to Our Contributors
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Success thrives on the support, guidance, and belief of others, turning small steps into giant leaps.
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden p-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                  <div className="glass-effect rounded-2xl p-6 md:p-10 h-full">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                            <Quote className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{testimonial.author}</h3>
                        <p className="text-text-muted mb-2">{testimonial.position}</p>
                        
                        <div className="flex items-center gap-2">
                          <FaLinkedinIn className="h-4 w-4 text-gray-600" />
                          <a href={testimonial.linkedIn} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <blockquote className="text-xl md:text-xl font-medium italic leading-relaxed text-text-dark">
                          "{testimonial.content}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#resource-hub"
            className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
          >
            Explore Resources
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
