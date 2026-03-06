import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import NavBar from "../components/landing/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import print1 from "../assets/story/print-1.jpeg";
import print2 from "../assets/story/print-2.jpeg";
import print3 from "../assets/story/print-3.jpeg";
import heroWallpaper from "../assets/story/hero-wallpaper.jpg";
import Footer from "../components/landing/Footer";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-bg", {
        scale: 1.1,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });

      // Story Sections Animation
      const sections = gsap.utils.toArray(".story-section");

      sections.forEach((section) => {
        const imgContainer = section.querySelector(".img-container");
        const img = section.querySelector(".story-image");
        const heading = section.querySelector(".story-heading");
        const text = section.querySelectorAll(".story-p");

        // Image container reveal (clip-path)
        gsap.fromTo(
          imgContainer,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            ease: "power3.inOut",
            duration: 1.5,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
            },
          },
        );

        // Image parallax
        gsap.fromTo(
          img,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        // Text reveal
        gsap.fromTo(
          [heading, ...text],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="bg-[#F5F9E9] overflow-hidden min-h-screen text-[#1A241C]"
      ref={containerRef}
    >
      <ReactLenis root />
      <NavBar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[80vh] flex flex-col items-center justify-center p-6 relative mt-16 md:mt-24 lg:mt-0 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroWallpaper}
            alt="Hero Background"
            className="hero-bg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <h1 className="hero-text font-cinzel text-5xl md:text-7xl lg:text-[9rem] font-semibold tracking-tighter uppercase z-10 text-center leading-none text-[#F5F9E9]">
          Our Story
        </h1>
        <div className="hero-text w-16 h-px bg-[#F5F9E9] mx-auto mt-8 mb-8 opacity-50 z-10"></div>
        <p className="hero-text text-center text-lg md:text-2xl text-[#F5F9E9]/90 max-w-3xl font-light z-10 leading-relaxed px-4">
          Nestled in the serene backwaters of Ranchi, Jharkhand lies a hidden
          gem that whispers tales of tranquility and natural beauty.
        </p>
      </section>

      {/* Detail Section 1 */}
      <section className="story-section min-h-screen px-6 lg:px-20 py-20 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 border-t border-[#3E5443]/20">
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
          <span className="story-heading block text-sm font-medium tracking-widest uppercase text-[#3E5443] mb-4">
            01 — The Origin
          </span>
          <h2 className="story-heading font-cinzel text-4xl lg:text-7xl mb-8 leading-tight">
            A Natural
            <br />
            Sanctuary
          </h2>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed mb-6 font-light">
            PAMS emerged from a profound love for the lush landscapes and the
            vibrant life that thrives along the water's edge. Time slows down
            here, where your morning begins accompanied by the symphony of
            nature.
          </p>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed font-light">
            Discover a place where mornings are greeted by the gentle calls of
            exotic birds, and evenings are painted with the golden hues of the
            setting sun reflecting on calm backwaters.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] order-1 md:order-2">
          <div className="img-container w-full h-full relative overflow-hidden rounded-md md:rounded-l-[4rem]">
            <img
              src={print1}
              alt="PAMS Sanctuary"
              className="story-image absolute w-full h-[140%] -top-[20%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detail Section 2 */}
      <section className="story-section min-h-screen px-6 lg:px-20 py-20 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh]">
          <div className="img-container w-full h-full relative overflow-hidden rounded-md md:rounded-r-[4rem]">
            <img
              src={print2}
              alt="PAMS Adventure"
              className="story-image absolute w-full h-[140%] -top-[20%] object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="story-heading block text-sm font-medium tracking-widest uppercase text-[#3E5443] mb-4">
            02 — The Experience
          </span>
          <h2 className="story-heading font-cinzel text-4xl lg:text-5xl lg:text-7xl mb-8 leading-tight">
            The Adventurer's
            <br />
            Call
          </h2>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed mb-6 font-light">
            Beyond its tranquil surface lies an invitation to explore. Delve
            into the intricate networks of canals, kayak under the shade of
            emerald canopies, and discover a lifestyle deeply intertwined with
            these gentle waters.
          </p>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed font-light">
            It is an escape for those who seek to wander off the beaten path,
            catering to the explorers at heart who wish to witness thriving
            ecosystems up close.
          </p>
        </div>
      </section>

      {/* Detail Section 3 */}
      <section className="story-section min-h-screen px-6 lg:px-20 py-20 lg:py-32 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 border-b border-[#3E5443]/20">
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1">
          <span className="story-heading block text-sm font-medium tracking-widest uppercase text-[#3E5443] mb-4">
            03 — The Memory
          </span>
          <h2 className="story-heading font-cinzel text-4xl lg:text-7xl mb-8 leading-tight">
            Lasting
            <br />
            Impressions
          </h2>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed mb-6 font-light">
            At PAMS, we curate authentic experiences that stay with you long
            after you wander back to reality. From the rich local culture to the
            breathtaking starlit nights, every moment is an opportunity to forge
            a deep connection with the earth.
          </p>
          <p className="story-p text-[#3E5443] text-lg lg:text-xl leading-relaxed font-light">
            Let the gentle breezes and the soothing sounds of the water
            rejuvenate your spirit. Join us, and let us show you the magic of
            the backwaters like never before.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] order-1 md:order-2">
          <div className="img-container w-full h-full relative overflow-hidden rounded-md md:rounded-tl-[4rem] md:rounded-br-[4rem]">
            <img
              src={print3}
              alt="PAMS Memories"
              className="story-image absolute w-full h-[140%] -top-[20%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer-like closer */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <p className="text-[#3E5443] uppercase tracking-[0.3em] text-sm mb-6">
          Begin Your Journey
        </p>
        <h3 className="font-cinzel text-4xl lg:text-6xl tracking-wide mb-12">
          Find Your Peace
        </h3>
        <button className="px-10 py-4 border border-[#3E5443] text-[#3E5443] hover:bg-[#3E5443] hover:text-[#F5F9E9] transition-colors duration-500 rounded-full tracking-widest uppercase text-sm">
          Book Your Stay
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
