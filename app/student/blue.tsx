"use client";

import regular from "next/font/local";
import { Instrument_Serif } from 'next/font/google';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const general = regular({
    src: '../../public/fonts/GeneralSans-Regular.ttf',
    display: 'swap',
})

const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });

const Blue = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isInView) {
            setAnimate(true);
        }
    }, [isInView]);

    return (
        <motion.div
            className='lg:min-h-[526px] h-[750px] flex flex-col text-center pt-20 blue w-screen px-2 lg:px-0'
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
        >
            <motion.h5
                className={` ${instrument.className} text-[2.25rem] `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={animate ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Reimagining your off-campus placement journey
            </motion.h5>

            <motion.div
                className={` ${general.className} text-[1.125rem] space-y-10 pt-8 leading-[2rem] `}
                initial={{ opacity: 0, x: -50 }}
                animate={animate ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p>
                    Are you tired of generic, crowded placement drives that offer limited opportunities?  <br />
                    Do you dream of landing your dream job at a top company, but feel lost in the sea of applicants?
                </p>

                <p>
                    OffCampusHire is the game-changer in India's off-campus recruitment scene.
                </p>
            </motion.div>
        </motion.div>
    )
}

export default Blue