import React from 'react';
import HomeCarousel from './HomeCarousel';
import InfoSection from './InfoSection';
import Products from './Products';
import { useLanguage } from '../context/LanguageProvider';


const Home = () => {
  const { language } = useLanguage(); // get current language

  return (
    <div className="w-full mt-16 lg:mt-28">
      {/* Carousel Section */}
      <div className="max-w-full flex justify-center items-center mx-auto px-4 sm:px-2 lg:px-8">
        <HomeCarousel />
      </div>

      {/* Info Section */}
      <div className="w-full mt-12 mb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5C2C06] mb-6">
          {language === 'EN' ? 'Welcome to Shoun Shourya Oils' : 'शौन शौर्य  मध्ये आपले स्वागत आहे'}
        </h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          {language === 'EN'
            ? 'Our oils are extracted using traditional cold-press techniques to preserve nutrients and deliver pure quality. Explore our range of healthy, natural oils perfect for every household.'
            : 'आमचे तेल पारंपारिक कोल्ड-प्रेस पद्धतीने काढले जाते, ज्यामुळे पोषक तत्व टिकून राहतात आणि शुद्ध दर्जाचे तेल मिळते. प्रत्येक घरासाठी योग्य अशी आमची नैसर्गिक, आरोग्यदायी तेलांची श्रेणी पाहा.'}
        </p>
      </div>

      {/* Info Section Component */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <InfoSection />
      </div>

      {/* Products Section */}
      <div className="w-full mt-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#5C2C06] mb-6">
          {language === 'EN' ? 'Our Products' : 'आमची उत्पादने'}
        </h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;
