"use client";

import { Instrument_Serif } from 'next/font/google';
import React from 'react';
import { motion } from 'framer-motion';


import regular from "next/font/local";




const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });



const general = regular({
    src: './GeneralSans-Regular.ttf',
    display: 'swap',
})


export default function Moreover() {
    return (
        <div className='flex items-center  py-[120px] justify-center w-full bg-gradient-to-b from-[#f4f4f7] to-[#cdd3fd] px-2 '>
            <div className="bg-white border rounded-2xl px-8 py-12 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={instrument.className + " text-6xl lg:text-[6rem]  mb-4 text-transparent bg-clip-text "}
                    style={{
                        backgroundImage:
                            "linear-gradient(140deg,#36beff 24.24%,#733ff1)",
                    }}>Moreover</motion.span>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={general.className + ' lg:text-[1.25rem] leading-[1.5rem]  mt-6 lg:leading-[2rem] lg:px-[1.8rem] lg:max-w-md'}
                    style={{fontWeight:"400"}}>
                    Every fresher starts searching for
                    jobs on traditional job hunting platforms
                    excitedly, only to find that most opportunities
                    ask for experience they don&apos;t have yet
                </motion.p>
            </div>
        </div>
    )
}