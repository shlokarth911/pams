import { Menu, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../ui/Button";
import FullScreenMenu from "./FullScreenMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1A241C] px-5 md:px-8 py-4 md:py-6 text-white flex justify-between items-center relative z-50">
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="fixed top-4 left-5 md:top-6 md:left-8 z-50 -ml-2 -mt-2 p-4 rounded-full bg-[#1A241C]/10 backdrop-blur-sm border border-white/10 hover:bg-[#1A241C] hover:text-[#D4E8A4] shadow-xl transition-all cursor-pointer "
          >
            <Menu className="w-7 h-7 md:w-8 md:h-8 " />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="font-cinzel text-3xl md:text-4xl font-bold tracking-widest text-[#D4E8A4]">
            PAMS
          </h1>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-3 md:gap-6">
          <div className="hidden lg:flex items-center gap-2 text-[#8FA88E] hover:text-[#D4E8A4] transition-colors cursor-pointer">
            <Phone size={18} />
            <p className="font-lexend text-base font-medium tracking-wide">
              +91 9801241143, 9262252085
            </p>
          </div>

          <Button text="Inquire" enableScaling={false} />
        </div>
      </div>

      <FullScreenMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
};

export default NavBar;
