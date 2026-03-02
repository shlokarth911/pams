import React, { useRef } from "react";
import ActivityCard from "../ui/ActivityCard";
import leafShadow from "../../assets/leaf-shadow.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ActivitiesSection = () => {
  const leafShadowRef = useRef(null);
  useGSAP(() => {
    gsap.from(leafShadowRef.current, {
      xPercent: -10,
      yPercent: 10,
      scrollTrigger: {
        trigger: leafShadowRef.current,
        start: "top 90%",
        end: "top 0%",
        scrub: true,
      },
    });
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
    <div className="min-h-screen relative w-full bg-amber-50 p-8">
      <h1 className="font-lexend text-7xl text-[#304222] mt-6 text-center tracking-tighter">
        Explore Activities
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-16 relative z-20 max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={index} title={activity.title} img={activity.img} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 z-10 pointer-events-none ">
        <img src={leafShadow} ref={leafShadowRef} alt="" />
      </div>
    </div>
  );
};

export default ActivitiesSection;
