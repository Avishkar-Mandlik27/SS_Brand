import React from "react";
import HomeCarousel from "./HomeCarousel";
import InfoSection from "./InfoSection";
import Products from "./Products";
import { useLanguage } from "../context/LanguageProvider";
import WhatsAppDiv from "./WhatsAppDiv";

const Home = () => {
  const { language } = useLanguage();

  return (
    <div className="w-full mt-12 lg:mt-24 font-poppins">
      <WhatsAppDiv />

      {/* Carousel */}
      <div className="flex justify-center items-center w-full px-4">
        <HomeCarousel />
      </div>

      {/* Welcome Section */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5C2C06] mb-4">
          {language === "EN"
            ? "Welcome to Shoun Shourya Oils"
            : "शौन शौर्य मध्ये आपले स्वागत आहे"}
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
          {language === "EN"
            ? "Our oils are made using traditional cold-press methods for natural purity and quality."
            : "आमचे तेल पारंपारिक कोल्ड-प्रेस पद्धतीने तयार केले जाते, नैसर्गिक शुद्धता आणि दर्जासाठी."}
        </p>
      </div>

      {/* Old is Gold Section */}
      <div className="bg-[#5C2C06] text-[#FFD700] text-center py-10 mt-16 rounded-2xl mx-4">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          {language === "EN" ? "Old is Gold" : "जुने ते सोनं"}
        </h3>
        <p className="text-[#F8E9C1] text-sm sm:text-base mt-2">
          {language === "EN"
            ? "Timeless purity, trusted tradition."
            : "कालातीत शुद्धता, पारंपारिक विश्वास."}
        </p>
      </div>

      {/* Info Section */}
      <div className="mt-12 px-4">
        <InfoSection />
      </div>

      {/* Products Section */}
      <div className="mt-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#5C2C06] mb-6">
          {language === "EN" ? "Our Products" : "आमची उत्पादने"}
        </h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;
