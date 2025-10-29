import React from 'react';
import {
  GiPlantRoots,
  GiThermometerScale,
  GiChemicalDrop,
  GiSeedling
} from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';
import { FaLeaf } from 'react-icons/fa';
import { Carousel } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageProvider';

const infoItems = [
  {
    icon: <GiPlantRoots className="text-[#7A9E4F] text-3xl shrink-0" />,
    title: { EN: "100% Natural", MR: "१००% नैसर्गिक" },
    description: {
      EN: "Made with just one high-quality & all-natural ingredient.",
      MR: "फक्त एक उच्च दर्जाचे आणि नैसर्गिक घटक वापरून तयार केलेले."
    }
  },
  {
    icon: <GiThermometerScale className="text-[#D89F3F] text-3xl shrink-0" />,
    title: { EN: "Nutrient-Packed", MR: "पोषक तत्वांनी भरपूर" },
    description: {
      EN: "Extracted below 30°C to keep all natural nutrients intact.",
      MR: "सर्व नैसर्गिक पोषक तत्वे टिकवण्यासाठी ३०°C पेक्षा कमी तापमानावर काढलेले."
    }
  },
  {
    icon: <GiChemicalDrop className="text-[#A66A3C] text-3xl shrink-0" />,
    title: { EN: "No Nasty Additives", MR: "कोणतेही रासायनिक मिश्रण नाही" },
    description: {
      EN: "Free from chemicals, trans fats, artificial colors & preservatives.",
      MR: "रसायने, ट्रान्स फॅट, कृत्रिम रंग व संरक्षकांशिवाय."
    }
  },
  {
    icon: <GiSeedling className="text-[#5C2C06] text-3xl shrink-0" />,
    title: { EN: "Non-GMO", MR: "नॉन-GMO" },
    description: {
      EN: "All our products are from non-GMO seeds, free of artificial interference.",
      MR: "आमची सर्व उत्पादने नॉन-GMO बियांपासून तयार, कृत्रिम हस्तक्षेपाशिवाय."
    }
  },
  {
    icon: <MdVerified className="text-[#7A9E4F] text-3xl shrink-0" />,
    title: { EN: "Farm-to-Table", MR: "शेतातून थेट आपल्या टेबलवर" },
    description: {
      EN: "Sourced directly from trusted farms for unmatched purity.",
      MR: "विश्वासार्ह शेतांमधून थेट मिळवलेले, अतुलनीय शुद्धतेसाठी."
    }
  },
  {
    icon: <FaLeaf className="text-[#4A7C59] text-3xl shrink-0" />,
    title: { EN: "Cold Pressed", MR: "कोल्ड प्रेस्ड प्रक्रिया" },
    description: {
      EN: "Maintains flavor, aroma, and nutrients with traditional cold pressing.",
      MR: "पारंपरिक कोल्ड प्रेस्ड प्रक्रियेमुळे चव, सुगंध आणि पोषकतत्वे टिकून राहतात."
    }
  }
];

const InfoSection = () => {
  const { language } = useLanguage();

  return (
    <section className="w-full px-4 font-poppins sm:px-6 lg:px-8 py-8 bg-[#F5F2E7]">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Desktop & Tablet View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {infoItems.map((item, i) => (
            <article
              key={i}
              className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-start gap-4"
            >
              {item.icon}
              <div className="flex flex-col justify-center">
                <h4 className="text-base font-semibold text-[#5C2C06]">
                  {item.title[language]}
                </h4>
                <p className="text-sm text-[#3F3F3F] leading-relaxed">
                  {item.description[language]}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Mobile View Carousel */}
        <div className="block md:hidden">
          <Carousel interval={3000} indicators={false}>
            {infoItems.map((item, i) => (
              <Carousel.Item key={i}>
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start justify-center gap-4 text-center min-h-[250px]">
                  <div className="flex justify-center w-full">{item.icon}</div>
                  <h4 className="text-base font-semibold text-[#5C2C06]">
                    {item.title[language]}
                  </h4>
                  <p className="text-sm text-[#3F3F3F] leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
