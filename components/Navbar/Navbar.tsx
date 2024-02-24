"use client";

import React from "react";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import NavbarMenuDropdown from "./NavbarMenuDropdown";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";
import Link from "next/link";

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
            <div className="hidden flex-row items-center gap-4 xl:flex  leading-none">
              <Link href="/about">  <NavbarItem title="About Us" /></Link>
              <Link href="/student">  <NavbarItem title="Student" /></Link>
              <NavbarItem title="Enterprise" />
              <NavbarItem title="Company" />
              <NavbarItem title="Developers" />
              <NavbarItem title="Pricing" />
            </div>
            <div className="z-30 hidden items-center gap-2 xl:flex">
              <a href="">
                <PrimaryButton title="Sign In" />
              </a>
              <Link href="/get-started">
                <SecondaryButton title="Get Started" />
              </Link>
            </div>
          </div >
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
        </div >
      </nav >

    </>
  );
};

export default Navbar;
