"use client";

import { Instrument_Serif } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import regular from "next/font/local";


import card from "@/public/card.svg";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
});

export default function Hero() {
    return (
        <header className='hero-bg flex lg:items-center justify-center'>
            <div className='w-full flex lg:flex-row flex-col justify-between lg:justify-normal  px-4 lg:px-24 text-center lg:text-start'>
                <div className="lg:w-1/2 pt-16 lg:pt-32">
                    <motion.h1 // Wrap the heading with motion
                        className={instrument.className + ' lg:text-[4rem] text-[2rem]  font-bold hero-heading  lg:leading-[5.2rem]'}
                        initial={{ y: 50, opacity: 0 }} // Starting position and opacity
                        animate={{ y: 0, opacity: 1 }} // Ending position and opacity
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        The future of <span style={{
                            backgroundImage:
                                "linear-gradient(140deg,#36beff  24.24%,#733ff1)",
                        }} className='text-transparent bg-clip-text'>off-campus</span> <br />
                        placement drives is here
                    </motion.h1>
                    <motion.p // Wrap the paragraph with motion
                        className={general.className + ' mt-4 leading-[1.5rem]  lg:text-[1.25rem] lg:leading-[2.75rem] text-[#3f3f42]'}
                        style={{ fontWeight: "500" }}
                        initial={{ y: 50, opacity: 0 }} // Starting position and opacity
                        animate={{ y: 0, opacity: 1 }} // Ending position and opacity
                        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
                    >
                        OffcampusHire is the ultimate destination for freshers 
                        to explore, apply & attend off-campus placement drives
                    </motion.p>
                </div>
                <div className="hidden lg:block">
                    <Image src={card} alt="" className='w-[500px] relative top-[2.8rem] left-[6.5rem]' />
                </div>
                <div className="items-center flex justify-center sm:hidden">
                    <Image src={card} alt="" className='w-[300px] relative  ' />
                </div>
            </div>
        </header>
    );
}
