import React, { useState } from "react";

const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("whoWeAre");

  const images = {
    whoWeAre: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/group_ywbyd6.jpg",
    mission: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1741500415/mission_hodk04.avif",
    vision: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1739793466/Investor_sqou1w.jpg"
  };

  return (
    <section id="about" className="bg-[#fdfbf6] py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-black">
          About <span className="text-secondary">Us</span>
        </h2>
      </div>
      <div className="flex justify-center gap-8 border-b border-gray-300 pb-5">
        {[
          { key: "whoWeAre", label: "Who we are?" },
          { key: "mission", label: "What’s our Mission?" },
          { key: "vision", label: "What’s our Vision?" }
        ].map((tab) => (
          <button
            key={tab.key}
            className={`text-lg font-semibold pb-2 transition-all duration-300 ${
              activeTab === tab.key
                ? "text-black border-b-4 border-secondary"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-5 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-3/5 text-center md:text-left">
          {activeTab === "whoWeAre" && (
            <div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                At The Startup Wallah, we understand the challenges that startups face in their journey to success. We've created a platform that bridges the gap between innovative ideas and sustainable businesses by providing the resources, connections, and expertise that startups need to thrive.
              </p>
            </div>
          )}
          {activeTab === "mission" && (
            <div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Helping startups thrive through investor connections, learning resources, and expert services. We're committed to democratizing access to the tools and networks that traditionally only privileged founders could access.
              </p>
            </div>
          )}
          {activeTab === "vision" && (
            <div>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
              At The Startup Wallah, our vision is to empower and nurture the next generation of entrepreneurs by transforming groundbreaking ideas into sustainable and thriving businesses. We strive to create a dynamic ecosystem where startups gain access to essential resources, industry connections, and expert guidance. By fostering innovation and collaboration, we aim to bridge the gap between ambition and success, ensuring that every startup has the support it needs to scale, evolve, and make a lasting impact on the world.              </p>
            </div>
          )}
        </div>
        <div className="md:w-2/5 flex justify-center">
          <img
            src={images[activeTab]}
            alt="Illustration"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md object-contain rounded-lg   md:h-40 lg:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;