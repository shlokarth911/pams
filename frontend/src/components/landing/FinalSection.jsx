import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import leaf1 from "../../assets/leaf-1.png";
import leaf3 from "../../assets/leaf-3.png";

const AnimatedButton = ({ children }) => {
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
      ref={mainButtonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-transparent border-2 border-[#111] relative text-[#111] px-6 py-4 font-lexend font-semibold max-w-64"
    >
      <span ref={buttonTextRef} className="text-[#111] text-xl z-20 relative">
        {children}
      </span>

      <div
        ref={buttonOverlayRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] z-10 origin-center"
      ></div>
    </button>
  );
};

const FinalSection = () => {
  const leaf1Ref = useRef(null);
  const leaf2Ref = useRef(null);
  const paraRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(leaf1Ref.current, {
      xPercent: -50,
      yPercent: 10,
      scrollTrigger: {
        trigger: leaf1Ref.current,
        start: "top 100%",
        end: "top 0%",
        scrub: true,
      },
    });

    gsap.from(paraRef.current, {
      minWidth: "50%",
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 90%",
        end: "top 20%",
        scrub: true,
      },
    });

    gsap.from(leaf2Ref.current, {
      xPercent: 50,
      scrollTrigger: {
        trigger: leaf2Ref.current,
        start: "top 100%",
        end: "top 0%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full relative bg-[#DBDBCA] py-16 md:py-22 overflow-hidden px-4 md:px-0">
      <h1 className="font-lexend text-3xl md:text-5xl lg:text-6xl text-[#304222] mt-6 text-center tracking-tighter font-semibold max-w-4xl mx-auto relative z-20">
        READY TO EXPERIENCE THE BEST?
      </h1>

      <div className="absolute top-[50%] transform -translate-y-1/2 -left-10 md:left-0 overflow-x-hidden overflow-y-clip pointer-events-none opacity-30 md:opacity-100 z-10">
        <img
          ref={leaf1Ref}
          src={leaf1}
          alt=""
          className="h-40 md:h-60 lg:h-76 object-cover"
        />
      </div>
      <div className="absolute top-[50%] transform -translate-y-1/2 -right-10 md:right-0 overflow-x-hidden overflow-y-clip pointer-events-none opacity-30 md:opacity-100 z-10">
        <img
          ref={leaf2Ref}
          src={leaf3}
          alt=""
          className="h-40 md:h-60 lg:h-76 object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 md:mt-16 gap-4 md:gap-0 relative z-20">
        <div className="px-7 md:border-r border-[#111] py-2 md:py-6 w-full md:w-auto flex justify-center border-b md:border-b-0">
          <AnimatedButton>Create a Booking</AnimatedButton>
        </div>
        <div className="px-7 md:border-l border-[#111] py-2 md:py-6 w-full md:w-auto flex justify-center">
          <AnimatedButton>Explore Activities</AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default FinalSection;
