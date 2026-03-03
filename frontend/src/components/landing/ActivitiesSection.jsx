import React, { useRef } from "react";
import ActivityCard from "../ui/ActivityCard";
import leafShadow from "../../assets/leaf-shadow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ActivitiesSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const leafShadowRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Leaf shadow parallax
    gsap.from(leafShadowRef.current, {
      xPercent: -10,
      yPercent: 10,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 0%",
        scrub: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
    ).fromTo(
      cardsRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.8",
    );
  }, []);

  const activities = [
    {
      title: "Boating",
      img: "https://www.nandankanan.org/images/boating-2.jpg",
    },
    {
      title: "Speed Boating",
      img: "https://www.boatbookingindia.com/portfolio/gallery/sea_ray_300/sea_ray_300_1.jpg",
    },
    {
      title: "Jet Ski",
      img: "https://crazysistermarina.com/wp-content/uploads/sites/6454/2024/04/Jet-Ski-Excursion.jpg?w=700&h=700&zoom=1",
    },
    {
      title: "Fishing",
      img: "https://www.fishverify.com/wp-content/uploads/2022/03/ryan-arnst-JtRXnUNWHt4-unsplash-800x400.jpg",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative w-full bg-[#F5F9E9] py-24 px-8 overflow-hidden "
    >
      <div className="text-center relative z-20">
        <h1
          ref={titleRef}
          className="font-cinzel text-5xl lg:text-7xl font-semibold text-[#1A241C] tracking-tight uppercase"
        >
          Curated Experiences
        </h1>
        <div className="w-16 h-px bg-[#3E5443] mx-auto mt-6 mb-16 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 lg:gap-10 mt-12 relative z-20 max-w-[1400px] mx-auto pb-32">
        {activities.map((activity, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`w-full ${index % 2 !== 0 ? "lg:translate-y-24 md:translate-y-12" : ""}`}
          >
            <ActivityCard title={activity.title} img={activity.img} />
          </div>
        ))}
      </div>

      <div className="absolute top-1/4 -right-10 z-10 pointer-events-none opacity-20 mix-blend-multiply rotate-45 hidden md:block">
        <img
          src={leafShadow}
          alt="leaf shadow right"
          className="w-[30%] rotate-180"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 pointer-events-none opacity-40 mix-blend-multiply">
        <img
          src={leafShadow}
          ref={leafShadowRef}
          alt="leaf shadow"
          className="w-[40%] md:w-[30%]"
        />
      </div>
    </div>
  );
};

export default ActivitiesSection;
