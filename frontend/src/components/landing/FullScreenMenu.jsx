import React, { useRef, useEffect, useState } from "react";
import { X, Instagram, Facebook, Download, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroImage from "../../assets/hero-image.jpg"; // Using an existing image

const FullScreenMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);
  const bgRef = useRef(null);
  const linksContainerRef = useRef(null);
  const subLinksRef = useRef(null);
  const bottomInfoRef = useRef(null);
  const rightImageRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const navLinks = [
    { title: "OUR STORY", href: "#" },
    { title: "AMENITIES", href: "#" },
    { title: "ACTIVITIES", href: "#" },
    { title: "GALLERY", href: "#" },
    { title: "ENQUIRE", href: "#" },
  ];

  const subLinks = [
    "LUXURY TENTS",
    "TREEHOUSES",
    "FAMILY VILLAS",
    "COUPLE SUITES",
  ];

  useGSAP(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      // Opening Animation
      const tl = gsap.timeline();

      // Ensure menu is visible
      gsap.set(menuRef.current, { visibility: "visible" });

      // Background sweeps in from top
      tl.to(bgRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: "power4.inOut",
      })
        // Right image fades/slides in
        .fromTo(
          rightImageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "-=0.4",
        )
        // Main Links stagger in from left/bottom
        .fromTo(
          linksContainerRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.7",
        )
        // Sub links fade in
        .fromTo(
          subLinksRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.6",
        )
        // Bottom info fades in
        .fromTo(
          bottomInfoRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
          "-=0.5",
        );
    } else {
      // Closing Animation
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(menuRef.current, { visibility: "hidden" });
        },
      });

      // All elements fade out quickly
      tl.to(
        [
          linksContainerRef.current.children,
          subLinksRef.current.children,
          bottomInfoRef.current.children,
          rightImageRef.current,
        ],
        {
          y: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.in",
        },
      )
        // Background sweeps up
        .to(
          bgRef.current,
          {
            yPercent: 0,
            duration: 0.8,
            ease: "power4.inOut",
          },
          "-=0.2",
        );
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-100 visibility-hidden overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      {/* Background container sweeps in */}
      <div
        ref={bgRef}
        className="absolute -top-full left-0 w-full h-full bg-[#1A241C] flex flex-col xl:flex-row overflow-y-auto xl:overflow-hidden"
      >
        {/* Left Section (Navigation Content) */}
        <div className="flex-1 xl:w-[60%] w-full h-full pt-10 pb-16 px-8 md:px-16 xl:px-24 flex flex-col justify-between">
          {/* Top: Close button */}
          <div className="flex justify-start text-[#8FA88E]">
            <button
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-center w-10 h-10 hover:text-[#D4E8A4] transition-all duration-300 cursor-pointer"
            >
              <X
                strokeWidth={1}
                size={32}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </button>
          </div>

          {/* Center: Main Links & Sub Links */}
          <div className="flex flex-col mt-16 xl:mt-8 flex-1 justify-center">
            {/* Main Links */}
            <div ref={linksContainerRef} className="flex flex-col">
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center group mb-1 md:mb-2"
                >
                  {/* Indicator bullet */}
                  <div
                    className={`absolute -left-6 md:-left-10 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#D4E8A4] transition-all duration-300 ${
                      hoveredIdx === idx
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }`}
                  />
                  <a
                    href={link.href}
                    className="font-cinzel text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tighter uppercase transition-colors duration-300 block"
                    style={{
                      color:
                        hoveredIdx === idx
                          ? "#D4E8A4"
                          : hoveredIdx !== null
                            ? "rgba(143, 168, 142, 0.4)"
                            : "#8FA88E",
                    }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </div>

            {/* Sub Links */}
            <div
              ref={subLinksRef}
              className="flex flex-wrap gap-5 md:gap-8 mt-16 text-[#8FA88E] font-lexend text-xs md:text-sm tracking-[0.15em] font-bold"
            >
              {subLinks.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-[#D4E8A4] transition-colors whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Info Blocks */}
          <div
            ref={bottomInfoRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 text-[#8FA88E] font-lexend text-[0.65rem] md:text-xs tracking-[0.15em]"
          >
            {/* Block 1 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[#D4E8A4] font-bold">PAMS RETREAT +</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="flex justify-between items-center group cursor-pointer hover:text-[#D4E8A4] transition-colors"
                >
                  <span>ACTIVITIES & EVENTS</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="#"
                  className="flex justify-between items-center group cursor-pointer hover:text-[#D4E8A4] transition-colors"
                >
                  <span>GROUP BOOKINGS</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="flex justify-between items-center border-b border-[#8FA88E]/40 pb-2 hover:border-[#D4E8A4] hover:text-[#D4E8A4] transition-colors"
              >
                <span>BROCHURE PDF</span>
                <Download size={14} />
              </a>
              <a
                href="#"
                className="flex justify-between items-center border-b border-[#8FA88E]/40 pb-2 hover:border-[#D4E8A4] hover:text-[#D4E8A4] transition-colors"
              >
                <span>SITEPLAN PDF</span>
                <Download size={14} />
              </a>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col justify-between gap-6 lg:pl-4">
              <div className="flex gap-4 items-center">
                <Facebook
                  size={18}
                  className="hover:text-[#D4E8A4] cursor-pointer transition-colors"
                />
                <Instagram
                  size={18}
                  className="hover:text-[#D4E8A4] cursor-pointer transition-colors"
                />
              </div>
              <p className="leading-relaxed">
                PAMS RETREAT
                <br />
                PATRATOO ROAD
                <br />
                RANCHI, JH 834001
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Full Height Image) */}
        <div ref={rightImageRef} className="hidden xl:block xl:w-[40%] h-full">
          <img
            src={heroImage}
            alt="PAMS Retreat Nature"
            className="w-full h-full object-cover filter brightness-90 grayscale-[20]"
          />
        </div>
      </div>
    </div>
  );
};

export default FullScreenMenu;
