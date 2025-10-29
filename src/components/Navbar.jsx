import React, { useState } from 'react';
import logo from '../assets/SS_Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // Global state

  const menuItems = [
    { label: language === 'EN' ? "Home" : "मुखपृष्ठ", path: "/home" },
    { label: language === 'EN' ? "Products" : "उत्पादने", path: "/products" },
    { label: language === 'EN' ? "Blogs" : "ब्लॉग्स", path: "/blogs" },
    { label: language === 'EN' ? "Contact Us" : "संपर्क करा", path: "/contact" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#E6DCC9]/90 backdrop-blur-md shadow-lg shadow-[#A66A3C]/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 md:py-3">
        {/* Left: Logo */}
        <div className="flex h-full items-center">
          <a href="/home">
            <img
              src={logo}
              alt="Logo"
              className="h-12 md:h-16 lg:h-20 w-auto transition-all duration-300 cursor-pointer"
            />
          </a>
        </div>

        {/* Right: Menu + Toggle */}
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg mb-0 font-medium text-[#5C2C06]">
            {menuItems.map((item, i) => (
              <li key={i} className="relative font-poppins font-semibold group">
                <a
                  href={item.path}
                  className="text-[#5C2C06] no-underline tracking-wide transition-colors duration-300 group-hover:text-[#D89F3F] relative inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#D89F3F] transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* 🔤 Language Toggle (Sliding Switch) */}
          <div
            onClick={toggleLanguage}
            className="relative w-16 h-8 bg-[#CBB89D] rounded-full cursor-pointer flex items-center p-1 transition-all duration-300 hover:bg-[#BBA17E]"
          >
            <div
              className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-[#7A9E4F] transform transition-all duration-300 ${
                language === 'MR' ? 'translate-x-8 bg-[#D89F3F]' : ''
              }`}
            ></div>
            <span className={`absolute left-2 text-xs font-semibold ${language === 'MR' ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
              EN
            </span>
            <span className={`absolute right-2 text-xs font-semibold ${language === 'MR' ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              MR
            </span>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-2xl cursor-pointer text-[#7A9E4F]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#F5F2E7]/95 backdrop-blur-md w-full text-center space-y-4 pb-4 shadow-md shadow-[#A66A3C]/30">
          {menuItems.map((item, i) => (
            <li key={i} className="relative group">
              <a
                href={item.path}
                className="text-[#5C2C06] font-poppins font-semibold no-underline tracking-wide transition-colors duration-300 group-hover:text-[#D89F3F] relative inline-block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#D89F3F] transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
