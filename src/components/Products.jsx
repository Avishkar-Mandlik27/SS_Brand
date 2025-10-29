import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageProvider";
import { useProducts } from "../context/ProductsContext";

const Products = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { products } = useProducts(); // ✅ get from context
  const previewProducts = products.slice(0, 3);

  return (
    <section className="min-h-screen pt-12 pb-12 px-6 md:px-12">
      <h2 className="text-center font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl text-[#5C2C06] mb-10 tracking-wide">
        {language === "EN"
          ? "Our Premium Edible Oils"
          : "आमची दर्जेदार खाद्य तेलांची श्रेणी"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {previewProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <span
          onClick={() => navigate("/products")}
          className="text-2xl font-poppins font-semibold text-[#5C2C06] cursor-pointer animate-bounce hover:text-black transition-colors duration-300"
          style={{ transform: "rotate(90deg)" }}
        >
          {language === "EN" ? "More »" : "अधिक »"}
        </span>
      </div>
    </section>
  );
};

export default Products;
