import React, { useRef, useState } from "react";
import heroImage from "../../assets/hero-image.jpg";
import Button from "../ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CircularText from "../ui/CircularText";
import { Play, Sparkle } from "lucide-react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonOverlayRef = useRef(null);
  const buttonTextRef = useRef(null);
  const mainButtonRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroTextRef2 = useRef(null);

  useGSAP(() => {
    if (isHovered) {
      gsap.to(buttonTextRef.current, {
        color: "#36453B",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(mainButtonRef.current, {
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
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
        height: "0%",
        width: "95%",
        duration: 0.3,
        ease: "circ.out",
      });
    }
  }, [isHovered]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(heroImageRef.current, {
      height: "100%",
      top: "50%",
      width: "100%",
      duration: 1.7,
      ease: "power4.inOut",
    });

    tl.to(heroTextRef.current, {
      opacity: 1,
      y: "0%",
      duration: 1.2,
      delay: -1.2,
      ease: "power4.out",
    });

    tl.to(heroTextRef2.current, {
      opacity: 1,
      y: "0%",
      duration: 1.2,
      delay: -0.9,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="h-[91vh] w-full  p-2 relative">
      <div className="h-full w-full relative ">
        <img
          src={heroImage}
          ref={heroImageRef}
          alt=""
          className="h-[0%] w-[80%] object-cover brightness-55 absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        />

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4">
          <div className="relative mb-6">
            <div className="h-20 w-20 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden flex items-center justify-center hover:scale-110 transition-transform duration-500 cursor-pointer">
              <Sparkle color="#D4E8A4" size={44} strokeWidth={1} />
            </div>

            <CircularText
              text="PAMS•PAMS•PAMS•PAMS•"
              onHover="speedUp"
              spinDuration={25}
              className="custom-class scale-[0.6] font-lexend font-semibold text-[#D4E8A4]"
            />
          </div>

          <h1
            ref={heroTextRef}
            className="font-cinzel text-5xl md:text-8xl lg:text-9xl font-bold text-[#D4E8A4] text-center opacity-0 transform translate-y-12 tracking-wide lg:tracking-widest max-w-[80%] mx-auto"
          >
            FEEL THE ADVENTURE
          </h1>
          <p
            ref={heroTextRef2}
            className="font-lexend text-sm md:text-base lg:text-lg font-light text-[#F5F9E9] text-center tracking-[0.2em] mt-6 opacity-0 transform translate-y-8 max-w-2xl mx-auto"
          >
            WITH PATRATOO AQUA MASTI SPORTS
          </p>

          <div className="w-full flex items-center justify-center mt-12">
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              ref={mainButtonRef}
              className={`bg-white/5 relative text-white px-8 py-3 font-lexend font-semibold backdrop-blur-md border border-white/20 rounded-full hover:border-[#D4E8A4]/50 transition-colors duration-500 overflow-hidden cursor-pointer`}
            >
              <span
                ref={buttonTextRef}
                className="text-[#D4E8A4] text-lg tracking-wider z-20 relative font-lexend transition-colors"
                style={{ color: isHovered ? "#1A241C" : "#D4E8A4" }}
              >
                EXPLORE NOW
              </span>
              <div
                ref={buttonOverlayRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4E8A4] z-10 origin-center rounded-full"
                style={{ width: "0%", height: "0%" }}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
