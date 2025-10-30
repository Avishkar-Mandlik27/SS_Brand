import React, { useState } from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import contactBanner from "../assets/banner1.jpg";
import { useLanguage } from "../context/LanguageProvider";
import WhatsAppDiv from "./WhatsAppDiv";

const ContactUs = () => {
  const { language } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxE-Vsk31RYSYiIYZTQ_4lF53B0_QzQK_uxzofPpQEJzQTpD0ltx-_GJXLQ2oQ2EZCJeg/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10) digits = digits.slice(0, 10);
      if (digits.length > 0 && !/^[5-9]/.test(digits)) {
        setErrors((prev) => ({
          ...prev,
          phone:
            language === "EN"
              ? "Phone number must start with digits 5–9."
              : "फोन नंबर ५ ते ९ या अंकाने सुरू झाला पाहिजे.",
        }));
      } else setErrors((prev) => ({ ...prev, phone: "" }));
      setFormState((prev) => ({ ...prev, phone: "+91" + digits }));
    } else setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim())
      newErrors.name =
        language === "EN" ? "Name is required." : "नाव आवश्यक आहे.";
    if (!formState.email.trim()) {
      newErrors.email =
        language === "EN" ? "Email is required." : "ईमेल आवश्यक आहे.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email =
        language === "EN" ? "Enter a valid email." : "वैध ईमेल टाका.";
    }
    if (!formState.phone.trim() || formState.phone.length !== 13)
      newErrors.phone =
        language === "EN"
          ? "Enter valid 10-digit phone with +91."
          : "+91 सह वैध 10 अंकी फोन नंबर टाका.";
    if (!formState.subject.trim())
      newErrors.subject =
        language === "EN" ? "Subject is required." : "विषय आवश्यक आहे.";
    if (!formState.message.trim())
      newErrors.message =
        language === "EN"
          ? "Message cannot be empty."
          : "संदेश रिकामा असू शकत नाही.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, val]) =>
        formData.append(key, val)
      );

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setSubmitStatus("success");
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else setSubmitStatus("error");
    } catch (err) {
      console.error("Error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 bg-[#FFFDF8] text-[#4A2C06] font-poppins">

      <WhatsAppDiv/>

      {/* 🖼️ Banner */}
      <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] overflow-hidden border-b-2 border-[#E5D8B8]">
        <img
          src={contactBanner}
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
            {language === "EN" ? "Contact Us" : "संपर्क करा"}
          </h1>
          <p className="text-amber-200 text-lg mt-3 tracking-wide">
            {language === "EN"
              ? "We’d love to hear from you!"
              : "आम्हाला तुमच्याशी बोलायला आनंद होईल!"}
          </p>
        </div>
      </div>

      {/* 💬 Contact Section */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-start px-6 sm:px-12 md:px-20 py-16 gap-10">
        {/* 🏢 Right Side - Info */}
        <div className="w-full md:w-[40%] bg-[#FFF7E8] border border-[#E5D8B8] rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-[#5C2C06] mb-2">
            {language === "EN" ? "Our Contact Information" : "आमची संपर्क माहिती"}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {language === "EN"
              ? "Have questions or feedback? We're here to help you. Contact us anytime and we’ll respond soon."
              : "काही प्रश्न किंवा अभिप्राय आहे का? आम्ही मदतीसाठी येथे आहोत. आमच्याशी संपर्क साधा आणि आम्ही लवकरच उत्तर देऊ."}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EADBC0] rounded-full shadow-md">
                <MdLocationPin className="text-[#5C2C06] text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-[#5C2C06] text-lg mb-1">
                  {language === "EN" ? "Address" : "पत्ता"}
                </h4>
                <p className="text-gray-700 font-medium">
                  Shoun Shourya Pvt. Ltd., Pune - 411046
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EADBC0] rounded-full shadow-md">
                <MdEmail className="text-[#5C2C06] text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-[#5C2C06] text-lg mb-1">
                  {language === "EN" ? "Email" : "ईमेल"}
                </h4>
                <a
                  href="mailto:info@shounshourya.com"
                  className="text-orange-700 no-underline block"
                >
                  info@shounshourya.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#EADBC0] rounded-full shadow-md">
                <MdPhone className="text-[#5C2C06] text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-[#5C2C06] text-lg mb-1">
                  {language === "EN" ? "Phone" : "फोन"}
                </h4>
                <a
                  href="tel:+918669110791"
                  className="text-orange-700 no-underline block"
                >
                  (+91) 86691 10791
                </a>
                <a
                  href="tel:+918600787934"
                  className="text-orange-700 no-underline block"
                >
                  (+91) 86007 87934
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✉️ Left Side - Form */}
        <form
          className="w-full md:w-[55%] bg-white border border-[#E5D8B8] rounded-2xl shadow-xl p-8 space-y-5"
          onSubmit={handleSubmit}
        >
          {submitStatus === "success" && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
              ✅{" "}
              {language === "EN"
                ? "Thank you! Your message has been sent successfully."
                : "धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठविला गेला आहे."}
            </div>
          )}
          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              ❌{" "}
              {language === "EN"
                ? "Something went wrong. Please try again later."
                : "काहीतरी चुकले. कृपया नंतर पुन्हा प्रयत्न करा."}
            </div>
          )}

          {["name", "email", "subject"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-[#5C2C06] mb-1"
              >
                {language === "EN"
                  ? `${field.charAt(0).toUpperCase() + field.slice(1)} *`
                  : field === "name"
                  ? "नाव *"
                  : field === "email"
                  ? "ईमेल *"
                  : "विषय *"}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={formState[field]}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#E5D8B8] focus:border-[#C9A86A] transition-all duration-300 ${
                  errors[field] ? "border-red-400" : "border-gray-300"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* 📞 Phone */}
          <div>
            <label className="block text-sm font-medium text-[#5C2C06] mb-1">
              {language === "EN" ? "Phone *" : "फोन *"}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91XXXXXXXXXX"
              value={formState.phone.replace("+91", "")}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#E5D8B8] focus:border-[#C9A86A] transition-all duration-300 ${
                errors.phone ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* 📝 Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#5C2C06] mb-1"
            >
              {language === "EN" ? "Message *" : "संदेश *"}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              maxLength={400}
              value={formState.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#E5D8B8] focus:border-[#C9A86A] transition-all duration-300 ${
                errors.message ? "border-red-400" : "border-gray-300"
              }`}
              placeholder={
                language === "EN"
                  ? "Write your message here..."
                  : "इथे तुमचा संदेश लिहा..."
              }
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#5C2C06] hover:bg-[#7B4210]"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? language === "EN"
                ? "Sending..."
                : "पाठवित आहे..."
              : language === "EN"
              ? "Submit"
              : "सबमिट करा"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
