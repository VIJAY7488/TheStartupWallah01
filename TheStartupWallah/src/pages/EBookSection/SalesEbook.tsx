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
    { id: 1, name: "B2B Sales Strategy", link: "https://drive.google.com/file/d/1RBHQ6BaFggolRuBlzlOEiX9-ONyOJDhj/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 2, name: "Building Customer Loyality", link: "https://drive.google.com/file/d/1CRr1HpygTYGPYM1fNKO6w6iGsTAYvznh/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 3, name: "Cold Call strategy for D2C brand", link: "https://drive.google.com/file/d/1haqkC25wse_VeO59r5wC1Ki6tePLNUT6/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 4, name: "Four Step Formula for Strategic Execution", link: "https://drive.google.com/file/d/17za8vAAMcyUlR2aYpJoHgs_IK-RXDrfJ/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
    { id: 5, name: "Customer Centric Sales", link: "https://drive.google.com/file/d/1ooylKS6R-WWSv-b35P2nBL4qY0VtW61j/view?usp=sharing", icon: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741453306/pngtree-book-icon-vector-image-png-image_6552370_zlgvdc.png" },
];

const SalesEbook: React.FC = () => {
    return (
        <>
           <Navbar/>
            <div id="marketing" className="bg-gray-100 px-4 sm:px-6 py-8 mt-[70px]">
                <h1 className="text-4xl font-bold mb-3 text-primary text-center">Sales E-books</h1>
                <p className="text-lg text-gray-700 text-center max-w-5xl mx-auto mb-6 text-justify">
                    Just as petrol powers your car, sales books fuel your business with the knowledge and strategies needed to reach your goals.
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

export default SalesEbook;
