import React from "react";
import NavBar from "../components/landing/NavBar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import { ReactLenis, useLenis } from "lenis/react";
import ActivitiesSection from "../components/landing/ActivitiesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FinalSection from "../components/landing/FinalSection";

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
        <ActivitiesSection />
        <TestimonialsSection />
        <FinalSection />
      </div>
    </>
  );
};

export default Landing;
