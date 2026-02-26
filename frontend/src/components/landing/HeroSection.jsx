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
      duration: 1,
      delay: -0.7,
      ease: "power4.inOut",
    });

    tl.to(heroTextRef2.current, {
      opacity: 1,
      y: "0%",
      duration: 1,
      delay: -0.7,
      ease: "power4.inOut",
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

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className=" h-18 w-18 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full  overflow-hidden flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <Sparkle color="white" size={50} />
            </div>

            <CircularText
              text="PAMS•PAMS•PAMS•PAMS•"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class scale-75 font-lexend font-semibold"
            />
          </div>

          <h1
            ref={heroTextRef}
            className="font-cinzel text-9xl font-bold text-[#a8f3c5]  text-center opacity-0 transform -translate-y-[-10%]"
          >
            FEEL THE ADVENTURE
          </h1>
          <p
            ref={heroTextRef2}
            className="font-lexend text-lg font-semibold text-white text-center tracking-wider mt-5 opacity-0 transform -translate-y-10"
          >
            WITH PATRATOO AQUA MASTI SPORTS PRIVATE LIMITED
          </p>

          <div className="w-full flex items-center justify-center mt-5">
            <button
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              ref={mainButtonRef}
              className={`bg-neutral-50/10 relative text-[#36453B] px-6 py-2  font-lexend font-semibold backdrop-blur-sm border border-neutral-50/50`}
            >
              <span
                ref={buttonTextRef}
                className="text-amber-50 text-xl z-20 relative font-lexend"
              >
                Explore
              </span>
              <div
                ref={buttonOverlayRef}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-[#F5F9E9] z-10 origin-center "
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
