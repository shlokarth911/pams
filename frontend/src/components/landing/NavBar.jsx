import { Menu, Phone } from "lucide-react";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../ui/Button";

const NavBar = () => {
  return (
    <div className="bg-[#36453B] px-7 py-5 text-white  grid grid-cols-3 items-center">
      <div>
        <Menu size={30} />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-cinzel text-4xl font-bold">PAMS</h1>
      </div>
      <div className="flex items-center justify-end gap-5">
        <div className="flex items-center gap-2">
          <Phone />
          <p className="font-lexend text-lg font-semibold">+91 9876543210</p>
        </div>

        <Button text="Inquire" enableScaling={false} />
      </div>
    </div>
  );
};

export default NavBar;
