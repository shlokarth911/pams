import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Rahul S",
      review:
        "The speedboating experience with PAMS was absolutely exhilarating! The staff is professional, the equipment is top-notch, and the rush of the Patratu waves is something I'll never forget. Best weekend trip ever!",
    },
    {
      name: "Priya M",
      review:
        "A truly luxurious escape. The atmosphere perfectly balances thrilling water sports with serene relaxation. The attention to detail in their service made our stay incredibly special.",
    },
    {
      name: "Amit K",
      review:
        "Stunning views combined with exceptional activities! Whether you want high-octane fun or a peaceful evening by the water, PAMS delivers an unmatched premium experience.",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 100%",
      },
    });

    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    ).fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.6",
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#1A241C] py-24 px-8 overflow-hidden"
    >
      <h1
        ref={titleRef}
        className="font-cinzel text-4xl md:text-5xl lg:text-6xl text-[#D4E8A4] text-center tracking-wide font-medium"
      >
        GUEST EXPERIENCES
      </h1>
      <div className="w-20 h-px bg-[#D4E8A4]/30 mx-auto mt-6 mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-[#2B3A2E]/50 border border-[#D4E8A4]/10 p-10 rounded-2xl relative group hover:bg-[#2B3A2E] hover:border-[#D4E8A4]/30 transition-all duration-500 shadow-xl"
          >
            {/* Large subtle quote mark in the background */}
            <div className="absolute top-4 right-6 text-9xl font-cinzel text-[#1A241C] opacity-40 select-none group-hover:scale-110 transition-transform duration-500">
              "
            </div>

            <p className="font-lexend text-sm md:text-base text-[#8FA88E] leading-relaxed relative z-10 min-h-[120px]">
              "{testimonial.review}"
            </p>

            <div className="mt-8 flex items-center justify-between relative z-10">
              <div className="w-8 h-px bg-[#D4E8A4]"></div>
              <p className="font-cinzel text-lg font-semibold text-[#D4E8A4] tracking-widest uppercase">
                {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
