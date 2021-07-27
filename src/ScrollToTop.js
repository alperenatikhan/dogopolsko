import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div
      className="scroll-to-top"
      style={{ display: "flex", justifyContent: "center" }}
    >
      {isVisible && (
        <div onClick={scrollToTop} style={{ color: "dodgerblue" }}>
          <FaArrowAltCircleUp />
        </div>
      )}
    </div>
  );
}
