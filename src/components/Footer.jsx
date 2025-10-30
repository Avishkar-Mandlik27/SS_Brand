import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaFacebook } from 'react-icons/fa';
import logo from '../assets/SS_Logo.png';
import { useLanguage } from '../context/LanguageProvider';

const Footer = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  // 🔤 English + Marathi text map
  const text = {
    EN: {
      brandName1: "SHOUN",
      brandName2: "SHOURYA",
      tagline: "Purely Traditional, Naturally Premium",
      brandLine1: "Shoun Shourya Edible Oils",
      brandLine2: "~ Pure. Nutritious. Naturally Yours.",
      about: "At Shoun Shourya, we believe that good health begins in your kitchen. Our range of cold-pressed and refined edible oils are crafted to deliver purity, nutrition, and the authentic taste of nature — straight from farm to table.",
      ourProducts: "OUR PRODUCTS",
      quickLinks: "QUICK LINKS",
      contact: "GET IN TOUCH",
      phone: "Phone",
      email: "Email",
      address: "Address",
      copyright: "© 2025 Shoun Shourya. All rights reserved.",
      designed: "Designed By:",
    },
    MR: {
      brandName1: "शौन",
      brandName2: "शौर्य",
      tagline: "पूर्णपणे पारंपरिक, नैसर्गिकपणे उत्कृष्ट",
      brandLine1: "शौन शौर्य खाद्यतेल",
      brandLine2: "~ शुद्ध. पौष्टिक. नैसर्गिकपणे तुमचे.",
      about: "शौन शौर्या येथे आम्ही मानतो की उत्तम आरोग्य तुमच्या स्वयंपाकघरातून सुरू होते. आमची कोल्ड-प्रेस्ड आणि रिफाइंड खाद्यतेलांची श्रेणी शुद्धता, पौष्टिकता आणि निसर्गाचा खरा स्वाद देण्यासाठी तयार केली आहे — थेट शेतातून तुमच्या जेवणात.",
      ourProducts: "आमची उत्पादने",
      quickLinks: "त्वरित दुवे",
      contact: "संपर्क साधा",
      phone: "फोन",
      email: "ईमेल",
      address: "पत्ता",
      copyright: "© २०२५ शौन शौर्य. सर्व हक्क राखीव.",
      designed: "डिझाइन:",
    },
  };

  const t = text[language];

  const products = language === "EN"
    ? ['🌾 Cold-Pressed Groundnut Oil', '🌻 Sunflower Oil', '🌴 Coconut Oil', '🌾 Mustard Oil', '🌿 Sesame (Til) Oil', '🍃 Blended Cooking Oils']
    : ['🌾 कोल्ड-प्रेस्ड शेंगदाणा तेल', '🌻 सूर्यफूल तेल', '🌴 नारळ तेल', '🌾 मोहरी तेल', '🌿 तीळ तेल', '🍃 मिश्र स्वयंपाक तेल'];

  const quickLinks = language === "EN"
    ? [['About Us', '/about'], ['Contact Us', '/contact'], ['Quality Assurance', '/quality'], ['Privacy Policy', null]]
    : [['आमच्याबद्दल', '/about'], ['संपर्क', '/contact'], ['गुणवत्ता हमी', '/quality'], ['गोपनीयता धोरण', null]];

  return (
    <footer className="w-full mt-[5vh] overflow-x-hidden font-poppins">
      <div className="w-full px-[2vw] md:px-[4vw] lg:px-[6vw] pt-[1vh] pb-[2vh]">

        {/* 🔶 Logo + Brand Name */}
        <div className="mb-[2vh] flex justify-center items-center space-x-3">
          <img
            src={logo}
            alt="Shoun Shourya Logo"
            className="h-[8vh] md:h-[10vh] w-auto transition-all duration-300 cursor-pointer hover:opacity-80"
            onClick={() => handleNavigation('/')}
          />

          {/* 🔠 Brand Text (Language Adaptive) */}
          {/* 🔠 Brand Text (Language Adaptive) */}
          <div
            className="flex flex-col items-start mt-4 leading-tight"
            style={{ fontFamily: "'Ancizar Serif', serif" }}
          >
            {language === "EN" ? (
              <div className="flex items-end">
                <span className="text-[#5C2C06] font-bold text-[1.7rem] relative -top-[3px]">
                  {t.brandName1.charAt(0)}
                </span>
                <span className="text-[#5C2C06] font-bold text-lg sm:text-xl relative -top-[4px] ml-[1px]">
                  {t.brandName1.slice(1)}
                </span>

                <span className="text-[#5C2C06] font-bold text-[1.7rem] ml-2 relative top-[3px]">
                  {t.brandName2.charAt(0)}
                </span>
                <span className="text-[#5C2C06] font-bold text-lg sm:text-xl relative top-[2px] ml-[1px]">
                  {t.brandName2.slice(1)}
                </span>
              </div>
            ) : (
              // Marathi or other Indic scripts — render as one block
              <div className="flex items-end space-x-2">
                <span className="text-[#5C2C06] font-poppins font-semibold text-xl relative -top-[4px] sm:text-2xl">
                  {t.brandName1}
                </span>
                <span className="text-[#5C2C06] font-poppins font-semibold text-xl relative top-[3px] sm:text-2xl">
                  {t.brandName2}
                </span>
              </div>
            )}

            {/* Tagline (Language Adaptive) */}
            <p className="text-[#A66A3C] mb-0 font-poppins font-semibold italic text-xs sm:text-sm mt-[0.3vh] tracking-wide">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-[4vh] gap-x-[4vw] w-full">
          {/* Brand Message */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <p className="text-[#5C2C06] mb-0 mt-1 font-semibold text-sm leading-tight">{t.brandLine1}</p>
            <p className="text-[#5C2C06] mb-0 text-xs italic font-semibold leading-snug">{t.brandLine2}</p>

            {/* Social Icons */}
            <div className="flex space-x-[1vw] items-center mt-[1vh]">
              <BsWhatsapp
                className="cursor-pointer text-[#25D366] hover:scale-110 transition-all duration-300 text-lg"
                onClick={() => window.open('https://wa.me/message/TIQND33M5EZTH1', '_blank')}
                title="WhatsApp"
              />
              <BsInstagram
                className="cursor-pointer text-[#E4405F] hover:scale-110 transition-all duration-300 text-lg"
                onClick={() => window.open('https://www.instagram.com/shounshourya', '_blank')}
                title="Instagram"
              />
              <FaFacebook
                className="cursor-pointer text-[#1877F2] hover:scale-110 transition-all duration-300 text-lg"
                onClick={() => window.open('https://www.facebook.com/shounshourya', '_blank')}
                title="Facebook"
              />
            </div>

            <p className="text-[#5C2C06] text-xs text-start md:text-sm leading-relaxed max-w-[30vw] mt-[1vh]">
              {t.about}
            </p>
          </div>

          {/* Our Products */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-[0.5vh]">
            <h3 className="text-[#5C2C06] font-semibold text-sm sm:text-base mb-[1vh]">{t.ourProducts}</h3>
            {products.map((p, i) => (
              <p
                key={i}
                onClick={() => handleNavigation('/products')}
                className="text-[#5C2C06] text-xs sm:text-sm font-medium cursor-pointer hover:text-[#D89F3F] transition-colors duration-200"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-[0.5vh]">
            <h3 className="text-[#5C2C06] font-semibold text-sm sm:text-base mb-[1vh]">{t.quickLinks}</h3>
            {quickLinks.map(([label, path], i) => (
              <p
                key={i}
                onClick={() => path && handleNavigation(path)}
                className="text-[#5C2C06] text-xs sm:text-sm font-medium cursor-pointer hover:text-[#D89F3F] transition-colors duration-200"
              >
                {label}
              </p>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-[1vh]">
            <h3 className="text-[#5C2C06] font-semibold text-sm sm:text-base mb-[1vh]">{t.contact}</h3>
            <div className="space-y-[0.5vh]">
              <div className="flex items-center justify-center lg:justify-start space-x-[1vw]">
                <span className="text-[#7A9E4F]">📞</span>
                <div className="flex flex-col lg:items-start items-center">
                  <a href="tel:+918669110791" className="text-[#5C2C06] text-xs hover:text-[#D89F3F] block">
                    (+91) 86691 10791
                  </a>
                  <a href="tel:+918600787934" className="text-[#5C2C06] text-xs hover:text-[#918a7d]">
                    (+91) 86007 87934
                  </a>
                </div>
              </div>

              <div className="flex lg:justify-start justify-center space-x-[1vw]">
                <span className="text-[#7A9E4F]">✉️</span>
                <div className="flex flex-col lg:items-start items-center">
                  <a href="mailto:info@shounshourya.com" className="text-[#5C2C06] text-xs hover:text-[#D89F3F] block">
                    info@shounshourya.com
                  </a>
                  <a href="mailto:support@shounshourya.com" className="text-[#5C2C06] text-xs hover:text-[#D89F3F]">
                    support@shounshourya.com
                  </a>
                </div>
              </div>

              <div className="flex lg:justify-start items-center">
                <span className="text-[#7A9E4F]">📍</span>
                <p className="text-[#5C2C06] ml-3 mb-0 text-start text-xs">
                  Shoun Shourya Pvt. Ltd., Pune, Maharashtra - 411046
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="w-full bg-[#5C2C06]">
        <div className="flex flex-col sm:flex-row justify-between items-center 
    px-[2vw] md:px-[4vw] lg:px-[6vw] py-[2vh] 
    text-center sm:text-left space-y-[1vh] sm:space-y-0 text-[#F5F2E7]">

          {/* Copyright */}
          <p className="font-semibold text-xs sm:text-sm">
            {t.copyright}
          </p>

          {/* Designed By Section */}
          <div
            className="flex items-center justify-center space-x-2 px-4 py-2 
      rounded-full bg-[#F5F2E7] text-[#5C2C06] border border-[#F5F2E7] 
      shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => window.open('https://zerlak.com/', '_blank')}
          >
            <span className="font-semibold text-sm">
              {t.designed}
            </span>
            <span
              className="text-lg font-extrabold bg-gradient-to-r from-[#D89F3F] via-[#E8C57A] to-[#D89F3F] 
        bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(216,159,63,0.5)] 
        hover:drop-shadow-[0_0_10px_rgba(232,197,122,0.8)] 
        transition-all duration-500 transform hover:scale-110" style={{ fontFamily: "'Ancizar Serif', serif" }}
            >
              Zerlak
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
