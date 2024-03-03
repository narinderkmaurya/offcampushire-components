"use client";

import { Instrument_Serif } from 'next/font/google';
import React from 'react';
import regular from "next/font/local";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });

const general = regular({
    src: '../../public/fonts/GeneralSans-Medium.ttf',
    display: 'swap',
})

const Resume = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change to false if you want the animation to trigger again whenever it comes back into view
    });

    return (
        <motion.div ref={ref} className='lg:px-32 px-2 text-center lg:text-start'
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <motion.h5 className={` ${instrument.className} text-[2rem] `}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: inView ? 0 : -50, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Resumes are a thing of past
            </motion.h5>
            <motion.p className={` ${general.className} text-[1.125rem] max-w-[384px] leading-[2rem] pt-4 text-[#2C2C2C75] `}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                You can forget about the hassle of creating,
                uploading, and sending resumes – with us, it&apos;s
                all about highlighting your skills, passion, and
                unique qualities in a simple and intuitive way
            </motion.p>
        </motion.div>
    )
}

export default Resume;