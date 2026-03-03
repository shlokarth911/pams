import React, { useRef } from "react";
import aboutImage from "../../assets/about-wallpaper.avif";
import leaf1 from "../../assets/leaf-1.png";
import leaf2 from "../../assets/leaf-2.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutSection = () => {
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
        start: "top 200%",
        end: "top 0%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden ">
        <img
          src={aboutImage}
          alt="about-wallpaper"
          className="h-full w-full object-cover blur-sm scale-125"
        />
      </div>

      <div className="absolute top-[5%] left-0 overflow-x-hidden overflow-y-clip">
        <img ref={leaf1Ref} src={leaf1} alt="" className="h-96 object-cover" />
      </div>
      <div className="absolute bottom-[5%] right-0 overflow-x-hidden overflow-y-clip">
        <img ref={leaf2Ref} src={leaf2} alt="" className="h-76 object-cover" />
      </div>

      <div
        ref={paraRef}
        className="absolute top-[50%] left-[50%] bg-[#1A241C]/80 backdrop-blur-xl border border-[#D4E8A4]/10 transform -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[70%] lg:w-[60%] py-20 px-8 md:px-16 rounded-3xl shadow-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
        <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4E8A4] text-center max-w-4xl mx-auto tracking-wide relative z-10 leading-tight">
          UNLEASH THE SPLASH
        </h1>
        <div className="w-24 h-px bg-[#D4E8A4]/30 mx-auto mt-8 mb-8 relative z-10"></div>
        <p className="font-lexend text-sm md:text-base lg:text-lg font-light text-[#8FA88E] text-center leading-relaxed max-w-3xl mx-auto relative z-10 tracking-wide">
          Welcome to{" "}
          <span className="text-[#D4E8A4] font-medium">
            PATRATOO AQUA MASTI SPORTS (PAMS) PRIVATE LIMITED
          </span>
          , your premier destination for aquatic adventure! Located in the heart
          of Patratu, we specialize in blending high-octane thrills with
          family-friendly fun. Whether you're seeking an adrenaline rush on the
          waves or a relaxing day on the water, our expert team ensures a safe,
          exciting, and unforgettable "Masti" experience for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
