import React, { useState } from "react";

const ProductCarousel = ({ images = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div
      className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-around 
                 w-full sm:w-[100%] gap-4 sm:gap-6"
    >
      {/* Thumbnail Navigation */}
      <div
        className="flex sm:flex-col p-2 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible
                   w-full sm:w-auto justify-center no-scrollbar"
      >
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer flex-shrink-0 transition-all duration-300 rounded-lg ${
              selectedIndex === index ? "scale-105" : "hover:scale-105"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg border-2 
                ${
                  selectedIndex === index
                    ? "border-[#D8B384] shadow-lg" // 👈 beige border for selected
                    : "border-gray-300 shadow-sm hover:border-[#5C2C06]"
                }`}
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="w-full sm:flex-1 sm:w-full border border-gray-300 rounded-lg flex items-center 
                   justify-center bg-white shadow-lg"
      >
        <img
          src={images[selectedIndex]}
          alt={`Product image ${selectedIndex + 1}`}
          className="w-full h-[45vh] sm:h-[60vh] object-cover rounded-md transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
