import React from "react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";

const WhatsAppDiv = () => {
  // 🔸 Popup logic removed — only WhatsApp icon remains

  return (
    <>
      {/* Popup-related code commented out */}
      {/*
      const { hasDismissedPopup, setHasDismissedPopup } = useContext(PopupContext);
      const [showPopup, setShowPopup] = useState(false);

      useEffect(() => {
        if (!hasDismissedPopup) {
          setShowPopup(true);
        }
      }, [hasDismissedPopup]);

      const handleClose = () => {
        setShowPopup(false);
        setHasDismissedPopup(true);
      };

      const handleAvailOffer = () => {
        window.open("https://wa.me/message/TIQND33M5EZTH1", "_blank", "noopener,noreferrer");
      };
      */}

      {/* ✅ Keep only the floating WhatsApp button */}
      <WhatsAppFloatingButton position="fixed" />
    </>
  );
};

export default WhatsAppDiv;
