"use client";

import { Instrument_Serif } from 'next/font/google';
import React from 'react'
import regular from "next/font/local";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });


const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})

const Para = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationVariants = {
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 50 },
    };

    return (
        <div className='flex flex-col lg:flex-row w-full items-center px-2 py-6 lg:px-32 lg:py-16'>
            <motion.div className="lg:w-1/3 text-center lg:text-start" ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}>
                <p className={` ${instrument.className} text-[1.5rem] lg:text-[2rem] `}>
                    A platform where graduate
                    ambitions meet  exclusive
                    off-campus opportunities
                </p>
            </motion.div>
            <motion.div className="lg:w-2/3 " ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={animationVariants}
                transition={{ duration: 0.5 }}>
                <p className={` ${general.className} text-center lg:text-start pt-6 lg:pt-0 text-[1rem] lg:text-[1.15rem] lg:pr-16 leading-[2rem]`}>
                    Welcome to OffcampusHire, where we are dedicated to empowering
                    freshers to kickstart their careers through off-campus placement
                    drives. Our platform serves as a catalyst for bridging the gap between
                    freshers & exciting career opportunities beyond on-campus placements.
                </p>
            </motion.div>
        </div>
    )
}

export default Para