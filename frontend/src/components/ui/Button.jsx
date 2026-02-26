import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Button = ({ text, enableScaling, className, textColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonOverlayRef = useRef(null);
  const buttonTextRef = useRef(null);
  const mainButtonRef = useRef(null);

  useGSAP(() => {
    if (isHovered) {
      gsap.to(buttonTextRef.current, {
        color: "#F5F9E9",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(mainButtonRef.current, {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        duration: 0.3,
        ease: "circ.out",
      });

      gsap.to(buttonOverlayRef.current, {
        height: "100%",
        width: "100%",
        duration: 0.2,
        ease: "circ.out",
      });
    } else {
      gsap.to(buttonTextRef.current, {
        color: "#36453B",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(mainButtonRef.current, {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        duration: 0.3,
        ease: "circ.out",
      });

      gsap.to(buttonOverlayRef.current, {
        height: "0%",
        width: "95%",
        duration: 0.3,
        ease: "circ.out",
      });
    }
  }, [isHovered]);
  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      ref={(el) => {
        if (enableScaling) {
          mainButtonRef.current = el;
        }
      }}
      className={`bg-[#F5F9E9] relative text-[#36453B] px-6 py-2  font-lexend font-semibold ${className}`}
    >
      <span ref={buttonTextRef} className="text-amber-50 z-20 relative">
        {text}
      </span>

      <div
        ref={buttonOverlayRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-[#1E1E1E] z-10 origin-center "
      ></div>
    </button>
  );
};

export default Button;
