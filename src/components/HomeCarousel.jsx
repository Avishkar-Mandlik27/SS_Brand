import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Desktop banners
import img1 from "../assets/banner1.jpg";
import img2 from "../assets/banner2.jpg";
import img3 from "../assets/banner3.jpg";
import img4 from "../assets/banner4.jpg";

// Mobile banners
import mobile1 from "../assets/mobileBanner1.jpg";
import mobile2 from "../assets/mobileBanner2.jpg";
import mobile3 from "../assets/mobileBanner3.jpg";
import mobile4 from "../assets/mobileBanner4.jpg";

const HomeCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const desktopImages = [img1, img2, img3, img4];
  const mobileImages = [mobile1, mobile2, mobile3, mobile4];
  const selectedImages = isMobile ? mobileImages : desktopImages;

  return (
    <div className="w-full min-h-[60vh] sm:min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      <Carousel interval={2500} controls={false} indicators fade>
        {selectedImages.map((img, i) => (
          <Carousel.Item key={i} className="relative aspect-[9/16] -mt-6 sm:aspect-auto">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
