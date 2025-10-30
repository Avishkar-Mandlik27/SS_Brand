import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ProductCarousel from "./ProductCarousel";
import ProductReviews from "./ProductReviews";
import { useLanguage } from "../context/LanguageProvider";
import WhatsAppDiv from "./WhatsAppDiv";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const product = state?.product;

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    product: product ? product.name[language] : "",
    quantity: 1,
    size: Object.keys(product?.price || {})[0] || "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzYhWruK8x2daGTHLbpQ7SXbtqo3t-m1ZL5d-0iOJoXwR7XRNBZmydNm02E-xbTpvUo/exec";

  // Resize watcher
  useEffect(() => {
    const handleResize = () => {
      const currentlyMobile = window.innerWidth < 640;
      setIsMobile(currentlyMobile);
      if (!currentlyMobile) setShowMore(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Price update
  useEffect(() => {
    const unitPrice =
      Number(product?.price?.[formState.size]?.replace(/[^\d.]/g, "")) || 0;
    setTotalPrice(unitPrice * formState.quantity);
  }, [formState.quantity, formState.size, product]);

  // Update product name on language change
  useEffect(() => {
    if (product) {
      setFormState((prev) => ({
        ...prev,
        product: product.name[language],
      }));
    }
  }, [language, product]);

  // ---------------- HANDLERS ----------------
  // Handle field changes with validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      setFormState((prev) => ({ ...prev, phone: digits }));
      if (!/^[5-9]\d{9}$/.test(digits)) {
        setErrors((prev) => ({
          ...prev,
          phone:
            language === "EN"
              ? "Enter valid 10-digit Indian number starting with 5–9."
              : "5–9 ने सुरू होणारा वैध 10 अंकी क्रमांक टाका.",
        }));
      } else setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormState((prev) => ({ ...prev, email: value }));
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : language === "EN"
            ? "Enter a valid email address."
            : "वैध ईमेल पत्ता टाका.",
      }));
      return;
    }

    if (name === "pincode") {
      const digits = value.replace(/\D/g, "");
      setFormState((prev) => ({ ...prev, pincode: digits }));
      if (!/^\d{6}$/.test(digits)) {
        setErrors((prev) => ({
          ...prev,
          pincode:
            language === "EN"
              ? "Enter valid 6-digit pincode."
              : "वैध 6-अंकी पिनकोड टाका.",
        }));
      } else setErrors((prev) => ({ ...prev, pincode: "" }));
      return;
    }

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantity = (type) => {
    setFormState((prev) => ({
      ...prev,
      quantity:
        type === "inc" ? prev.quantity + 1 : Math.max(1, prev.quantity - 1),
    }));
  };

  // Submit (ContactUs-style)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (
      !formState.name ||
      !formState.phone ||
      !formState.email ||
      !formState.address ||
      !formState.pincode
    ) {
      setErrors((prev) => ({
        ...prev,
        form:
          language === "EN"
            ? "All fields are required."
            : "सर्व फील्ड भरणे आवश्यक आहे.",
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // 🧾 Add form fields
      Object.entries(formState).forEach(([key, val]) =>
        formData.append(key, val)
      );

      // 🛍️ Add product details explicitly
      if (product) {
        formData.append("product_name", product.name[language]);
        formData.append("product_size", formState.size);
        formData.append("product_quantity", formState.quantity);
        formData.append("product_total", totalPrice.toFixed(2));
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setSubmitStatus("success");
        setFormState({
          name: "",
          phone: "",
          email: "",
          product: product ? product.name[language] : "",
          quantity: 1,
          size: "500ml",
          address: "",
          pincode: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Star rating render
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-500" />);
      else if (rating >= i - 0.5)
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
    return stars;
  };

  // ---------------- RENDER ----------------
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-2 font-poppins">
        <p className="text-xl text-[#5C2C06] font-semibold mb-4">
          {language === "EN" ? "Product not found." : "उत्पादन आढळले नाही."}
        </p>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-[#FFD54F] text-[#5C2C06] rounded hover:bg-black hover:text-white transition"
        >
          {language === "EN" ? "Go Back" : "मागे जा"}
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border px-3 py-2 rounded focus:ring-2 focus:ring-[#5C2C06] outline-none text-sm sm:text-base transition";

  const translatedName = product.name[language];
  const translatedProcess = product.process?.[language];
  const translatedBenefits = Array.isArray(product.benefits?.[language])
    ? product.benefits[language]
    : product.benefits?.[language]
      ?.split("•")
      .map((b) => b.trim())
      .filter(Boolean);

  const visibleBenefits =
    isMobile && !showMore ? translatedBenefits?.slice(0, 1) : translatedBenefits;

  return (
    <section className="min-h-screen mt-16 pt-8 pb-10 sm:pt-16 font-poppins">
      <WhatsAppDiv />
      <div className="flex flex-col lg:flex-row justify-around w-full px-4 gap-8">
        {/* 🖼️ Product Carousel + Process */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          <ProductCarousel
            images={product.image?.length ? product.image : ["/fallback.jpg"]}
          />

          {translatedProcess && (
            <div className="hidden lg:block bg-[#FFFDF8] p-4 rounded-lg shadow-md text-gray-800">
              <p className="font-semibold text-[#5C2C06] mb-1">
                {language === "EN" ? "Process:" : "प्रक्रिया:"}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                {Array.isArray(translatedProcess)
                  ? translatedProcess.map((p, i) => <li key={i}>{p}</li>)
                  : translatedProcess
                    .split("•")
                    .map((p, i) => <li key={i}>{p.trim()}</li>)}
              </ul>
            </div>
          )}
        </div>

        {/* 📦 Product Details + Form */}
        <div className="w-full lg:w-[45%] lg:mt-0 sm:mt-4">
          <div className="p-3 sm:p-6 rounded-lg shadow-md text-left space-y-4 bg-[#FFFDF8]">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#5C2C06]">
              {translatedName}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
              {Object.entries(product.price || {}).map(([size, price]) => (
                <p key={size}>
                  {size}: {price}
                </p>
              ))}
            </div>


            {/* 🌿 Benefits Section */}
            {translatedBenefits && (
              <div className="rounded-lg text-gray-800">
                <p className="font-semibold text-[#5C2C06] mb-1">
                  {language === "EN" ? "Benefits:" : "फायदे:"}
                </p>
                <ul className="list-disc ml-6 space-y-1 text-sm sm:text-base">
                  {visibleBenefits?.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
                {isMobile && translatedBenefits?.length > 1 && (
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="flex items-center gap-2 text-[#5C2C06] mt-2 text-sm font-semibold underline"
                  >
                    <span>
                      {showMore
                        ? language === "EN"
                          ? "Show Less"
                          : "कमी दाखवा"
                        : language === "EN"
                          ? "Show More"
                          : "अधिक दाखवा"}
                    </span>
                    {showMore ? (
                      <FaChevronUp className="text-[#5C2C06] animate-smooth-bounce" />
                    ) : (
                      <FaChevronDown className="text-[#5C2C06] animate-smooth-bounce" />
                    )}
                  </button>
                )}

              </div>
            )}

            <div className="flex items-center space-x-1">
              {renderStars(product.rating)}
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating})
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-semibold">
                {language === "EN" ? "Storage Tip:" : "साठवण सूचना:"}
              </span>{" "}
              {language === "EN"
                ? "Store in a cool, dry place away from sunlight."
                : "थंड, कोरड्या जागेत सूर्यप्रकाशापासून दूर ठेवा."}
            </p>
          </div>

          {/* 🧾 Order Form */}
          <form
            id="orderForm"
            onSubmit={handleSubmit}
            className="space-y-4 bg-white mt-4 p-5 sm:p-6 rounded-lg shadow-md"
          >
            <input
              type="text"
              value={translatedName}
              readOnly
              className="w-full border px-4 py-2 rounded bg-gray-100 text-gray-700 text-sm sm:text-base"
            />

            {/* Size */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                {language === "EN" ? "Select Size" : "आकार निवडा"}
              </label>
              <div className="flex flex-wrap gap-6">
                {Object.keys(product.price || {}).map((size) => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={formState.size === size}
                      onChange={handleChange}
                      className="accent-[#5C2C06]"
                    />
                    <span className="text-gray-700 text-sm sm:text-base">
                      {size} – {product.price[size]}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  {language === "EN" ? "Quantity" : "प्रमाण"}
                </label>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => handleQuantity("dec")}
                    className="px-3 py-1 bg-[#FFD54F] text-[#5C2C06] rounded hover:bg-black hover:text-white transition"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border rounded">
                    {formState.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQuantity("inc")}
                    className="px-3 py-1 bg-[#FFD54F] text-[#5C2C06] rounded hover:bg-black hover:text-white transition"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  {language === "EN" ? "Total Price" : "एकूण किंमत"}
                </label>
                <p className="text-lg font-semibold text-[#5C2C06]">
                  ₹{totalPrice.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Other Inputs */}
            <input
              type="text"
              name="name"
              placeholder={language === "EN" ? "Your Name" : "तुमचे नाव"}
              value={formState.name}
              onChange={handleChange}
              className={inputClass}
            />

            <div className="flex">
              <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l text-gray-700">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                placeholder={
                  language === "EN" ? "10-digit number" : "10-अंकी क्रमांक"
                }
                value={formState.phone}
                onChange={handleChange}
                className={`${inputClass} rounded-l-none`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}

            <textarea
              name="address"
              placeholder={language === "EN" ? "Address" : "पत्ता"}
              value={formState.address}
              onChange={handleChange}
              className={inputClass}
              rows="3"
            />

            <input
              type="text"
              name="pincode"
              placeholder={language === "EN" ? "Pincode" : "पिनकोड"}
              value={formState.pincode}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.pincode && (
              <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-4 py-2 rounded text-white transition ${isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5C2C06] hover:bg-black"
                }`}
            >
              {isSubmitting
                ? language === "EN"
                  ? "Submitting..."
                  : "सबमिट करत आहे..."
                : language === "EN"
                  ? "Submit Order"
                  : "ऑर्डर सबमिट करा"}
            </button>

            {submitStatus === "success" && (
              <p className="text-green-600 text-sm mt-2">
                {language === "EN"
                  ? "Order submitted successfully!"
                  : "ऑर्डर यशस्वीपणे सबमिट झाली!"}
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-sm mt-2">
                {language === "EN"
                  ? "Something went wrong. Please try again."
                  : "काहीतरी चूक झाली. पुन्हा प्रयत्न करा."}
              </p>
            )}
          </form>

          {/* 📋 Process for Mobile */}
          {translatedProcess && (
            <div className="lg:hidden bg-[#FFFDF8] p-4 rounded-lg shadow-md text-gray-800 mt-10">
              <p className="font-semibold text-[#5C2C06] mb-1">
                {language === "EN" ? "Process:" : "प्रक्रिया:"}
              </p>
              <ul className="list-disc ml-6 space-y-1">
                {Array.isArray(translatedProcess)
                  ? translatedProcess.map((p, i) => <li key={i}>{p}</li>)
                  : translatedProcess
                    .split("•")
                    .map((p, i) => <li key={i}>{p.trim()}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ⭐ Reviews Section */}
      <div className="mt-6 p-3 sm:p-4 bg-[#FFFDF8] border border-[#E5D8B8] rounded-md shadow-sm max-w-sm mx-auto">
        <h2 className="text-lg sm:text-xl font-semibold text-[#5C2C06] mb-2 text-center">
          {language === "EN" ? "Customer Reviews" : "ग्राहक पुनरावलोकने"}
        </h2>
        <ProductReviews reviews={product.reviews} />
      </div>

    </section>
  );
};

export default ProductDetails;
