import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import { ReactLenis, useLenis } from "lenis/react";

const Landing = () => {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />
      <div className="bg-[#F5F9E9] min-h-screen">
        <NavBar />
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
};

export default Landing;
