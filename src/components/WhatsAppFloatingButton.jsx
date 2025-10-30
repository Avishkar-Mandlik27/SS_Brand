import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppFloatingButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("whatsappMessageShown");

    // ✅ Run only if user hasn't seen it before
    if (!alreadyShown) {
      setShowMessage(true);
      localStorage.setItem("whatsappMessageShown", "true");

      const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
      const hideTimer = setTimeout(() => setShowMessage(false), 4000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative flex flex-col items-end">
        {/* 💬 Message bubble */}
        {showMessage && (
          <div
            className={`mb-2 bg-green-100 text-green-900 text-sm font-semibold px-3 py-2 rounded-lg shadow-md 
              transition-opacity duration-700 ease-in-out 
              ${fadeOut ? "opacity-0" : "opacity-100"}`}
          >
            💬 Contact us on WhatsApp
          </div>
        )}

        {/* ✅ WhatsApp Icon */}
        <BsWhatsapp
          className="cursor-pointer text-5xl bg-green-500 rounded-full p-2 text-white 
          hover:text-green-500 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
          onClick={() =>
            window.open(
              "https://wa.me/message/TIQND33M5EZTH1",
              "_blank",
              "noopener,noreferrer"
            )
          }
          title="Message us on WhatsApp"
        />
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
