import React from "react";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageProvider";
import { useProducts } from "../context/ProductsContext"; // ✅

const ProductGrid = () => {
  const { language } = useLanguage();
  const { products } = useProducts(); // ✅ get from context

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 md:px-12 bg-[#FFF8E7] font-poppins">
      <h2 className="text-3xl md:text-4xl font-bold text-[#5C2C06] text-center mb-12">
        {language === "EN" ? "Explore Our Oils" : "आमच्या शुद्ध तेलांचा अनुभव घ्या"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
