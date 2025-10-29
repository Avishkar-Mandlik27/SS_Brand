import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageProvider";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();


  console.log(product);
  

  // ⭐ Generate stars dynamically
  const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-[#D89F3F]" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-[#D89F3F]" />);
      else stars.push(<FaRegStar key={i} className="text-[#D89F3F]" />);
    }
    return stars;
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
      className="bg-[#FFF8E7] cursor-pointer rounded-xl shadow-md shadow-[#A66A3C]/30 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col items-center"
    >
      {/* Product Image */}
      <div className="w-full h-72 md:h-96 bg-[#FFF3D8] flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name[language.toUpperCase()]}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-center mt-3 md:mt-4 space-y-1">
        <p className="text-sm font-poppins text-gray-500 tracking-wide uppercase">
          {language.toUpperCase() === "EN" ? "Shoun Shourya Store" : "शौन शौर्य स्टोअर"}
        </p>

        <h3 className="text-[#5C2C06] font-poppins text-base md:text-2xl">
          {product.name[language.toUpperCase()]}
        </h3>

        <p className="text-sm font-poppins md:text-base text-gray-600">
          {Object.entries(product.price)
            .map(([ml, price]) => `${ml}: ${price}`)
            .join(" / ")}
        </p>

        <div className="flex justify-center items-center space-x-1 mt-1">
          {getStars(product.rating)}
        </div>

        <button
          onClick={handleBuyNow}
          className="mt-3 mb-3 font-poppins font-semibold bg-[#FFD54F] text-[#5C2C06] text-sm tracking-widest py-2 px-4 md:px-6 rounded-md shadow-md hover:bg-black hover:text-white transition-all duration-500 uppercase"
        >
          {language.toUpperCase() === "EN" ? "Buy Now" : "आता खरेदी करा"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
