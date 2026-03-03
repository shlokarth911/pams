import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const pamsLettersRef = useRef([]);
  const linksRef = useRef([]);

  useGSAP(() => {
    // Animate top row columns sliding up
    gsap.from(topRowRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animate PAMS letters
    pamsLettersRef.current.forEach((letter, i) => {
      if (letter) {
        gsap.from(letter, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRowRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    // Animate right-side links
    linksRef.current.forEach((link, i) => {
      if (link) {
        gsap.from(link, {
          x: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRowRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }
    });
  }, []);

  const pamsText = ["P", "A", "M", "S"];

  return (
    <footer ref={footerRef} className="bg-[#2B3A2E] w-full font-lexend">
      {/* Top Section - Three Columns */}
      <div
        ref={topRowRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 px-8 md:px-16 lg:px-24 pt-14 pb-10"
      >
        {/* GET IN TOUCH */}
        <div className="md:border-r md:border-[#5A6B5D] pr-8">
          <h3 className="text-[#D4E8A4] font-cinzel text-xl md:text-2xl font-bold tracking-wider mb-5">
            GET IN TOUCH
          </h3>
          <p className="text-[#8FA88E] text-sm md:text-base mb-1.5 hover:text-[#D4E8A4] transition-colors duration-300 cursor-pointer">
            pasms@email.com
          </p>
          <p className="text-[#8FA88E] text-sm md:text-base hover:text-[#D4E8A4] transition-colors duration-300 cursor-pointer">
            +91 123 456 7890
          </p>
        </div>

        {/* FIND US */}
        <div className="md:border-r md:border-[#5A6B5D] md:pl-12 pr-8">
          <h3 className="text-[#D4E8A4] font-cinzel text-xl md:text-2xl font-bold tracking-wider mb-5">
            FIND US
          </h3>
          <p className="text-[#8FA88E] text-sm md:text-base mb-1.5 max-w-[260px]">
            Address, Patratoo, Ranchi,
            <br />
            Jharkhand
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8FA88E] text-sm md:text-base mt-3 group hover:text-[#D4E8A4] transition-colors duration-300"
          >
            <span>View Maps</span>
            <svg
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </a>
        </div>

        {/* SOCIALS */}
        <div className="md:pl-12">
          <h3 className="text-[#D4E8A4] font-cinzel text-xl md:text-2xl font-bold tracking-wider mb-5">
            SOCIALS
          </h3>
          <div className="flex flex-col gap-2">
            {[
              { name: "Instagram", url: "#" },
              { name: "Facebook", url: "#" },
              { name: "WhatsApp", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8FA88E] text-sm md:text-base group hover:text-[#D4E8A4] transition-colors duration-300 w-fit"
              >
                <span>{social.name}</span>
                <svg
                  className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="mx-8 md:mx-16 lg:mx-24 h-px bg-[#5A6B5D]"></div>

      {/* Bottom Section - PAMS + Links */}
      <div
        ref={bottomRowRef}
        className="flex flex-col md:flex-row items-end justify-between px-8 md:px-16 lg:px-24 pt-6 pb-10"
      >
        {/* Large PAMS Text */}
        <div className="flex items-baseline gap-2 md:gap-6 select-none overflow-hidden">
          {pamsText.map((letter, index) => (
            <span
              key={index}
              ref={(el) => (pamsLettersRef.current[index] = el)}
              className="text-[#3E5443] font-cinzel text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold leading-none tracking-[0.15em]"
              style={{
                WebkitTextStroke: "1px rgba(212, 232, 164, 0.15)",
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Right-side Navigation Links */}
        <div className="flex flex-col items-start md:items-end gap-1 mb-4 md:mb-6">
          {["AMENITIES", "FAQs", "CONTACT US"].map((link, index) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              ref={(el) => (linksRef.current[index] = el)}
              className="text-[#D4E8A4] font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider hover:text-[#F5F9E9] transition-colors duration-300 relative group"
            >
              <span>{link}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4E8A4] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="px-8 md:px-16 lg:px-24 pb-6">
        <div className="h-px bg-[#5A6B5D] mb-4"></div>
        <p className="text-[#5A6B5D] text-xs text-center font-lexend">
          © 2026 PAMS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
