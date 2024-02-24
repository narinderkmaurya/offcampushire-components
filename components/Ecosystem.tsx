"use client";

import React, { useEffect, useRef, useState } from 'react'
import { Instrument_Serif } from 'next/font/google';

import { motion } from 'framer-motion'; // Import motion from framer-motion

import regular from "next/font/local";

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });

const general = regular({
    src: './GeneralSans-Medium.ttf',
    display: 'swap',
})

export default function EcoSystem() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const currentRef = ref.current; // Store the current ref value in a variable

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is in the viewport, start the animation
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    return (
        <div className="lg:my-[120px] my-[60px] text-center flex-col " ref={ref}>


            <div className=''>

                <motion.h1 initial={{ y: 50, opacity: 0 }} // Starting position and opacity
                    animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }} // Conditionally animate based on visibility
                    transition={{ duration: 0.5 }}
                    className={instrument.className + "  text-center  px-2 lg:px-80 text-[1.7rem]  lg:text-[3.15rem]  "}>
                    Reimagining <span style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }} className='text-transparent bg-clip-text '>off-campus placement  drives </span> 
                    ecosystem of India

                </motion.h1>
                <div className="text-center px-4 lg:px-0 pt-4 lg:pt-6 text-[#3f3f42] ">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }} // Starting position and opacity
                        animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }} // Conditionally animate based on visibility
                        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
                        className={general.className + " text-md  lg:text-[1rem] leading-[1.5rem]  lg:px-[20rem] lg:leading-[2.75rem]"} style={{  fontWeight: "400" }}>
                        Welcome to OffcampusHire, where we are dedicated to empowering 
                        freshers to kickstart their careers through exclusive off-campus placement 
                        drives. Our platform serves as a catalyst for bridging the gap between freshers 
                        and exclusive off-campus placement drives beyond on-campus placements.
                    </motion.p>

                </div>
            </div>
        </div >
    )
}
