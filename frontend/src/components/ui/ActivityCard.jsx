import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const ActivityCard = ({ title, img }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  const handleCardHover = () => {
    gsap.to(imgRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
    });
    gsap.to(arrowRef.current, {
      x: 5,
      rotate: -45,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(textRef.current, {
      color: "#3E5443", // Deep green
      duration: 0.3,
    });
  };

  const handleCardLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, {
      opacity: 0.3,
      duration: 0.4,
    });
    gsap.to(textRef.current, {
      color: "#1A241C", // Base dark
      duration: 0.3,
    });
    gsap.to(arrowRef.current, {
      x: 0,
      rotate: 0,
      duration: 0.3,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      className="group cursor-pointer w-full flex flex-col"
    >
      <div className="overflow-hidden w-full aspect-4/5 relative rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-500">
        <img
          ref={imgRef}
          src={img}
          alt={title}
          className="w-full h-full object-cover origin-center"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#3E5443] mix-blend-multiply opacity-30 z-10"
        ></div>
        {/* Subtle inner border */}
        <div className="absolute inset-0 border border-white/20 rounded-lg z-20 pointer-events-none"></div>
      </div>

      <div className="mt-5 flex items-center justify-between w-full border-b border-[#3E5443]/20 pb-2 group-hover:border-[#3E5443] transition-colors duration-500">
        <h1
          ref={textRef}
          className="font-cinzel text-xl lg:text-2xl font-bold uppercase tracking-widest text-[#1A241C]"
        >
          {title}
        </h1>
        <ArrowRight
          ref={arrowRef}
          className="w-6 h-6 text-[#1A241C] stroke-[1.5]"
        />
      </div>
    </div>
  );
};

export default ActivityCard;
