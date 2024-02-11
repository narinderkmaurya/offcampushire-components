"use cliet";

import { Instrument_Serif } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import React from 'react'
import regular from "next/font/local";
import { useInView } from 'react-intersection-observer';


import card from "@/public/card.svg"
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})

const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function StudentHero() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <header>
            <div className="student-bg px-2 lg:px-64 text-center flex flex-col items-center justify-center ">
                <motion.h1
                    className={instrument.className + ' lg:text-[4rem] text-[2rem]  font-bold hero-heading  lg:leading-[5.2rem]'}
                    ref={ref}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={controls}
                >
                    Introducing  <span style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} className='text-transparent bg-clip-text'>off-campus</span>
                    , your ultimate
                    destination for off-campus placement drives
                </motion.h1>
                <motion.p
                    className={general.className + ' mt-4 lg:px-24 text-md para  leading-[1.5rem]  lg:text-[1.25rem] lg:leading-[2.75rem] text-[#3f3f42]'}
                    style={{ fontWeight: "500" }}
                    ref={ref}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={controls}
                >
                    OffCampusHire is a platform aimed at helping freshers start their careers
                    by connecting them with exclusive off-campus placement drives organized
                    in collaboration with universities and companies
                </motion.p>

            </div>
        </header>
    )
}