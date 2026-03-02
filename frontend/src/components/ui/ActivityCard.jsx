import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const ActivityCard = ({ title, img }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);

  const handleCardHover = () => {
    gsap.to(imgRef.current, {
      scale: 1.15,
      rotate: 3,
      duration: 0.4,
    });
    gsap.to(arrowRef.current, {
      color: "#cba135",
      rotate: -45,
      duration: 0.2,
    });
    gsap.to(textRef.current, {
      color: "#cba135",
      duration: 0.2,
    });
  };

  const handleCardLeave = () => {
    gsap.to(imgRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
    });

    gsap.to(textRef.current, {
      color: "#304222",
      duration: 0.2,
    });

    gsap.to(arrowRef.current, {
      color: "#304222",
      rotate: 0,
      duration: 0.2,
    });
  };
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
    >
      <div className="overflow-hidden h-86 w-96">
        <img
          ref={imgRef}
          src={img}
          alt=""
          className="h-86 w-96  object-cover"
        />
      </div>

      <div className="mt-3 flex items-center justify-between max-w-96">
        <h1
          ref={textRef}
          className="font-lexend text-3xl font-semibold tracking-tight"
        >
          {title}
        </h1>
        <ArrowRight ref={arrowRef} className="size-8" />
      </div>
    </div>
  );
};

export default ActivityCard;
