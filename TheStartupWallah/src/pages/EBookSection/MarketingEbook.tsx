import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

interface Ebook {
    id: number;
    name: string;
    link: string;
    icon: string; // Assuming you're using an icon instead of an image
}

const ebooks: Ebook[] = [
    { id: 1, name: "Marketing Techniques (ATL-BTL-TTL)", link: "https://example.com/marketing-techniques.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 2, name: "AARRR Framework", link: "https://example.com/aarrr-framework.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 3, name: "B2B Marketing Strategy", link: "https://example.com/b2b-marketing-strategy.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 4, name: "Barter System in Marketing", link: "https://example.com/barter-system.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 5, name: "Business Models (B2B, B2C, B2G and more)", link: "https://example.com/business-models.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 6, name: "Building Customer Loyalty", link: "https://example.com/building-customer-loyalty.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 7, name: "4 Step Formula for Strategic Execution", link: "https://example.com/strategic-execution.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 8, name: "7 Marketing Strategies", link: "https://example.com/marketing-strategies.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 9, name: "Moment Marketing", link: "https://example.com/moment-marketing.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 10, name: "The Power of Cross Promotion", link: "https://example.com/cross-promotion.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 11, name: "The Ultimate Guide to Guerrilla Marketing", link: "https://example.com/guerrilla-marketing.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 12, name: " Tradtional Marketing v/s Zero Marketing", link: "https://example.com/guerrilla-marketing.pdf", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
];

const MarketingEbook: React.FC = () => {
    return (
        <>
           <Navbar/>
            <div id="marketing" className="bg-gray-100 px-4 sm:px-6 py-8 mt-[70px]">
                <h1 className="text-4xl font-bold mb-3 text-primary text-center">Marketing E-books</h1>
                <p className="text-lg text-gray-700 text-center max-w-5xl mx-auto mb-6 text-justify">
                    Just as petrol powers your car, marketing books fuel your business with the knowledge and strategies needed to reach your goals.
                </p>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
                    {ebooks.map((ebook) => (
                        <div key={ebook.id} className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center border border-secondary hover:shadow-xl" >
                            <img src={ebook.icon} alt={ebook.name} className="w-20 h-20 mb-4" />
                            <h2 className="text-md font-semibold mb-2">{ebook.name}</h2>
                            <a
                                href={ebook.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary/90 transition"
                            >
                                Download 
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <CallToAction/>
            <Footer/>
        </>
    );
};

export default MarketingEbook;
