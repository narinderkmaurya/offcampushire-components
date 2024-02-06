"use client";

import React from "react";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <nav className="sticky top-0 z-[999]">
        <div className="relative flex flex-row items-center border-b border-gray-100 bg-[hsla(0,0%,100%,0.7)] backdrop-blur-[12px]">
          <div className="relative z-30 mx-auto flex w-full flex-row items-center justify-between bg-white-700 px-6 py-4 backdrop-blur-md xl:max-w-[1170px] xl:bg-transparent xl:px-0 xl:backdrop-filter-none">
            <div className="flex w-[162px] justify-start">
              <a href="" className="z-30 w-28">
                <Image alt="logo"
                  width="280"
                  height="60"
                  className="z-30 h-fit w-full"
                  style={{ color: "transparent" }}
                  src="https://www.datocms-assets.com/105223/1701819587-logo.svg"
                />
              </a>
            </div>
            <div className="hidden flex-row items-center gap-4 xl:flex font-primary leading-none">
              <NavbarItem title="Products" />
              <NavbarItem title="Solutions" />
              <NavbarItem title="Enterprise" />
              <NavbarItem title="Company" />
              <NavbarItem title="Developers" />
              <NavbarItem title="Pricing" />
            </div>
            <div className="z-30 font-primary hidden items-center gap-2 xl:flex">
              <a href="">
                <PrimaryButton title="Sign In" />
              </a>
              <a href="">
                <SecondaryButton title="Sign In" />
              </a>
            </div>
          </div>
          <button
            className="absolute right-6 z-30 h-5 w-5 text-gray-700 xl:hidden [&>*]:h-0.5 [&>*]:rounded-full [&>*]:bg-gray-700 [&>*]:transition-all [&>*]:duration-300 [&>*]:ease-in-out"
            onClick={handleMenuClick}
          >
            <div
              className={`w-5 ${isMenuClicked ? "translate-y-0.5 rotate-45" : "translate-y-2"} `}
            ></div>
            <div
              className={`${isMenuClicked ? "w-0 opacity-0" : "w-5 opacity-100"} `}
            ></div>
            <div
              className={`w-5 ${isMenuClicked ? "-translate-y-0.5 -rotate-45" : "-translate-y-2"} `}
            ></div>
          </button>
          <NavbarMenuDropdown isMenuClicked={isMenuClicked} />
        </div>
      </nav>
      <div className="relative z-30 overflow-hidden flex text-xs md:text-base text-white gap-[10px] items-center h-[56px] md:h-auto justify-center py-1.5 bg-purple-600">
        {/* <img
          alt="purple layered background"
          loading="lazy"
          width="1360"
          height="36"
          decoding="async"
          data-nimg="1"
          className="absolute left-0 w-[1600px] h-[56px] md:h-[36px]"
          style={{color:"transparent"}}
          src="/university/_next/static/media/notification-bg-layers.88acbf20.svg"
        /> */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1">
          {/* <div
            className="h-[14px] bg-[] bg-cover w-[14px] align-text-bottom bg-emoji z-50 hidden md:block"
            
          ></div> */}
          <p className="z-50">Our new Solidity course is now live!</p>
          <a
            className="z-30 underline font-semibold"
          >
            Check it out now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
